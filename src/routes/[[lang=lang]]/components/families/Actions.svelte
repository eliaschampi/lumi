<script lang="ts">
	import Bold from '@lucide/svelte/icons/bold';
	import Check from '@lucide/svelte/icons/check';
	import Clock from '@lucide/svelte/icons/clock';
	import Info from '@lucide/svelte/icons/info';
	import Italic from '@lucide/svelte/icons/italic';
	import Pencil from '@lucide/svelte/icons/pencil';
	import Plus from '@lucide/svelte/icons/plus';
	import RefreshCw from '@lucide/svelte/icons/refresh-cw';
	import Settings from '@lucide/svelte/icons/settings';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Trash from '@lucide/svelte/icons/trash';
	import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
	import Underline from '@lucide/svelte/icons/underline';
	import {
		Button,
		Chip,
		Collapse,
		DashboardSection,
		ToggleGroup,
		Tooltip,
		type ToggleGroupValue
	} from '@lumi-ui/svelte';
	import { resolve } from '$app/paths';
	import { toaster } from '$lib/toaster';

	const FORMAT_OPTIONS = [
		{ value: 'bold', icon: Bold, ariaLabel: 'Negrita' },
		{ value: 'italic', icon: Italic, ariaLabel: 'Cursiva' },
		{ value: 'underline', icon: Underline, ariaLabel: 'Subrayado' }
	];
	const CHANNEL_OPTIONS = [
		{ value: 'email', label: 'Correo' },
		{ value: 'push', label: 'Push' },
		{ value: 'sms', label: 'SMS' }
	];

	let format = $state<ToggleGroupValue[]>(['bold']);
	let channels = $state<ToggleGroupValue[]>(['email', 'push']);
	let infoChipVisible = $state(true);
	let pinned = $state(false);

	function act(action: string): void {
		toaster.show({ title: `Acción: ${action}`, message: 'Esta demostración no modifica datos.' });
	}
</script>

<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
	<DashboardSection title="Botones" subtitle="Variantes por jerarquía de acción">
		<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
			<Button variant="filled" icon={Plus} onclick={() => act('Crear')}>Crear</Button>
			<Button variant="filled" color="success" icon={Check} onclick={() => act('Confirmar')}>
				Confirmar
			</Button>
			<Button variant="border" icon={Pencil} onclick={() => act('Editar')}>Editar</Button>
			<Button variant="flat" icon={RefreshCw} onclick={() => act('Actualizar')}>Actualizar</Button>
			<Button variant="ghost" color="danger" icon={Trash} onclick={() => act('Eliminar')}>
				Eliminar
			</Button>
			<Button variant="gradient" color="warning" icon={Sparkles} onclick={() => act('Gradiente')}>
				Gradiente
			</Button>
			<Button variant="filled" loading>Procesando</Button>
		</div>
		<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
			<Button variant="border" href={resolve('/forms')}>Enlace con aspecto de botón</Button>
			<Button variant="border" pressed={pinned} onclick={() => (pinned = !pinned)}>
				{pinned ? 'Fijado' : 'Fijar'}
			</Button>
		</div>
	</DashboardSection>

	<DashboardSection title="ToggleGroup" subtitle="Varias opciones independientes a la vez">
		<div class="lumi-stack lumi-stack--md">
			<ToggleGroup bind:value={format} options={FORMAT_OPTIONS} aria-label="Formato del texto" />
			<ToggleGroup
				bind:value={channels}
				options={CHANNEL_OPTIONS}
				color="secondary"
				aria-label="Canales de aviso"
			/>
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
				Canales activos: {channels.length
					? CHANNEL_OPTIONS.filter((option) => channels.includes(option.value))
							.map((option) => option.label)
							.join(', ')
					: 'ninguno'}
			</p>
		</div>
	</DashboardSection>

	<DashboardSection title="Chips" subtitle="Etiquetas y estados compactos">
		<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
			<Chip color="primary" icon={Sparkles}>Principal</Chip>
			<Chip color="secondary">Secundario</Chip>
			<Chip color="success" icon={Check}>Completado</Chip>
			<Chip color="warning" icon={Clock}>Pendiente</Chip>
			<Chip color="danger" icon={TriangleAlert}>Bloqueado</Chip>
			{#if infoChipVisible}
				<Chip color="info" closable onclose={() => (infoChipVisible = false)}>Información</Chip>
			{/if}
		</div>
	</DashboardSection>

	<DashboardSection title="Ayuda contextual" subtitle="Aparece al enfocar o señalar">
		<div class="lumi-stack lumi-stack--md">
			<div class="lumi-flex lumi-align-items--center lumi-flex--gap-sm">
				<Tooltip text="Puedes abrir esta ayuda con el teclado o el puntero.">
					<Button variant="border" icon={Info}>Mostrar ayuda</Button>
				</Tooltip>
				<Tooltip text="Abre los ajustes de la demostración.">
					<Button
						variant="filled"
						icon={Settings}
						aria-label="Configurar"
						onclick={() => act('Configurar')}
					/>
				</Tooltip>
			</div>
			<Collapse title="¿Por qué composición?" color="primary" open>
				<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
					Las primitivas pequeñas mantienen APIs claras y permiten construir interfaces diferentes.
				</p>
			</Collapse>
		</div>
	</DashboardSection>
</div>
