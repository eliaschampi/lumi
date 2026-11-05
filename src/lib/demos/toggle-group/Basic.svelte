<script lang="ts">
	import { ToggleGroup, type ToggleGroupValue } from '@lumi-ui/svelte';

	const CHANNELS = [
		{ value: 'email', label: 'Email' },
		{ value: 'sms', label: 'SMS' },
		{ value: 'push', label: 'Push' }
	];

	let channels = $state<ToggleGroupValue[]>(['email']);
</script>

<ToggleGroup bind:value={channels} options={CHANNELS} aria-label="Channels" />
