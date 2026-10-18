<script lang="ts">
	import type { Snippet } from 'svelte';
	import { registerIcons } from '@lumi-ui/svelte';
	import { lumiIcons } from '@lumi-ui/svelte/icons';

	const { children }: { children: Snippet } = $props();

	// Solo si guardas nombres de icono como datos (por ejemplo, desde una API).
	registerIcons(lumiIcons);
</script>

{@render children()}
