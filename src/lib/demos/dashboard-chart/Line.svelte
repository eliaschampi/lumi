<script lang="ts">
	import { DashboardChart } from '@lumi-ui/svelte';

	const series = [
		{
			key: 'sales',
			label: 'Sales',
			color: 'primary' as const,
			data: [
				{ key: 'jan', label: 'Jan', value: 18 },
				{ key: 'feb', label: 'Feb', value: 25 },
				{ key: 'mar', label: 'Mar', value: 31 }
			]
		}
	];
</script>

<DashboardChart {series} aria-label="Monthly sales" />
