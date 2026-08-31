# Manitoba Stocked Lakes

A Manitoba edition of Ontario Stocked Lakes: a bilingual (EN/FR) offline-first
progressive web app for finding stocked lakes, wrapped in a thin Swift
WKWebView shell for the App Store.

Everything an angler needs at the lake is bundled with the app and read from
disk, because the place you ask "where do I launch?" is exactly the place with
no signal.

## Data

| File | Records | Source |
|---|---|---|
| `manitoba-stocking.json` | 12,829 | Manitoba_Waterbody_Stocking_Records |
| `manitoba-waterbodies.json` | 920 | Manitoba_Waterbody_Data |
| `manitoba-access.json` | 212 | Manitoba_Waterbody_Entry_Points |

Published by the Province of Manitoba under the **OpenMB Information and Data
Use Licence**, which permits redistribution with attribution. The app carries
that attribution, along with OpenStreetMap and Environment and Climate Change
Canada.

Rebuild any of them with the scripts in `tools/`. Each takes `--peek` (print
the live schema and stop) and `--dry` (count and size, write nothing). Run
`--peek` first if the provincial schema may have changed — the scripts refuse
to build against a guess.

## Network

The app contacts only:

- Environment and Climate Change Canada — weather alerts
- Natural Resources Canada (Toporama) — topographic tiles
- OpenStreetMap — standard tiles

Stocking, waterbody and access data are bundled, not fetched.

## Status

Version **mb1c**. Working end to end on Manitoba data.

Outstanding:

- Depth contours. `Manitoba_Waterbody_Contours_VectorTile` is a vector tile
  service rather than a queryable table, so it is a map layer in `app.js`, not
  a build script.
- Splash art and app icon.
- Regulations and consumption advisories still ship Ontario data files, and
  the ~28 strings describing them still say Ontario. That is deliberate:
  relabelling them would hide the mismatch rather than fix it.

## Licence

App code © 2026 Richard Allinson and Trevor Allinson.
Provincial data under the licences named above.
