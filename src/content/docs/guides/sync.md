---
title: Sync accounts
description: Push watch progress to Trakt, Simkl, AniList, MAL, or Kitsu.
---

StreamNative mirrors Cloudstream's sync-provider set. Progress from any
extension automatically pushes to every signed-in service (fire-and-
forget, so a slow API never blocks playback).

| Service      | Auth flow             | Requires env var                                                      |
| ------------ | --------------------- | --------------------------------------------------------------------- |
| Trakt        | OAuth 2.0 device flow | `STREAMNATIVE_TRAKT_CLIENT_ID` + `..._SECRET`                          |
| Simkl        | PIN flow              | `STREAMNATIVE_SIMKL_CLIENT_ID`                                        |
| AniList      | Manual token paste    | `STREAMNATIVE_ANILIST_CLIENT_ID`                                      |
| MyAnimeList  | Manual token paste    | `STREAMNATIVE_MAL_CLIENT_ID`                                          |
| Kitsu        | Manual token paste    | none — password grant is public                                       |

## Trakt (device flow)

1. Register a personal app at
   <https://trakt.tv/oauth/applications>. Set the redirect URI to
   `urn:ietf:wg:oauth:2.0:oob`.
2. Export the client ID + secret before launching StreamNative:
   ```bash
   export STREAMNATIVE_TRAKT_CLIENT_ID="…"
   export STREAMNATIVE_TRAKT_CLIENT_SECRET="…"
   ```
3. **Settings → Sync → Trakt → Sign in.** StreamNative displays a
   user code and a URL. Enter the code at
   <https://trakt.tv/activate>. When you approve, StreamNative
   receives the token automatically.

## Simkl (PIN flow)

Same idea, with a shorter code shown at <https://simkl.com/pin>.

## AniList / MAL / Kitsu (token paste)

These services either use implicit flow or PKCE (both need the browser
to hand back a token via URL fragment). For desktop apps that's
awkward, so StreamNative uses the OOB paste flow: authorize in your
browser, copy the resulting token, paste into the Sync tab.
