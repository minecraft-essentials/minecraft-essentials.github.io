import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
	200: "#edbca6",
	600: "#af4700",
	900: "#561f00",
	950: "#3c1805",
};
const gray = {
	100: "#f5f7f5",
	200: "#ebeeec",
	300: "#bfc3c0",
	400: "#878d88",
	500: "#545a55",
	700: "#343a36",
	800: "#232824",
	900: "#161917",
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
