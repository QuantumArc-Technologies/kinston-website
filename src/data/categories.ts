export interface Category {
  slug: string;
  name: string;
  short: string;
  description: string;
  art: string;
  image?: string;
  groups: string[];
}

export const categories: Category[] = [
  {
    slug: 'grade-80-rigging',
    name: 'Grade 80 Rigging',
    short: 'Grade 80 Rigging',
    description: 'Grade 80 alloy steel hooks, connecting links, D rings, swivels, master links and rigging accessories in RAL 2004 orange. Browse models, dimensions and working load limits.',
    art: 'sling-hook',
    groups: ['G80 Clevis Hook', 'G80 Connecting Link', 'G80 D Ring & Weld On Hook', 'G80 Eye Hook', 'G80 Forged Swivel', 'G80 Master Link', 'G80 Other Rigging Accessories', 'G80 Safety Hook', 'G80 Swivel Hook'],
  },
  {
    slug: 'chain-slings',
    name: 'Chain slings and assemblies',
    short: 'Chain slings',
    description:
      'Single, two, three and four-leg chain sling assemblies in Grade 100 and Grade 80, built to order and proof tested with a traceable certificate.',
    art: 'chain-sling',
    groups: ['Grade 100', 'Grade 80'],
  },
  {
    slug: 'hooks',
    name: 'Hooks',
    short: 'Hooks',
    description:
      'Self-locking, sling, grab, hoist and swivel hooks forged from quenched and tempered alloy steel, with latch kits and spare parts held in stock.',
    art: 'self-locking-hook',
    groups: ['Self-locking hooks', 'Sling hooks', 'Grab hooks', 'Hoist hooks', 'Swivel hooks', 'Webbing sling hooks', 'Specialty hooks'],
  },
  {
    slug: 'shackles',
    name: 'Shackles',
    short: 'Shackles',
    description:
      'Bow and dee shackles with screw pin or safety bolt, from 0.5 to 150 tonnes, including DNV type approved and ROV ranges for offshore use.',
    art: 'shackle-bow',
    groups: ['Bow shackles', 'Dee shackles', 'Offshore and ROV', 'Chain coupling shackles'],
  },
  {
    slug: 'master-links',
    name: 'Master links and connectors',
    short: 'Master links',
    description:
      'Master links, master link assemblies, connecting links and coupling links that tie chain sling assemblies to the crane hook.',
    art: 'master-link',
    groups: ['Master links', 'Master link assemblies', 'Connecting links', 'Shortening components', 'Swivels', 'Choker fittings'],
  },
  {
    slug: 'wire-rope-fittings',
    name: 'Wire rope fittings',
    short: 'Wire rope fittings',
    description:
      'Spelter and wedge sockets, wire rope clips, thimbles and turnbuckles for permanent and field terminations.',
    art: 'socket',
    groups: ['Sockets', 'Clips and thimbles', 'Turnbuckles'],
  },
  {
    slug: 'lifting-points',
    name: 'Lifting points',
    short: 'Lifting points',
    description:
      'Eye bolts, swivel hoist rings and weld-on or bolt-on lifting points rated for loading from any direction.',
    art: 'swivel-ring',
    groups: ['Eye bolts', 'Swivel hoist rings', 'Weld-on and bolt-on', 'Container lifting rings'],
  },
  {
    slug: 'hoists',
    name: 'Hoists and trolleys',
    short: 'Hoists',
    description:
      'Manual chain blocks, lever hoists and beam trolleys with Grade 80 load chain and overload protection as standard.',
    art: 'chain-block',
    groups: ['Chain blocks', 'Lever hoists', 'Trolleys'],
  },
  {
    slug: 'slings-and-lashing',
    name: 'Textile slings and load restraint',
    short: 'Slings and lashing',
    description:
      'Polyester webbing slings, round slings, ratchet lashings and load binders, colour coded to EN 1492 and EN 12195.',
    art: 'round-sling',
    groups: ['Webbing slings', 'Round slings', 'Load restraint', 'Webbing sling fittings'],
  },
  {
    slug: 'lifting-chain',
    name: 'Lifting chain',
    short: 'Lifting chain',
    description: 'Loose Grade 80 and Grade 100 lifting chain for sling assembly and replacement. Enquire with your required chain size, length and application.',
    art: 'chain',
    image: '/images/products/reference/lifting-chain-g100.jpg',
    groups: ['Grade 80', 'Grade 100'],
  },
  {
    slug: 'mining-equipment',
    name: 'Mining and conveyor fittings',
    short: 'Mining fittings',
    description: 'Conveyor belt sling tongs, mineral shackles, hoist rings, latches and fixed clasps. Send your equipment details for model and fitment confirmation.',
    art: 'mining',
    image: '/images/products/reference/conveyor-belt-sling-tongs.jpg',
    groups: ['Conveyor handling', 'Mining fittings'],
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
