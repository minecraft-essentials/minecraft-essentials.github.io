import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
	site: "https://minecraft-essentials.pages.github.io/",
	redirects: {
		"/docsrs": "https://docs.rs/minecraft-essentials/",
		"/cratesio": "https://crates.io/minecraft-essentials/",
		"/github": "https://github.com/minecraft-essentials",
	},

	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
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
							link: "/infomation/intro/",
						},
						{
							label: "Contribute",
							link: "/infomation/contribute/",
							badge: {
								text: "Experiemental",
								variant: "caution",
							},
						},
					],
				},
				{
					label: "Documentation",
					items: [
						{
							label: "Installation",
							link: "/guides/installation/",
						},
						{
							label: "Oauth",
							link: "/guides/oauth/",
							badge: {
								text: "Recomended!",
								variant: "success",
							},
						},
						{
							label: "Device Code",
							link: "/guides/device_code/",
							badge: {
								text: "Secure!",
								variant: "note",
							},
						},
					],
				},
				{
					label: "Resources",
					items: [
						{
							label: "Docs.rs",
							link: "https://docs.rs/minecraft-essentials/",
						},
						{
							label: "Crates.io",
							link: "https://crates.io/minecraft-essentials/",
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
							},
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
			},
		}),
	],
	compressHTML: true,
	cacheDir: "./src",
	vite: {
		resolve: {
			alias: {
				"@src": "/src",
			},
		},
	},
});
