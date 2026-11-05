<script lang="ts">
	import { Checkbox } from '@lumi-ui/svelte';

	const CHANNELS = ['Email', 'SMS', 'Push'];

	let chosen = $state<string[]>(['Email']);
	const all = $derived(chosen.length === CHANNELS.length);

	function toggle(channel: string, checked: boolean): void {
		chosen = checked ? [...chosen, channel] : chosen.filter((item) => item !== channel);
	}
</script>

<div class="lumi-stack lumi-stack--xs">
	<Checkbox
		checked={all}
		indeterminate={!all && chosen.length > 0}
		label="All channels"
		onchange={(checked) => (chosen = checked ? [...CHANNELS] : [])}
	/>
	{#each CHANNELS as channel (channel)}
		<Checkbox
			checked={chosen.includes(channel)}
			label={channel}
			onchange={(checked) => toggle(channel, checked)}
		/>
	{/each}
</div>
