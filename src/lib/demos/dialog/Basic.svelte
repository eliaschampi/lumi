<script lang="ts">
	import { Button, Dialog } from '@lumi-ui/svelte';

	let open = $state(false);
</script>

<Button variant="border" onclick={() => (open = true)}>Open dialog</Button>

<Dialog bind:open title="Terms of use" size="sm">
	<p class="lumi-margin--none">Close this with the button, the Escape key or the backdrop.</p>
</Dialog>
