# Leaflet 1.9.4 — vendored

`leaflet.js` and `leaflet.css` are **not** committed here. Fetch them once
before you run or ship the app:

```bash
./scripts/fetch-vendor.sh
```

The app loads Leaflet from this folder rather than a CDN. Two reasons:

1. **Offline.** The service worker precaches the shell; a CDN script can't be
   relied on when you're at a lake with no bars.
2. **App Review.** Guideline 2.5.2 prohibits an iOS app from downloading and
   executing code at runtime. A remote `<script src>` is exactly that.
