---
title: Parental controls
description: PIN-gate the app for shared devices.
---

**Settings → Advanced → Parental controls.**

1. Enter a 4–8 character PIN twice.
2. Optionally add a hint (never used to derive the hash, just shown as
   a plaintext reminder).
3. Save.

The PIN is hashed with **Argon2id** and stored in
`<app_data>/parental.json` (mode 0600 on Unix). We keep the hash out
of `preferences.json` so it never leaks through a normal backup
export — you have to opt in explicitly.

Wrong-PIN attempts are counted in-memory: after **5 misses**,
StreamNative locks out for **5 minutes**. Even a correct PIN entered
during the cooldown is refused.

To remove the PIN, hit **Remove PIN** on the same panel. Both the hash
and the flag in prefs are cleared.
