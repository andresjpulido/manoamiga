import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://manoamiga.nz",
  base: "/",
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
        },
      },
      filter: (page) =>
        !page.startsWith("https://manoamiga.nz/albums/")  &&
        !page.startsWith("https://manoamiga.nz/es/albums/")  
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
  },
});
