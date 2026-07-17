---
title: FAQ
description: Frequently asked questions.
---

## Is StreamNative a streaming service?

No. It's a **client** that runs community-authored extensions. What
those extensions scrape is up to them.

## Does StreamNative bundle any content?

No. A fresh install has zero extensions. You explicitly add a
repository URL before anything shows up.

## Can it play DRM-protected streams?

- **ClearKey** — yes, it's a W3C EME open standard that every browser
  supports natively.
- **Widevine / PlayReady** — **no**. The Tauri webview
  (WebKitGTK on Linux, WebView2 on Windows) doesn't bundle a CDM,
  and StreamNative has no plans to sideload one.

## Torrents / magnets?

Not supported — and Cloudstream itself flags those types as
"no support at the moment" in the upstream `ExtractorLinkType` enum.

## Where does my data live?

- Windows: `%APPDATA%\app.streamnative\`
- Linux: `~/.config/app.streamnative/` (or `$XDG_CONFIG_HOME`)

## Is it open source?

Yes. Frontend + backend are MIT-licensed. Extensions ship separately
under their author's chosen licence.

## Where do I file bugs?

<https://github.com/0xshitcode/streamnative/issues>
