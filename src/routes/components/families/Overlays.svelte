<script lang="ts">
	import MousePointerClick from '@lucide/svelte/icons/mouse-pointer-click';
	import EllipsisVertical from '@lucide/svelte/icons/ellipsis-vertical';
	import Folder from '@lucide/svelte/icons/folder';
	import Settings from '@lucide/svelte/icons/settings';
	import Share2 from '@lucide/svelte/icons/share-2';
	import Trash from '@lucide/svelte/icons/trash';
	import {
		Button,
		Context,
		ContextItem,
		DashboardSection,
		Dialog,
		Dropdown,
		DropdownItem,
		type IconComponent
	} from '@lumi-ui/svelte';
	import { WORKSPACES } from '$lib/demo';
	import { toaster } from '$lib/toaster';

	interface MenuAction {
		label: string;
		icon: IconComponent;
		danger?: boolean;
	}

	/** Mismas acciones en el menú anclado y en el contextual. */
	const ACTIONS: readonly MenuAction[] = [
		{ label: 'Abrir', icon: Folder },
		{ label: 'Compartir', icon: Share2 },
		{ label: 'Configuración', icon: Settings },
		{ label: 'Eliminar', icon: Trash, danger: true }
	];
	const TARGET = WORKSPACES[0].name;

	let dialogOpen = $state(false);
	let nestedDialogOpen = $state(false);
	let contextMenu = $state<Context>();
	let lastAction = $state('');

	function run(action: MenuAction, target: unknown): void {
		lastAction = `${action.label}: ${String(target)}`;
		toaster.show({
			title: lastAction,
			message: action.danger ? 'Simulación: no se eliminó nada.' : undefined,
			color: action.danger ? 'warning' : 'primary'
		});
	}

	/** El botón abre el mismo menú contextual bajo sí mismo, para teclado y táctil. */
	function openContextFrom(event: MouseEvent): void {
		if (!(event.currentTarget instanceof HTMLElement)) return;
		const rect = event.currentTarget.getBoundingClientRect();
		contextMenu?.open(
			new MouseEvent('contextmenu', { clientX: rect.left, clientY: rect.bottom }),
			TARGET
		);
	}
</script>

<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
	<DashboardSection title="Dialog" subtitle="Foco, Escape y diálogos anidados">
		<div>
			<Button variant="filled" onclick={() => (dialogOpen = true)}>Abrir diálogo</Button>
		</div>
		<Dialog bind:open={dialogOpen} title="Primer diálogo" closeLabel="Cerrar primer diálogo">
			<p>El último diálogo abierto recibe el foco. Escape cierra primero el diálogo superior.</p>
			{#snippet footer()}
				<Button variant="border" onclick={() => (nestedDialogOpen = true)}>
					Abrir segundo diálogo
				</Button>
			{/snippet}
		</Dialog>
		<Dialog
			bind:open={nestedDialogOpen}
			title="Segundo diálogo"
			closeLabel="Cerrar segundo diálogo"
		>
			<p>Ciérralo para volver al primer diálogo.</p>
		</Dialog>
	</DashboardSection>

	<DashboardSection title="Dropdown" subtitle="Menú anclado a un disparador">
		<div class="lumi-flex lumi-flex--wrap lumi-align-items--center lumi-flex--gap-sm">
			<Dropdown aria-label={`Acciones de ${TARGET}`}>
				{#snippet trigger(props)}
					<Button {...props} variant="border" icon={EllipsisVertical} iconAfter>Acciones</Button>
				{/snippet}
				{#each ACTIONS as action (action.label)}
					<DropdownItem
						icon={action.icon}
						color={action.danger ? 'danger' : undefined}
						onclick={() => run(action, TARGET)}
					>
						{action.label}
					</DropdownItem>
				{/each}
			</Dropdown>
			<span class="lumi-text--sm lumi-text--muted">Se abre con clic, Enter o flechas.</span>
		</div>
	</DashboardSection>

	<DashboardSection title="Menú contextual" subtitle="Clic derecho o mantener pulsado">
		<div
			class="lumi-scroll-well lumi-stack lumi-stack--sm"
			role="group"
			aria-label="Zona con menú contextual"
			oncontextmenu={(event) => contextMenu?.open(event, TARGET)}
		>
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
				Haz clic derecho en esta zona o usa el botón para abrir el mismo menú.
			</p>
			<div>
				<Button variant="border" icon={MousePointerClick} onclick={openContextFrom}
					>Abrir menú contextual</Button
				>
			</div>
		</div>
		<p class="lumi-text--sm lumi-margin--none">
			Última acción: <strong>{lastAction || 'ninguna'}</strong>
		</p>
		<Context bind:this={contextMenu} aria-label="Menú contextual de demostración">
			{#snippet children({ data })}
				{#each ACTIONS as action (action.label)}
					<ContextItem
						icon={action.icon}
						title={action.label}
						color={action.danger ? 'danger' : undefined}
						onclick={() => run(action, data)}
					/>
				{/each}
			{/snippet}
		</Context>
	</DashboardSection>

	<DashboardSection title="Cuándo usar cada overlay" subtitle="Un rol por interacción">
		<ul class="lumi-stack lumi-stack--xs lumi-margin--none lumi-text--sm lumi-text--muted">
			<li><code>Dialog</code>: interrupción modal que exige atención.</li>
			<li><code>Dropdown</code>: menú anclado a un disparador.</li>
			<li><code>Context</code>: menú por puntero sobre un elemento.</li>
			<li><code>Tooltip</code>: descripción suplementaria, nunca acciones.</li>
		</ul>
		<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
			Todos se portan fuera de contenedores recortados y conservan foco y teclado.
		</p>
	</DashboardSection>
</div>
