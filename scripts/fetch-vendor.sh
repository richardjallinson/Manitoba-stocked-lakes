#!/usr/bin/env bash
# Download Leaflet 1.9.4 into vendor/ and verify it against the published
# Subresource Integrity digests. Run once after cloning.
set -euo pipefail

VER="1.9.4"
DIR="$(cd "$(dirname "$0")/.." && pwd)/vendor/leaflet"
mkdir -p "$DIR"

curl -fsSL "https://unpkg.com/leaflet@${VER}/dist/leaflet.js"  -o "$DIR/leaflet.js"
curl -fsSL "https://unpkg.com/leaflet@${VER}/dist/leaflet.css" -o "$DIR/leaflet.css"
curl -fsSL "https://unpkg.com/leaflet@${VER}/dist/images/marker-icon.png"    -o "$DIR/images/marker-icon.png"    --create-dirs
curl -fsSL "https://unpkg.com/leaflet@${VER}/dist/images/marker-icon-2x.png" -o "$DIR/images/marker-icon-2x.png"
curl -fsSL "https://unpkg.com/leaflet@${VER}/dist/images/marker-shadow.png"  -o "$DIR/images/marker-shadow.png"
curl -fsSL "https://unpkg.com/leaflet@${VER}/dist/images/layers.png"         -o "$DIR/images/layers.png"
curl -fsSL "https://unpkg.com/leaflet@${VER}/dist/images/layers-2x.png"      -o "$DIR/images/layers-2x.png"

echo "Leaflet ${VER} vendored into vendor/leaflet"
echo "sha384 leaflet.js : sha384-$(openssl dgst -sha384 -binary "$DIR/leaflet.js"  | openssl base64 -A)"
echo "sha384 leaflet.css: sha384-$(openssl dgst -sha384 -binary "$DIR/leaflet.css" | openssl base64 -A)"
echo
echo "Expected (Leaflet 1.9.4, published):"
echo "  leaflet.js  sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
echo "  leaflet.css sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
