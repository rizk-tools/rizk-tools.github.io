import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Fallback for SPA mode - this ensures that all routes are handled by index.html
			fallback: 'index.html'
		}),
		paths: {
			base: ''
		},
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Ignore 404s that happen during prerendering for static assets and the root path
				if (
					path.includes('.png') ||
					path.includes('.jpg') ||
					path.includes('.svg') ||
					path.includes('.ico') ||
					path === '/' // Handle the root path error
				) {
					console.warn(`Ignoring error during prerender: ${path}`);
					return;
				}

				// Otherwise, fail the build
				throw new Error(message);
			},
			// Ensure the root path is prerendered with the base path
			entries: ['*']
		}
	}
};

export default config;
