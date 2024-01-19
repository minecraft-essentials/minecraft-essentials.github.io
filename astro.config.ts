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
          items: [
            {
              label: "Introduction",
              link: "/infomation/intro/"
            },
            {
              label: "Contribute",
              link: "/infomation/contribute/",
              badge: {
                text: "Experiemental",
                variant: "caution"
              },
            }
          ]
        },
        {
          label: "Javascript/Typescript",
          items: [
            {
              label: "Installation",
              link: "/npm/installation/"
            },
            {
              label: "Oauth",
              link: "/npm/oauth/",
              badge: {
                text: "Recomended!",
                variant: "success",
              }
            },
            {
              label: "Device Code",
              link: "/npm/device_code/",
              badge: {
                text: "Secure!",
                variant: "note",
              }
            }
          ]
        },
        {
          label: "Docs.rs",
          items: [
            {
              label: "Getting Started",
              link: "https://docs.rs/minecraft-essentials/",
            },
            {
              label: "Oauth",
              link: "https://docs.rs/minecraft-essentials/oauth",
              badge: {
                text: "Recomended!",
                variant: "success",
              }
            },
          ],
        },
        {
          label: "Minecraft Clients",
          items: [
            {
              label: "TeaClient",
              link: "https://teaclient.net",
              badge: {
                text: "Featured!",
                variant: "default",
              }
            },
            {
              label: "OpusClient",
              link: "https://opusclient.com",
            },
          ],
        },
      ],
      components: {
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
      }
    }),
  ],
});
