<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import { Button, EmptyState } from '@lumi-ui/svelte';
</script>

<EmptyState icon={Search} title="No results" description="Try another word or clear the filters.">
	{#snippet actions()}
		<Button variant="border">Clear filters</Button>
	{/snippet}
</EmptyState>
