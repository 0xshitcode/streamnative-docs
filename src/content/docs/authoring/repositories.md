---
title: Repository manifest
description: The repo.json shape StreamNative expects.
---

A repository is any URL that serves a JSON manifest with this shape:

```json
{
  "name": "My Repo",
  "description": "Personal StreamNative extensions",
  "version": 1,
  "extensions": [
    {
      "id": "example",
      "name": "Example",
      "description": "Demo extension",
      "author": "you",
      "version": 3,
      "language": "en",
      "tvTypes": ["Movie"],
      "iconUrl": "https://.../icon.png",
      "status": 1,
      "url": "https://.../example.js",
      "allowedHosts": ["*.example.com"]
    }
  ]
}
```

Fields on each extension:

| Field          | Type       | Required | Meaning                                                                     |
| -------------- | ---------- | -------- | --------------------------------------------------------------------------- |
| `id`           | string     | ✅       | Unique per-repo. Combined with the repo slug for the on-disk filename.      |
| `name`         | string     | ✅       | Human-friendly name.                                                        |
| `url`          | string     | ✅       | Absolute or relative URL to the `.js` file.                                 |
| `version`      | integer    |          | Monotonic. Used by the updater to detect a newer release.                   |
| `status`       | 0/1/2/3    |          | 0=down · 1=ok · 2=slow · 3=beta.                                            |
| `tvTypes`      | string[]   |          | Filter hint. Values: `Movie`, `TvSeries`, `Anime`, `AnimeMovie`, `Live`, …  |
| `iconUrl`      | string     |          | Rendered next to the name in Settings.                                      |
| `allowedHosts` | string[]   |          | See [Permissions](/streamnative-docs/authoring/permissions/).                |

## Hosting

- **GitHub Pages** — free, HTTPS, jsdelivr-cached. Push a repo with
  `.js` extensions in `extensions/` and a `repo.json` at the root.
- **Any HTTPS server** works — StreamNative just does a plain `GET`.

## Auto-generating the manifest

Extract `metadata` from each `.js` at build time. The reference
sample repo does this via
[`build-manifest.mjs`](https://github.com/0xshitcode/streamnative-extensions-example/blob/main/scripts/build-manifest.mjs).
