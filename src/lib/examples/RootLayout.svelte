<script lang="ts">
	import type { Snippet } from 'svelte';
	import { lumiEs, setLumiLocale } from '@lumi-ui/svelte';
	import '@lumi-ui/svelte/styles';

	const { children }: { children: Snippet } = $props();

	// Copia integrada en español y formatos de Perú para toda la app.
	setLumiLocale({
		locale: 'es-PE',
		currency: 'PEN',
		timeZone: 'America/Lima',
		messages: lumiEs
	});
</script>

{@render children()}
