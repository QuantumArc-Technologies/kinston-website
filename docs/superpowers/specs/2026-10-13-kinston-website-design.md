# Kinston Lifting — Corporate Website Design Spec

Date: 2026-10-13

## Brief (as given)

- New corporate website for Kinston (lifting equipment: "Lifting · Trust · Performance").
- Use the supplied logo exactly as provided.
- SEO-friendly static stack.
- Premium, corporate look. Reference competitors: yoke.net (category sidebar, product list, detail page
  with dimensioned spec table, metric/imperial toggle) and williamhackett.com (category grid, grade filter tabs,
  sectors, accreditations, knowledge base).
- Product browsing: categories → product list per category → product detail page.
- All other basic corporate pages. Dummy data where real data is missing.

## Assumptions (not given, decided here)

- Company name shown as "Kinston Lifting"; domain placeholder `kinstonlifting.com`; HQ placeholder in Sharjah, UAE
  with offices in Mumbai and Rotterdam. All contact details, certificates, product codes and specs are dummy.
- Product data is a typed TypeScript dataset (no CMS). Replacing it later with a CMS is a data-layer swap only.
- No backend. The contact / enquiry forms post to a placeholder endpoint and are wired for Formspree/Netlify Forms.
- Product imagery: no photography exists, so each product family is rendered in 3D by `tools/render.py` (signed-distance
  ray marcher: orange paint, galvanised steel, soft shadows, white studio). Photos replace them via the `image` field.
  Competitor photos are not used: they are copyrighted and re-marking them would misrepresent the product. Openly
  licensed stock was searched (Wikimedia Commons, Openverse) and found unusable for catalogue shots.

## Stack

- Astro 7 (static output), zero client JS except: mobile nav, unit toggle, product grade filter, enquiry form.
- Plain CSS with design tokens in `src/styles/global.css`; scoped styles per component.
- `@astrojs/sitemap`, `robots.txt`, canonical URLs, Open Graph/Twitter meta, JSON-LD (Organization,
  BreadcrumbList, Product, Article).
- Fonts: Barlow (body) + Barlow Semi Condensed (display) from Google Fonts, `display=swap`.

## Site map

| Route | Purpose |
|---|---|
| `/` | Home: hero, category grid, why Kinston, sectors, quality, news, CTA |
| `/products` | All categories with sub-groups |
| `/products/[category]` | Category: sticky category rail, grade filter, product grid |
| `/products/[category]/[product]` | Detail: gallery, summary, features, spec table (mm/in), downloads, related |
| `/about` | Company, history timeline, leadership, locations |
| `/industries` | Sectors served |
| `/quality` | Certifications, testing, traceability |
| `/downloads` | Catalogues, datasheets, certificates |
| `/news`, `/news/[slug]` | News and articles |
| `/contact` | Offices, enquiry form |
| `/privacy`, `/terms`, `/404` | Legal and error |

## Design system

- Colours: Signal orange `#F85000` (brand, CTA, WLL column, dimension lines), Deep navy `#0A2E78` (brand),
  Ink `#111B33` (dark sections, headings), Steel `#5B6880` (secondary text), Zinc `#E3E7EE` (rules),
  Paper `#F4F6F9` (alternate backgrounds), White.
- Type: Barlow Semi Condensed 600/700 for headings; Barlow 400/500 for body and tables; tabular figures.
- Layout: left-aligned, 1280px container, 12-col grid. Product section uses a 280px sticky category rail.
- Signature motif: engineering dimension lines (tick-ended rules) under headings and an animated line drawing
  of a self-locking hook with dimension callouts in the home hero. Orange is spent only on action and data.
- Avoid: all-caps eyebrow labels, arrow suffixes on links, identical shadowed cards, decorative gradients.
- Quality floor: responsive to 360px, visible focus rings, `prefers-reduced-motion` respected, WCAG AA contrast.

## Data model

`Category { slug, name, short, description, groups[] }`, `Product { slug, category, group, name, code, grade,
summary, description, features[], materials, finish, standards[], specUnits, specColumns[], specRows[],
downloads[], related[] }`. Spec rows carry metric values; imperial is derived at build time.
