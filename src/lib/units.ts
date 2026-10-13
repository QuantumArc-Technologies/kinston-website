export type Unit = 'mm' | 'in';

export function mmToIn(mm: number): number {
  return Math.round((mm / 25.4) * 100) / 100;
}

export function kgToLb(kg: number): number {
  return Math.round(kg * 2.20462 * 100) / 100;
}

export function tToLb(t: number): number {
  return Math.round(t * 2204.62);
}

export function fmt(n: number, digits = 1): string {
  if (Number.isInteger(n)) return n.toLocaleString('en-GB');
  return n.toLocaleString('en-GB', { maximumFractionDigits: digits });
}
