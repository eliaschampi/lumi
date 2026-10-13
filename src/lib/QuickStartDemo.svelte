<script lang="ts">
	import { Alert, Button, Card, Input, Title } from '@lumi-ui/svelte';

	let name = $state('Mi proyecto');
	let saved = $state(false);
</script>

<Card spaced>
	{#snippet header()}
		<Title
			title="Tu primera interfaz"
			subtitle="Prueba los componentes aquí mismo"
			level={2}
			size="md"
		/>
	{/snippet}
	<div class="lumi-stack lumi-stack--md">
		<Input bind:value={name} label="Nombre del proyecto" placeholder="Escribe un nombre" />
		<Button variant="filled" icon="check" disabled={!name.trim()} onclick={() => (saved = true)}>
			Probar interacción
		</Button>
		{#if saved}
			<Alert color="success" title="¡Funciona!" closable bind:active={saved}>
				{name.trim()} está listo. Este ejemplo solo guarda estado en tu navegador.
			</Alert>
		{/if}
	</div>
</Card>
