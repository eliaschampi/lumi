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
		MONTHLY_REVENUE,
		PREVIOUS_PERIOD_GAP,
		SIMULATED_LATENCY_MS,
		WORKSPACES,
		WORKSPACE_STATUS,
		WORKSPACE_STATUSES,
		type Workspace
	} from '$lib/demo';
	import { siteLocale, sourceUrl } from '$lib/site';
	import { toaster } from '$lib/toaster';

	const STATUS_FILTERS = WORKSPACE_STATUSES.map((value) => ({
		value,
		label: WORKSPACE_STATUS[value].label
	}));

	const TREND: DashboardChartSeries[] = [
		{ key: 'current', label: 'Periodo actual', color: 'primary', data: [...MONTHLY_REVENUE] },
		{
			key: 'previous',
			label: 'Periodo anterior',
			color: 'secondary',
			data: MONTHLY_REVENUE.map((point) => ({
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
			locale: siteLocale.locale,
			style: 'currency',
			currency: siteLocale.currency,
			maximumFractionDigits: 0
		});
	}

	/** Simula una recarga para mostrar las filas skeleton de la tabla. */
	function refresh(): void {
		loading = true;
		clearTimeout(refreshTimer);
		refreshTimer = setTimeout(() => {
			loading = false;
			toaster.show({ title: 'Datos actualizados', color: 'info' });
		}, SIMULATED_LATENCY_MS);
	}

	onDestroy(() => clearTimeout(refreshTimer));
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Datos"
		subtitle="Busca, filtra, selecciona y pagina una tabla junto a gráficos de ejemplo."
		icon={ChartBar}
		size="xl"
	>
		{#snippet actions()}
			<Button variant="border" icon={RefreshCw} {loading} onclick={refresh}>Actualizar</Button>
		{/snippet}
	</PageHeader>
	<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
		Los nombres, importes y métricas son ficticios.
		<a href={sourceUrl('src/routes/data/+page.svelte')} class="lumi-text--primary"
			>Ver código completo</a
		>.
	</p>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--columns-4-lg lumi-grid--gap-md">
		<StatCard title="Registros" value={WORKSPACES.length} icon={List} color="primary" />
		<StatCard title="Activos" value={activeCount} icon={Activity} color="success" />
		<StatCard title="Seleccionados" value={selected.length} icon={CircleCheck} color="secondary" />
		<StatCard title="Valor total" value={currency(totalValue)} icon={Wallet} color="info" />
	</div>

	<div class="lumi-dashboard-analytics-grid">
		<DashboardSection
			title="Evolución"
			subtitle="Ingresos mensuales, en miles de soles"
			icon={TrendingUp}
		>
			<DashboardChart
				series={TREND}
				valueFormat="number"
				aria-label="Comparación mensual de ingresos entre periodos"
			/>
		</DashboardSection>

		<DashboardSection
			title="Valor por espacio"
			subtitle="Importe actual de cada espacio"
			icon={ChartBar}
		>
			<DashboardBarChart
				data={VALUE_BY_WORKSPACE}
				color="secondary"
				valueFormat="currency"
				aria-label="Valor actual por espacio de trabajo"
			/>
		</DashboardSection>
	</div>

	<DashboardSection
		title="Espacios de trabajo"
		subtitle="Listado local con búsqueda, filtros, selección y paginación"
		icon={Building2}
	>
		{#snippet actions()}
			<ToggleGroup
				bind:value={statusFilter}
				options={STATUS_FILTERS}
				size="sm"
				aria-label="Filtrar por estado"
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
			searchPlaceholder="Buscar espacio de trabajo"
			aria-label="Espacios de trabajo de demostración"
		>
			{#snippet thead()}
				<th scope="col">Espacio de trabajo</th>
				<th scope="col">Responsable</th>
				<th scope="col">Estado</th>
				<th scope="col" class="lumi-text--right">Valor</th>
			{/snippet}

			{#snippet row({ row })}
				<td class="lumi-font--medium">{row.name}</td>
				<td>{row.owner}</td>
				<td
					><Chip color={WORKSPACE_STATUS[row.status].color} size="sm"
						>{WORKSPACE_STATUS[row.status].label}</Chip
					></td
				>
				<td class="lumi-text--right">{currency(row.value)}</td>
			{/snippet}
		</Table>
	</DashboardSection>
</div>
