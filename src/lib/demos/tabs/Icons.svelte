<script lang="ts">
	import Bell from '@lucide/svelte/icons/bell';
	import Settings from '@lucide/svelte/icons/settings';
	import { Tabs } from '@lumi-ui/svelte';

	const TABS = [
		{ value: 'general', label: 'General', icon: Settings },
		{ value: 'alerts', label: 'Alerts', icon: Bell }
	];

	let tab = $state<string | number>('general');
</script>

<Tabs bind:value={tab} tabs={TABS} orientation="vertical" color="secondary" aria-label="Settings">
	<p class="lumi-margin--none">The selected panel goes here.</p>
</Tabs>
