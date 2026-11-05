<script lang="ts">
	import LayoutGrid from '@lucide/svelte/icons/layout-grid';
	import List from '@lucide/svelte/icons/list';
	import { SegmentedControl } from '@lumi-ui/svelte';

	const VIEWS = [
		{ value: 'grid', icon: LayoutGrid, ariaLabel: 'Grid view' },
		{ value: 'list', icon: List, ariaLabel: 'List view' }
	];

	let view = $state<string | number>('grid');
</script>

<SegmentedControl bind:value={view} options={VIEWS} iconOnly size="sm" aria-label="View" />
