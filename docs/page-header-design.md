# Page headers

`src/components/PageHero.astro` provides the shared editorial header. Existing page titles, descriptions, breadcrumbs and article metadata stay in the page slot. Product detail pages retain their existing gallery-first layout.

Desktop uses dark photography to the right of the copy; mobile stacks copy above a 210px image. Legal pages use the technical grid without photography. Category headers use existing category/product assets. News imagery follows the article category.

## Images

Generated using the built-in imagegen tool. Final assets live in `public/images/page-heroes/`, with a desktop and mobile WebP for each scene. Images are decorative rather than documentation of actual staff or facilities.

Prompt shared across all six images: photorealistic wide landscape website background, premium industrial lifting aesthetic, midnight navy with restrained orange highlights; subject on the right 55%, left 45% dark negative space; credible precise materials; no text, logos, watermarks, UI or borders.

Scene prompts:
- Products: orange forged lifting hook, dark steel master link and chain.
- About: engineer in navy and orange PPE inspecting a chain and hook in a workshop.
- Industries: container port cranes, cargo vessel and industrial quay at blue hour.
- Quality: gloved hands measuring a forged steel component with a vernier caliper.
- Downloads: dark technical catalogue with unlabelled technical drawings, beside steel chain.
- Contact: engineer reviewing lifting drawings at a desk, with a blurred laptop.

## KINSTON branding revision

Edited with the built-in imagegen tool, preserving composition and lighting. Branded variants are saved alongside the originals as `*-branded.webp` and `*-branded-mobile.webp`.

Edit prompt set: add exact uppercase KINSTON integrated into physical surfaces; preserve subject, framing, lighting, palette and left negative space; no watermark or additional text.
- Products: raised cast lettering down the orange hook body.
- About: print on the hard hat, embroidery on workwear, cast lettering on the hook.
- Quality: engraved lettering on the outward-facing shackle leg.
- Downloads: white wordmark and small orange rule printed on the catalogue cover.
- Contact: embroidery on the workwear and discreet drawing title block.
