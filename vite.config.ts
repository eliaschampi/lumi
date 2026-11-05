import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import lumi from './node_modules/@lumi-ui/svelte/package.json' with { type: 'json' };
import { translateDemos } from './scripts/translate-demos.mjs';

/** Mantiene `src/lib/demos-es` al día en desarrollo y en cada build. */
function spanishDemos(): Plugin {
	return {
		name: 'lumi-web:spanish-demos',
		buildStart: translateDemos,
		handleHotUpdate({ file }) {
			if (file.includes('/src/lib/demos/')) translateDemos();
		}
	};
}

export default defineConfig(({ mode }) => ({
	plugins: [spanishDemos(), sveltekit()],
	build: {
		rolldownOptions: {
			output: {
				codeSplitting: {
					// Un chunk de iconos en caché en lugar de decenas de ficheros por debajo de 500 B.
					groups: [
						{ name: 'svelte', test: /node_modules[\\/](svelte|clsx)[\\/]/, priority: 2 },
						{ name: 'icons', test: /@lucide[\\/]svelte/, priority: 1 }
					]
				}
			}
		}
	},
	define: {
		__LUMI_VERSION__: JSON.stringify(lumi.version),
		__LUMI_SVELTE_PEER__: JSON.stringify(lumi.peerDependencies.svelte),
		__SITE_URL__: JSON.stringify(
			loadEnv(mode, '.', 'PAGES_').PAGES_SITE_URL || 'https://eliaschampi.github.io/lumi'
		)
	}
}));
