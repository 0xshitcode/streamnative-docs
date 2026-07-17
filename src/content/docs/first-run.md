---
title: First run
description: The onboarding wizard — what to expect, and what to skip.
---

The first time you launch StreamNative, a 4-step wizard walks you
through the essentials.

## Step 1 — Language

Choose English or Bahasa Indonesia. The full i18n rollout ships in a
later release; for now the choice is stored and used to seed future
language files.

## Step 2 — Download path

Where do you want downloaded episodes to land? Leave blank to use
`~/Downloads/StreamNative`. You can change this any time in
**Settings → General → Download path**.

## Step 3 — Add a source

StreamNative doesn't ship with any built-in content. Paste a repository
URL to load extensions. The default suggestion is the official example
repo:

```
https://0xshitcode.github.io/streamnative-extensions-example/repo.json
```

Click **Preview** to fetch the manifest and pick which extensions to
install. Every extension you tick gets downloaded to
`<app_data>/extensions/`. You can add more repos later in
**Settings → Providers**.

## Step 4 — Finish

That's it. StreamNative reloads its extension list, populates the Home
rails, and you're browsing.

## What next?

- Set a TMDB key in **Settings → Enrichment** for high-quality
  metadata + trailers.
- Sign in to Trakt / Simkl / AniList in **Settings → Sync** to keep
  progress synced across devices.
- Turn on the **parental PIN** if this device is shared.
