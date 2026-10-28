# Kinston Lifting — corporate website

Static, SEO-first corporate site for Kinston Lifting built with [Astro](https://astro.build). No CMS, no client framework: pages are generated at build time from typed data files, and the only JavaScript shipped is for the mobile menu, the spec-table unit toggle, the grade filter and the enquiry form.

## Run it

The whole website currently has a temporary JavaScript client preview screen.
The password is `Kinston@2026`; change it in `src/components/PreviewGate.astro`.
Access is remembered in session storage for the current browser tab. This is a
visual preview gate only: the password and page content are accessible in the
browser source. Remove `PreviewGate` and the hidden `website-content` wrapper
from `src/layouts/Base.astro` when the public website is ready.

Product cards include a removal request toggle. The floating removal list is
available across the site and saves selections in this browser's local storage.
Clients can undo selections, then send exact product names and links directly
through EmailJS. Selections are retained after sending; repeat sends of the same
selection are disabled on the current page after a successful response.
Implementation: `src/components/RemovalRequests.astro` and `src/components/ProductCard.astro`.

### EmailJS setup

1. Connect an email service in your EmailJS account.
2. Create a template with **To Email fixed to `vaishakh3627@gmail.com`**.
   Set the subject to `{{subject}}` and use `{{message}}` in the body
   (plain text, or `<pre>{{message}}</pre>` in HTML). Optional count: `{{product_count}}`.
   Use the connected service's default sender address.
3. Copy `.env.example` to `.env` and fill in the service ID, template ID,
   and account public key. Only the public key belongs in this browser integration.
4. Restart the dev server or rebuild/redeploy after changing these values.
5. Select products and send a request to verify delivery in the recipient inbox.

Until these settings are provided, the modal explains that sending is not connected
and keeps the selections. EmailJS API errors retain the list and allow retrying.
The integration uses https://www.emailjs.com/docs/rest-api/send/.


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
