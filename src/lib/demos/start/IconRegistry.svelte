<script lang="ts">
	import type { Snippet } from 'svelte';
	import { registerIcons } from '@lumi-ui/svelte';
	import { lumiIcons } from '@lumi-ui/svelte/icons';

	const { children }: { children: Snippet } = $props();

	// Only if you store icon names as data, for example from an API.
	registerIcons(lumiIcons);
</script>

{@render children()}
