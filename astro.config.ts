import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import starlightBlog from 'starlight-blog'

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
			plugins: [starlightBlog({
				authors: {
					eveeifyeve: {
						name: "Eveeifyeve",
						title: "Creator of Minecraft-Essentials",
						picture: "https://github.com/eveeifyeve.png",
						url: "https://eveeifyeve.pages.dev",
					}
				}
			})],
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
							link: "/guides/install/",
						},
						{
							label: "OAuth",
							link: "/guides/oauth/",
							badge: {
								text: "Recomended!",
								variant: "success",
							},
						},
						{
							label: "DeviceCode",
							link: "/guides/device_code/",
							badge: {
								text: "Secure!",
								variant: "note",
							},
						},
						{
							label: "Launching",
							link: "/guides/launching",
							badge: {
								text: "Experimental",
								variant: "caution",
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
