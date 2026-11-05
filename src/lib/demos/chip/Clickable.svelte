<script lang="ts">
	import { Chip } from '@lumi-ui/svelte';

	const CATEGORIES = ['All', 'Shoes', 'Bags', 'Hats'];

	let category = $state('All');
</script>

<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-xs">
	{#each CATEGORIES as name (name)}
		<Chip color={name === category ? 'primary' : 'secondary'} onclick={() => (category = name)}>
			{name}
		</Chip>
	{/each}
</div>
