<script lang="ts">
	import Trash2 from '@lucide/svelte/icons/trash-2';
	import { Button, Dialog } from '@lumi-ui/svelte';

	let open = $state(false);
</script>

<Button variant="border" color="danger" icon={Trash2} onclick={() => (open = true)}>
	Delete record
</Button>

<Dialog bind:open title="Delete this record?" size="sm">
	<p class="lumi-margin--none">You cannot undo this action.</p>

	{#snippet footer()}
		<Button variant="ghost" onclick={() => (open = false)}>Cancel</Button>
		<Button variant="filled" color="danger" onclick={() => (open = false)}>Delete</Button>
	{/snippet}
</Dialog>
