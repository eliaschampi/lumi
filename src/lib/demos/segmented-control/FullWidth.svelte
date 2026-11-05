<script lang="ts">
	import { SegmentedControl } from '@lumi-ui/svelte';

	const OPTIONS = [
		{ value: 'in', label: 'Income' },
		{ value: 'out', label: 'Expense' }
	];

	let type = $state<string | number>('in');
</script>

<SegmentedControl bind:value={type} options={OPTIONS} fullWidth aria-label="Movement type" />
