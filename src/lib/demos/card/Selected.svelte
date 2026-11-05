<script lang="ts">
	import { Card } from '@lumi-ui/svelte';

	const PLANS = ['Monthly', 'Yearly'];

	let plan = $state('Monthly');
</script>

<div class="lumi-grid lumi-grid--cards lumi-grid--gap-md">
	{#each PLANS as name (name)}
		<Card clickable selected={name === plan} title={name} spaced onclick={() => (plan = name)} />
	{/each}
</div>
