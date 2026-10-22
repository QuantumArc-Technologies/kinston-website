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
  if (product.slug === replacements.retiredSlugs[0]) return replacementProducts;
  return replacements.retiredSlugs.includes(product.slug) ? [] : [product];
});

export const grade80Products: Product[] = activeEntries.map((product) => ({
  ...product,
  finish: productFinishes['Grade 80'],
}));
