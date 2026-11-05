<script lang="ts">
	import { DashboardDonutChart } from '@lumi-ui/svelte';

	const data = [
		{ key: 'paid', label: 'Paid', value: 72, color: 'success' as const },
		{ key: 'pending', label: 'Pending', value: 28, color: 'warning' as const }
	];
</script>

<DashboardDonutChart {data} centerLabel="Orders" centerValue="100" aria-label="Order status" />
