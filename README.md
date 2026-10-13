# Kinston Lifting — corporate website

Static, SEO-first corporate site for Kinston Lifting built with [Astro](https://astro.build). No CMS, no client framework: pages are generated at build time from typed data files, and the only JavaScript shipped is for the mobile menu, the spec-table unit toggle, the grade filter and the enquiry form.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
npm run check     # type-check .astro and .ts files
```

## Where things live

| Path | What |
|---|---|
| `src/data/site.ts` | Company details, navigation, offices, certifications, sectors |
| `src/data/categories.ts` | The eight product ranges and their sub-groups |
| `src/data/products.ts` | Every product: copy, standards, spec table columns and rows, downloads |
| `src/data/news.ts`, `src/data/downloads.ts` | Articles and document library |
| `src/pages/` | Routes. `products/[category]/[product].astro` builds one page per product |
| `tools/render.py` | Photoreal 3D product renders (numpy ray marcher). `RS=900 python3 tools/render.py 600 <name...>` then `tools/to-webp.sh` |
| `public/images/products/` | Rendered product images, one per `art` key, served as WebP |
| `src/components/SpecTable.astro` | Dimension table with metric/imperial toggle |
| `src/styles/global.css` | Design tokens, type scale, buttons, dimension-line motif |
| `public/brand/` | Logo (PNG, WebP) and K mark, cropped from the supplied artwork |
| `docs/superpowers/specs/` | Design spec |

## Replacing the dummy data

- **Products**: edit `src/data/products.ts`. Spec rows carry metric values; imperial is derived at build time.
- **Product photos**: every product shows `/images/products/<art>.webp`, a 3D render produced by `tools/render.py`. To use a photograph instead, drop it into `public/images/products/` and set `image: '/images/products/<file>'` on the product. Use your own or licensed photography only; competitor product shots are copyrighted.
- **Re-rendering**: edit the geometry in `tools/render.py` (`build()`), run it for the changed names, then `tools/to-webp.sh`. Rendering needs numpy and Pillow; 900 px takes about a minute per product.
- **Contact form**: `EnquiryForm.astro` posts to a Formspree placeholder. Replace the `action` URL, or switch to Netlify Forms by adding `data-netlify="true"`.
- **Domain**: change `site` in `astro.config.mjs` and `src/data/site.ts`. Sitemap, canonical URLs and JSON-LD follow it.
- **Downloads**: PDF links point at `/downloads/...`. Drop the real files into `public/downloads/`.

## SEO

Each page sets title, description, canonical, Open Graph and Twitter meta. JSON-LD is emitted for Organization, WebSite, BreadcrumbList, Product and NewsArticle. `robots.txt` and `sitemap-index.xml` are generated. Fonts load with `display=swap`, and all pages are fully static HTML.
