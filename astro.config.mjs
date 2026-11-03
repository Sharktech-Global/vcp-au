// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages kept out of search results (they also carry a noindex meta tag)
const privatePaths = ['/onboarding', '/reference-check', '/404'];

// https://astro.build/config
export default defineConfig({
	// Production domain: drives canonical URLs, Open Graph URLs and the sitemap
	site: 'https://www.vcpility.com.au',
	// Match the internal links (/plans, not /plans/) so every page has one URL
	trailingSlash: 'never',
	integrations: [
		sitemap({
			filter: (page) => !privatePaths.some((path) => new URL(page).pathname.startsWith(path)),
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-sans',
			weights: ['100 900'],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});
