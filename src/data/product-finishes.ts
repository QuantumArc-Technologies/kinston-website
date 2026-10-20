// KINSTON finish policy. Grade 100 blue follows the supplier's RAL 5015 reference;
// green and Grade 80 RAL 2004 orange follow the requested KINSTON colour scheme.
export const productFinishes = {
  'Grade 100': 'Blue (RAL 5015) or green powder coat',
  'Grade 80': 'RAL 2004 orange powder coat',
} as const;

export const grade100Colours = [
  { name: 'Blue', label: 'Blue · RAL 5015', value: '#008fc7', folder: 'blue' },
  { name: 'Green', label: 'Green', value: '#18a526', folder: 'green' },
] as const;
