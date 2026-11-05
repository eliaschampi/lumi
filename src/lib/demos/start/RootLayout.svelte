<script lang="ts">
	import type { Snippet } from 'svelte';
	import { lumiEs, setLumiLocale } from '@lumi-ui/svelte';
	import '@lumi-ui/svelte/styles';

	const { children }: { children: Snippet } = $props();

	// Spanish built-in copy and Peruvian formats for the whole app.
	setLumiLocale({
		locale: 'es-PE',
		currency: 'PEN',
		timeZone: 'America/Lima',
		messages: lumiEs
	});
</script>

{@render children()}
