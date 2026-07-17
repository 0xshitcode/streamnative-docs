---
title: Permissions
description: Declare which hosts your extension is allowed to contact.
---

**Tier 3 #20.** Every extension may declare an `allowedHosts` list in
its `metadata` block. At install time StreamNative shows the user a
permission prompt listing every host. At runtime, `http.get` and
`http.post` reject any request to a host that isn't on the list.

## Format

```js
const metadata = {
  // …
  allowedHosts: [
    "example.com",       // exact match
    "*.example.com",     // any subdomain
    "cdn.other.com",
  ],
};
```

- **Exact match** — `"example.com"` matches only `example.com`.
- **Wildcard subdomain** — `"*.example.com"` matches `foo.example.com`
  **and** `example.com` itself.
- **Universal wildcard** — `"*"` is a stand-in for "any host". Only
  use it if your extension genuinely proxies through arbitrary
  extractor hosts and you want to be explicit about that.
- **Empty list** — treated as legacy compatibility: unrestricted
  access, but the UI warns loudly at install time.

## Runtime behaviour

- Request to a listed host → succeeds.
- Request to an unlisted host → `http.get` throws with
  `"host 'foo.com' not in extension's allowedHosts"`.
- Extension with no `allowedHosts` at all → no enforcement (but the
  install prompt warns the user).

## Why bother?

- Users can install extensions from unknown authors with less risk —
  a random `.js` can't exfiltrate their prefs to some third-party
  domain silently.
- Reviewers can quickly audit the manifest without reading the
  minified `.js`.
- Future-proofing: when we ship an extension marketplace, extensions
  with an explicit allow-list get promoted to "trusted".
