import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({

site: 'https://minecraft-essentials.pages.github.io/',






  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    starlight({
      title: "Minecraft-Essentials",
      customCss: ["./src/styles/tailwind.css"],
      social: {
        github: "https://github.com/minecraft-essentials/minecraft-essentials",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        es: {
          label: "Español",
        },
        zh: {
          label: "中文",
        },
        hi: {
          label: "हिन्दी",
        },
        ar: {
          label: "العربية",
        },
      },
      sidebar: [
        {
          label: "Infomation",
          autogenerate: {
            directory: "infomation",
          },
        },
        {
          label: "NPM Documentation",
          autogenerate: {
            directory: "npm",
          },
        },
        {
          label: "Rust Documenation",
          items: [
            {
              label: "Getting Started",
              link: "https://docs.rs/minecraft-essentials/",
            },
            {
              label: "Oauth",
              link: "https://docs.rs/minecraft-essentials/oauth",
            },
          ],
        },
        {
          label: "Featured Clients",
          items: [
            {
              label: "TeaClient",
              link: "https://teaclient.net",
            },
            {
              label: "OpusClient",
              link: "https://opusclient.com",
            },
          ],
        },
      ],
    }),
  ],
});
