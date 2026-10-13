#!/bin/sh
# Convert rendered product PNGs to WebP for the site. Requires cwebp.
set -e
cd "$(dirname "$0")/../public/images/products"
for f in *.png; do
  [ "$f" = "README.txt" ] && continue
  cwebp -quiet -q 88 "$f" -o "${f%.png}.webp"
done
cp socket-open.webp socket.webp
cp shackle-bow.webp shackle.webp
ls -la *.webp | awk '{s+=$5} END {print NR " webp files, " s/1024 " KB total"}'
