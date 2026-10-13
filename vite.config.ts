import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import lumi from './node_modules/@lumi-ui/svelte/package.json' with { type: 'json' };

export default defineConfig(({ mode }) => ({
	plugins: [sveltekit()],
	define: {
		__LUMI_VERSION__: JSON.stringify(lumi.version),
		__LUMI_SVELTE_PEER__: JSON.stringify(lumi.peerDependencies.svelte),
		__SITE_URL__: JSON.stringify(
			loadEnv(mode, '.', 'PAGES_').PAGES_SITE_URL || 'https://eliaschampi.github.io/lumi'
		)
	}
}));
