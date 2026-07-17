---
title: Install
description: Two supported install paths — one-liner or direct download.
---

## Option 1 — Terminal one-liner (recommended)

### Linux (AppImage, default)

```bash
curl -fsSL https://github.com/0xshitcode/streamnative/releases/latest/download/install-linux.sh | bash
```

That downloads the latest AppImage into `~/.local/bin`, verifies the
SHA-256 checksum against `checksums.txt`, and drops a `.desktop`
launcher so StreamNative shows up in your app menu.

Environment overrides:

| Variable        | Default              | Meaning                              |
| --------------- | -------------------- | ------------------------------------ |
| `SN_VERSION`    | `latest`             | Pin to a specific tag (e.g. `v0.2.0`) |
| `SN_FORMAT`     | `appimage`           | `appimage` or `deb`                  |
| `SN_PREFIX`     | `$HOME/.local/bin`   | AppImage install location            |
| `SN_NO_DESKTOP` | (unset)              | Skip the `.desktop` launcher         |

```bash
# Install the .deb instead
SN_FORMAT=deb curl -fsSL <same URL> | bash
```

### Windows (PowerShell 5.1+)

```powershell
iwr https://github.com/0xshitcode/streamnative/releases/latest/download/install-windows.ps1 | iex
```

Silent install (no wizard UI):

```powershell
$env:SN_SILENT = "1"; iwr <same URL> | iex
```

## Option 2 — Direct download from Releases

Grab an asset from
<https://github.com/0xshitcode/streamnative/releases/latest>:

| Platform             | Asset                                     |
| -------------------- | ----------------------------------------- |
| Linux (AppImage)     | `StreamNative_x.y.z_amd64.AppImage`       |
| Linux (Debian / Ubuntu) | `streamnative_x.y.z_amd64.deb`         |
| Windows              | `StreamNative_x.y.z_x64_en-US.msi`        |

Every release also ships `checksums.txt`:

```bash
sha256sum -c checksums.txt
```

## Updates

If the built-in auto-updater is enabled (default), StreamNative checks
GitHub Releases on startup + every 24h. When a signed release drops,
you'll see a prompt inside the app.
