<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import { Alert, Button, Card, Input } from '@lumi-ui/svelte';

	let name = $state('Mi proyecto');
	let saved = $state(false);
</script>

<Card title="Tu primera interfaz" subtitle="Prueba los componentes aquí mismo" spaced>
	<form
		class="lumi-stack lumi-stack--md"
		onsubmit={(event) => {
			event.preventDefault();
			saved = true;
		}}
	>
		<Input bind:value={name} name="project" label="Nombre del proyecto" required clearable />
		<Button type="submit" variant="filled" icon={Check} disabled={!name.trim()}>
			Probar interacción
		</Button>
		{#if saved}
			<Alert color="success" title="¡Funciona!" closable bind:active={saved}>
				{name.trim()} está listo. Este ejemplo solo guarda estado en tu navegador.
			</Alert>
		{/if}
	</form>
</Card>
