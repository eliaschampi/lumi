<script lang="ts">
	import { TagOption } from '@lumi-ui/svelte';

	const SIZES = ['Small', 'Medium', 'Large'];

	let size = $state('Medium');
</script>

<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-xs">
	{#each SIZES as name (name)}
		<TagOption label={name} selected={name === size} onclick={() => (size = name)} />
	{/each}
</div>
