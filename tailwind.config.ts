import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = {
	200: "#a8d7a6",
	600: "#008318",
	900: "#003f07",
	950: "#002d04",
};
const gray = {
	100: "#f7f6f3",
	200: "#f0ede8",
	300: "#c5c1bb",
	400: "#918b7f",
	500: "#5d574c",
	700: "#3d372d",
	800: "#2b261c",
	900: "#1a1813",
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};
