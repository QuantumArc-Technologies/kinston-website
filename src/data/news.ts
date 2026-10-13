export interface Article {
  slug: string;
  title: string;
  date: string; // ISO
  category: 'Company' | 'Product' | 'Technical' | 'Events';
  excerpt: string;
  body: string[];
  readingMinutes: number;
}

export const articles: Article[] = [
  {
    slug: 'dnv-type-approval-self-locking-hooks',
    title: 'Kinston self-locking hooks gain DNV type approval for offshore use',
    date: '2026-09-18',
    category: 'Product',
    excerpt: 'The KSL-C100 and KSL-S100 ranges now carry DNV 2.7-1 type approval, clearing them for offshore container sling sets without additional third-party witness testing.',
    body: [
      'After a nine-month programme of design review, witness testing and factory audit, DNV has issued type approval certificates for the Kinston KSL-C100 clevis self-locking hook and KSL-S100 swivel self-locking hook ranges from 6 mm to 22 mm chain size.',
      'Type approval means that sling sets built with these hooks can be certified to DNV 2.7-1 for offshore containers by any approved sling manufacturer, without each batch needing a separate DNV witness. For offshore supply bases this removes a scheduling bottleneck and cuts lead time on replacement sling sets.',
      'The approval covers the hooks in their standard finish and temperature range of −40 °C to +200 °C. Certificates are available on the Downloads page and are linked from each product datasheet.',
    ],
    readingMinutes: 3,
  },
  {
    slug: 'new-500-tonne-test-bed-mumbai',
    title: 'New 500 tonne horizontal test bed commissioned at Navi Mumbai',
    date: '2026-07-02',
    category: 'Company',
    excerpt: 'The 14 metre bed lets Kinston proof test wide body shackles, master link assemblies and long sling legs in-house, with calibrated load cells traceable to national standards.',
    body: [
      'Kinston has commissioned a 500 tonne horizontal test bed at its Navi Mumbai plant. The bed is 14 metres long and uses twin calibrated load cells with a combined uncertainty of 0.5%, traceable to NPL India.',
      'Until now wide body shackles above 150 tonnes were sent to a third-party test house, adding two to three weeks to delivery. The new bed brings proof testing of the full KWB range in-house, with test certificates generated directly from the load cell data and linked to each product serial number.',
      'The bed also handles chain sling assemblies up to 12 metres in reach, so long multi-leg sets for precast and steel erection customers can now be proof tested as complete assemblies rather than leg by leg.',
    ],
    readingMinutes: 3,
  },
  {
    slug: 'grade-100-vs-grade-80-when-to-upgrade',
    title: 'Grade 100 or Grade 80: when the upgrade pays for itself',
    date: '2026-05-12',
    category: 'Technical',
    excerpt: 'Grade 100 chain carries 25% more than Grade 80 at the same size. That matters most when the rigger is carrying the sling, or when the crane hook is the limit.',
    body: [
      'Grade 100 chain and components are rated 25% higher than Grade 80 at the same nominal size. A 10 mm Grade 100 single leg lifts 4 tonnes where a 10 mm Grade 80 leg lifts 3.15 tonnes. For a four-leg sling that difference compounds: a 13 mm Grade 100 set replaces a 16 mm Grade 80 set and weighs around 35% less.',
      'The weight saving is where the business case usually sits. Riggers carry slings up stairs, across decks and onto scaffolds many times a day. A lighter set is faster to rig and reduces manual handling strain. Where a crane hook or lifting point limits the size of master link that will fit, Grade 100 can also be the only way to reach the required WLL.',
      'Grade 80 remains the right choice for slings that see hot work, abrasive environments or temperatures above 200 °C, and where the fleet is already standardised on Grade 80 and mixing grades would complicate inspection.',
      'Kinston supplies both grades with colour coded terminals so grade is visible at a glance. Our technical team can review a sling register and recommend where upgrades make sense.',
    ],
    readingMinutes: 4,
  },
  {
    slug: 'kinston-at-liftex-2026',
    title: 'Visit Kinston at LiftEx 2026, stand D42',
    date: '2026-03-20',
    category: 'Events',
    excerpt: 'We will be showing the new ROV shackle range, the KHR swivel hoist ring and live demonstrations of self-locking hook inspection.',
    body: [
      'Kinston is exhibiting at LiftEx 2026 on stand D42. The stand will feature the full ROV shackle range, the new KHR swivel hoist ring in sizes M8 to M64, and a working self-locking hook inspection station where visitors can measure throat opening and trigger function against the retirement criteria.',
      'Our technical team will be available throughout the show for sling design reviews and product selection questions. Book a time slot through the contact page to guarantee a meeting.',
    ],
    readingMinutes: 2,
  },
  {
    slug: 'inspecting-hooks-retirement-criteria',
    title: 'Inspecting hooks: the five measurements that decide retirement',
    date: '2026-01-28',
    category: 'Technical',
    excerpt: 'Throat opening, tip deflection, wear at the bowl, cracks and latch function. A practical guide to what to measure and when to take a hook out of service.',
    body: [
      'A hook rarely fails suddenly. It stretches, wears and deforms over months, and each of those changes can be measured. This guide covers the five checks that competent persons use on Kinston hooks during periodic inspection.',
      'Throat opening is the first and most important. Measure dimension A between the tip and the shank and compare it with the value on the datasheet. An increase of more than 10% indicates overload and the hook must be retired.',
      'Wear at the bowl reduces the cross section that carries the load. Measure dimension D at the base of the bowl and retire the hook if it has reduced by more than 10% from the datasheet value.',
      'Tip deflection, visible as a sideways twist of the tip relative to the shank, indicates side loading. Any visible twist is grounds for retirement.',
      'Cracks are found by close visual inspection and, where required, magnetic particle testing. Any crack is grounds for retirement.',
      'Latch and trigger function is a simple operational check. The latch must close fully under spring pressure, and a self-locking trigger must lock and release cleanly. Kits are available for all Kinston hooks and are cheaper than a new hook.',
    ],
    readingMinutes: 5,
  },
  {
    slug: 'rotterdam-distribution-centre-opens',
    title: 'Rotterdam distribution centre opens to serve European customers',
    date: '2025-11-06',
    category: 'Company',
    excerpt: 'The 3,200 m² Waalhaven facility holds stock of the full component range and offers next-day delivery across Benelux and Germany.',
    body: [
      'Kinston has opened a distribution centre at Waalhaven in Rotterdam to serve customers in the Benelux, Germany, France and Scandinavia. The facility holds stock of the complete hooks, shackles, master links and lifting point ranges, with chain slings assembled and proof tested on site.',
      'Orders received before 15:00 CET ship the same day for next-day delivery across the Benelux and most of Germany.',
    ],
    readingMinutes: 2,
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
export const latestArticles = (n = 3) => [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, n);
