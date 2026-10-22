"""Import the supplier Grade 80 catalogue from cached HTML, preserving source tables.

Run `python3 tools/import-grade80.py prepare` to create curl download configs,
then `python3 tools/import-grade80.py import` after downloading the pages.
"""
from html.parser import HTMLParser
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
CACHE = Path('/private/tmp/kinston-grade80')
BASE = 'https://www.shenli-rigging.com/'

class Node:
    def __init__(self, tag='', attrs=()):
        self.tag, self.attrs, self.children = tag, dict(attrs), []
    def all(self, tag=None, **attrs):
        found = []
        for child in self.children:
            if isinstance(child, Node):
                if (tag is None or child.tag == tag) and all(child.attrs.get(k) == v for k, v in attrs.items()):
                    found.append(child)
                found.extend(child.all(tag, **attrs))
        return found
    def text(self):
        if self.tag == 'br':
            return ' '
        return re.sub(r'\s+', ' ', ''.join(c.text() if isinstance(c, Node) else c for c in self.children)).strip()

class Parser(HTMLParser):
    def __init__(self, data):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.stack = [self.root]
        self.feed(data)
    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in ('img', 'br', 'meta', 'link', 'input', 'hr', 'source', 'wbr'):
            self.stack.append(node)
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        self.handle_endtag(tag)
    def handle_endtag(self, tag):
        for i in range(len(self.stack)-1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break
    def handle_data(self, data):
        self.stack[-1].children.append(data)

def parse(path):
    return Parser(path.read_text()).root

def entries():
    index = parse(Path('/private/tmp/grade80-index.html'))
    return [(n.all('a')[0].attrs['href'], n.text()) for n in index.all('li', **{'class': 'product_con'})]

def config(items, file):
    file.write_text('\n'.join(f'url = "{url}"\noutput = "{path}"' for url, path in items)+'\n')

def prepare():
    CACHE.mkdir(exist_ok=True)
    (CACHE/'pages').mkdir(exist_ok=True)
    config([(BASE+url, CACHE/'pages'/url) for url, _ in entries()], CACHE/'pages.curl')
    print(f'{len(entries())} product pages queued in {CACHE}/pages.curl')

def import_catalogue():
    products, references, manifest, assets = [], {}, [], []
    for number, (url, name) in enumerate(entries(), 1):
        page = parse(CACHE/'pages'/url)
        contents = page.all('content')
        if not contents:
            raise ValueError(f'No content: {url}')
        content = contents[0]
        slug = url.removesuffix('.html') + '-g80'
        slug = re.sub(r'^\d+-(?:\d+-)*', '', slug)
        # The supplier has several similarly named models: retain the source number.
        model = re.match(r'([\d-]+)', url).group(1).strip('-')
        slug = slug.removesuffix('-g80') + '-' + model + '-g80'
        breadcrumb = page.all('div', id='etw_producttitle')[0].all('a')
        group = breadcrumb[-1].text()
        if group == 'Grade 80 Rigging Hardware':
            group = 'G80 Other Rigging Accessories'
        photos = [n for n in content.all('div') if 'etw_photo' in n.attrs.get('class', '')]
        photo = photos[0] if photos else content
        gallery_images = {}
        for gallery in photos or [content]:
            linked_images = {id(i): a.attrs['href'] for a in gallery.all('a') if re.search(r'\.(jpg|png|webp)$', a.attrs.get('href', ''), re.I) for i in a.all('img')}
            urls = list(dict.fromkeys(linked_images.get(id(i), i.attrs['src']) for i in gallery.all('img')))
            # This page places each dimension drawing before its product photo.
            if url == '2-49-self-locking-eye-hook.html':
                urls.reverse()
            gallery_images[id(gallery)] = urls
        image_urls = gallery_images[id(photo)]
        # This source detail page mistakenly embeds a connecting link's images.
        # The category index has the correct clevis foundry hook photograph.
        if url == '2-1-10-g80-clevis-foundry-hook.html':
            image_urls = ['products/2-1-10-g80-clevis-foundry-hook_01b.jpg']
            gallery_images[id(photo)] = image_urls
        primary = image_urls[0]
        # Its photograph depicts an eye hook; the drawing shows the named clevis swivel.
        if url == '2-8-6-g80-clevis-swivel-self-locking-hook-with-bearing.html':
            primary = image_urls[1]
        source_image = str(ROOT/'public/images/products/reference/grade-80'/(slug+Path(primary).suffix))
        assets.append((BASE+primary, source_image))
        def local_image(src):
            filename = Path(src).name
            target = '/images/products/technical/grade-80/'+filename
            assets.append((BASE+src, str(ROOT/'public'/target.lstrip('/'))))
            return target
        drawings = [local_image(src) for src in image_urls[1:]]
        tables = []
        for table in content.all('table'):
            rows = []
            for row in table.all('tr'):
                cells = []
                for cell in [c for c in row.children if isinstance(c, Node) and c.tag in ('td', 'th')]:
                    item = {'text': cell.text()}
                    background = cell.attrs.get('bgcolor', '')
                    if re.fullmatch(r'#[0-9a-fA-F]{6}', background):
                        item['background'] = background
                    for span in ('rowspan', 'colspan'):
                        if cell.attrs.get(span, '').isdigit():
                            item[span] = int(cell.attrs[span])
                    imgs = cell.all('img')
                    if imgs:
                        item['image'] = local_image(imgs[0].attrs['src'])
                    cells.append(item)
                if cells:
                    rows.append(cells)
            if rows:
                tables.append({'label': 'Spare parts' if any(c.get('image') for row in rows for c in row) else 'Parameters', 'rows': rows})
        paragraphs = [re.sub(r'^Features\s*', '', p.text(), flags=re.I) for p in content.all('p')]
        raw = ' '.join(paragraphs)
        # Source performance claims are kept explicitly as reference information.
        source_features = [s.strip(' ;.')+'.' for s in re.split(r'[●•]|\b\d+\.\s+(?=[A-Z])', raw) if s.strip(' ;.')]
        source_features = [s for s in source_features if not re.search(r'color|colour|RAL|surface treatment', s, re.I)]
        if not source_features:
            source_features = ['Grade 80 alloy steel rigging component.', 'Select the reference model and size for your enquiry.']
        edits = {
            'It is forged by special alloy steel with high intensity and high toughness, and then it is heat treated.': 'Heat-treated alloy steel forging.',
            'It can be matched with sling and G80 chains which can meet the standard EN818-2.': 'For compatible Grade 80 chains to EN 818-2.',
            'Each workpiece should pass testing at 2.5 times of working load limit.': 'Reference proof test: 2.5 × working load limit.',
            'We should carry out sampling and 20000 times of fatigue testing.': 'Reference sample fatigue test: 20,000 cycles.',
            'We should carry out strict sampling and breakage testing for each batch of products.': 'Batch samples undergo destructive testing.',
            'We should carry out 100% magnetic powder flaw detection.': 'Magnetic particle inspection of every component.',
            '100% of the pin should be tested to ensure that they have the same hardness.': 'Pins checked for consistent hardness.',
            'Fatiuge tested at 1.5 times Working Load Limit for 20000 cycles.': 'Reference fatigue test: 20,000 cycles at 1.5 × working load limit.',
            'Ultimate load is 4 times the Working Load Limit.': 'Reference ultimate load: 4 × working load limit.',
        }
        features = list(dict.fromkeys(edits.get(feature, feature) for feature in source_features)) + ['RAL 2004 orange powder-coated finish.']
        restrictions = {
            '2-47-alloy-steel-clevis-hook.html': 'For forest logging only. Do not use for overhead lifting.',
            '2-6-alloy-steel-connecting-link.html': 'For lashing and pulling only. Do not use for overhead lifting. Confirm the intended use of each connecting-link configuration before ordering.',
            '5-16-alloy-steel-twist-eye-hook.html': 'For lashing and pulling only. Do not use for overhead lifting.',
            '5-6-alloy-steel-lifting-sling-grab-hook.html': 'For lashing and pulling only. Do not use for overhead lifting.',
        }
        summary = f'{name} for compatible Grade 80 rigging assemblies. Available in RAL 2004 orange; select the reference model and size for your application.'
        product = dict(slug=slug, category='grade-80-rigging', group=group, name=name, code=f'K80-{number:04d}', grade='Grade 80', art='sling-hook', image=f'/images/products/branded/grade-80/{slug}.webp', imageCaption='KINSTON product visualisation · RAL 2004 orange · Confirm supplied configuration with your quotation', summary=summary, description=[summary], features=features, material='Alloy steel', finish='RAL 2004 orange powder coat', standards=[], designFactor='Confirm for selected model', tempRange='Confirm for selected model', specColumns=[], specRows=[], downloads=[])
        if url in restrictions:
            product['usageNotice'] = restrictions[url]
            product['summary'] = f'{name} in RAL 2004 orange. {restrictions[url]}'
            product['description'] = [product['summary']]
        sections = [dict(title=name, drawing=drawings[0] if drawings else None, tables=[])]
        table_number = 0
        for node in content.all():
            if 'protitle' in node.attrs.get('class', '') or node.tag in ('h3', 'h4'):
                title = node.text()
                if title and sections[-1]['tables']:
                    sections.append(dict(title=title, drawing=None, tables=[]))
                elif title:
                    sections[-1]['title'] = title
            if id(node) in gallery_images and len(gallery_images[id(node)]) > 1:
                # Subsequent model sections retain their own dimension drawing.
                sections[-1]['drawing'] = local_image(gallery_images[id(node)][1])
            if node.tag == 'table' and table_number < len(tables):
                sections[-1]['tables'].append(tables[table_number])
                table_number += 1
        sections = [section for section in sections if section['tables']]
        references[slug] = dict(source=BASE+url, features=features, notes=['Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm unless otherwise stated.'], sections=sections)
        # Extract WLLs for product cards without synthesising load ratings.
        if tables:
            rows = tables[0]['rows']
            headers = [c['text'] for c in rows[0]]
            wll_index = next((i for i, h in enumerate(headers) if re.search(r'working|woring|wll', h, re.I)), None)
            if wll_index is not None and re.search(r'\(\s*t\s*\)|/\s*t\b|ton', headers[wll_index], re.I):
                for row in rows[1:]:
                    if len(row) > wll_index:
                        try:
                            product['specRows'].append(dict(code=row[0]['text'], wll=float(row[wll_index]['text'])))
                        except ValueError:
                            pass
        products.append(product)
        manifest.append(dict(slug=slug, name=name, source=BASE+url, referenceImage=BASE+primary, referencePath='/'+str(Path(source_image).relative_to(ROOT/'public')), localImage=product['image'], group=group, tables=len(tables), sizes=max(0, len(tables[0]['rows'])-1) if tables else 0))
    if len(set(p['slug'] for p in products)) != len(products):
        raise ValueError('Duplicate slugs')
    (ROOT/'src/data/grade-80-products.json').write_text(json.dumps(products, indent=2, ensure_ascii=False).replace('SLR', 'KT')+'\n')
    (ROOT/'src/data/grade-80-technical-reference.json').write_text(json.dumps(references, indent=2, ensure_ascii=False).replace('SLR', 'KT')+'\n')
    (ROOT/'docs/grade-80-catalogue.json').write_text(json.dumps(dict(source=BASE+'2-grade-80-rigging-hardware.html', finish='RAL 2004 orange', families=manifest), indent=2, ensure_ascii=False)+'\n')
    assets = list(dict.fromkeys(assets))
    for _, path in assets:
        Path(path).parent.mkdir(parents=True, exist_ok=True)
    config(assets, CACHE/'assets.curl')
    print(f'Imported {len(products)} products, {sum(len(s["tables"]) for r in references.values() for s in r["sections"])} tables, {len(assets)} assets')
    print('Groups:', sorted(set(p['group'] for p in products)))

if __name__ == '__main__' and sys.argv[1] == 'prepare':
    prepare()
elif __name__ == '__main__' and sys.argv[1] == 'import':
    import_catalogue()
