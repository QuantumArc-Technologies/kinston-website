#!/bin/sh
# usage: SIZE=600 RS=720 tools/render-one.sh <name>
cd "$(dirname "$0")/.."
RS="${RS:-$SIZE}" python3 tools/render.py "${SIZE:-600}" "$1" && cwebp -quiet -q 88 "public/images/products/$1.png" -o "public/images/products/$1.webp"
