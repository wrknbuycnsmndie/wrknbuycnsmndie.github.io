// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { temmlMath } from './src/lib/markdown/temml-math';
// https://astro.build/config
export default defineConfig({
	site: 'https://wrknbuycnsmndie.github.io',
	i18n: {
		locales: ['ru', 'en'],
		defaultLocale: 'ru',
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: true,
		},
	},
	markdown: {
		processor: satteri({
			features: {
				directive: true,
				math: true,
				headingAttributes: true,
			},
			mdastPlugins: [temmlMath],
		}),
	},
	integrations: [sitemap({ filter: (page) => new URL(page).pathname !== '/' })],
});
