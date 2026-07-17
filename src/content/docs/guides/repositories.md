---
title: Adding a repository
description: How to install extensions from a repo manifest URL.
---

Repositories are just HTTPS URLs pointing at a `repo.json` manifest.
Anyone can host one — GitHub Pages is the easiest option.

## Add a repo

1. Open **Settings → Providers → Repositories**.
2. Paste the manifest URL and click **Preview**.
3. Review the manifest name + extension list.
4. Click **Install** on each extension you want. StreamNative shows a
   **permission prompt** listing every host the extension is allowed
   to hit (see [Permissions](/streamnative-docs/authoring/permissions/)).
5. Head back to **Home** — new rails appear.

## Update installed extensions

The background updater polls every 24h and shows a red badge in the
sidebar when any installed extension has a newer version upstream.
Open **Settings → Providers → Extension updates** and hit
**Update all**.

## Uninstall

Same panel — click the trash icon next to an installed extension. To
remove an entire repo, use the trash icon on the repo row.
