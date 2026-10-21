import type { Product } from './products';

// Supplier reference models and photographs: docs/catalogue-additions.json.
// Catalogue IDs identify enquiry entries, not approved manufactured specifications.
interface CatalogueEntry {
  slug: string;
  category: string;
  group: string;
  name: string;
  summary: string;
  models: string[];
  grade?: string;
}

const entries: CatalogueEntry[] = [
  // All additional product listings are temporarily disabled; uncomment to restore.
//   {"slug": "lifting-chain-g80", "category": "lifting-chain", "group": "Grade 80", "name": "Loose lifting chain, Grade 80", "summary": "Grade 80 chain supplied separately for sling assemblies and replacement lengths.", "models": ["KTG80"], "grade": "Grade 80"},
//   {"slug": "lifting-chain-g100", "category": "lifting-chain", "group": "Grade 100", "name": "Loose lifting chain, Grade 100", "summary": "Grade 100 chain supplied separately for sling assemblies and replacement lengths.", "models": ["KTG100"], "grade": "Grade 100"},
//   {"slug": "clevis-shortening-clutch-g80", "category": "master-links", "group": "Shortening components", "name": "Clevis shortening clutch, Grade 80", "summary": "Clevis clutch for adjusting the effective reach of a compatible chain sling.", "models": ["KT301"], "grade": "Grade 80"},
//   {"slug": "swivel-with-bearing-g80", "category": "master-links", "group": "Swivels", "name": "Standalone swivel with bearing, Grade 80", "summary": "Separate bearing swivel for a compatible rigging assembly; supplied without a hook.", "models": ["KT283"], "grade": "Grade 80"},
//   {"slug": "triangle-ring-webbing-sling", "category": "slings-and-lashing", "group": "Webbing sling fittings", "name": "Triangle ring for webbing slings", "summary": "Triangle terminal ring for a compatible textile webbing sling.", "models": ["KT140"]},
//   {"slug": "twin-clevis-link", "category": "master-links", "group": "Connecting links", "name": "Twin clevis link", "summary": "Twin clevis connector for compatible chain and rigging components.", "models": ["KTO48"]},
//   {"slug": "forged-round-ring", "category": "master-links", "group": "Connecting links", "name": "Forged round steel ring", "summary": "Round ring alternative to an oval link for compatible rigging assemblies.", "models": ["KT038"]},
//   {"slug": "twist-webbing-sling-hook-g80", "category": "hooks", "group": "Webbing sling hooks", "name": "Twist hook for webbing slings, Grade 80", "summary": "Twisted hook geometry for connection to a compatible webbing sling.", "models": ["KT018"], "grade": "Grade 80"},
//   {"slug": "cast-steel-choker", "category": "master-links", "group": "Choker fittings", "name": "Cast steel choker", "summary": "Cast choker fitting offered in two model patterns for compatible assemblies.", "models": ["KT227", "KT668"]},
//   {"slug": "eye-webbing-sling-hook-g80", "category": "hooks", "group": "Webbing sling hooks", "name": "Eye webbing sling hook, Grade 80", "summary": "Eye attachment hook designed for compatible textile webbing sling systems.", "models": ["KT090"], "grade": "Grade 80"},
//   {"slug": "clevis-webbing-sling-hook-g80", "category": "hooks", "group": "Webbing sling hooks", "name": "Clevis webbing sling hook, Grade 80", "summary": "Clevis attachment hook for a compatible webbing sling system.", "models": ["KT016"], "grade": "Grade 80"},
//   {"slug": "round-reverse-eye-hook", "category": "hooks", "group": "Specialty hooks", "name": "Round reverse eye hook", "summary": "Specialty hook with a round reverse eye connection.", "models": ["KT280"]},
//   {"slug": "eye-slip-hook", "category": "hooks", "group": "Specialty hooks", "name": "Eye slip hook", "summary": "Slip hook with an eye connection for a compatible rigging assembly.", "models": ["KT128"]},
//   {"slug": "clevis-grab-hook-g70", "category": "hooks", "group": "Grab hooks", "name": "Clevis grab hook, Grade 70", "summary": "Grade 70 grab hook for compatible transport chain and load restraint applications.", "models": ["KT099", "KT123"], "grade": "Grade 70"},
//   {"slug": "clevis-grab-hook-g43", "category": "hooks", "group": "Grab hooks", "name": "Clevis grab hook, Grade 43", "summary": "Grade 43 grab hook variant for compatible chain restraint applications.", "models": ["KT123"], "grade": "Grade 43"},
//   {"slug": "suspension-link-components", "category": "master-links", "group": "Master link assemblies", "name": "Suspension link components", "summary": "Suspension link component set for compatible rigging assemblies.", "models": ["KT866"]},
//   {"slug": "round-pin-dee-shackle", "category": "shackles", "group": "Dee shackles", "name": "Round pin dee shackle", "summary": "Dee shackle with a round pin closure.", "models": ["KT122"]},
//   {"slug": "round-pin-anchor-shackle", "category": "shackles", "group": "Bow shackles", "name": "Round pin anchor shackle", "summary": "Anchor bow shackle with a round pin closure.", "models": ["KT121"]},
//   {"slug": "s6-bolt-chain-shackle", "category": "shackles", "group": "Dee shackles", "name": "S6 bolt type chain shackle", "summary": "S6 chain shackle variant with a bolt type closure.", "models": ["KT970"]},
//   {"slug": "s6-bolt-anchor-shackle", "category": "shackles", "group": "Bow shackles", "name": "S6 bolt type anchor shackle", "summary": "S6 anchor shackle variant with a bolt type closure.", "models": ["KT969"]},
//   {"slug": "s6-screw-chain-shackle", "category": "shackles", "group": "Dee shackles", "name": "S6 screw pin chain shackle", "summary": "S6 chain shackle variant with a screw pin closure.", "models": ["KT959"]},
//   {"slug": "s6-screw-anchor-shackle", "category": "shackles", "group": "Bow shackles", "name": "S6 screw pin anchor shackle", "summary": "S6 anchor shackle variant with a screw pin closure.", "models": ["KT958"]},
//   {"slug": "shackle-coupling-chain", "category": "shackles", "group": "Chain coupling shackles", "name": "Shackle coupling chain", "summary": "Chain coupling shackle component for a compatible assembly.", "models": ["KT879"]},
//   {"slug": "lever-load-binder", "category": "slings-and-lashing", "group": "Load restraint", "name": "Lever load binder", "summary": "Lever tightener for securing compatible transport chain.", "models": ["KT910"]},
//   {"slug": "clevis-ratchet-binder-g100", "category": "slings-and-lashing", "group": "Load restraint", "name": "Clevis ratchet binder, Grade 100", "summary": "Grade 100 ratchet binder with clevis end connections.", "models": ["KT1032"], "grade": "Grade 100"},
//   {"slug": "ratchet-binder-safety-hooks-g80", "category": "slings-and-lashing", "group": "Load restraint", "name": "Ratchet binder with safety hooks, Grade 80", "summary": "Grade 80 binder family with safety hook end fittings and three model patterns.", "models": ["KT670", "KT786", "KT753"], "grade": "Grade 80"},
//   {"slug": "ratchet-binder-safety-hooks-g100", "category": "slings-and-lashing", "group": "Load restraint", "name": "Ratchet binder with safety hooks, Grade 100", "summary": "Grade 100 binder variant with safety hook end fittings.", "models": ["LR1030"], "grade": "Grade 100"},
//   {"slug": "ratchet-binder-body-g100", "category": "slings-and-lashing", "group": "Load restraint", "name": "Ratchet binder body, Grade 100", "summary": "Ratchet binder supplied without links or hooks for a matched restraint assembly.", "models": ["KT1031"], "grade": "Grade 100"},
//   {"slug": "conveyor-belt-sling-tongs", "category": "mining-equipment", "group": "Conveyor handling", "name": "Conveyor belt sling tongs", "summary": "Sling tongs for conveyor belt handling; confirm belt and equipment compatibility when enquiring.", "models": ["KT939"]},
//   {"slug": "u-type-forged-hoist-ring", "category": "mining-equipment", "group": "Mining fittings", "name": "U-type forged hoist ring", "summary": "U-type ring for a compatible mining or handling assembly.", "models": ["KT882"]},
//   {"slug": "mineral-carver", "category": "mining-equipment", "group": "Mining fittings", "name": "Mineral carver", "summary": "Specialist mining component identified by reference model; send equipment drawings to confirm fitment.", "models": ["KT827"]},
//   {"slug": "forged-mining-latch", "category": "mining-equipment", "group": "Mining fittings", "name": "Forged mining latch", "summary": "Forged latch for a compatible mining equipment assembly.", "models": ["KT928"]},
//   {"slug": "fixed-mining-clasp", "category": "mining-equipment", "group": "Mining fittings", "name": "Fixed mining clasp", "summary": "Fixed clasp for a compatible mining equipment assembly.", "models": ["KT938"]},
//   {"slug": "forged-mineral-shackle", "category": "mining-equipment", "group": "Mining fittings", "name": "Forged mineral shackle", "summary": "Specialist forged shackle for a compatible mining assembly.", "models": ["KT858"]},
//   {"slug": "clevis-sling-hook-g100", "category": "hooks", "group": "Sling hooks", "name": "Clevis sling hook with cast latch, Grade 100", "summary": "Grade 100 sling hook with a clevis connection and cast latch.", "models": ["KT1004"], "grade": "Grade 100"},
//   {"slug": "eye-sling-hook-g100", "category": "hooks", "group": "Sling hooks", "name": "Eye sling hook, Grade 100", "summary": "Grade 100 sling hook with an eye attachment.", "models": ["KT1008"], "grade": "Grade 100"},
//   {"slug": "clevis-link-g100", "category": "master-links", "group": "Connecting links", "name": "Clevis link, Grade 100", "summary": "Grade 100 connector with a clevis attachment.", "models": ["KT1033"], "grade": "Grade 100"},
//   {"slug": "clevis-reeving-link-g100", "category": "master-links", "group": "Connecting links", "name": "Clevis reeving link, Grade 100", "summary": "Grade 100 reeving link with a clevis connection.", "models": ["KT1062"], "grade": "Grade 100"},
//   {"slug": "omega-link-g100", "category": "master-links", "group": "Connecting links", "name": "Omega link, Grade 100", "summary": "Grade 100 omega-shaped connector for a compatible assembly.", "models": ["KT1027"], "grade": "Grade 100"},
//   {"slug": "oversized-master-link-g100", "category": "master-links", "group": "Master links", "name": "Oversized master link, Grade 100", "summary": "Oversized master link variant for applications requiring a larger connection opening.", "models": ["KT1014"], "grade": "Grade 100"},
//   {"slug": "master-link-grab-hook-assembly-g100", "category": "master-links", "group": "Master link assemblies", "name": "Master link assembly with grab hook, Grade 100", "summary": "Grade 100 master link assembly incorporating a grab hook.", "models": ["KT1068"], "grade": "Grade 100"},
//   {"slug": "clevis-c-hook-g100", "category": "hooks", "group": "Specialty hooks", "name": "Clevis C-type hook, Grade 100", "summary": "Grade 100 C-type hook with a clevis connection.", "models": ["KT1071"], "grade": "Grade 100"},
];

export const additionalProducts: Product[] = entries.map((entry, index) => ({
  slug: entry.slug,
  category: entry.category,
  group: entry.group,
  name: entry.name,
  code: `K-${2001 + index}`,
  grade: entry.grade,
  art: entry.slug,
  image: `/images/products/reference/${entry.slug}.jpg`,
  imageCaption: 'Supplier reference image · Model and dimensions confirmed on enquiry',
  summary: entry.summary,
  description: [
    entry.summary,
    'Send your required size, quantity and application. We will confirm model compatibility, dimensions and the applicable load rating with your quotation.',
  ],
  features: [
    entry.name.split(',')[0],
    `Model variants: ${entry.models.join(', ')}`,
    'Dimensions and documentation available on enquiry',
  ],
  material: 'Confirm for selected model',
  finish: 'Confirm for selected model',
  standards: [],
  designFactor: 'Confirm for selected model',
  tempRange: 'Confirm for selected model',
  specificationNote: 'Select a model when enquiring. Dimensions, load ratings and suitability will be confirmed for your application.',
  specColumns: [
    { key: 'model', label: 'Reference model', kind: 'text' },
    { key: 'variant', label: 'Configuration', kind: 'text' },
  ],
  specRows: entry.models.map((model) => ({ model, variant: entry.name })),
  downloads: [],
}));
