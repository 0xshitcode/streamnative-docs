# streamnative-docs

Documentation site for [StreamNative](https://github.com/0xshitcode/streamnative)
— published at <https://0xshitcode.github.io/streamnative-docs/>.

Built with [Astro Starlight](https://starlight.astro.build/).

## Local dev

```bash
npm install
npm run dev
```

Open <http://localhost:4321/streamnative-docs/>.

## Deploy

Pushing to `main` triggers `.github/workflows/pages.yml` which builds
the site and publishes it to GitHub Pages.

## Editing content

All pages live in `src/content/docs/`. Every page has a Starlight
frontmatter block with at least `title` + `description`. The sidebar
is defined in `astro.config.mjs`.

## Where does the content come from?

- **Install / first-run / guides** — this repo. Please PR here.
- **Extension API reference** — canonical source is
  `docs/EXTENSION-API.md` in the main app repo. The Astro page under
  `authoring/api/` links to it.

## Licence

MIT.
