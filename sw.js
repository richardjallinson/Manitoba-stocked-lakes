/* Ontario Stocked Lakes — service worker
   Shell is precached. Large datasets are cached on first use so the initial
   load isn't blocked on ~12 MB. Live government API calls always go to the
   network so regulations and advisories are never served stale. */

const VERSION = "mb1f";
const SHELL = `osl-shell-${VERSION}`;
/* Deliberately NOT versioned. The data cache used to be osl-data-${VERSION},
   and activate deletes every cache that is not current — so every app update
   threw away ~4 MB of cached lake data and the next launch re-downloaded all
   of it. Twenty-odd versions in, that was the recurring fifteen-second start.
   The app code changes constantly; the datasets change rarely. They get
   different lifetimes now. */
const DATA  = "osl-data";
/* Map basemap tiles, also unversioned like DATA. OSM raster and NRCan
   Toporama imagery changes on the order of months, nothing like the live
   regulatory/stocking data this app is careful to always re-fetch -- so
   caching them costs nothing in staleness and buys back the fact that,
   before this, EVERY tile was re-downloaded from the network on EVERY
   view, even the same spot seen a minute earlier. That is why Topo and
   Depth felt slow, especially full screen where more tiles are on
   screen at once. Capped below so it can't grow without bound. */
const TILES = "osl-tiles";
const TILE_CACHE_MAX = 800;
/* Tiles a user deliberately saved for a lake, kept apart from TILES because
   TILES is trimmed to a cap and would quietly evict the very tiles someone
   saved for a trip. Nothing here is ever evicted automatically -- it goes
   when the user removes that lake's saved area, and not before. */
const OFFLINE = "osl-offline";

const SHELL_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./vendor/leaflet/leaflet.css",
  "./vendor/leaflet/leaflet.js",
  "./icons/header-mark.png",
  // The header and search-card lake plates. In the shell, not DATA_FILES:
  // they are chrome, and a header that loads its background only after the
  // first online visit would defeat the point of bundling them.
  "./img/header-lake.webp",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./privacy.html",
  "./privacy.js"
];

// Big local datasets: cached the first time they're requested, not on install.
const DATA_FILES = ["fish-advisories-2025.json", "ontario-regulations-2026.json",
                    "manitoba-waterbodies.json", "manitoba-nearby.json",
                    "manitoba-places.json", "manitoba-stocking.json", "manitoba-access.json",
                    "species-art/manifest.json"];

// Species plates are small and cached on first sight, the same as the datasets.
// An angler at the lake with no signal should still see the fish.
const isPlate = (url) => /\/species-art\/.+\.webp$/.test(url);

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(SHELL)
      /* cache:"reload" matters more than it looks.
         addAll() goes through the browser's ordinary HTTP cache by default, so
         if Safari still held app.js or splash.jpg from an earlier release it
         would happily copy that stale file into the brand-new shell cache. The
         version number would say v3j and the contents would be v3g. That is
         how an old splash picture kept reappearing after an update — and it
         means the old JavaScript was being served too. */
      .then(c => c.addAll(SHELL_FILES.map(u => new Request(u, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== SHELL && k !== DATA && k !== TILES && k !== OFFLINE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// OSM raster tiles (Map, Depth's base) and NRCan Toporama WMS images
// (Topo). Matched by host + path shape rather than an exact file list,
// since Toporama's query string carries the bbox and changes every pan.
function isTileRequest(url) {
  if (url.hostname === "tile.openstreetmap.org" && /\/\d+\/\d+\/\d+\.png$/.test(url.pathname)) return true;
  if (url.hostname === "maps.geogratis.gc.ca" && url.pathname.indexOf("/wms/toporama_en") !== -1) return true;
  return false;
}

// Cache API has no expiry of its own. Trimmed after every write rather than
// on a schedule -- keys() order is insertion order in the engines this app
// ships on, so this evicts the oldest tiles first, same idea as an LRU.
async function trimTileCache(c) {
  const keys = await c.keys();
  const excess = keys.length - TILE_CACHE_MAX;
  if (excess <= 0) return;
  for (let i = 0; i < excess; i++) await c.delete(keys[i]);
}

/* Saving a lake for offline use. The page works out which tile URLs cover the
   lake and posts them here; the fetching happens in the worker so it survives
   the user scrolling around, and progress goes back to the page as it lands.
   Sequential rather than parallel on purpose: these are other people's free
   public tile servers, and a burst of a hundred parallel requests from every
   user is exactly the sort of thing that gets an app blocked. */
self.addEventListener("message", e => {
  const msg = e.data || {};
  const reply = m => { try { e.source && e.source.postMessage(m); } catch (_) {} };

  if (msg.type === "saveArea" && Array.isArray(msg.urls)) {
    e.waitUntil((async () => {
      const c = await caches.open(OFFLINE);
      let done = 0, failed = 0;
      for (const u of msg.urls) {
        try {
          if (await c.match(u)) { done++; }
          else {
            const res = await fetch(u, { mode: "cors" });
            if (res && res.ok) { await c.put(u, res.clone()); done++; }
            else failed++;
          }
        } catch (_) { failed++; }
        reply({ type: "saveProgress", key: msg.key, done: done + failed, total: msg.urls.length });
      }
      reply({ type: "saveDone", key: msg.key, saved: done, failed });
    })());
    return;
  }

  if (msg.type === "removeArea" && Array.isArray(msg.urls)) {
    e.waitUntil((async () => {
      const c = await caches.open(OFFLINE);
      for (const u of msg.urls) { try { await c.delete(u); } catch (_) {} }
      reply({ type: "removeDone", key: msg.key });
    })());
    return;
  }
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Basemap tiles: cache-first, refreshed in the background. The one
  // cross-origin exception to "network only" below -- see the note by
  // isTileRequest for why tiles are safe to keep and everything else isn't.
  if (isTileRequest(url)) {
    e.respondWith((async () => {
      // Deliberately saved tiles win, and are answered without touching the
      // network at all -- the whole point is a lake that works with no signal.
      const saved = await caches.open(OFFLINE).then(c => c.match(req));
      if (saved) return saved;
      const c = await caches.open(TILES);
      const hit = await c.match(req);
      const network = fetch(req).then(res => {
        if (res.ok) { c.put(req, res.clone()); trimTileCache(c); }
        return res;
      }).catch(() => hit);
      return hit || network;
    })());
    return;
  }

  const sameOrigin = url.origin === self.location.origin;

  // Live government APIs (regulations, contour queries, weather alerts):
  // network only, never cached.
  if (!sameOrigin) return;

  // Navigations: network first so a new release is picked up immediately.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Large datasets and species plates: stale-while-revalidate. The cached
  // copy answers immediately — that is the fast start — and a background
  // fetch refreshes it, so a new stocking snapshot is at most one launch
  // behind. The dataAge line in the app shows which snapshot is on screen,
  // and Settings has a manual "Check for new stockings" for the impatient.
  if (DATA_FILES.some(f => url.pathname.endsWith(f)) || isPlate(url.pathname)) {
    e.respondWith(
      caches.open(DATA).then(async c => {
        const hit = await c.match(req);
        const refresh = fetch(req).then(res => {
          if (res.ok) c.put(req, res.clone());
          return res;
        }).catch(() => hit);
        return hit || refresh;
      })
    );
    return;
  }

  // Shell assets: cache first, refresh in the background.
  e.respondWith(
    caches.match(req).then(hit => {
      const network = fetch(req).then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(SHELL).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || network;
    })
  );
});
