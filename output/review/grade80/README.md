# Grade 80 product update

All 132 active Grade 80 products use centered 15px card titles and edited product images with Kinston lettering removed. Orange finish, original geometry and fittings are retained. Images were edited individually with built-in imagegen and saved as lossless WebP in `public/images/products/branded/grade-80/`.

## Preview sheets

- [Products 1–24](products-1-24.png)
- [Products 25–48](products-25-48.png)
- [Products 49–72](products-49-72.png)
- [Products 73–96](products-73-96.png)
- [Products 97–120](products-97-120.png)
- [Products 121–132](products-121-132.png)

The [image manifest](image-manifest.json) records every saved asset, generated source and exact prompt. Prompts request removal of all KINSTON lettering, improved HD photographic clarity, crisp edges and realistic metal texture while preserving the original product geometry, fittings, colors, composition and background.

Validation: Astro check passed (six pre-existing unused-code hints); production build passed; browser verified all 132 Grade 80 titles at 15px and centered, with no horizontal overflow at a 390px mobile viewport. All six preview sheets were visually reviewed.
