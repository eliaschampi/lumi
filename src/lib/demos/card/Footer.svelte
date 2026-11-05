<script lang="ts">
	import { Button, Card } from '@lumi-ui/svelte';
</script>

<Card title="Team plan" subtitle="Up to ten people" spaced>
	<p class="lumi-margin--none">Shared workspaces and priority support.</p>

	{#snippet footer()}
		<div class="lumi-flex lumi-justify--end lumi-flex--gap-sm">
			<Button variant="ghost">Compare plans</Button>
			<Button variant="filled">Choose plan</Button>
		</div>
	{/snippet}
</Card>
