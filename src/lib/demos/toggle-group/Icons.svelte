<script lang="ts">
	import Bold from '@lucide/svelte/icons/bold';
	import Italic from '@lucide/svelte/icons/italic';
	import Underline from '@lucide/svelte/icons/underline';
	import { ToggleGroup, type ToggleGroupValue } from '@lumi-ui/svelte';

	const STYLES = [
		{ value: 'bold', icon: Bold, ariaLabel: 'Bold' },
		{ value: 'italic', icon: Italic, ariaLabel: 'Italic' },
		{ value: 'underline', icon: Underline, ariaLabel: 'Underline' }
	];

	let styles = $state<ToggleGroupValue[]>(['bold']);
</script>

<ToggleGroup bind:value={styles} options={STYLES} size="sm" aria-label="Text style" />
