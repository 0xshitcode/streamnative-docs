---
title: Backup & restore
description: Move your library, settings, and installed extensions between devices.
---

**Settings → Advanced → Backup & restore.**

## Export

Creates a single `.zip` with:

- `preferences.json`
- `repos.json`
- `library.json` (Continue Watching + Watchlist + History)
- `metadata_cache.json`, `skip_markers.json`, `mal_sync_cache.json`
- `extension_settings.json`
- Every `.js` file in your extensions folder
- `streamnative-backup.json` (manifest — app version, timestamp)

**Optional (opt in):**

- `sync_accounts.json` — Trakt/Simkl/AniList/etc. tokens
- `parental.json` — Argon2id PIN hash

**Never included:** the crash log directory (privacy).

## Restore

Opens a save/open dialog, validates the manifest, then replaces the
files atomically. StreamNative reject archives whose entries reference
paths outside its data directory (defense-in-depth vs. a malicious
zip).

Restart the app after restoring so the extension runtime picks up the
freshly-swapped files.
