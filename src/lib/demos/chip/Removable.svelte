<script lang="ts">
	import { Chip } from '@lumi-ui/svelte';

	let filters = $state(['Paid', 'This week', 'Cash']);

	function remove(filter: string): void {
		filters = filters.filter((item) => item !== filter);
	}
</script>

<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-xs">
	{#each filters as filter (filter)}
		<Chip size="sm" closable closeLabel={`Remove filter: ${filter}`} onclose={() => remove(filter)}>
			{filter}
		</Chip>
	{/each}
</div>
