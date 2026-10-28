import type { ColKind, Product } from './products';
import entries from './grade-80-products.json';
import { productFinishes } from './product-finishes';
import replacements from './grade-80-master-links.json';

// Keep the original supplier import as an archive; replace only the three retired links.
const replacementProducts: Product[] = replacements.products.map((product) => ({
  ...product,
  specColumns: product.specColumns.map((column) => ({ ...column, kind: column.kind as ColKind })),
}));
const activeEntries = entries.flatMap<Product>((product) => {
  // Temporarily hidden from the website; keep the original product data for later.
  // K80-0011: G80 Clevis Grab Hook
  // K80-0008: G80 U.S. Type Clevis Grab Hook
  // K80-0012: Clevis Sling Hook
  // K80-0015: Alloy Steel Connecting Link
  // K80-0016: G80 U.S. Type Connecting Link
  // K80-0017: G80 Special Webbing Connector
  // K80-0030, K80-0032, K80-0045: Eye Sling Hook with Cast Latch
  // K80-0034: G80 Eye Sling Hook New Type A-327
  // K80-0029: Alloy Steel Twist Eye Hook
  // K80-0035: Eye Twist Hook
  // K80-0038, K80-0043, K80-0080, K80-0088: G80 Eye Webbing Sling Hook
  // K80-0041: G80 U.S. Type Eye Grab Hook
  // K80-0125: G80 Italian Type Clevis Self-Locking Hook
  // K80-0126: G80 Italian Type Eye Self-Locking Hook
  // K80-0079: G80 Clevis Webbing Sling Hook; keep K80-0007 visible.
  // K80-0082, K80-0091, K80-0094: Alloy Forged G Hook
  // K80-0095, K80-0097: G80 Container Hook
  // K80-0051: G80 Eye Swivel
  // K80-0103: Clevis Clutch
  // K80-0127: G80 Special Swivel Self-Locking Hook
  // K80-0128: G80 Clevis Self Locking Hook with Side Trigger
  if ([
    'K80-0011', 'K80-0008', 'K80-0012', 'K80-0015', 'K80-0016', 'K80-0017',
    'K80-0030', 'K80-0032', 'K80-0045', 'K80-0034', 'K80-0029', 'K80-0035',
    'K80-0038', 'K80-0043', 'K80-0080', 'K80-0088',
    'K80-0041', 'K80-0125', 'K80-0126',
    'K80-0079', 'K80-0091', 'K80-0094', 'K80-0097',
    'K80-0051',
    'K80-0082',
    'K80-0095',
    'K80-0103',
    'K80-0127',
    'K80-0128',
  ].includes(product.code)) return [];
  if (product.slug === replacements.retiredSlugs[0]) return replacementProducts;
  return replacements.retiredSlugs.includes(product.slug) ? [] : [product];
});

export const grade80Products: Product[] = activeEntries.map((product) => ({
  ...product,
  finish: productFinishes['Grade 80'],
}));
