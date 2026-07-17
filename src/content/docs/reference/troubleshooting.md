---
title: Troubleshooting
description: Common issues and how to work around them.
---

## Home rails are empty

- **Check your extension is installed.** Settings → Providers →
  Installed extensions should list at least one entry.
- **Check the extension's status.** Some extractors are blocked by
  Cloudflare on random IP ranges (CI runners, VPNs). If curl works
  from your machine but the extension doesn't, try disabling the
  jsdelivr proxy (Settings → General → Network).
- **Try refreshing rails** — the button lives at the bottom of Home.

## "Extension returned no links"

The extension's `loadLinks()` didn't find any playable URLs. Usually
this means the source site changed its markup. Report to the
extension author. If it's your own extension, add a `console.log()`
call — output appears in the app's stderr.

## Playback error: HLS mediaError / DASH manifest 403

The upstream stream URL expired between `loadLinks()` and playback.
Reload the detail page and try again. If it happens on every open,
the extension is caching stale signed URLs — file a bug.

## Auto-updater doesn't check

Auto-updater only runs when the release is signed with a Tauri updater
key. Pre-release / dev builds don't include the updater manifest.
Update by re-running the install one-liner or downloading the newer
asset from Releases.

## Parental PIN lockout

5 wrong PIN entries trigger a 5-minute cooldown (in-memory).
Restarting the app resets the counter but won't remove the PIN.
If you truly forgot the PIN and there's no hint, delete
`<app_data>/parental.json` — the gate is off after the next launch.
(Backups don't include this file by default.)

## Crash logs

`Settings → Advanced → Crash reporter` shows recent panics + React
errors. Log files live in `<app_data>/crashes/*.log`. Attach one when
filing an issue.
