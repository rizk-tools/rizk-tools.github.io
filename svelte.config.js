import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use default adapter-static configuration
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			// Set the base path to the repository name for GitHub Pages
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || ''
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
