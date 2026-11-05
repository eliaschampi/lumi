<script lang="ts">
	import Activity from '@lucide/svelte/icons/activity';
	import Building2 from '@lucide/svelte/icons/building-2';
	import ChartBar from '@lucide/svelte/icons/chart-bar';
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import List from '@lucide/svelte/icons/list';
	import RefreshCw from '@lucide/svelte/icons/refresh-cw';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import Wallet from '@lucide/svelte/icons/wallet';
	import { onDestroy } from 'svelte';
	import {
		Button,
		Chip,
		DashboardBarChart,
		DashboardChart,
		DashboardSection,
		PageHeader,
		StatCard,
		Table,
		ToggleGroup,
		formatNumber,
		type ChartSeriesPoint,
		type DashboardChartSeries,
		type ToggleGroupValue
	} from '@lumi-ui/svelte';
	import '@lumi-ui/svelte/styles/patterns.css';
	import {
		PREVIOUS_PERIOD_GAP,
		SIMULATED_LATENCY_MS,
		WORKSPACES,
		WORKSPACE_STATUS,
		WORKSPACE_STATUSES,
		monthlyRevenue,
		type Workspace
	} from '$lib/demo';
	import { currentLang } from '$lib/i18n';
	import { siteLocales, sourceUrl } from '$lib/site';
	import { toaster } from '$lib/toaster';

	const COPY = {
		en: {
			title: 'Data',
			subtitle: 'Search, filter, select and page through a table, next to sample charts.',
			refresh: 'Refresh',
			notice: 'Names, amounts and metrics are made up.',
			source: 'See the full code',
			records: 'Records',
			active: 'Active',
			selected: 'Selected',
			total: 'Total value',
			trend: 'Trend',
			trendSubtitle: 'Monthly revenue, in thousands',
			trendLabel: 'Monthly revenue compared between periods',
			current: 'Current period',
			previous: 'Previous period',
			byWorkspace: 'Value by workspace',
			byWorkspaceSubtitle: 'Current amount of each workspace',
			byWorkspaceLabel: 'Current value per workspace',
			workspaces: 'Workspaces',
			workspacesSubtitle: 'Local list with search, filters, selection and pagination',
			filter: 'Filter by status',
			search: 'Search workspace',
			tableLabel: 'Sample workspaces',
			workspace: 'Workspace',
			owner: 'Owner',
			status: 'Status',
			value: 'Value',
			refreshed: 'Data refreshed'
		},
		es: {
			title: 'Datos',
			subtitle: 'Busca, filtra, selecciona y pagina una tabla junto a gráficos de ejemplo.',
			refresh: 'Actualizar',
			notice: 'Los nombres, importes y métricas son ficticios.',
			source: 'Ver código completo',
			records: 'Registros',
			active: 'Activos',
			selected: 'Seleccionados',
			total: 'Valor total',
			trend: 'Evolución',
			trendSubtitle: 'Ingresos mensuales, en miles',
			trendLabel: 'Comparación mensual de ingresos entre periodos',
			current: 'Periodo actual',
			previous: 'Periodo anterior',
			byWorkspace: 'Valor por espacio',
			byWorkspaceSubtitle: 'Importe actual de cada espacio',
			byWorkspaceLabel: 'Valor actual por espacio de trabajo',
			workspaces: 'Espacios de trabajo',
			workspacesSubtitle: 'Listado local con búsqueda, filtros, selección y paginación',
			filter: 'Filtrar por estado',
			search: 'Buscar espacio de trabajo',
			tableLabel: 'Espacios de trabajo de demostración',
			workspace: 'Espacio de trabajo',
			owner: 'Responsable',
			status: 'Estado',
			value: 'Valor',
			refreshed: 'Datos actualizados'
		}
	} as const;

	// El layout remonta la página al cambiar de idioma: el texto no necesita ser reactivo.
	const lang = currentLang();
	const t = COPY[lang];
	const revenue = monthlyRevenue(lang);

	const STATUS_FILTERS = WORKSPACE_STATUSES.map((value) => ({
		value,
		label: WORKSPACE_STATUS[value].label[lang]
	}));

	const TREND: DashboardChartSeries[] = [
		{ key: 'current', label: t.current, color: 'primary', data: revenue },
		{
			key: 'previous',
			label: t.previous,
			color: 'secondary',
			data: revenue.map((point) => ({
				...point,
				value: Math.max(0, point.value - PREVIOUS_PERIOD_GAP)
			}))
		}
	];

	const VALUE_BY_WORKSPACE: ChartSeriesPoint[] = WORKSPACES.map((workspace) => ({
		key: String(workspace.id),
		label: workspace.name,
		value: workspace.value
	}));

	const totalValue = WORKSPACES.reduce((sum, workspace) => sum + workspace.value, 0);
	const activeCount = WORKSPACES.filter((workspace) => workspace.status === 'active').length;

	let statusFilter = $state<ToggleGroupValue[]>([]);
	let selected = $state<Workspace[]>([]);
	let loading = $state(false);
	let refreshTimer: ReturnType<typeof setTimeout> | undefined;

	// Sin estados pulsados no se filtra: la tabla muestra todos los registros.
	const visibleRecords = $derived(
		statusFilter.length === 0
			? [...WORKSPACES]
			: WORKSPACES.filter((workspace) => statusFilter.includes(workspace.status))
	);

	function currency(value: number): string {
		return formatNumber(value, {
			locale: siteLocales[lang].locale,
			style: 'currency',
			currency: siteLocales[lang].currency,
			maximumFractionDigits: 0
		});
	}

	/** Simula una recarga para mostrar las filas skeleton de la tabla. */
	function refresh(): void {
		loading = true;
		clearTimeout(refreshTimer);
		refreshTimer = setTimeout(() => {
			loading = false;
			toaster.show({ title: t.refreshed, color: 'info' });
		}, SIMULATED_LATENCY_MS);
	}

	onDestroy(() => clearTimeout(refreshTimer));
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader title={t.title} subtitle={t.subtitle} icon={ChartBar} size="xl">
		{#snippet actions()}
			<Button variant="border" icon={RefreshCw} {loading} onclick={refresh}>{t.refresh}</Button>
		{/snippet}
	</PageHeader>
	<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
		{t.notice}
		<a href={sourceUrl('src/routes/[[lang=lang]]/data/+page.svelte')} class="lumi-text--primary">
			{t.source}
		</a>.
	</p>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--columns-4-lg lumi-grid--gap-md">
		<StatCard title={t.records} value={WORKSPACES.length} icon={List} color="primary" />
		<StatCard title={t.active} value={activeCount} icon={Activity} color="success" />
		<StatCard title={t.selected} value={selected.length} icon={CircleCheck} color="secondary" />
		<StatCard title={t.total} value={currency(totalValue)} icon={Wallet} color="info" />
	</div>

	<div class="lumi-dashboard-analytics-grid">
		<DashboardSection title={t.trend} subtitle={t.trendSubtitle} icon={TrendingUp}>
			<DashboardChart series={TREND} valueFormat="number" aria-label={t.trendLabel} />
		</DashboardSection>

		<DashboardSection title={t.byWorkspace} subtitle={t.byWorkspaceSubtitle} icon={ChartBar}>
			<DashboardBarChart
				data={VALUE_BY_WORKSPACE}
				color="secondary"
				valueFormat="currency"
				aria-label={t.byWorkspaceLabel}
			/>
		</DashboardSection>
	</div>

	<DashboardSection title={t.workspaces} subtitle={t.workspacesSubtitle} icon={Building2}>
		{#snippet actions()}
			<ToggleGroup
				bind:value={statusFilter}
				options={STATUS_FILTERS}
				size="sm"
				aria-label={t.filter}
			/>
		{/snippet}
		<Table
			data={visibleRecords}
			rowKey={(row) => row.id}
			search
			selectable
			pagination
			itemsPerPage={4}
			hover
			stripe
			{loading}
			bind:selected
			searchPlaceholder={t.search}
			aria-label={t.tableLabel}
		>
			{#snippet thead()}
				<th scope="col">{t.workspace}</th>
				<th scope="col">{t.owner}</th>
				<th scope="col">{t.status}</th>
				<th scope="col" class="lumi-text--right">{t.value}</th>
			{/snippet}

			{#snippet row({ row })}
				<td class="lumi-font--medium">{row.name}</td>
				<td>{row.owner}</td>
				<td
					><Chip color={WORKSPACE_STATUS[row.status].color} size="sm"
						>{WORKSPACE_STATUS[row.status].label[lang]}</Chip
					></td
				>
				<td class="lumi-text--right">{currency(row.value)}</td>
			{/snippet}
		</Table>
	</DashboardSection>
</div>
