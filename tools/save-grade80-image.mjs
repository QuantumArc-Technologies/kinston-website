import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const [slug, source, promptKey] = process.argv.slice(2);
const catalogue = JSON.parse(await fs.readFile('docs/grade-80-catalogue.json', 'utf8'));
const product = catalogue.families.find((entry) => entry.slug === slug);
if (!product || !source) throw new Error('Expected a catalogue slug and generated image path');
const output = path.join('public', product.localImage);
await fs.mkdir(path.dirname(output), { recursive: true });
await sharp(source).resize(1024, 1024, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 86 }).toFile(output);
const records = '/private/tmp/kinston-grade80/generated';
await fs.mkdir(records, { recursive: true });
await fs.writeFile(path.join(records, `${slug}.json`), JSON.stringify({ slug, source, image: product.localImage, ...(promptKey ? { promptKey } : {}) }, null, 2));
console.log(`Saved ${slug}`);
