<script lang="ts">
	import { DashboardBarChart } from '@lumi-ui/svelte';

	const data = [
		{ key: 'north', label: 'North', value: 42 },
		{ key: 'south', label: 'South', value: 28 },
		{ key: 'east', label: 'East', value: 35 }
	];
</script>

<DashboardBarChart {data} color="secondary" aria-label="Sales by region" />
