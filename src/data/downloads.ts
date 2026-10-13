export interface DownloadItem {
  title: string;
  type: 'Catalogue' | 'Datasheet' | 'Certificate' | 'Manual' | 'Guide';
  size: string;
  updated: string;
  href: string;
  description: string;
}

export const downloads: DownloadItem[] = [
  { title: 'Kinston product catalogue 2026', type: 'Catalogue', size: '24 MB', updated: '2026-08-01', href: '/downloads/kinston-catalogue-2026.pdf', description: 'Full range catalogue with dimensions, WLL tables and ordering codes for every product family.' },
  { title: 'Chain slings and components, Grade 100', type: 'Catalogue', size: '8.4 MB', updated: '2026-08-01', href: '/downloads/kinston-grade-100.pdf', description: 'Grade 100 chain, hooks, master links and connecting links with sling configuration tables.' },
  { title: 'Chain slings and components, Grade 80', type: 'Catalogue', size: '7.9 MB', updated: '2026-08-01', href: '/downloads/kinston-grade-80.pdf', description: 'Grade 80 chain and components.' },
  { title: 'Shackles and wire rope fittings', type: 'Catalogue', size: '6.1 MB', updated: '2026-06-15', href: '/downloads/kinston-shackles-wire-rope.pdf', description: 'Bow and dee shackles, wide body and ROV shackles, sockets, grips, thimbles and turnbuckles.' },
  { title: 'ISO 9001:2015 certificate', type: 'Certificate', size: '310 KB', updated: '2026-02-10', href: '/downloads/certificates/iso-9001.pdf', description: 'Quality management system certificate issued by DNV, valid to February 2029.' },
  { title: 'ISO 14001:2015 certificate', type: 'Certificate', size: '290 KB', updated: '2026-02-10', href: '/downloads/certificates/iso-14001.pdf', description: 'Environmental management system certificate.' },
  { title: 'ISO 45001:2018 certificate', type: 'Certificate', size: '295 KB', updated: '2026-02-10', href: '/downloads/certificates/iso-45001.pdf', description: 'Occupational health and safety management system certificate.' },
  { title: 'DNV type approval, self-locking hooks', type: 'Certificate', size: '1.1 MB', updated: '2026-09-18', href: '/downloads/certificates/dnv-ta-ksl.pdf', description: 'DNV 2.7-1 type approval certificate for KSL-C100 and KSL-S100 ranges.' },
  { title: 'DNV type approval, wide body shackles', type: 'Certificate', size: '1.0 MB', updated: '2025-12-04', href: '/downloads/certificates/dnv-ta-kwb.pdf', description: 'DNV 2.7-1 type approval certificate for KWB wide body shackles 40 to 400 t.' },
  { title: 'Chain block operating manual', type: 'Manual', size: '3.1 MB', updated: '2026-04-20', href: '/downloads/manuals/kcb-manual.pdf', description: 'Installation, operation, inspection and maintenance for KCB chain blocks.' },
  { title: 'Lever hoist operating manual', type: 'Manual', size: '2.6 MB', updated: '2026-04-20', href: '/downloads/manuals/klh-manual.pdf', description: 'Installation, operation, inspection and maintenance for KLH lever hoists.' },
  { title: 'Chain sling user guide', type: 'Guide', size: '1.8 MB', updated: '2026-03-01', href: '/downloads/guides/chain-sling-user-guide.pdf', description: 'Selection, use, inspection and retirement criteria for chain slings, in line with EN 818-6.' },
  { title: 'Hook inspection guide', type: 'Guide', size: '1.2 MB', updated: '2026-01-28', href: '/downloads/guides/hook-inspection-guide.pdf', description: 'Five measurements that decide hook retirement, with datasheet reference dimensions.' },
  { title: 'Sling angle and load calculator', type: 'Guide', size: '640 KB', updated: '2025-10-12', href: '/downloads/guides/sling-angle-calculator.pdf', description: 'Printable tables for leg tension at common sling angles.' },
];
