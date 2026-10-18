<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
	import {
		Button,
		Card,
		Chip,
		EmptyState,
		Input,
		List,
		ListItem,
		PageHeader,
		PageSidebar,
		Pagination,
		Radio,
		Select,
		type SelectValue
	} from '@lumi-ui/svelte';
	import { OWNERS, WORKSPACES, WORKSPACE_STATUS, WORKSPACE_STATUSES } from '$lib/demo';

	/** Resultados por página: pocos, para que la paginación se vea con datos de ejemplo. */
	const PAGE_SIZE = 2;
	const ALL = 'all';
	const STATUS_FILTERS = [
		{ value: ALL, label: 'Todos' },
		...WORKSPACE_STATUSES.map((value) => ({ value, label: WORKSPACE_STATUS[value].label }))
	];

	let filtersOpen = $state(false);
	let status = $state(ALL);
	let owner = $state<SelectValue | null>(null);
	let query = $state('');
	let page = $state(1);

	const results = $derived.by(() => {
		const text = query.trim().toLowerCase();
		return WORKSPACES.filter(
			(row) =>
				(status === ALL || row.status === status) &&
				(!owner || row.owner === owner) &&
				(!text || `${row.name} ${row.owner}`.toLowerCase().includes(text))
		);
	});
	const pages = $derived(Math.max(1, Math.ceil(results.length / PAGE_SIZE)));
	const visible = $derived(results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE));
	const statusLabel = $derived(STATUS_FILTERS.find((item) => item.value === status)?.label);

	// Cualquier cambio de filtro vuelve a la primera página.
	function resetPage(): void {
		page = 1;
	}
</script>

<div class="lumi-stack lumi-stack--md lumi-min-width--0">
	<PageHeader
		title="Espacios de trabajo"
		subtitle="Filtros junto a resultados paginados; en móvil, los filtros pasan a un panel"
		level={3}
		size="md"
	>
		{#snippet actions()}
			<div class="lumi-page-sidebar__header-actions">
				<Button
					variant="border"
					size="sm"
					icon={SlidersHorizontal}
					class="lumi-page-sidebar__mobile-trigger"
					onclick={() => (filtersOpen = true)}
				>
					Filtros
				</Button>
			</div>
		{/snippet}
	</PageHeader>

	<div class="lumi-layout--two-columns lumi-page-sidebar-layout">
		<PageSidebar
			bind:mobileOpen={filtersOpen}
			mobileTitle="Filtros"
			mobileAriaLabel="Cerrar filtros"
		>
			{#snippet sidebar()}
				<div class="lumi-page-sidebar__section">
					<p class="lumi-page-sidebar__label" id="workspace-status-label">Estado</p>
					<div
						class="lumi-page-sidebar__radio-group"
						role="radiogroup"
						aria-labelledby="workspace-status-label"
					>
						{#each STATUS_FILTERS as option (option.value)}
							<Radio
								bind:group={status}
								value={option.value}
								label={option.label}
								name="workspace-status"
								onchange={resetPage}
							/>
						{/each}
					</div>
				</div>

				<div class="lumi-page-sidebar__section">
					<Select
						bind:value={owner}
						name="workspace-owner"
						label="Responsable"
						placeholder="Cualquiera"
						options={OWNERS}
						clearable
						onchange={resetPage}
					/>
				</div>

				<div class="lumi-page-sidebar__section">
					<Input
						bind:value={query}
						name="workspace-search"
						type="search"
						label="Buscar"
						placeholder="Nombre o responsable"
						icon={Search}
						oninput={resetPage}
					/>
				</div>

				<div class="lumi-page-sidebar__section">
					<Button variant="filled" onclick={() => (filtersOpen = false)}>
						Ver {results.length} resultados
					</Button>
				</div>
			{/snippet}
		</PageSidebar>

		<section class="lumi-layout--content-right lumi-min-width--0" aria-label="Resultados">
			<Card spaced>
				<div class="lumi-filter-summary lumi-filter-summary--secondary">
					<p class="lumi-filter-summary__eyebrow">Resultados</p>
					<p class="lumi-filter-summary__title">{results.length} espacios de trabajo</p>
					<div class="lumi-filter-summary__meta">
						<Chip color="secondary" size="sm">{statusLabel}</Chip>
						{#if owner}<Chip color="primary" size="sm">{owner}</Chip>{/if}
						{#if query.trim()}<Chip color="info" size="sm" icon={Search}>{query.trim()}</Chip>{/if}
					</div>
				</div>

				{#if visible.length === 0}
					<EmptyState
						icon={SlidersHorizontal}
						title="Sin resultados"
						description="Ajusta los filtros para ver otros espacios."
					/>
				{:else}
					<List>
						{#each visible as row (row.name)}
							<ListItem title={row.name} description={row.owner}>
								{#snippet trailing()}
									<Chip color={WORKSPACE_STATUS[row.status].color} size="sm"
										>{WORKSPACE_STATUS[row.status].label}</Chip
									>
								{/snippet}
							</ListItem>
						{/each}
					</List>
				{/if}

				{#if pages > 1}
					<Pagination bind:page {pages} aria-label="Páginas de espacios de trabajo" />
				{/if}
			</Card>
		</section>
	</div>
</div>
