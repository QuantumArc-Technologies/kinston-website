#!/bin/sh
# Render product images in parallel and convert each to WebP as it finishes.
# usage: tools/batch.sh <size> <internal-render-size> name [name...]
cd "$(dirname "$0")/.."
export SIZE=$1 RS=$2; shift 2
printf '%s\n' "$@" | xargs -P 8 -n 1 tools/render-one.sh
cp public/images/products/socket-open.webp public/images/products/socket.webp 2>/dev/null
cp public/images/products/shackle-bow.webp public/images/products/shackle.webp 2>/dev/null
ls public/images/products/*.webp | wc -l
