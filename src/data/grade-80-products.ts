import type { Product } from './products';
import entries from './grade-80-products.json';
import { productFinishes } from './product-finishes';

export const grade80Products: Product[] = entries.map((product) => ({
  ...product,
  finish: productFinishes['Grade 80'],
}));
