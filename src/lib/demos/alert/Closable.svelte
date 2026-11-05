<script lang="ts">
	import { Alert, Button } from '@lumi-ui/svelte';

	let visible = $state(true);
</script>

{#if visible}
	<Alert color="success" closable bind:active={visible}>The report is ready.</Alert>
{:else}
	<Button variant="border" size="sm" onclick={() => (visible = true)}>Show again</Button>
{/if}
