<script lang="ts">
	import { Table } from '@lumi-ui/svelte';
	import { currentLang } from '$lib/i18n';
	import type { DocProp } from './types';

	const { props }: { props: DocProp<Record<string, unknown>>[] } = $props();

	const COPY = {
		en: { name: 'Prop', type: 'Type', fallback: 'Default', description: 'Description' },
		es: { name: 'Prop', type: 'Tipo', fallback: 'Por defecto', description: 'Descripción' }
	} as const;

	const lang = $derived(currentLang());
	const t = $derived(COPY[lang]);
</script>

<Table data={props} rowKey={(row) => row.name} compact aria-label={t.name}>
	{#snippet thead()}
		<th scope="col">{t.name}</th>
		<th scope="col">{t.type}</th>
		<th scope="col">{t.fallback}</th>
		<th scope="col">{t.description}</th>
	{/snippet}

	{#snippet row({ row })}
		<td><code>{row.name}</code></td>
		<td><code class="lumi-text-break">{row.type}</code></td>
		<td
			>{#if row.default}<code>{row.default}</code>{:else}—{/if}</td
		>
		<td>{row.text[lang]}</td>
	{/snippet}
</Table>
