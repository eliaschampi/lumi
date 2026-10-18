<script lang="ts">
	import Bold from '@lucide/svelte/icons/bold';
	import Italic from '@lucide/svelte/icons/italic';
	import Plus from '@lucide/svelte/icons/plus';
	import { Button, Chip, ToggleGroup, type ToggleGroupValue } from '@lumi-ui/svelte';

	let format = $state<ToggleGroupValue[]>(['bold']);
</script>

<Button variant="filled" icon={Plus}>Crear</Button>
<Button variant="border" href="/forms">Ir al formulario</Button>
<Chip color="success">Completado</Chip>

<ToggleGroup
	bind:value={format}
	options={[
		{ value: 'bold', icon: Bold, ariaLabel: 'Negrita' },
		{ value: 'italic', icon: Italic, ariaLabel: 'Cursiva' }
	]}
	aria-label="Formato del texto"
/>
