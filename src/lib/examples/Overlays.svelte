<script lang="ts">
	import { Button, Dialog } from '@lumi-ui/svelte';

	let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Abrir diálogo</Button>
<Dialog bind:open title="Un diálogo sencillo" closeLabel="Cerrar diálogo">
	<p>El foco permanece en el diálogo. Pulsa Escape para cerrarlo.</p>
</Dialog>
