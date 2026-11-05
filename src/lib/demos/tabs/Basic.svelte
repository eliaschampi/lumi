<script lang="ts">
	import { Tabs } from '@lumi-ui/svelte';

	const TABS = [
		{ value: 'profile', label: 'Profile' },
		{ value: 'orders', label: 'Orders' },
		{ value: 'notes', label: 'Notes', disabled: true }
	];

	let tab = $state<string | number>('profile');
</script>

<Tabs bind:value={tab} tabs={TABS} aria-label="Customer sections">
	{#if tab === 'profile'}
		<p class="lumi-margin--none">Contact details go here.</p>
	{:else}
		<p class="lumi-margin--none">Recent orders go here.</p>
	{/if}
</Tabs>
