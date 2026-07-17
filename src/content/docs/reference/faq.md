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

- **ClearKey** (W3C EME open standard) — **yes**. Every browser
  supports it natively, and StreamNative wires the keys through
  dash.js `setProtectionData({'org.w3.clearkey': {clearkeys}})`.
- **Widevine / PlayReady** — **no, and it will not change**. The Tauri
  webview embeds:
  - **WebView2** on Windows (Edge Chromium runtime): does NOT ship the
    Widevine CDM by default; the Edge browser itself has it because
    Microsoft licenses it directly, but WebView2 is deliberately
    stripped.
  - **WebKitGTK** on Linux: has never shipped a Widevine CDM.
  Enabling Widevine would require: (a) a commercial licence from
  Google (only granted to major distributors like Netflix), and (b)
  sideloading a `libwidevinecdm` binary the app is not allowed to
  redistribute. **That is a licence violation and StreamNative will
  not do it.**

  If you specifically need Widevine, switch to an Electron-based
  client that uses `castlabs/electron-releases` (which is licensed to
  bundle Widevine). This is out of scope for StreamNative.

  **In practice**: extension-scraped sources (the anime / donghua /
  movies typical extensions target) almost never use Widevine. They
  use plain HLS, DASH, custom AES obfuscation (kuronime, for example),
  or embed iframes — all of which StreamNative handles.

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
