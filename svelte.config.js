import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * GitHub Pages publica los sitios de proyecto bajo un subdirectorio.
 * `PAGES_BASE_PATH` lo declara en tiempo de build; vacío para desarrollo
 * local o dominio propio.
 *
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.PAGES_BASE_PATH ?? ''
		}
	}
};

export default config;
