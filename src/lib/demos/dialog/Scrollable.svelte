<script lang="ts">
	import { Button, Dialog } from '@lumi-ui/svelte';

	const CHAPTERS = Array.from({ length: 40 }, (_, index) => `Chapter ${index + 1}`);

	let open = $state(false);
</script>

<Button variant="border" onclick={() => (open = true)}>Read the policy</Button>

<Dialog bind:open title="Privacy policy" scrollable>
	{#each CHAPTERS as chapter (chapter)}
		<p>{chapter}</p>
	{/each}
</Dialog>
