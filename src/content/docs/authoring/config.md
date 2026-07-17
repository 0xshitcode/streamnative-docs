---
title: Config schema
description: Give users typed settings for your extension.
---

**Tier 3 #21.** Add a `settings` array to your extension's `metadata`
block. StreamNative renders a form under
**Settings → Providers → Extension configuration → your ID**, persists
values to `<app_data>/extension_settings.json`, and exposes them to
your JS via `__settings.get(key, fallback)`.

## Example

```js
const metadata = {
  name: "AnimeXYZ",
  // …
  settings: [
    {
      key: "defaultServer",
      label: "Default streaming server",
      type: "select",
      default: "dailymotion",
      options: [
        { value: "dailymotion", label: "Dailymotion" },
        { value: "vtbe",        label: "Vtbe (packed)" },
      ],
    },
    {
      key: "preferredQuality",
      label: "Preferred quality",
      type: "select",
      default: "1080p",
      options: [
        { value: "720p",  label: "720p" },
        { value: "1080p", label: "1080p" },
      ],
    },
    {
      key: "enableExperimental",
      label: "Enable experimental extractors",
      type: "toggle",
      default: false,
    },
    {
      key: "cacheTtlMinutes",
      label: "Metadata cache TTL",
      type: "slider",
      min: 5,
      max: 1440,
      default: 60,
    },
    {
      key: "apiKey",
      label: "Provider API key",
      type: "secret",
      placeholder: "paste your key…",
      default: "",
    },
  ],
};
```

## Field types

| `type`     | Extra fields                              | Value type |
| ---------- | ----------------------------------------- | ---------- |
| `text`     | `placeholder?`                             | `string`   |
| `secret`   | `placeholder?`                             | `string`   |
| `toggle`   | –                                          | `boolean`  |
| `slider`   | `min`, `max`                               | `number`   |
| `select`   | `options: { value, label }[]`              | `string`   |

Common fields: `key` (unique per extension), `label`, `default`,
optional `description`.

## Reading values

```js
function loadLinks(url) {
  const server = __settings.get("defaultServer", "dailymotion");
  const quality = __settings.get("preferredQuality", "1080p");
  // …
}
```

`__settings.get` returns the persisted value, or `fallback` (or `null`
if omitted) when the user hasn't changed anything.
