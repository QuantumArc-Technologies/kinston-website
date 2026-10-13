"""
Photoreal product renders for the Kinston catalogue.

Signed-distance-field ray marcher in numpy. Geometry is built from capsule chains
(tubes along 2D paths in the same 240x200 coordinate space as ProductArt.astro),
capped cylinders, rounded boxes and hex prisms. Materials: orange paint, galvanised
steel, navy, textile. Key light with soft shadows, fill and rim, sky reflection,
ambient occlusion, contact shadow on a white ground.

Usage: python3 render.py [size] [name ...]   (no names = all)
"""
import sys, math, time, os
import numpy as np
from PIL import Image, ImageFilter

# ---------- scene description ----------
MAT = {
    'or': dict(col=(0.96, 0.34, 0.04), spec=0.9, shin=90, fres=0.10, refl=0.35),
    'st': dict(col=(0.70, 0.72, 0.75), spec=0.7, shin=40, fres=0.25, refl=0.45),
    'nv': dict(col=(0.06, 0.17, 0.45), spec=0.6, shin=60, fres=0.08, refl=0.25),
    'tx': dict(col=(0.95, 0.40, 0.10), spec=0.15, shin=10, fres=0.02, refl=0.05),
    'bk': dict(col=(0.12, 0.12, 0.13), spec=0.4, shin=30, fres=0.05, refl=0.15),
    'rp': dict(col=(0.48, 0.50, 0.53), spec=0.35, shin=20, fres=0.10, refl=0.15),
}
MATS = list(MAT.keys())

class Scene:
    def __init__(self):
        self.caps = []   # (a, b, r, mat)  capsules (flat list, kept for bounds)
        self.groups = [] # (A, B, R, mat, center, radius) grouped capsule sets
        self.cyls = []   # (a, b, r, mat)  capped cylinders
        self.boxes = []  # (center, half, rot(3x3), round, mat)
        self.hexes = []  # (center, radius, height, axis rot, mat)
        self.tori = []   # (center, R, r, rot, mat)
        self.cones = []  # (a, b, ra, rb, mat) round cones
    # 2D (svg) -> 3D world. x right, y up, z toward camera. units: svg/10
    @staticmethod
    def w(x, y, z=0.0):
        return np.array([(x - 120) / 10.0, (100 - y) / 10.0, z / 10.0])
    def tube(self, pts, width, mat='or', z=0.0, radii=None):
        r = width / 20.0
        P = [self.w(x, y, z) for x, y in pts]
        self.tube3(P, r, mat, radii)
    def tube3(self, P, r, mat='or', radii=None):
        caps = []
        for i, (a, b) in enumerate(zip(P[:-1], P[1:])):
            rr = radii[i] if radii is not None else r
            caps.append((a, b, rr, mat)); self.caps.append((a, b, rr, mat))
        A = np.array([c[0] for c in caps]); B = np.array([c[1] for c in caps]); R = np.array([c[2] for c in caps])
        allp = np.concatenate([A, B]); ctr = allp.mean(0); rad = np.linalg.norm(allp - ctr, axis=1).max() + R.max()
        self.groups.append((A, B, R, mat, ctr, rad))
    def rotate_z(self, deg):
        t = math.radians(deg); Rz = np.array([[math.cos(t), -math.sin(t), 0], [math.sin(t), math.cos(t), 0], [0, 0, 1]])
        self.caps = [(a @ Rz.T, b @ Rz.T, r, m) for a, b, r, m in self.caps]
        self.groups = [(A @ Rz.T, B @ Rz.T, R, m, c @ Rz.T, rad) for A, B, R, m, c, rad in self.groups]
        self.cyls = [(a @ Rz.T, b @ Rz.T, r, m) for a, b, r, m in self.cyls]
        self.boxes = [(c @ Rz.T, h, Rz @ Rm, rnd, m) for c, h, Rm, rnd, m in self.boxes]
        self.hexes = [(c @ Rz.T, sz, hh, ax, m) for c, sz, hh, ax, m in self.hexes]
        self.tori = [(c @ Rz.T, R, r, pl, m) for c, R, r, pl, m in self.tori]
        self.cones = [(a @ Rz.T, b @ Rz.T, ra, rb, m) for a, b, ra, rb, m in self.cones]
    def cyl(self, p0, p1, width, mat='st', z0=0.0, z1=None):
        a = self.w(p0[0], p0[1], z0); b = self.w(p1[0], p1[1], z0 if z1 is None else z1)
        self.cyls.append((a, b, width / 20.0, mat))
    def cone(self, p0, p1, w0, w1, mat='st', z=0.0):
        self.cones.append((self.w(p0[0], p0[1], z), self.w(p1[0], p1[1], z), w0 / 20.0, w1 / 20.0, mat))
    def cylz(self, x, y, width, z0, z1, mat='st'):
        self.cyls.append((self.w(x, y, z0), self.w(x, y, z1), width / 20.0, mat))
    def box(self, cx, cy, w, h, d, mat='nv', z=0.0, rot_deg=0.0, rnd=0.6):
        c = self.w(cx, cy, z); half = np.array([w, h, d]) / 20.0
        t = math.radians(rot_deg); R = np.array([[math.cos(t), -math.sin(t), 0], [math.sin(t), math.cos(t), 0], [0, 0, 1]])
        self.boxes.append((c, half, R, rnd / 10.0, mat))
    def hexnut(self, cx, cy, s, depth, mat='st', z=0.0, axis='z'):
        self.hexes.append((self.w(cx, cy, z), s / 10.0, depth / 20.0, axis, mat))
    def torus(self, cx, cy, R, r, mat='or', z=0.0, plane='xy'):
        self.tori.append((self.w(cx, cy, z), R / 10.0, r / 10.0, plane, mat))

def arc(cx, cy, r, a0, a1, n=14):
    return [(cx + r * math.cos(math.radians(a)), cy + r * math.sin(math.radians(a))) for a in np.linspace(a0, a1, n)]

def oblong_pts(cx, top, w, h, n=10):
    r = w / 2; pts = []
    pts += arc(cx, top + r, r, 180, 360, n)        # top semicircle (svg y down: top arc angles 180..360)
    pts += arc(cx, top + h - r, r, 0, 180, n)      # bottom
    pts.append(pts[0])
    return pts

# ---------- geometry builders (mirror ProductArt) ----------
def hook(S, top='clevis', latch='trigger', throat='wide', mat='or', scale=1.0, ox=0, oy=0):
    def T(pts): return [(ox + x * scale, oy + y * scale) for x, y in pts]
    r = 17 if throat == 'grab' else 30
    x = 108
    shankTop = 20 if top == 'shank' else 70 if top == 'swivel' else 60
    bowlTop = 128
    tipY = 112 if throat == 'grab' else 108
    w = 20 * scale
    body = [(x, shankTop), (x, bowlTop)] + [(x + r + r * math.cos(math.radians(a)), bowlTop + r * math.sin(math.radians(a))) for a in np.linspace(180, 0, 48)][1:] + [(x + 2 * r, tipY)]
    S.tube(T(body), w, mat)
    if top == 'eye':
        S.torus(ox + x * scale, oy + 36 * scale, 16 * scale, 6.5 * scale, mat, plane='xy')
    if top == 'clevis':
        for zz in (-13, 13):
            S.box(ox + x * scale, oy + 40 * scale, 16 * scale, 40 * scale, 8 * scale, mat, z=zz * scale, rnd=3.5 * scale)
        S.box(ox + x * scale, oy + 58 * scale, 16 * scale, 12 * scale, 34 * scale, mat, rnd=3 * scale)
        S.cylz(ox + x * scale, oy + 36 * scale, 8 * scale, -22 * scale, 22 * scale, 'st')
        S.hexnut(ox + x * scale, oy + 36 * scale, 5 * scale, 2.5 * scale, 'st', z=23 * scale, axis='z')
    if top == 'swivel':
        S.torus(ox + x * scale, oy + 22 * scale, 13 * scale, 5.5 * scale, 'st', plane='yz')
        S.cyls.append((S.w(ox + x * scale, oy + 38 * scale), S.w(ox + x * scale, oy + 64 * scale), 1.7 * scale, 'st'))
    if top == 'shank':
        S.cyls.append((S.w(ox + x * scale, oy + 10 * scale), S.w(ox + x * scale, oy + 64 * scale), 0.9 * scale, 'st'))
    if latch == 'latch':
        S.tube(T([(x + 6, bowlTop - 18), (x + 2 * r - 2, tipY + 2)]), 6 * scale, 'st')
    if latch == 'trigger':
        S.tube(T([(x + 8, bowlTop - 14), (x + 2 * r - 4, tipY - 2)]), 8 * scale, 'nv')
        S.box(ox + (x - 13) * scale, oy + (bowlTop - 19) * scale, 18 * scale, 30 * scale, 16 * scale, 'nv', rnd=2 * scale)

def shackle(S, shape='bow', pin='screw', body='st', pinm='or'):
    w = 26 if shape == 'wide' else 18
    if shape == 'dee':
        pts = [(80, 160), (80, 86)] + [(120 + 40 * math.cos(math.radians(a)), 86 - 40 * math.sin(math.radians(a))) for a in np.linspace(180, 0, 18)][1:] + [(160, 160)]
    elif shape == 'wide':
        pts = [(84, 160), (84, 120)] + [(120 + 46 * math.cos(math.radians(a)), 120 - 46 * math.sin(math.radians(a))) for a in np.linspace(218, -38, 24)][1:] + [(156, 160)]
    else:
        pts = [(82, 160), (82, 116)] + [(120 + 44 * math.cos(math.radians(a)), 116 - 44 * math.sin(math.radians(a))) for a in np.linspace(210, -30, 24)][1:] + [(158, 160)]
    S.tube(pts, w, body)
    S.cyl((60, 160), (180, 160), 11, pinm)
    if pin == 'screw':
        S.cyl((46, 160), (64, 160), 22, pinm)
        S.torus(40, 160, 9, 3, pinm, plane='xy')
    if pin == 'bolt':
        S.cyl((46, 160), (60, 160), 20, pinm)
        S.hexnut(182, 160, 11, 12, pinm, axis='x')
    if pin == 'rov':
        S.cyl((46, 160), (64, 160), 22, pinm)
        S.tube([(40, 160), (40, 196), (110, 196)], 8, 'nv')
        S.hexnut(182, 160, 8, 10, 'nv', axis='x')

def oblong(S, cx, top, w, h, sw, mat='or', rot=0.0, pivot=None):
    pts = oblong_pts(cx, top, w, h)
    if rot:
        px, py = pivot; t = math.radians(rot)
        pts = [(px + (x - px) * math.cos(t) - (y - py) * math.sin(t), py + (x - px) * math.sin(t) + (y - py) * math.cos(t)) for x, y in pts]
    S.tube(pts, sw, mat)

def chain_seg(S, p0, p1, size=10, mat='st'):
    """Chain of alternating links from svg point p0 to p1 (in the xy plane)."""
    a = S.w(*p0); b = S.w(*p1); d = b - a; L = np.linalg.norm(d); d = d / L
    n = np.cross(d, np.array([0, 0, 1.0])); n = n / np.linalg.norm(n)
    zax = np.array([0, 0, 1.0])
    pitch = size * 0.145   # world units between link centres (svg/10)
    ry = size * 0.1; rx = size * 0.055; r = size * 0.014
    k = max(1, int(L / pitch)); flip = False
    for i in range(k):
        c = a + d * (pitch * (i + 0.5))
        m = zax if flip else n
        pts = [c + d * ry * math.cos(t) + m * rx * math.sin(t) for t in np.linspace(0, 2 * math.pi, 14)]
        S.tube3(pts, r, mat)
        flip = not flip

def chain(S, x, y1, y2, size=12, rot=0.0, pivot=None):
    p0 = (x, y1); p1 = (x, y2)
    if rot:
        px, py = pivot; t = math.radians(rot)
        f = lambda q: (px + (q[0] - px) * math.cos(t) - (q[1] - py) * math.sin(t), py + (q[0] - px) * math.sin(t) + (q[1] - py) * math.cos(t))
        p0, p1 = f(p0), f(p1)
    chain_seg(S, p0, p1, size)

def build(name):
    S = Scene()
    n = name
    if n == 'self-locking-hook': hook(S, 'clevis', 'trigger')
    elif n == 'self-locking-hook-eye': hook(S, 'eye', 'trigger')
    elif n == 'swivel-hook': hook(S, 'swivel', 'trigger')
    elif n == 'sling-hook': hook(S, 'eye', 'latch')
    elif n == 'sling-hook-clevis': hook(S, 'clevis', 'latch')
    elif n == 'grab-hook': hook(S, 'clevis', 'none', 'grab')
    elif n == 'hoist-hook': hook(S, 'shank', 'latch')
    elif n == 'shackle-bow' or n == 'shackle': shackle(S, 'bow', 'screw')
    elif n == 'shackle-bow-bolt': shackle(S, 'bow', 'bolt')
    elif n == 'shackle-dee': shackle(S, 'dee', 'screw')
    elif n == 'shackle-dee-bolt': shackle(S, 'dee', 'bolt')
    elif n == 'shackle-wide': shackle(S, 'wide', 'bolt', 'or', 'nv')
    elif n == 'shackle-rov': shackle(S, 'bow', 'rov')
    elif n == 'master-link': oblong(S, 120, 28, 72, 148, 16)
    elif n == 'master-assembly':
        oblong(S, 120, 14, 68, 102, 15)
        oblong(S, 120, 110, 40, 72, 11, rot=12, pivot=(120, 112)); oblong(S, 120, 110, 40, 72, 11, rot=-12, pivot=(120, 112))
    elif n == 'connecting-link':
        for zz in (-9, 9):
            S.tube(oblong_pts(120, 30, 84, 140), 10, 'or', z=zz)
        S.cylz(120, 100, 9, -18, 18, 'st'); S.cyl((92, 100), (148, 100), 9, 'st')
    elif n == 'omega-link':
        S.tube([(78, 164), (102, 164), (102, 110)] + [(120 + 18 * math.cos(math.radians(a)), 110 - 18 * math.sin(math.radians(a))) for a in np.linspace(180, 0, 12)][1:] + [(138, 164), (162, 164)], 15)
        S.cyl((70, 164), (170, 164), 9, 'st')
    elif n == 'chain-sling':
        oblong(S, 120, 4, 44, 48, 11); chain_seg(S, (120, 50), (120, 118), 11)
        hook(S, 'eye', 'trigger', scale=0.78, ox=120 - 108 * 0.78, oy=124 - 36 * 0.78)
    elif n == 'chain-sling-2':
        oblong(S, 120, 0, 44, 44, 11)
        for ang, hx in ((-20, 80), (20, 160)):
            ex, ey = 120 + 100 * math.sin(math.radians(ang)) * 0.6, 140
            chain_seg(S, (120, 42), (ex, ey), 9)
            hook(S, 'eye', 'latch', scale=0.5, ox=ex - 108 * 0.5, oy=ey + 4 - 36 * 0.5)
    elif n == 'chain-sling-4':
        oblong(S, 120, 0, 40, 40, 10); oblong(S, 96, 36, 26, 30, 8); oblong(S, 144, 36, 26, 30, 8)
        for sx, ex in ((96, 62), (96, 104), (144, 136), (144, 178)):
            chain_seg(S, (sx, 64), (ex, 140), 8)
            hook(S, 'eye', 'latch', scale=0.36, ox=ex - 108 * 0.36, oy=144 - 36 * 0.36)
    elif n in ('socket-open', 'socket', 'socket-closed'):
        S.tube([(120, -6), (120, 44)], 11, 'rp')
        S.cone((120, 42), (120, 112), 24, 38, 'st'); S.cyl((120, 110), (120, 118), 38, 'st')
        if n == 'socket-closed': S.torus(120, 142, 24, 7.5, 'st', plane='xy')
        else:
            for zz in (-12, 12): S.box(120, 134, 16, 44, 9, 'st', z=zz, rnd=0.4)
            S.cylz(120, 150, 9, -24, 24, 'st'); S.hexnut(120, 150, 7, 7, 'st', z=26, axis='z')
    elif n == 'socket-wedge':
        S.cone((120, 28), (120, 150), 34, 70, 'or')
        S.cyl((60, 150), (180, 150), 9, 'st'); S.hexnut(184, 150, 9, 10, 'st', axis='x')
        S.tube([(112, -20), (112, 40), (110, 100), (120, 128), (130, 100), (134, 60), (142, 20)], 9, 'rp', z=34)
        S.box(120, 100, 10, 60, 6, 'st', z=38, rnd=0.3)
    elif n == 'rope-clip':
        S.tube([(78, 150), (78, 80)] + [(120 + 42 * math.cos(math.radians(a)), 80 - 42 * math.sin(math.radians(a))) for a in np.linspace(180, 0, 14)][1:] + [(162, 150)], 14, 'st')
        S.box(120, 133, 120, 30, 34, 'st', rnd=2); S.cyl((50, 110), (190, 110), 16, 'st')
        S.hexnut(78, 164, 12, 12, 'st', axis='y'); S.hexnut(162, 164, 12, 12, 'st', axis='y')
    elif n == 'thimble':
        pts = [(120, 36), (172, 118)] + [(120 + 52 * math.cos(math.radians(a)), 118 + 52 * math.sin(math.radians(a))) for a in np.linspace(20, 160, 14)] + [(68, 118), (120, 36)]
        S.tube(pts, 14, 'st')
    elif n in ('turnbuckle', 'turnbuckle-eye'):
        for zz in (-7, 7): S.tube([(70, 100), (170, 100)], 12, 'st', z=zz)
        S.cyl((70, 100), (70, 100.1), 28, 'st'); S.cyl((170, 100), (170, 100.1), 28, 'st')
        S.cyl((60, 100), (82, 100), 26, 'st'); S.cyl((158, 100), (180, 100), 26, 'st')
        S.cyl((30, 100), (70, 100), 10, 'st'); S.cyl((170, 100), (210, 100), 10, 'st')
        if n == 'turnbuckle':
            for zz in (-9, 9): S.tube([(14, 100), (40, 100)], 8, 'st', z=zz); S.tube([(200, 100), (226, 100)], 8, 'st', z=zz)
            S.cylz(20, 100, 6, -14, 14, 'st'); S.cylz(220, 100, 6, -14, 14, 'st')
        else:
            S.torus(26, 100, 14, 4.5, 'st', plane='xy'); S.torus(214, 100, 14, 4.5, 'st', plane='xy')
    elif n == 'eye-bolt':
        S.torus(120, 56, 32, 7.5, 'st', plane='xy'); S.cyl((120, 92), (120, 108), 48, 'st'); S.cyl((120, 108), (120, 184), 22, 'st')
    elif n == 'swivel-eye':
        S.torus(120, 44, 26, 7, 'or', plane='xy'); S.cyl((120, 72), (120, 94), 40, 'st'); S.cyl((120, 94), (120, 108), 52, 'st'); S.cyl((120, 108), (120, 184), 22, 'st')
    elif n == 'swivel-ring':
        S.tube([(84, 128), (84, 74)] + [(120 + 36 * math.cos(math.radians(a)), 74 - 36 * math.sin(math.radians(a))) for a in np.linspace(180, 0, 14)][1:] + [(156, 128)], 15, 'or')
        S.cyl((120, 128), (120, 150), 64, 'st'); S.cyl((120, 150), (120, 158), 44, 'st'); S.hexnut(120, 126, 9, 8, 'nv', z=0, axis='y')
    elif n == 'weld-on':
        S.tube([(86, 118), (86, 74)] + [(120 + 34 * math.cos(math.radians(a)), 74 - 34 * math.sin(math.radians(a))) for a in np.linspace(180, 0, 14)][1:] + [(154, 118)], 15, 'or')
        S.box(120, 135, 128, 30, 30, 'st', rnd=1)
    elif n == 'bolt-on':
        S.tube([(86, 118), (86, 74)] + [(120 + 34 * math.cos(math.radians(a)), 74 - 34 * math.sin(math.radians(a))) for a in np.linspace(180, 0, 14)][1:] + [(154, 118)], 15, 'or')
        S.box(120, 135, 152, 30, 40, 'st', rnd=1); S.hexnut(66, 120, 10, 12, 'nv', axis='y'); S.hexnut(174, 120, 10, 12, 'nv', axis='y')
    elif n == 'chain-block':
        S.torus(120, 14, 10, 4, 'st', plane='yz'); S.cyl((120, 22), (120, 38), 30, 'st')
        S.box(120, 103, 96, 54, 60, 'or', rnd=5); S.cyl((120, 103), (120, 103.1), 36, 'nv', z0=31, z1=31.1)
        S.cylz(120, 103, 36, 30, 34, 'nv'); S.cylz(120, 103, 10, 34, 36, 'st')
        chain_seg(S, (104, 128), (104, 166), 8); chain_seg(S, (146, 128), (146, 210), 6); chain_seg(S, (156, 128), (156, 210), 6)
        S.tube([(146, 210)] + [(151 + 5 * math.cos(math.radians(a)), 210 + 5 * math.sin(math.radians(a))) for a in np.linspace(180, 0, 6)] + [(156, 210)], 3, 'st')
        hook(S, 'eye', 'latch', scale=0.42, ox=104 - 108 * 0.42, oy=170 - 36 * 0.42)
    elif n == 'lever-hoist':
        S.torus(120, 18, 12, 4.5, 'st', plane='yz'); S.box(120, 64, 76, 60, 50, 'or', rnd=5); S.cylz(120, 64, 30, 25, 29, 'nv')
        S.tube([(150, 48), (210, 16)], 10, 'nv', z=20); chain_seg(S, (120, 92), (120, 134), 8); hook(S, 'eye', 'latch', scale=0.42, ox=120 - 108 * 0.42, oy=138 - 36 * 0.42)
    elif n == 'trolley':
        S.box(120, 50, 200, 6, 60, 'st', rnd=0.5); S.box(120, 36, 200, 4, 60, 'st', rnd=0.5)
        for zz in (-30, 30): S.box(77, 85, 26, 90, 8, 'or', z=zz, rnd=2); S.box(163, 85, 26, 90, 8, 'or', z=zz, rnd=2)
        for cx in (77, 163):
            for zz in (-22, 22): S.cylz(cx, 52, 24, zz - 3, zz + 3, 'st')
        S.cyl((64, 122), (176, 122), 12, 'st'); S.torus(120, 150, 16, 5, 'st', plane='xy')
    elif n == 'web-sling':
        S.box(120, 100, 190, 30, 4, 'tx', rnd=1.2)
        for cx in (30, 210):
            S.box(cx, 100, 30, 38, 7, 'tx', rnd=2.5); S.box(cx, 100, 14, 22, 9, 'bk', rnd=1.0)
        S.box(120, 100, 26, 30, 5, 'nv', rnd=0.5)
    elif n == 'round-sling':
        S.tori.append((S.w(120, 100, 0), 7.5, 1.6, 'xy', 'tx')); S.box(120, 145, 40, 22, 2, 'nv', z=16, rnd=0.5)
    elif n == 'ratchet':
        S.box(120, 100, 200, 16, 2.5, 'tx', rnd=0.3); S.box(120, 100, 64, 44, 30, 'st', rnd=3); S.tube([(148, 90), (196, 60)], 8, 'st')
        S.tube([(20, 100), (20, 84), (32, 72)], 7, 'st'); S.tube([(220, 100), (220, 84), (208, 72)], 7, 'st')
    elif n == 'load-binder':
        S.box(120, 100, 84, 32, 30, 'or', rnd=4); S.tube([(150, 92), (200, 50)], 9, 'nv'); chain_seg(S, (40, 100), (14, 100), 7); chain_seg(S, (200, 100), (226, 100), 7)
        S.cyl((40, 100), (78, 100), 6, 'st'); S.cyl((162, 100), (200, 100), 6, 'st')
    else:
        oblong(S, 120, 28, 72, 148, 16)
    if n in ('turnbuckle', 'turnbuckle-eye', 'ratchet', 'load-binder', 'web-sling'):
        S.rotate_z(22)
    return S

# ---------- SDF evaluation ----------
def sd_scene(S, P):
    """P: (N,3). returns (dist (N,), mat index (N,))"""
    N = P.shape[0]
    best = np.full(N, 1e9); mat = np.zeros(N, dtype=np.int8)
    def upd(d, m):
        nonlocal best, mat
        mask = d < best; best = np.where(mask, d, best); mat[mask] = MATS.index(m)
    for A, B, R, m, ctr, rad in sorted(S.groups, key=lambda g: -g[5]):
        ds = np.linalg.norm(P - ctr, axis=1) - rad
        sel = np.nonzero(ds < best)[0]
        if sel.size == 0:
            continue
        Ps = P[sel]
        AB = B - A; ab2 = np.maximum((AB * AB).sum(1), 1e-9)
        PA = Ps[:, None, :] - A[None, :, :]
        t = np.clip((PA * AB[None]).sum(2) / ab2[None], 0, 1)
        Dd = PA - t[:, :, None] * AB[None]
        d = np.sqrt((Dd * Dd).sum(2)) - R[None]
        dmin = d.min(1)
        mask = dmin < best[sel]
        best[sel[mask]] = dmin[mask]; mat[sel[mask]] = MATS.index(m)
    for a, b, r, m in S.cyls:
        ab = b - a; L = np.linalg.norm(ab); ax = ab / L
        pa = P - a; h = pa @ ax; rad = np.linalg.norm(pa - np.outer(h, ax), axis=1)
        dx = rad - r; dy = np.abs(h - L / 2) - L / 2
        d = np.minimum(np.maximum(dx, dy), 0) + np.linalg.norm(np.stack([np.maximum(dx, 0), np.maximum(dy, 0)], 1), axis=1)
        upd(d - 0.03, m)
    for c, half, Rm, rnd, m in S.boxes:
        q = np.abs((P - c) @ Rm) - half + rnd
        d = np.linalg.norm(np.maximum(q, 0), axis=1) + np.minimum(q.max(1), 0) - rnd
        upd(d, m)
    for c, s, hh, axis, m in S.hexes:
        p = P - c
        if axis == 'x': p = p[:, [1, 2, 0]]
        elif axis == 'y': p = p[:, [0, 2, 1]]
        # hex prism along z (after permutation)
        k = np.array([-0.8660254, 0.5, 0.57735]); px = np.abs(p[:, 0]); py = np.abs(p[:, 1])
        dot = np.minimum(k[0] * px + k[1] * py, 0)
        px = px - 2 * dot * k[0]; py = py - 2 * dot * k[1]
        px = px - np.clip(px, -k[2] * s, k[2] * s); py = py - s
        dxy = np.sqrt(px * px + py * py) * np.sign(py)
        dz = np.abs(p[:, 2]) - hh
        d = np.minimum(np.maximum(dxy, dz), 0) + np.linalg.norm(np.stack([np.maximum(dxy, 0), np.maximum(dz, 0)], 1), axis=1)
        upd(d - 0.02, m)
    for a, b, r1, r2, m in S.cones:
        ba = b - a; l2 = ba @ ba; rr = r1 - r2; a2 = l2 - rr * rr; il2 = 1.0 / l2
        pa = P - a; y = pa @ ba; z = y - l2
        pp = pa * l2 - np.outer(y, ba); x2 = (pp * pp).sum(1); y2 = y * y * l2; z2 = z * z * l2
        k = np.sign(rr) * rr * rr * x2
        d = np.where(np.sign(z) * a2 * z2 > k, np.sqrt(x2 + z2) * il2 - r2,
            np.where(np.sign(y) * a2 * y2 < k, np.sqrt(x2 + y2) * il2 - r1,
                     (np.sqrt(x2 * a2 * il2) + y * rr) * il2 - r1))
        upd(d, m)
    for c, R, r, plane, m in S.tori:
        p = P - c
        if plane == 'xy': q = np.stack([np.sqrt(p[:, 0] ** 2 + p[:, 1] ** 2) - R, p[:, 2]], 1)
        elif plane == 'yz': q = np.stack([np.sqrt(p[:, 1] ** 2 + p[:, 2] ** 2) - R, p[:, 0]], 1)
        else: q = np.stack([np.sqrt(p[:, 0] ** 2 + p[:, 2] ** 2) - R, p[:, 1]], 1)
        upd(np.linalg.norm(q, axis=1) - r, m)
    return best, mat

def bounds(S):
    pts = []
    for a, b, r, _ in S.caps: pts += [a - r, b - r, a + r, b + r]
    for a, b, r, _ in S.cyls: pts += [a - r, b - r, a + r, b + r]
    for c, h, _, _, _ in S.boxes: pts += [c - h * 1.5, c + h * 1.5]
    for c, s, hh, _, _ in S.hexes: pts += [c - s - hh, c + s + hh]
    for c, R, r, _, _ in S.tori: pts += [c - R - r, c + R + r]
    for a, b, ra, rb, _ in S.cones: pts += [a - max(ra, rb), b - max(ra, rb), a + max(ra, rb), b + max(ra, rb)]
    pts = np.array(pts); return pts.min(0), pts.max(0)

# ---------- renderer ----------
def normalize(v): return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)

def march(S, O, D, maxd, steps=110, eps=0.004):
    N = O.shape[0]; t = np.zeros(N); hit = np.zeros(N, bool); matv = np.zeros(N, np.int8); active = np.ones(N, bool)
    for _ in range(steps):
        idx = np.nonzero(active)[0]
        if idx.size == 0: break
        P = O[idx] + D[idx] * t[idx, None]
        d, m = sd_scene(S, P)
        h = d < eps
        hit[idx[h]] = True; matv[idx[h]] = m[h]
        t[idx] += np.maximum(d, eps * 0.5) * 0.9
        active[idx[h]] = False
        active[idx[t[idx] > maxd]] = False
    return t, hit, matv

def soft_shadow(S, P, L, k=10.0, steps=40, maxd=12.0):
    N = P.shape[0]; res = np.ones(N); t = np.full(N, 0.03); active = np.ones(N, bool)
    for _ in range(steps):
        idx = np.nonzero(active)[0]
        if idx.size == 0: break
        d, _ = sd_scene(S, P[idx] + L * t[idx, None])
        res[idx] = np.minimum(res[idx], np.clip(k * d / t[idx], 0, 1))
        t[idx] += np.clip(d, 0.02, 0.5)
        done = (d < 0.001) | (t[idx] > maxd)
        res[idx[d < 0.001]] = 0
        active[idx[done]] = False
    return res

def ao(S, P, Nrm, samples=5, step=0.12):
    occ = np.zeros(P.shape[0]); w = 1.0
    for i in range(1, samples + 1):
        h = step * i
        d, _ = sd_scene(S, P + Nrm * h)
        occ += (h - d) * w; w *= 0.65
    return np.clip(1 - 1.6 * occ, 0, 1)

def env(D):
    # white studio: bright top, slightly grey bottom, soft warm key reflection
    y = D[:, 1]
    base = 0.86 + 0.14 * np.clip(y, 0, 1)[:, None] * np.array([1, 1, 1])
    base = base - 0.10 * np.clip(-y, 0, 1)[:, None] * np.array([1, 1, 1])
    return np.clip(base, 0, 1)

def camera(S, yaw_deg=18, pitch_deg=14):
    lo, hi = bounds(S); center = (lo + hi) / 2; extent = max(hi - lo) * 0.5
    cam_dist = extent * 3.0 + 4.0
    yaw, pitch = math.radians(yaw_deg), math.radians(pitch_deg)
    cam = center + cam_dist * np.array([math.sin(yaw) * math.cos(pitch), math.sin(pitch), math.cos(yaw) * math.cos(pitch)])
    fwd = normalize(center - cam); right = normalize(np.cross(fwd, np.array([0, 1, 0]))); up = np.cross(right, fwd)
    fov = extent * 1.25 / cam_dist * 1.05
    return dict(lo=lo, hi=hi, center=center, extent=extent, cam=cam, dist=cam_dist, fwd=fwd, right=right, up=up, fov=fov)

def project(C, p, size):
    """World point -> pixel coords for an image of `size` rendered with camera C."""
    v = p - C['cam']; z = v @ C['fwd']
    u = (v @ C['right']) / z / C['fov']; w = (v @ C['up']) / z / C['fov']
    return ((u + 1) / 2 * size, (1 - w) / 2 * size)

def render(name, size=640, ss=1, bg=(1.0, 1.0, 1.0), shadow=0.32):
    S = build(name)
    C = camera(S)
    lo, hi, center, extent, cam, cam_dist, fwd, right, up, fov = C['lo'], C['hi'], C['center'], C['extent'], C['cam'], C['dist'], C['fwd'], C['right'], C['up'], C['fov']
    floor_y = lo[1] - 0.05
    W = H = size * ss
    ys, xs = np.mgrid[0:H, 0:W]
    u = (xs + 0.5) / W * 2 - 1; v = 1 - (ys + 0.5) / H * 2
    D = normalize(fwd[None, None] + (u[:, :, None] * right[None, None] * fov * 1.0 + v[:, :, None] * up[None, None] * fov) * (cam_dist / 1.0) / cam_dist * 1.0)
    D = D.reshape(-1, 3); O = np.repeat(cam[None], D.shape[0], 0)
    BG = np.array(bg); img = np.ones((D.shape[0], 3)) * BG
    key = normalize(np.array([-0.45, 0.85, 0.55])); fill = normalize(np.array([0.8, 0.3, 0.5])); rim = normalize(np.array([0.2, 0.4, -0.9]))
    CH = 40000
    t0 = time.time()
    for s in range(0, D.shape[0], CH):
        o, d = O[s:s + CH], D[s:s + CH]
        t, hit, m = march(S, o, d, cam_dist * 2.2)
        col = np.ones((o.shape[0], 3)) * BG
        # ground shadow for misses
        miss = ~hit
        if miss.any():
            dm = d[miss]; om = o[miss]
            with np.errstate(divide='ignore', invalid='ignore'):
                tf = (floor_y - om[:, 1]) / dm[:, 1]
            gh = (dm[:, 1] < 0) & (tf > 0)
            if gh.any():
                Pf = om[gh] + dm[gh] * tf[gh, None]
                sh = soft_shadow(S, Pf, key, k=6.0)
                dist = np.linalg.norm(Pf[:, [0, 2]] - center[[0, 2]], axis=1)
                fade = np.clip(1 - (dist - extent * 0.9) / (extent * 1.6), 0, 1)
                contact = ao(S, Pf, np.array([0, 1, 0]) * np.ones_like(Pf), samples=4, step=0.15)
                shade = 1 - shadow * (1 - sh) * fade - shadow * 0.8 * (1 - contact) * fade
                g = BG[None] * shade[:, None]
                sub = np.nonzero(miss)[0][gh]; col[sub] = g
        if hit.any():
            P = o[hit] + d[hit] * t[hit, None]
            e = 0.003
            nx = sd_scene(S, P + [e, 0, 0])[0] - sd_scene(S, P - [e, 0, 0])[0]
            ny = sd_scene(S, P + [0, e, 0])[0] - sd_scene(S, P - [0, e, 0])[0]
            nz = sd_scene(S, P + [0, 0, e])[0] - sd_scene(S, P - [0, 0, e])[0]
            Nn = normalize(np.stack([nx, ny, nz], 1))
            V = -d[hit]
            mi = m[hit]
            base = np.array([MAT[MATS[k]]['col'] for k in mi]); spec = np.array([MAT[MATS[k]]['spec'] for k in mi]); shin = np.array([MAT[MATS[k]]['shin'] for k in mi])
            fres = np.array([MAT[MATS[k]]['fres'] for k in mi]); refl = np.array([MAT[MATS[k]]['refl'] for k in mi])
            sh = soft_shadow(S, P + Nn * 0.01, key, k=8.0)
            occ = ao(S, P, Nn)
            ndl = np.clip(Nn @ key, 0, 1); ndf = np.clip(Nn @ fill, 0, 1); ndr = np.clip(Nn @ rim, 0, 1)
            Hk = normalize(key + V); spk = np.clip((Nn * Hk).sum(1), 0, 1) ** shin
            Hf = normalize(fill + V); spf = np.clip((Nn * Hf).sum(1), 0, 1) ** (shin * 0.5)
            ndv = np.clip((Nn * V).sum(1), 0, 1); F = fres + (1 - fres) * (1 - ndv) ** 5
            Rv = normalize(d[hit] - 2 * (d[hit] * Nn).sum(1)[:, None] * Nn)
            E = env(Rv)
            diffuse = base * (0.10 + 0.75 * ndl[:, None] * sh[:, None] + 0.22 * ndf[:, None] + 0.10 * ndr[:, None]) * occ[:, None]
            specular = (spec * (spk * sh * 1.0 + spf * 0.35))[:, None] * np.array([1, 0.98, 0.95])
            reflection = E * (refl * F)[:, None] * occ[:, None]
            c = (diffuse + specular + reflection) * 1.08
            col[hit] = np.clip(c, 0, 1)
        img[s:s + CH] = col
    img = (img ** (1 / 1.05)).reshape(H, W, 3)
    im = Image.fromarray((np.clip(img, 0, 1) * 255).astype(np.uint8))
    if ss > 1: im = im.resize((size, size), Image.LANCZOS)
    print(f'{name}: {time.time() - t0:.1f}s')
    return im

def hero(path, size=1100):
    im = render('self-locking-hook', size, ss=1, bg=(0.067, 0.106, 0.2), shadow=0.6)
    im.save(path, optimize=True)
    S = build('self-locking-hook'); C = camera(S); w = S.w
    pts = {
        'K_top': w(108, 20), 'K_bot': w(138, 168),          # overall length: top of clevis to bottom of bowl (outer)
        'A_left': w(118, 100), 'A_right': w(158, 100),       # throat opening between shank and tip
        'D_left': w(118, 128), 'D_right': w(158, 128),       # bowl inside width
        'H_top': w(168, 98), 'H_bot': w(168, 118),           # tip section height
    }
    import json
    print(json.dumps({k: [round(v, 1) for v in project(C, p, size)] for k, p in pts.items()}))

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'hero':
        hero(sys.argv[2]); sys.exit()
    size = int(sys.argv[1]) if len(sys.argv) > 1 and sys.argv[1].isdigit() else 640
    names = [a for a in sys.argv[1:] if not a.isdigit()]
    out = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'products')
    os.makedirs(out, exist_ok=True)
    rs = int(os.environ.get('RS', '0')) or size   # internal render size (downsampled to size)
    for n in names:
        im = render(n, rs, ss=1)
        if rs != size: im = im.resize((size, size), Image.LANCZOS)
        im.save(os.path.join(out, f'{n}.png'), optimize=True)
