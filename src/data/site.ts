export const site = {
  name: 'Kinston Lifting',
  legalName: 'Kinston Lifting Equipment Trading LLC',
  tagline: 'Lifting · Trust · Performance',
  url: 'https://www.kinstonlifting.com',
  description:
    'Kinston Lifting manufactures and supplies certified lifting chain, hooks, shackles, master links, wire rope fittings and hoists for construction, oil and gas, marine and industrial customers worldwide.',
  // phone: '+971 6 534 2200',
  // phoneHref: 'tel:+97165342200',
  // email: 'sales@kinstonlifting.com',
  founded: 1998,
  social: {
    linkedin: 'https://www.linkedin.com/company/kinston-lifting',
    youtube: 'https://www.youtube.com/@kinstonlifting',
    facebook: 'https://www.facebook.com/kinstonlifting',
  },
};

export const nav = [
  { label: 'Products', href: '/products', mega: true },
  { label: 'Industries', href: '/industries' },
  // Temporarily disabled; page sources are preserved in src/disabled-pages.
  // { label: 'Quality', href: '/quality' },
  // { label: 'Downloads', href: '/downloads' },
  // { label: 'News', href: '/news' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/* Office locations hidden until verified.
export interface Office {
  city: string;
  country: string;
  role: string;
  // address: string[];
  // phone: string;
  // email: string;
  hours: string;
}

export const offices: Office[] = [
  {
    city: 'Sharjah',
    country: 'United Arab Emirates',
    role: 'Head office and main warehouse',
  // address: ['Plot 14, Industrial Area 12', 'Sharjah, UAE', 'P.O. Box 48211'],
  // phone: '+971 6 534 2200',
  // email: 'sales@kinstonlifting.com',
    hours: 'Mon–Sat 08:00–18:00 GST',
  },
  {
    city: 'Mumbai',
    country: 'India',
    role: 'Manufacturing and testing',
  // address: ['Unit 7, MIDC Taloja Phase II', 'Navi Mumbai 410208', 'Maharashtra, India'],
  // phone: '+91 22 6140 8800',
  // email: 'india@kinstonlifting.com',
    hours: 'Mon–Sat 09:00–18:00 IST',
  },
  {
    city: 'Rotterdam',
    country: 'Netherlands',
    role: 'European distribution',
  // address: ['Waalhaven Z.z. 19', '3089 JH Rotterdam', 'Netherlands'],
  // phone: '+31 10 290 4420',
  // email: 'europe@kinstonlifting.com',
    hours: 'Mon–Fri 08:30–17:30 CET',
  },
];
*/

export const certifications = [
  { code: 'ISO 9001:2015', title: 'Quality management', body: 'Certified by DNV. Covers design, manufacture, testing and supply of lifting components and assemblies.' },
  { code: 'ISO 14001:2015', title: 'Environmental management', body: 'Forging, heat treatment and finishing operations run under an audited environmental system.' },
  { code: 'ISO 45001:2018', title: 'Occupational health and safety', body: 'Every site works to one safety system, audited annually by a third party.' },
  { code: 'EN 1677', title: 'Components for slings', body: 'Grade 80 and Grade 100 forged components manufactured and tested to EN 1677 parts 1 to 6.' },
  { code: 'ASME B30.10', title: 'Hooks', body: 'Hoist, sling and self-locking hooks dimensioned and marked in line with ASME B30.10 requirements.' },
  { code: 'DNV Type Approval', title: 'Offshore components', body: 'Selected shackles, master links and self-locking hooks hold DNV type approval for offshore container use.' },
];

export const sectors = [
  { slug: 'construction', name: 'Construction', body: 'Tower crane rigging, precast handling and formwork lifting with chain slings and self-locking hooks sized for repeat use on site.' },
  { slug: 'oil-and-gas', name: 'Oil and gas', body: 'DNV-approved shackles, master links and slings for offshore container handling and rig supply vessels.' },
  { slug: 'marine-and-ports', name: 'Marine and ports', body: 'Wire rope sockets, thimbles and grommet hardware for mooring, towing and quayside container operations.' },
  { slug: 'manufacturing', name: 'Manufacturing', body: 'Chain blocks, lever hoists and lifting points for press shops, foundries and assembly lines.' },
  { slug: 'power-and-utilities', name: 'Power and utilities', body: 'Transformer, turbine and overhead line lifting with certified Grade 100 assemblies and swivel lifting points.' },
  { slug: 'mining', name: 'Mining', body: 'Abrasion-resistant chain slings and heavy-duty hooks for dragline, shovel and haul truck maintenance.' },
  { slug: 'logistics', name: 'Logistics and transport', body: 'Ratchet lashings, load binders and webbing slings for securing and handling freight.' },
  { slug: 'renewables', name: 'Renewables', body: 'Blade root, nacelle and tower section lifting hardware for wind and solar installation contractors.' },
];

export const stats = [
  { value: '26', label: 'Years supplying lifting gear' },
  { value: '4,200', label: 'Product variants in stock' },
  { value: '100%', label: 'Proof load tested before despatch' },
  { value: '38', label: 'Countries served' },
];
