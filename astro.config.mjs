import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// GitHub Pages serves this repo at /streamnative-docs/. Update `site`
// if you swap to a custom domain — Starlight uses it to build canonical
// URLs + sitemap entries.
export default defineConfig({
  site: "https://0xshitcode.github.io",
  base: "/streamnative-docs",
  integrations: [
    starlight({
      title: "StreamNative",
      description:
        "Cross-platform media streaming aggregator inspired by Cloudstream.",
      logo: {
        // Ships a StreamNative-red glyph. Replace with a real SVG later.
        src: "./src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/0xshitcode/streamnative",
      },
      customCss: ["./src/styles/theme.css"],
      editLink: {
        baseUrl:
          "https://github.com/0xshitcode/streamnative-docs/edit/main/",
      },
      sidebar: [
        {
          label: "Getting started",
          items: [
            { label: "Overview", link: "/" },
            { label: "Install", link: "/install/" },
            { label: "First run", link: "/first-run/" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Adding a repository", link: "/guides/repositories/" },
            { label: "Sync accounts", link: "/guides/sync/" },
            { label: "Parental controls", link: "/guides/parental/" },
            { label: "Backup & restore", link: "/guides/backup/" },
          ],
        },
        {
          label: "Extension authors",
          items: [
            { label: "Extension API", link: "/authoring/api/" },
            { label: "Repository manifest", link: "/authoring/repositories/" },
            { label: "Permissions", link: "/authoring/permissions/" },
            { label: "Config schema", link: "/authoring/config/" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Troubleshooting", link: "/reference/troubleshooting/" },
            { label: "FAQ", link: "/reference/faq/" },
            { label: "Changelog", link: "/reference/changelog/" },
          ],
        },
      ],
    }),
  ],
});
