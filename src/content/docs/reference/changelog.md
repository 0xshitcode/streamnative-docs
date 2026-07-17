---
title: Changelog
description: Notable app changes, curated.
---

For the definitive source, see
<https://github.com/0xshitcode/streamnative/releases>. This page is a
distilled highlight reel.

## Unreleased / Tier 3

- **Auto-updater** — Tauri updater plugin + signed release workflow
  producing `latest.json`.
- **Install one-liners** — `install-linux.sh` (curl | bash) and
  `install-windows.ps1` (iwr | iex), both with SHA-256 verification.
- **Parental controls** — Argon2id PIN gate with lockout.
- **Backup & restore** — single ZIP export/import with opt-in token
  inclusion + path traversal defence.
- **Crash reporter** — Rust panic hook + React ErrorBoundary
  funnelling into `<app_data>/crashes/*.log`.
- **Extension permission model** — `allowedHosts` manifest field
  enforced at runtime.
- **Extension config schema** — `settings` field with 5 native input
  types.
- **Docs site** — this site 🎉

## Tier 2

- TMDB + AniList metadata enrichment layer.
- Trailer autoplay in Home hero.
- Skip Intro / Outro via AniSkip + MAL-Sync-Backup slug resolver.
- OpenSubtitles fallback for missing subtitle tracks.
- Quality + audio track selector for HLS + DASH.
- Multi-provider Home aggregation.
- Cloudstream-parity `TmdbProvider` helpers exposed to extensions
  via `globalThis.tmdb.*`.
- Sync framework: Trakt (device flow), Simkl (PIN flow), AniList /
  MAL / Kitsu (manual token paste).

## Tier 1

- Continue Watching + My List + Watch History.
- Auto-play next episode with countdown.
- Extension auto-update checker.
- First-run onboarding wizard.

## MVP (v0.1.0)

- Netflix-shell UI.
- Local axum proxy with HLS/DASH rewriter + DoH + jsdelivr rewrite.
- rquickjs extension sandbox with 5 lifecycle hooks.
- Multi-format player: HLS, DASH, MP4, iframe fallback, WebVTT
  subtitles, ClearKey DRM.
- Repository system + 6 live sample extensions.
- Parallel byte-range downloads.
