import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Ignore 404s that happen during prerendering
				if (
					path.includes('.png') ||
					path.includes('.jpg') ||
					path.includes('.svg') ||
					path.includes('.ico')
				) {
					console.warn(`Ignoring missing asset during prerender: ${path}`);
					return;
				}

				// Otherwise, fail the build
				throw new Error(message);
			}
		}
	}
};

export default config;
