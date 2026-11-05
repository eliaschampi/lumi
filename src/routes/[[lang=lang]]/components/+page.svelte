<script lang="ts">
	import Boxes from '@lucide/svelte/icons/boxes';
	import Search from '@lucide/svelte/icons/search';
	import {
		EmptyState,
		Input,
		PageHeader,
		QuickAccessCard,
		Title,
		type LumiColor
	} from '@lumi-ui/svelte';
	import { currentLang, link } from '$lib/i18n';
	import { COMPONENT_GROUPS, navItemFor } from '$lib/navigation';

	const COPY = {
		en: {
			search: 'Find a component',
			searchHint: 'Button, menu, table…',
			empty: 'No components found',
			emptyText: 'Try another word, such as menu or table.'
		},
		es: {
			search: 'Buscar un componente',
			searchHint: 'Button, menú, tabla…',
			empty: 'No se encontraron componentes',
			emptyText: 'Prueba otra palabra, como menú o tabla.'
		}
	} as const;

	const ACCENTS: readonly LumiColor[] = ['primary', 'secondary', 'info', 'success', 'warning'];

	const lang = $derived(currentLang());
	const t = $derived(COPY[lang]);
	const page = navItemFor('/components');

	let query = $state('');

	const groups = $derived.by(() => {
		const words = query.trim().toLowerCase();
		return COMPONENT_GROUPS.map((group) => ({
			...group,
			items: group.items.filter((item) =>
				`${item.label[lang]} ${item.description[lang]}`.toLowerCase().includes(words)
			)
		})).filter((group) => group.items.length);
	});
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader title={page.label[lang]} subtitle={page.description[lang]} icon={Boxes} size="xl" />

	<Input
		bind:value={query}
		type="search"
		label={t.search}
		placeholder={t.searchHint}
		icon={Search}
		clearable
	/>

	{#each groups as group, index (group.id)}
		<section class="lumi-stack lumi-stack--md" aria-labelledby={`group-${group.id}`}>
			<Title id={`group-${group.id}`} title={group.label[lang]} level={2} size="md" />
			<div class="lumi-grid lumi-grid--cards lumi-grid--gap-md">
				{#each group.items as item (item.path)}
					<QuickAccessCard
						href={link(item.path)}
						title={item.label[lang]}
						description={item.description[lang]}
						icon={item.icon}
						color={ACCENTS[index % ACCENTS.length]}
					/>
				{/each}
			</div>
		</section>
	{:else}
		<EmptyState icon={Search} title={t.empty} description={t.emptyText} />
	{/each}
</div>
