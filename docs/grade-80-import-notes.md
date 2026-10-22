# Grade 80 catalogue

The second active range is available at `/products/grade-80-rigging`.
It uses the existing product cards, gallery, technical tables and enquiry form.
Desktop and mobile navigation include both Grade 100 and Grade 80.

Source: https://www.shenli-rigging.com/2-grade-80-rigging-hardware.html

- 133 product entries in the source's nine groups.
- 155 published tables, preserving values, units, merged cells and spare-part diagrams.
- Model references remain as published; Kinston catalogue codes use `K80-0001` onwards.
- Product visuals use RAL 2004 orange powder coat and KINSTON branding.
- Source geometry photographs are saved under `public/images/products/reference/grade-80/`.
- Published technical drawings are saved under `public/images/products/technical/grade-80/`.
- Final product visuals are saved under `public/images/products/branded/grade-80/`.
- Source mappings are in `grade-80-catalogue.json`; generation prompts are in `grade-80-image-prompts.json`.

The source restricts four products to logging, lashing or pulling. Those pages
include the restriction above the gallery and in their product summary. Reference
load values are retained without presenting these products as suitable for lifting.

Source image issues corrected during import:

- The clevis foundry hook detail page embeds connecting-link images. The correct
  photograph from the source category index is used; its mismatched drawing is omitted.
- The self-locking eye hook page puts dimension drawings before product photographs.
  The photograph is used for the product visual and each drawing stays with its model.
- The clevis swivel self-locking hook page shows an eye-hook photograph. Its published
  clevis swivel drawing is used as the geometry reference for the product visual.

## Refreshing source data

The importer uses Python's standard library and cached source HTML. Copy the source
index to `/private/tmp/grade80-index.html`, then run:

```sh
python3 tools/import-grade80.py prepare
curl -fL --parallel --parallel-max 8 --retry 2 --config /private/tmp/kinston-grade80/pages.curl
python3 tools/import-grade80.py import
curl -fL --parallel --parallel-max 8 --retry 2 --config /private/tmp/kinston-grade80/assets.curl
```

Refreshing source data does not regenerate final product visuals. Image edits use
the built-in image generation tool; the Node image helper only converts its output
to WebP. No commit or deployment is part of this change.
