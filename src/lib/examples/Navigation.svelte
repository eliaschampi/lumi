<script lang="ts">
	import { Pagination, Tabs } from '@lumi-ui/svelte';

	let tab = $state<string | number>('summary');
	let page = $state(1);
	const tabs = [
		{ value: 'summary', label: 'Resumen' },
		{ value: 'details', label: 'Detalle' }
	];
</script>

<Tabs bind:value={tab} {tabs} aria-label="Secciones">
	{#if tab === 'summary'}<p>Resumen del proyecto</p>
	{:else}<p>Detalle del proyecto</p>{/if}
</Tabs>

<!-- Con `href`, Pagination renderiza enlaces rastreables con rel="prev|next". -->
<Pagination bind:page pages={12} aria-label="Páginas de resultados" />
