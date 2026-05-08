// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	integrations: [sitemap()],
	site: 'https://mk040412.github.io',
	base: '/Project-Weasel',
});
