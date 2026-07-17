---
title: Extension API
description: Write a StreamNative extension in plain JavaScript.
---

An extension is a single `.js` file that exports **top-level global
declarations** — no ES modules, no bundlers. StreamNative runs it in a
sandboxed QuickJS runtime with a small standard library injected.

For the complete, always-up-to-date reference see the
[EXTENSION-API.md](https://github.com/0xshitcode/streamnative/blob/main/docs/EXTENSION-API.md)
file in the app repo. This page is a friendly overview.

## Minimal skeleton

```js
const metadata = {
  name: "My Provider",
  description: "Provides content from example.com",
  language: "en",
  authors: ["you"],
  tvTypes: ["Movie", "TvSeries"],
  version: 1,
  allowedHosts: ["*.example.com"],
};

function search(query) {
  const res = http.get(`https://api.example.com/search?q=${encodeURIComponent(query)}`);
  const body = JSON.parse(res.body);
  return body.results.map((r) => ({
    title: r.title,
    image: r.poster,
    url: r.detailUrl,
  }));
}

function loadLinks(url) {
  const res = http.get(url);
  return [{ name: "Default", url: extractStreamUrl(res.body), isM3u8: false }];
}
```

## Built-in helpers

StreamNative injects a JS prelude before your extension runs — no
imports needed:

| Namespace   | What it does                                                             |
| ----------- | ------------------------------------------------------------------------ |
| `http.get`  | Synchronous HTTP GET, returns `{ status, body, headers }`.               |
| `http.post` | Synchronous HTTP POST.                                                   |
| `tmdb.*`    | Wraps TMDB v3/v4 (uses the user's API key from Settings → Enrichment).   |
| `anilist.*` | Search + trailer key via AniList GraphQL — no API key needed.            |
| `malsync.*` | Slug → `{ malId, anilistId }` resolver via MAL-Sync-Backup.              |
| `subs.*`    | OpenSubtitles fallback (requires the user's API key).                    |
| `__settings.get(key, fallback)` | Read a value from your declared config schema.         |

## Lifecycle hooks

- `metadata` — required, static object.
- `home()` — optional, returns `HomePageList[]` for the Home rails.
- `search(query)` — required, returns `SearchResult[]`.
- `load(url)` — optional, returns a `LoadResponse` with episode list.
- `loadLinks(url)` — required, returns `MediaLink[]` with playable URLs.

See [Config schema](/streamnative-docs/authoring/config/) for the
optional `settings` field and
[Permissions](/streamnative-docs/authoring/permissions/) for
`allowedHosts`.
