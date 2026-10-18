<script lang="ts">
	import { Alert, Button, Skeleton, Toaster, createToaster } from '@lumi-ui/svelte';

	// Una cola por app; renderiza un solo <Toaster> en el layout raíz.
	const toaster = createToaster();
	let visible = $state(true);
</script>

<Toaster {toaster} />
<Button onclick={() => toaster.show({ title: 'Cambios guardados', color: 'success' })}>
	Guardar
</Button>

<Alert color="info" title="Sincronización activa" closable bind:active={visible}>
	Una alerta permanece en el flujo hasta que deja de ser relevante.
</Alert>

<div aria-busy="true">
	<Skeleton shape="circle" width="2.5rem" />
	<Skeleton lines={3} />
</div>
