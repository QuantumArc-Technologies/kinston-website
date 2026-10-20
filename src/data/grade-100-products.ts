import type { Product } from './products';

// Active families from the supplier Grade 100 index. Source mapping: docs/grade-100-catalogue.json.
// Older product ranges remain commented out in products.ts and additional-products.ts.
export const grade100Products: Product[] = [
  {
    "slug": "locking-pin-grab-hook-g100",
    "category": "hooks",
    "group": "Grab hooks",
    "name": "Locking pin grab hook, Grade 100",
    "code": "K100-3001",
    "art": "locking-pin-grab-hook-g100",
    "image": "/images/products/branded/grade-100/locking-pin-grab-hook-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Eye and clevis grab hooks with a safety pin for retaining the chain in the shortening pocket.",
    "description": [
      "Eye and clevis grab hooks with a safety pin for retaining the chain in the shortening pocket.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Eye and clevis attachment options",
      "Safety pin across the chain throat",
      "Chain shortening pocket"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "featured": true,
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "variant", "label": "Configuration", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_d", "label": "d", "kind": "mm"},
      {"key": "dim_D", "label": "D", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"},
      {"key": "dim_R", "label": "R", "kind": "mm"},
      {"key": "dim_E2", "label": "E2", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1023-8", "weight": 0.5, "wll": 2.5, "breaking": 10, "dim_A": 35, "dim_B": 25, "dim_d": 12, "dim_D": 16.5, "dim_E": 10.5, "dim_L": 110, "variant": "Eye with safety pin"},
      {"code": "10-SLR1023-10", "weight": 1.0, "wll": 4, "breaking": 16, "dim_A": 64, "dim_B": 32, "dim_d": 15, "dim_D": 21, "dim_E": 14, "dim_L": 136.5, "variant": "Eye with safety pin"},
      {"code": "10-SLR1023-13", "weight": 2.2, "wll": 6.7, "breaking": 26.8, "dim_A": 57, "dim_B": 40, "dim_d": 20.5, "dim_D": 27.5, "dim_E": 15.5, "dim_L": 180, "variant": "Eye with safety pin"},
      {"code": "10-SLR1024-8", "weight": 0.5, "wll": 2.5, "breaking": 10, "dim_A": 35, "dim_B": 25, "dim_R": 12, "dim_E2": 16.5, "dim_E": 10.5, "dim_L": 110, "variant": "Clevis with safety pin"},
      {"code": "10-SLR1024-10", "weight": 1.0, "wll": 4, "breaking": 16, "dim_A": 64, "dim_B": 32, "dim_R": 15, "dim_E2": 21, "dim_E": 14, "dim_L": 136.5, "variant": "Clevis with safety pin"},
      {"code": "10-SLR1024-13", "weight": 2.2, "wll": 6.7, "breaking": 26.8, "dim_A": 57, "dim_B": 40, "dim_R": 20.5, "dim_E2": 27.5, "dim_E": 15.5, "dim_L": 180, "variant": "Clevis with safety pin"}
    ]
  },
  {
    "slug": "alloy-eye-grab-hook-g100",
    "category": "hooks",
    "group": "Grab hooks",
    "name": "Alloy steel eye grab hook, Grade 100",
    "code": "K100-3002",
    "art": "alloy-eye-grab-hook-g100",
    "image": "/images/products/branded/grade-100/alloy-eye-grab-hook-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Eye grab hook with a forked lower connection for compatible Grade 100 chain assemblies.",
    "description": [
      "Eye grab hook with a forked lower connection for compatible Grade 100 chain assemblies.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Eye attachment",
      "Forked lower connection",
      "Six published chain-size options"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_ф", "label": "ф", "kind": "mm"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_C", "label": "C", "kind": "mm"},
      {"key": "dim_L1", "label": "L1", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "SLR1051-6-10", "weight": 0.3, "wll": 1.4, "breaking": 5.6, "dim_ф": 18, "dim_A": 8, "dim_B": 32, "dim_C": 20, "dim_L1": 88, "dim_L": 112},
      {"code": "SLR1051-8-10", "weight": 0.69, "wll": 2.5, "breaking": 10, "dim_ф": 24, "dim_A": 10, "dim_B": 36, "dim_C": 10, "dim_L1": 116, "dim_L": 145},
      {"code": "SLR1051-10-10", "weight": 1.33, "wll": 4, "breaking": 16, "dim_ф": 30, "dim_A": 12.5, "dim_B": 48, "dim_C": 12.5, "dim_L1": 145, "dim_L": 184},
      {"code": "SLR1051-13-10", "weight": 2.36, "wll": 6.7, "breaking": 26.8, "dim_ф": 37, "dim_A": 15.5, "dim_B": 59.5, "dim_C": 15.5, "dim_L1": 178, "dim_L": 223},
      {"code": "SLR1051-16-10", "weight": 4.5, "wll": 10, "breaking": 40, "dim_ф": 45, "dim_A": 19, "dim_B": 70, "dim_C": 19, "dim_L1": 216, "dim_L": 273},
      {"code": "SLR1051-20-10", "weight": 9.0, "wll": 16, "breaking": 64, "dim_ф": 58, "dim_A": 24.5, "dim_B": 85, "dim_C": 24.5, "dim_L1": 278, "dim_L": 351}
    ]
  },
  {
    "slug": "container-lifting-ring",
    "category": "lifting-points",
    "group": "Container lifting rings",
    "name": "Container lifting ring",
    "code": "K100-3003",
    "art": "container-lifting-ring",
    "image": "/images/products/branded/grade-100/container-lifting-ring.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Oval container lifting ring with an integral clevis connection and a removable load pin.",
    "description": [
      "Oval container lifting ring with an integral clevis connection and a removable load pin.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application.",
      "The supplier lists this ring in its Grade 100 range but also mentions Grade 80 on the detail page. Confirm the required grade and application with your quotation."
    ],
    "features": [
      "Oval forged ring",
      "Integral clevis connection",
      "Model and grade confirmed with your quotation"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_C", "label": "C", "kind": "mm"},
      {"key": "dim_D", "label": "D", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_N", "label": "N", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_K", "label": "K", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"},
      {"key": "dim_G", "label": "G", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"}
    ],
    "specRows": [
      {"code": "SLR-1033-13", "weight": 1.36, "wll": 6.7, "breaking": 26.8, "dim_A": 59, "dim_B": 38, "dim_C": 15, "dim_D": 50, "dim_M": 93, "dim_N": 90, "dim_H": 21, "dim_K": 21.5, "dim_L": 174, "dim_G": 16, "dim_E": 35}
    ]
  },
  {
    "slug": "omega-link-g100",
    "category": "master-links",
    "group": "Connecting links",
    "name": "Omega link, Grade 100",
    "code": "K100-3004",
    "art": "omega-link-g100",
    "image": "/images/products/branded/grade-100/omega-link-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Compact omega-shaped connector for joining compatible Grade 100 chain and rigging components.",
    "description": [
      "Compact omega-shaped connector for joining compatible Grade 100 chain and rigging components.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Omega-shaped forged body",
      "Removable transverse pin",
      "Five published size options"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "featured": true,
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1027-06", "weight": 0.12, "wll": 1.4, "breaking": 5.6, "dim_A": 8.5, "dim_B": 32.5, "dim_E": 20, "dim_M": 44, "dim_L": 55},
      {"code": "10-SLR1027-08", "weight": 0.27, "wll": 2.5, "breaking": 10, "dim_A": 10.5, "dim_B": 42, "dim_E": 24, "dim_M": 60, "dim_L": 73.5},
      {"code": "10-SLR1027-10", "weight": 0.44, "wll": 4, "breaking": 16, "dim_A": 12.5, "dim_B": 48.5, "dim_E": 31, "dim_M": 70, "dim_L": 90},
      {"code": "10-SLR1027-13", "weight": 0.89, "wll": 6.7, "breaking": 26.8, "dim_A": 16, "dim_B": 60, "dim_E": 38.5, "dim_M": 90, "dim_L": 109},
      {"code": "10-SLR1027-16", "weight": 1.69, "wll": 10, "breaking": 40, "dim_A": 19, "dim_B": 75.5, "dim_E": 51, "dim_M": 112, "dim_L": 141.5}
    ]
  },
  {
    "slug": "connecting-link-g100",
    "category": "master-links",
    "group": "Connecting links",
    "name": "Connecting link, Grade 100",
    "code": "K100-3005",
    "art": "connecting-link-g100",
    "image": "/images/products/branded/grade-100/connecting-link-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Two-part hammerlock connector with a pin and retaining sleeve for compatible Grade 100 sling components.",
    "description": [
      "Two-part hammerlock connector with a pin and retaining sleeve for compatible Grade 100 sling components.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Interlocking forged halves",
      "Pin and retaining sleeve",
      "Sizes from 6 to 32 mm in the reference range"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_K", "label": "K", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1001-06", "weight": 0.08, "wll": 1.4, "breaking": 5.6, "dim_H": 7.6, "dim_A": 14, "dim_K": 44.5, "dim_L": 60},
      {"code": "10-SLR1001-08", "weight": 0.18, "wll": 2.5, "breaking": 10, "dim_H": 10, "dim_A": 18.5, "dim_K": 61.5, "dim_L": 84.5},
      {"code": "10-SLR1001-10", "weight": 0.34, "wll": 4, "breaking": 16, "dim_H": 12.6, "dim_A": 23, "dim_K": 72, "dim_L": 97.2},
      {"code": "10-SLR1001-13", "weight": 0.68, "wll": 6.7, "breaking": 26.8, "dim_H": 16.8, "dim_A": 27.5, "dim_K": 89, "dim_L": 127},
      {"code": "10-SLR1001-16", "weight": 1.22, "wll": 10, "breaking": 40, "dim_H": 21, "dim_A": 33.5, "dim_K": 103, "dim_L": 145},
      {"code": "10-SLR1001-20", "weight": 2.13, "wll": 16, "breaking": 64, "dim_H": 24.5, "dim_A": 42, "dim_K": 116, "dim_L": 175},
      {"code": "10-SLR1001-22", "weight": 3, "wll": 19, "breaking": 76, "dim_H": 27, "dim_A": 48, "dim_K": 135, "dim_L": 193},
      {"code": "10-SLR1001-26", "weight": 5.15, "wll": 26.5, "breaking": 106, "dim_H": 32, "dim_A": 61, "dim_K": 164, "dim_L": 228},
      {"code": "10-SLR1001-32", "weight": 9.5, "wll": 39.3, "breaking": 157.2, "dim_H": 40, "dim_A": 80, "dim_K": 194, "dim_L": 274}
    ]
  },
  {
    "slug": "alloy-swivel-self-locking-hook-g100",
    "category": "hooks",
    "group": "Self-locking hooks",
    "name": "Alloy swivel self-locking hook, Grade 100",
    "code": "K100-3006",
    "art": "alloy-swivel-self-locking-hook-g100",
    "image": "/images/products/branded/grade-100/alloy-swivel-self-locking-hook-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Self-locking hook with an oval swivel eye and a straight closing-tip profile.",
    "description": [
      "Self-locking hook with an oval swivel eye and a straight closing-tip profile.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application.",
      "The swivel connection assists positioning. Rotation under load must be confirmed for the selected model."
    ],
    "features": [
      "Oval swivel eye",
      "Load-bearing self-locking jaw",
      "Straight closing-tip profile"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_C", "label": "C", "kind": "mm"},
      {"key": "dim_D", "label": "D", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1007-06", "weight": 0.6, "wll": 1.4, "breaking": 5.6, "dim_B": 32.5, "dim_C": 23, "dim_D": 11.5, "dim_E": 28, "dim_H": 20, "dim_M": 70, "dim_L": 184},
      {"code": "10-SLR1007-08", "weight": 1.1, "wll": 2.5, "breaking": 10, "dim_B": 36, "dim_C": 28, "dim_D": 13, "dim_E": 35.5, "dim_H": 26, "dim_M": 90, "dim_L": 229},
      {"code": "10-SLR1007-10", "weight": 2, "wll": 4, "breaking": 16, "dim_B": 42, "dim_C": 35, "dim_D": 15.5, "dim_E": 45, "dim_H": 30, "dim_M": 108, "dim_L": 269},
      {"code": "10-SLR1007-13", "weight": 4, "wll": 6.7, "breaking": 26.8, "dim_B": 50, "dim_C": 40, "dim_D": 17, "dim_E": 53.5, "dim_H": 40.5, "dim_M": 138.5, "dim_L": 330},
      {"code": "10-SLR1007-16", "weight": 6.8, "wll": 10, "breaking": 40, "dim_B": 61, "dim_C": 56, "dim_D": 21.5, "dim_E": 62, "dim_H": 50.5, "dim_M": 170.5, "dim_L": 413},
      {"code": "10-SLR1007-20", "weight": 12.5, "wll": 16, "breaking": 64, "dim_B": 72, "dim_C": 62, "dim_D": 26, "dim_E": 76.5, "dim_H": 62, "dim_M": 192.5, "dim_L": 463},
      {"code": "10-SLR1007-22", "weight": 17.1, "wll": 19, "breaking": 76, "dim_B": 97, "dim_C": 94, "dim_D": 33, "dim_E": 80, "dim_H": 66, "dim_M": 205, "dim_L": 572},
      {"code": "10-SLR1007-26", "weight": "Confirm on enquiry", "wll": "Confirm on enquiry", "breaking": "Confirm on enquiry", "dim_B": "Confirm on enquiry", "dim_C": "Confirm on enquiry", "dim_D": "Confirm on enquiry", "dim_E": "Confirm on enquiry", "dim_H": "Confirm on enquiry", "dim_M": "Confirm on enquiry", "dim_L": "Confirm on enquiry"},
      {"code": "10-SLR1007-32", "weight": "Confirm on enquiry", "wll": "Confirm on enquiry", "breaking": "Confirm on enquiry", "dim_B": "Confirm on enquiry", "dim_C": "Confirm on enquiry", "dim_D": "Confirm on enquiry", "dim_E": "Confirm on enquiry", "dim_H": "Confirm on enquiry", "dim_M": "Confirm on enquiry", "dim_L": "Confirm on enquiry"}
    ]
  },
  {
    "slug": "eye-shortening-grab-hook-g100",
    "category": "hooks",
    "group": "Grab hooks",
    "name": "Eye shortening grab hook, Grade 100",
    "code": "K100-3007",
    "art": "eye-shortening-grab-hook-g100",
    "image": "/images/products/branded/grade-100/eye-shortening-grab-hook-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Eye attachment shortening hook with a narrow chain pocket for adjusting a compatible chain sling.",
    "description": [
      "Eye attachment shortening hook with a narrow chain pocket for adjusting a compatible chain sling.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Eye attachment",
      "Narrow chain shortening pocket",
      "Seven published chain-size options"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_D", "label": "D", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1008-06", "weight": 0.2, "wll": 1.4, "breaking": 5.6, "dim_E": 8, "dim_B": 14.5, "dim_D": 30.5, "dim_M": 43.5, "dim_L": 71},
      {"code": "10-SLR1008-08", "weight": 0.28, "wll": 2.5, "breaking": 10, "dim_E": 10.8, "dim_B": 18, "dim_D": 37, "dim_M": 53, "dim_L": 91.5},
      {"code": "10-SLR1008-10", "weight": 0.72, "wll": 4, "breaking": 16, "dim_E": 13.5, "dim_B": 22.5, "dim_D": 48.5, "dim_M": 72, "dim_L": 127.5},
      {"code": "10-SLR1008-13", "weight": 1.6, "wll": 6.7, "breaking": 26.8, "dim_E": 16.5, "dim_B": 28, "dim_D": 59, "dim_M": 96, "dim_L": 163},
      {"code": "10-SLR1008-16", "weight": 2.45, "wll": 10, "breaking": 40, "dim_E": 19.2, "dim_B": 36, "dim_D": 74, "dim_M": 112.5, "dim_L": 183},
      {"code": "10-SLR1008-20", "weight": 4.72, "wll": 16, "breaking": 64, "dim_E": 24, "dim_B": 43.5, "dim_D": 89.5, "dim_M": 143, "dim_L": 227},
      {"code": "10-SLR1008-22", "weight": 8.2, "wll": 19, "breaking": 76, "dim_E": 27, "dim_B": 48.5, "dim_D": 100.5, "dim_M": 160.5, "dim_L": 260.5}
    ]
  },
  {
    "slug": "alloy-eye-sling-hook-with-latch-g100",
    "category": "hooks",
    "group": "Sling hooks",
    "name": "Alloy eye sling hook with latch, Grade 100",
    "code": "K100-3008",
    "art": "alloy-eye-sling-hook-with-latch-g100",
    "image": "/images/products/branded/grade-100/alloy-eye-sling-hook-with-latch-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Eye sling hook with a silver cast spring latch and a shaped eye for compatible connectors.",
    "description": [
      "Eye sling hook with a silver cast spring latch and a shaped eye for compatible connectors.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Eye attachment",
      "Silver cast spring latch",
      "Nine published size options"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "featured": true,
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_D", "label": "D", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1003-06", "weight": 0.32, "wll": 1.4, "breaking": 5.6, "dim_D": 10, "dim_E": 18.5, "dim_H": 21, "dim_M": 20.5, "dim_L": 111},
      {"code": "10-SLR1003-08", "weight": 0.6, "wll": 2.5, "breaking": 10, "dim_D": 11, "dim_E": 25, "dim_H": 27.5, "dim_M": 25, "dim_L": 137.5},
      {"code": "10-SLR1003-10", "weight": 1.2, "wll": 4, "breaking": 16, "dim_D": 16, "dim_E": 28, "dim_H": 33, "dim_M": 34, "dim_L": 171.5},
      {"code": "10-SLR1003-13", "weight": 2.2, "wll": 6.7, "breaking": 26.8, "dim_D": 19, "dim_E": 38, "dim_H": 43.5, "dim_M": 43, "dim_L": 219},
      {"code": "10-SLR1003-16", "weight": 3.5, "wll": 10, "breaking": 40, "dim_D": 24.5, "dim_E": 44, "dim_H": 50, "dim_M": 50, "dim_L": 260},
      {"code": "10-SLR1003-20", "weight": 7.15, "wll": 16, "breaking": 64, "dim_D": 27, "dim_E": 52, "dim_H": 56, "dim_M": 55, "dim_L": 298},
      {"code": "10-SLR1003-22", "weight": 11.5, "wll": 19, "breaking": 76, "dim_D": 29, "dim_E": 66, "dim_H": 62, "dim_M": 60, "dim_L": 330},
      {"code": "10-SLR1003-26", "weight": 12.2, "wll": 26.5, "breaking": 106, "dim_D": 35, "dim_E": 73, "dim_H": 75, "dim_M": 70, "dim_L": 376},
      {"code": "10-SLR1003-32", "weight": 17.5, "wll": 39.3, "breaking": 157.2, "dim_D": 39, "dim_E": 87, "dim_H": 89, "dim_M": 81.5, "dim_L": 458}
    ]
  },
  {
    "slug": "alloy-eye-self-locking-hook-g100",
    "category": "hooks",
    "group": "Self-locking hooks",
    "name": "Alloy eye self-locking hook, Grade 100",
    "code": "K100-3009",
    "art": "alloy-eye-self-locking-hook-g100",
    "image": "/images/products/branded/grade-100/alloy-eye-self-locking-hook-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Eye attachment self-locking hook with a load-bearing closing jaw and a straight closing-tip profile.",
    "description": [
      "Eye attachment self-locking hook with a load-bearing closing jaw and a straight closing-tip profile.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Eye attachment",
      "Load-bearing self-locking jaw",
      "Straight closing-tip profile"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_D", "label": "D", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_R", "label": "R", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1005-06", "weight": 0.5, "wll": 1.4, "breaking": 5.6, "dim_A": 21, "dim_D": 43, "dim_E": 28, "dim_H": 20, "dim_R": 110, "dim_M": 70, "dim_L": 141},
      {"code": "10-SLR1005-08", "weight": 0.9, "wll": 2.5, "breaking": 10, "dim_A": 27, "dim_D": 51, "dim_E": 35.5, "dim_H": 26, "dim_R": 137, "dim_M": 90, "dim_L": 175},
      {"code": "10-SLR1005-10", "weight": 1.5, "wll": 4, "breaking": 16, "dim_A": 34.5, "dim_D": 64.3, "dim_E": 45, "dim_H": 30, "dim_R": 169, "dim_M": 108, "dim_L": 212.5},
      {"code": "10-SLR1005-13", "weight": 2.7, "wll": 6.7, "breaking": 26.8, "dim_A": 40, "dim_D": 80, "dim_E": 53.5, "dim_H": 40.5, "dim_R": 209, "dim_M": 138.5, "dim_L": 270},
      {"code": "10-SLR1005-16", "weight": 5.7, "wll": 10, "breaking": 40, "dim_A": 50, "dim_D": 104, "dim_E": 62, "dim_H": 50.5, "dim_R": 254, "dim_M": 170.5, "dim_L": 331},
      {"code": "10-SLR1005-20", "weight": 7.9, "wll": 16, "breaking": 64, "dim_A": 60, "dim_D": 120, "dim_E": 76.5, "dim_H": 62, "dim_R": 277, "dim_M": 192.5, "dim_L": 369},
      {"code": "10-SLR1005-22", "weight": 11.2, "wll": 19, "breaking": 76, "dim_A": 70, "dim_D": 134, "dim_E": 80, "dim_H": 66, "dim_R": 319.5, "dim_M": 205, "dim_L": 417}
    ]
  },
  {
    "slug": "clevis-grab-hook-g100",
    "category": "hooks",
    "group": "Grab hooks",
    "name": "Clevis grab hook, Grade 100",
    "code": "K100-3010",
    "art": "clevis-grab-hook-g100",
    "image": "/images/products/branded/grade-100/clevis-grab-hook-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Clevis-mounted shortening hook with a removable chain pin and a deep grab pocket.",
    "description": [
      "Clevis-mounted shortening hook with a removable chain pin and a deep grab pocket.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Direct clevis attachment",
      "Removable chain pin",
      "Deep chain grab pocket"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1009-06", "weight": 0.22, "wll": 1.4, "breaking": 5.6, "dim_A": 7.5, "dim_B": 32, "dim_E": 8, "dim_M": 43.5, "dim_L": 75},
      {"code": "10-SLR1009-08", "weight": 0.34, "wll": 2.5, "breaking": 10, "dim_A": 9.5, "dim_B": 36, "dim_E": 10.8, "dim_M": 53, "dim_L": 91.5},
      {"code": "10-SLR1009-10", "weight": 0.82, "wll": 4, "breaking": 16, "dim_A": 12, "dim_B": 46, "dim_E": 13.5, "dim_M": 72, "dim_L": 126},
      {"code": "10-SLR1009-13", "weight": 1.75, "wll": 6.7, "breaking": 26.8, "dim_A": 15, "dim_B": 59, "dim_E": 16.5, "dim_M": 96, "dim_L": 163.5},
      {"code": "10-SLR1009-16", "weight": 2.88, "wll": 10, "breaking": 40, "dim_A": 17.5, "dim_B": 70, "dim_E": 19.2, "dim_M": 112.5, "dim_L": 183.5},
      {"code": "10-SLR1009-20", "weight": 4.84, "wll": 16, "breaking": 64, "dim_A": 24, "dim_B": 85, "dim_E": 24, "dim_M": 143, "dim_L": 224},
      {"code": "10-SLR1009-22", "weight": 8.3, "wll": 19, "breaking": 76, "dim_A": 27, "dim_B": 100, "dim_E": 27, "dim_M": 160.5, "dim_L": 262}
    ]
  },
  {
    "slug": "alloy-clevis-sling-hook-g100",
    "category": "hooks",
    "group": "Sling hooks",
    "name": "Alloy clevis sling hook with cast latch, Grade 100",
    "code": "K100-3011",
    "art": "alloy-clevis-sling-hook-g100",
    "image": "/images/products/branded/grade-100/alloy-clevis-sling-hook-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Clevis sling hook with a silver cast spring latch for connection to a compatible Grade 100 chain.",
    "description": [
      "Clevis sling hook with a silver cast spring latch for connection to a compatible Grade 100 chain.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Clevis attachment",
      "Silver cast spring latch",
      "Replacement pin kits available on enquiry"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1004-06", "weight": 0.33, "wll": 1.4, "breaking": 5.6, "dim_A": 7.5, "dim_B": 32, "dim_E": 18.5, "dim_H": 21, "dim_M": 68.5, "dim_L": 109},
      {"code": "10-SLR1004-08", "weight": 0.7, "wll": 2.5, "breaking": 10, "dim_A": 9.5, "dim_B": 37, "dim_E": 25, "dim_H": 27.5, "dim_M": 88, "dim_L": 134},
      {"code": "10-SLR1004-10", "weight": 1.3, "wll": 4, "breaking": 16, "dim_A": 12, "dim_B": 48, "dim_E": 28, "dim_H": 33.5, "dim_M": 105.5, "dim_L": 161.5},
      {"code": "10-SLR1004-13", "weight": 2.3, "wll": 6.7, "breaking": 26.8, "dim_A": 15, "dim_B": 59, "dim_E": 38, "dim_H": 42, "dim_M": 134, "dim_L": 203},
      {"code": "10-SLR1004-16", "weight": 3.6, "wll": 10, "breaking": 40, "dim_A": 17.5, "dim_B": 70, "dim_E": 44, "dim_H": 50, "dim_M": 160.5, "dim_L": 248},
      {"code": "10-SLR1004-20", "weight": 7.3, "wll": 16, "breaking": 64, "dim_A": 25, "dim_B": 85, "dim_E": 52, "dim_H": 56, "dim_M": 190.5, "dim_L": 297},
      {"code": "10-SLR1004-22", "weight": 12.1, "wll": 19, "breaking": 76, "dim_A": 27, "dim_B": 100, "dim_E": 66, "dim_H": 62, "dim_M": 214.5, "dim_L": 326},
      {"code": "10-SLR1004-26", "weight": "Confirm on enquiry", "wll": "Confirm on enquiry", "breaking": "Confirm on enquiry", "dim_A": "Confirm on enquiry", "dim_B": "Confirm on enquiry", "dim_E": "Confirm on enquiry", "dim_H": "Confirm on enquiry", "dim_M": "Confirm on enquiry", "dim_L": "Confirm on enquiry"},
      {"code": "10-SLR1004-32", "weight": "Confirm on enquiry", "wll": "Confirm on enquiry", "breaking": "Confirm on enquiry", "dim_A": "Confirm on enquiry", "dim_B": "Confirm on enquiry", "dim_E": "Confirm on enquiry", "dim_H": "Confirm on enquiry", "dim_M": "Confirm on enquiry", "dim_L": "Confirm on enquiry"}
    ]
  },
  {
    "slug": "clevis-forestry-hook-g100",
    "category": "slings-and-lashing",
    "group": "Load restraint",
    "name": "Clevis forestry hook, Grade 100 — lashing only",
    "code": "K100-3012",
    "art": "clevis-forestry-hook-g100",
    "image": "/images/products/branded/grade-100/clevis-forestry-hook-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Open clevis hook for dragging and lashing in forestry. Not for lifting.",
    "description": [
      "Open clevis hook for dragging and lashing in forestry. Not for lifting.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application.",
      "This hook is restricted to dragging and lashing in forestry. Do not use it for lifting."
    ],
    "features": [
      "Forestry dragging and lashing only",
      "Open choker-style throat",
      "Not for overhead lifting"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "usageNotice": "For forestry dragging and lashing only. Not for lifting.",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "restraintLoad", "label": "Reference load — lashing only", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_N", "label": "N", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1021-8", "weight": 0.39, "breaking": 10, "dim_A": 9.5, "dim_M": 35, "dim_N": 24, "dim_E": 9.8, "dim_L": 95.5, "restraintLoad": 2.5},
      {"code": "10-SLR1021-13", "weight": 1.62, "breaking": 26.8, "dim_A": 16, "dim_M": 59, "dim_N": 49.5, "dim_E": 16, "dim_L": 162, "restraintLoad": 6.7}
    ]
  },
  {
    "slug": "master-link-range-g100",
    "category": "master-links",
    "group": "Master links",
    "name": "Master links and assemblies, Grade 100",
    "code": "K100-3013",
    "art": "master-link-range-g100",
    "image": "/images/products/branded/grade-100/master-link-range-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Standard, long and oversized master links, plus assemblies for compatible multi-leg Grade 100 slings.",
    "description": [
      "Standard, long and oversized master links, plus assemblies for compatible multi-leg Grade 100 slings.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Standard, long and oversized master links",
      "Three- and four-leg assembly options",
      "Five model families with separate size references"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "featured": true,
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "variant", "label": "Configuration", "kind": "text"},
      {"key": "chain_1_leg_chain", "label": "1-leg chain", "kind": "text"},
      {"key": "chain_2_leg_chain", "label": "2-leg chain", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_D", "label": "D", "kind": "mm"},
      {"key": "chain_3_4_leg_chain", "label": "3/4-leg chain", "kind": "text"},
      {"key": "dim_a", "label": "a", "kind": "mm"},
      {"key": "dim_b", "label": "b", "kind": "mm"},
      {"key": "dim_d", "label": "d", "kind": "mm"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"}
    ],
    "specRows": [
      {"code": "8-SLR1011-13", "chain_1_leg_chain": "6+7", "chain_2_leg_chain": "6", "weight": 0.34, "wll": 2.3, "dim_A": 110, "dim_B": 60, "dim_D": 13, "variant": "Standard master link"},
      {"code": "8-SLR1011-16", "chain_1_leg_chain": "8", "chain_2_leg_chain": "7", "weight": 0.53, "wll": 3.5, "dim_A": 110, "dim_B": 60, "dim_D": 16, "variant": "Standard master link"},
      {"code": "8-SLR1011-18", "chain_1_leg_chain": "10", "chain_2_leg_chain": "8", "weight": 0.86, "wll": 5, "dim_A": 135, "dim_B": 75, "dim_D": 18, "variant": "Standard master link"},
      {"code": "8-SLR1011-23", "chain_1_leg_chain": "13", "chain_2_leg_chain": "10", "weight": 1.6, "wll": 7.6, "dim_A": 160, "dim_B": 90, "dim_D": 23, "variant": "Standard master link"},
      {"code": "8-SLR1011-27", "chain_1_leg_chain": "16", "chain_2_leg_chain": "13", "weight": 2.46, "wll": 10, "dim_A": 180, "dim_B": 100, "dim_D": 27, "variant": "Standard master link"},
      {"code": "8-SLR1011-33", "chain_1_leg_chain": "19", "chain_2_leg_chain": "16", "weight": 4.14, "wll": 14, "dim_A": 200, "dim_B": 110, "dim_D": 33, "variant": "Standard master link"},
      {"code": "8-SLR1011-36", "chain_1_leg_chain": "22", "chain_2_leg_chain": "19", "weight": 6.22, "wll": 25.1, "dim_A": 260, "dim_B": 140, "dim_D": 36, "variant": "Standard master link"},
      {"code": "8-SLR1011-45", "chain_1_leg_chain": "26", "chain_2_leg_chain": "22", "weight": 12.85, "wll": 30.8, "dim_A": 340, "dim_B": 180, "dim_D": 45, "variant": "Standard master link"},
      {"code": "8-SLR1011-50", "chain_1_leg_chain": "32", "chain_2_leg_chain": "26", "weight": 16.22, "wll": 40, "dim_A": 350, "dim_B": 190, "dim_D": 50, "variant": "Standard master link"},
      {"code": "8-SLR1013-86", "chain_1_leg_chain": "6/8", "chain_2_leg_chain": "6", "weight": 0.4, "wll": 2.5, "dim_A": 120, "dim_B": 70, "dim_D": 14, "variant": "Long master link"},
      {"code": "8-SLR1013-108", "chain_1_leg_chain": "10", "chain_2_leg_chain": "8", "weight": 0.8, "wll": 4, "dim_A": 140, "dim_B": 80, "dim_D": 17, "variant": "Long master link"},
      {"code": "8-SLR1013-1310", "chain_1_leg_chain": "13", "chain_2_leg_chain": "10", "weight": 1.5, "wll": 7.5, "dim_A": 160, "dim_B": 95, "dim_D": 22, "variant": "Long master link"},
      {"code": "8-SLR1013-1613", "chain_1_leg_chain": "16", "chain_2_leg_chain": "13", "weight": 2.5, "wll": 10, "dim_A": 190, "dim_B": 110, "dim_D": 28, "variant": "Long master link"},
      {"code": "8-SLR1013-2016", "chain_1_leg_chain": "19/20", "chain_2_leg_chain": "16", "weight": 5.2, "wll": 17, "dim_A": 240, "dim_B": 140, "dim_D": 34, "variant": "Long master link"},
      {"code": "8-SLR1013-2220", "chain_1_leg_chain": "22/26", "chain_2_leg_chain": "20/22", "weight": 7.7, "wll": 28, "dim_A": 250, "dim_B": 150, "dim_D": 42, "variant": "Long master link"},
      {"code": "8-SLR1014-108", "chain_1_leg_chain": "8/10", "chain_2_leg_chain": "8", "weight": 3.7, "wll": 4, "dim_A": 340, "dim_B": 180, "dim_D": 25, "variant": "Oversized master link"},
      {"code": "8-SLR1014-1310", "chain_1_leg_chain": "13", "chain_2_leg_chain": "10", "weight": 4.7, "wll": 6.7, "dim_A": 340, "dim_B": 180, "dim_D": 28, "variant": "Oversized master link"},
      {"code": "8-SLR1014-1613", "chain_1_leg_chain": "16", "chain_2_leg_chain": "13", "weight": 7.1, "wll": 10, "dim_A": 340, "dim_B": 180, "dim_D": 34, "variant": "Oversized master link"},
      {"code": "8-SLR1014-2016", "chain_1_leg_chain": "20", "chain_2_leg_chain": "16", "weight": 8.9, "wll": 16, "dim_A": 340, "dim_B": 180, "dim_D": 42, "variant": "Oversized master link"},
      {"code": "8-SLR1012-6", "chain_3_4_leg_chain": "6MM", "weight": 1.3, "wll": 3, "dim_A": 135, "dim_B": 75, "dim_D": 19, "dim_a": 84, "dim_b": 25, "dim_d": 13, "variant": "3/4-leg assembly"},
      {"code": "8-SLR1012-8", "chain_3_4_leg_chain": "8MM", "weight": 2.33, "wll": 5.3, "dim_A": 160, "dim_B": 90, "dim_D": 23, "dim_a": 70, "dim_b": 35, "dim_d": 16.5, "variant": "3/4-leg assembly"},
      {"code": "8-SLR1012-10", "chain_3_4_leg_chain": "10MM", "weight": 3.7, "wll": 8, "dim_A": 180, "dim_B": 100, "dim_D": 27, "dim_a": 85, "dim_b": 40, "dim_d": 19, "variant": "3/4-leg assembly"},
      {"code": "8-SLR1012-13", "chain_3_4_leg_chain": "13MM", "weight": 6.5, "wll": 14, "dim_A": 200, "dim_B": 110, "dim_D": 33, "dim_a": 115, "dim_b": 50, "dim_d": 23, "variant": "3/4-leg assembly"},
      {"code": "8-SLR1012-16", "chain_3_4_leg_chain": "16MM", "weight": 10.1, "wll": 21.2, "dim_A": 260, "dim_B": 140, "dim_D": 36, "dim_a": 140, "dim_b": 65, "dim_d": 27, "variant": "3/4-leg assembly"},
      {"code": "8-SLR1012-20", "chain_3_4_leg_chain": "19/20MM", "weight": 22.8, "wll": 33.6, "dim_A": 350, "dim_B": 190, "dim_D": 50, "dim_a": 150, "dim_b": 70, "dim_d": 33, "variant": "3/4-leg assembly"},
      {"code": "8-SLR1012-22", "chain_3_4_leg_chain": "22MM", "weight": 26, "wll": 33.9, "dim_A": 350, "dim_B": 190, "dim_D": 50, "dim_a": 180, "dim_b": 100, "dim_d": 36, "variant": "3/4-leg assembly"},
      {"code": "10-SLR1015-06", "weight": 1.8, "wll": 3.5, "breaking": 14, "dim_A": 150, "dim_B": 90, "dim_D": 19, "dim_a": 120, "dim_b": 70, "dim_d": 14, "variant": "Large sub-link assembly"},
      {"code": "10-SLR1015-08", "weight": 3.0, "wll": 5, "breaking": 20, "dim_A": 160, "dim_B": 95, "dim_D": 22, "dim_a": 140, "dim_b": 80, "dim_d": 17, "variant": "Large sub-link assembly"},
      {"code": "10-SLR1015-10", "weight": 6.5, "wll": 11.5, "breaking": 46, "dim_A": 200, "dim_B": 120, "dim_D": 30, "dim_a": 160, "dim_b": 95, "dim_d": 22, "variant": "Large sub-link assembly"},
      {"code": "10-SLR1015-13", "weight": 15, "wll": 17, "breaking": 68, "dim_A": 250, "dim_B": 150, "dim_D": 40, "dim_a": 200, "dim_b": 120, "dim_d": 30, "variant": "Large sub-link assembly"},
      {"code": "10-SLR1015-16", "weight": 23, "wll": 28, "breaking": 112, "dim_A": 300, "dim_B": 200, "dim_D": 50, "dim_a": 200, "dim_b": 120, "dim_d": 32, "variant": "Large sub-link assembly"}
    ]
  },
  {
    "slug": "alloy-clevis-self-locking-hook-g100",
    "category": "hooks",
    "group": "Self-locking hooks",
    "name": "Alloy clevis self-locking hook, Grade 100",
    "code": "K100-3014",
    "art": "alloy-clevis-self-locking-hook-g100",
    "image": "/images/products/branded/grade-100/alloy-clevis-self-locking-hook-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Clevis attachment self-locking hook with a straight closing-tip profile and removable chain pin.",
    "description": [
      "Clevis attachment self-locking hook with a straight closing-tip profile and removable chain pin.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Direct clevis attachment",
      "Load-bearing self-locking jaw",
      "Straight closing-tip profile"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_R", "label": "R", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1006-06", "weight": 0.5, "wll": 1.4, "breaking": 5.6, "dim_A": 7.5, "dim_B": 32, "dim_E": 28, "dim_H": 20, "dim_R": 96, "dim_M": 70, "dim_L": 131},
      {"code": "10-SLR1006-08", "weight": 0.9, "wll": 2.5, "breaking": 10, "dim_A": 9.5, "dim_B": 36, "dim_E": 35.5, "dim_H": 26, "dim_R": 123, "dim_M": 90, "dim_L": 166},
      {"code": "10-SLR1006-10", "weight": 1.6, "wll": 4, "breaking": 16, "dim_A": 12, "dim_B": 46, "dim_E": 45, "dim_H": 30, "dim_R": 144, "dim_M": 109, "dim_L": 196.5},
      {"code": "10-SLR1006-13", "weight": 2.9, "wll": 6.7, "breaking": 26.8, "dim_A": 15, "dim_B": 59, "dim_E": 53.5, "dim_H": 40.5, "dim_R": 182, "dim_M": 138.5, "dim_L": 251},
      {"code": "10-SLR1006-16", "weight": 5.8, "wll": 10, "breaking": 40, "dim_A": 17.5, "dim_B": 70, "dim_E": 62, "dim_H": 50.5, "dim_R": 217, "dim_M": 170.5, "dim_L": 303},
      {"code": "10-SLR1006-20", "weight": 8.6, "wll": 16, "breaking": 64, "dim_A": 25, "dim_B": 85, "dim_E": 76.5, "dim_H": 62, "dim_R": 235, "dim_M": 192.5, "dim_L": 337.5},
      {"code": "10-SLR1006-22", "weight": 12.1, "wll": 19, "breaking": 76, "dim_A": 25.5, "dim_B": 98, "dim_E": 80, "dim_H": 66, "dim_R": 276.5, "dim_M": 205, "dim_L": 391}
    ]
  },
  {
    "slug": "clevis-self-locking-hook-interlocking-g100",
    "category": "hooks",
    "group": "Self-locking hooks",
    "name": "Clevis self-locking hook, Grade 100 — interlocking tip",
    "code": "K100-3015",
    "art": "clevis-self-locking-hook-interlocking-g100",
    "image": "/images/products/branded/grade-100/clevis-self-locking-hook-interlocking-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Clevis self-locking hook with a notched interlocking tip and four published size options.",
    "description": [
      "Clevis self-locking hook with a notched interlocking tip and four published size options.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Clevis attachment",
      "Notched interlocking closing tip",
      "Four published size options"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_φ", "label": "φ", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_K", "label": "K", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "8-10", "weight": 0.75, "wll": 2.5, "breaking": 10, "dim_A": 9.5, "dim_B": 37.5, "dim_E": 35, "dim_φ": 45, "dim_H": 21, "dim_K": 118, "dim_L": 165},
      {"code": "10-10", "weight": 1.42, "wll": 4, "breaking": 16, "dim_A": 12.5, "dim_B": 47.5, "dim_E": 46, "dim_φ": 56, "dim_H": 30.5, "dim_K": 150, "dim_L": 204},
      {"code": "13-10", "weight": 2.56, "wll": 6.7, "breaking": 26.8, "dim_A": 15, "dim_B": 52, "dim_E": 56, "dim_φ": 64, "dim_H": 39, "dim_K": 176, "dim_L": 244},
      {"code": "16-10", "weight": 4.21, "wll": 10, "breaking": 40, "dim_A": 18.5, "dim_B": 68, "dim_E": 86, "dim_φ": 80, "dim_H": 45, "dim_K": 250, "dim_L": 288}
    ]
  },
  {
    "slug": "swivel-self-locking-hook-interlocking-g100",
    "category": "hooks",
    "group": "Self-locking hooks",
    "name": "Swivel self-locking hook, Grade 100 — interlocking tip",
    "code": "K100-3016",
    "art": "swivel-self-locking-hook-interlocking-g100",
    "image": "/images/products/branded/grade-100/swivel-self-locking-hook-interlocking-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Swivel eye self-locking hook with a notched interlocking closing tip.",
    "description": [
      "Swivel eye self-locking hook with a notched interlocking closing tip.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Oval swivel eye",
      "Notched interlocking closing tip",
      "Four published size options"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_C", "label": "C", "kind": "mm"},
      {"key": "dim_D", "label": "D", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_F", "label": "F", "kind": "mm"},
      {"key": "dim_G", "label": "G", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_K", "label": "K", "kind": "mm"}
    ],
    "specRows": [
      {"code": "8-10", "weight": 1.03, "wll": 2.5, "breaking": 10, "dim_A": 220, "dim_B": 29, "dim_C": 36, "dim_D": 13, "dim_E": 45, "dim_F": 37.5, "dim_G": 32, "dim_H": 22, "dim_K": 185},
      {"code": "10-10", "weight": 1.86, "wll": 4, "breaking": 16, "dim_A": 264, "dim_B": 39, "dim_C": 42, "dim_D": 15.5, "dim_E": 55.5, "dim_F": 47.5, "dim_G": 46, "dim_H": 30, "dim_K": 219},
      {"code": "13-10", "weight": 3.34, "wll": 6.7, "breaking": 26.8, "dim_A": 334, "dim_B": 46, "dim_C": 49, "dim_D": 19, "dim_E": 64, "dim_F": 52, "dim_G": 56, "dim_H": 39, "dim_K": 275.5},
      {"code": "16-10", "weight": 5.9, "wll": 10, "breaking": 40, "dim_A": 400, "dim_B": 69, "dim_C": 62, "dim_D": 23, "dim_E": 80, "dim_F": 68, "dim_G": 91, "dim_H": 46, "dim_K": 329}
    ]
  },
  {
    "slug": "eye-self-locking-hook-interlocking-g100",
    "category": "hooks",
    "group": "Self-locking hooks",
    "name": "Eye self-locking hook, Grade 100 — interlocking tip",
    "code": "K100-3017",
    "art": "eye-self-locking-hook-interlocking-g100",
    "image": "/images/products/branded/grade-100/eye-self-locking-hook-interlocking-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Eye self-locking hook with a notched interlocking closing tip and four published size options.",
    "description": [
      "Eye self-locking hook with a notched interlocking closing tip and four published size options.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Eye attachment",
      "Notched interlocking closing tip",
      "Four published size options"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_φ", "label": "φ", "kind": "mm"},
      {"key": "dim_φ'", "label": "φ'", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_K", "label": "K", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"}
    ],
    "specRows": [
      {"code": "8-10", "weight": 0.81, "wll": 2.5, "breaking": 10, "dim_B": 37.5, "dim_E": 35, "dim_φ": 45, "dim_φ'": 27, "dim_H": 21, "dim_K": 138, "dim_L": 12},
      {"code": "10-10", "weight": 1.41, "wll": 4, "breaking": 16, "dim_B": 47.5, "dim_E": 46, "dim_φ": 56, "dim_φ'": 34.5, "dim_H": 30.5, "dim_K": 169, "dim_L": 15},
      {"code": "13-10", "weight": 2.61, "wll": 6.7, "breaking": 26.8, "dim_B": 52, "dim_E": 56, "dim_φ": 64, "dim_φ'": 40, "dim_H": 39, "dim_K": 205, "dim_L": 20},
      {"code": "16-10", "weight": 4.45, "wll": 10, "breaking": 40, "dim_B": 69, "dim_E": 86, "dim_φ": 80, "dim_φ'": 50, "dim_H": 46.3, "dim_K": 252, "dim_L": 27}
    ]
  },
  {
    "slug": "clevis-sling-hook-orange-latch-g100",
    "category": "hooks",
    "group": "Sling hooks",
    "name": "Clevis sling hook, Grade 100 — orange latch",
    "code": "K100-3018",
    "art": "clevis-sling-hook-orange-latch-g100",
    "image": "/images/products/branded/grade-100/clevis-sling-hook-orange-latch-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Clevis sling hook with an orange spring latch and three published size options.",
    "description": [
      "Clevis sling hook with an orange spring latch and three published size options.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Clevis attachment",
      "Orange spring latch",
      "Three published size options"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_K", "label": "K", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"},
      {"key": "dim_φ", "label": "φ", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1025-08", "weight": 0.6, "wll": 2.5, "breaking": 10, "dim_A": 9.5, "dim_B": 36, "dim_E": 28.5, "dim_M": 82, "dim_H": 22, "dim_K": 101, "dim_L": 140, "dim_φ": 28},
      {"code": "10-SLR1025-10", "weight": 0.96, "wll": 4, "breaking": 16, "dim_A": 12, "dim_B": 42, "dim_E": 31, "dim_M": 97.5, "dim_H": 26.7, "dim_K": 122, "dim_L": 171.5, "dim_φ": 35},
      {"code": "10-SLR1025-13", "weight": 1.81, "wll": 6.7, "breaking": 26.8, "dim_A": 15, "dim_B": 54, "dim_E": 40, "dim_M": 135, "dim_H": 36, "dim_K": 137, "dim_L": 202, "dim_φ": 36}
    ]
  },
  {
    "slug": "eye-sling-hook-orange-latch-g100",
    "category": "hooks",
    "group": "Sling hooks",
    "name": "Eye sling hook, Grade 100 — orange latch",
    "code": "K100-3019",
    "art": "eye-sling-hook-orange-latch-g100",
    "image": "/images/products/branded/grade-100/eye-sling-hook-orange-latch-g100.webp",
    "imageCaption": "KINSTON product visualisation · Confirm supplied configuration with your quotation",
    "summary": "Eye sling hook with an orange spring latch and three published size options.",
    "description": [
      "Eye sling hook with an orange spring latch and three published size options.",
      "Choose the reference model and size when enquiring. We will confirm the dimensions, connection compatibility and available documentation for your application."
    ],
    "features": [
      "Eye attachment",
      "Orange spring latch",
      "Three published size options"
    ],
    "material": "Heat-treated alloy steel",
    "finish": "Orange powder coat",
    "standards": [],
    "designFactor": "Confirm for selected model",
    "tempRange": "Confirm for selected model",
    "downloads": [],
    "technicalNote": "Reference dimensions and load ratings; confirm against the selected model datasheet before use. Dimensions in mm; loads in tonnes. Unpublished or unclear values are available on enquiry.",
    "grade": "Grade 100",
    "specColumns": [
      {"key": "code", "label": "Reference model / size", "kind": "text"},
      {"key": "weight", "label": "Weight", "kind": "kg"},
      {"key": "wll", "label": "Reference WLL", "kind": "t"},
      {"key": "breaking", "label": "Breaking load", "kind": "t"},
      {"key": "dim_A", "label": "A", "kind": "mm"},
      {"key": "dim_B", "label": "B", "kind": "mm"},
      {"key": "dim_E", "label": "E", "kind": "mm"},
      {"key": "dim_H", "label": "H", "kind": "mm"},
      {"key": "dim_φ", "label": "φ", "kind": "mm"},
      {"key": "dim_C", "label": "C", "kind": "mm"},
      {"key": "dim_L", "label": "L", "kind": "mm"},
      {"key": "dim_M", "label": "M", "kind": "mm"}
    ],
    "specRows": [
      {"code": "10-SLR1026-08", "weight": 0.4, "wll": 2.5, "breaking": 10, "dim_A": 28, "dim_B": 28, "dim_E": 28.5, "dim_H": 22, "dim_φ": 28, "dim_C": "Confirm on enquiry", "dim_L": 145, "dim_M": 82},
      {"code": "10-SLR1026-10", "weight": 0.86, "wll": 4, "breaking": 16, "dim_A": 34, "dim_B": 34, "dim_E": 31, "dim_H": 26.2, "dim_φ": 35, "dim_C": 14, "dim_L": 170, "dim_M": 97.5},
      {"code": "10-SLR1026-13", "weight": 1.75, "wll": 6.7, "breaking": 26.8, "dim_A": 42, "dim_B": 44, "dim_E": 40, "dim_H": 36, "dim_φ": 36, "dim_C": 18.5, "dim_L": 206, "dim_M": 135}
    ]
  }
];
