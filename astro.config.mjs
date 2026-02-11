// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://gnabak.github.io',
	base: '/dev-blog/',
	integrations: [
		tailwind(),
		mdx(),
		sitemap(),
	],
	markdown: {
		shikiConfig: {
			theme: 'dracula', // Syntax highlighting theme for code blocks
			wrap: true,
		},
	},
});
