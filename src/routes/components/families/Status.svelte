<script lang="ts">
	import Inbox from '@lucide/svelte/icons/inbox';
	import {
		Alert,
		Button,
		DashboardSection,
		EmptyState,
		ErrorState,
		Loading,
		Progress,
		Skeleton,
		StatusIndicator,
		Switch,
		UserInfo,
		type NotificationColor,
		type StatusIndicatorStatus
	} from '@lumi-ui/svelte';
	import { resolve } from '$app/paths';
	import { toaster } from '$lib/toaster';

	const TOASTS: readonly { color: NotificationColor; label: string; title: string }[] = [
		{ color: 'success', label: 'Éxito', title: 'Datos guardados' },
		{ color: 'warning', label: 'Advertencia', title: 'Revisa los campos marcados' },
		{ color: 'info', label: 'Información', title: 'Sincronización en curso' },
		{ color: 'danger', label: 'Error', title: 'No se pudo completar la acción' }
	];

	const STATUSES: readonly { status: StatusIndicatorStatus; label: string; pulse?: boolean }[] = [
		{ status: 'success', label: 'En línea', pulse: true },
		{ status: 'warning', label: 'Pendiente' },
		{ status: 'danger', label: 'Con error' },
		{ status: 'info', label: 'Sincronizando', pulse: true },
		{ status: 'primary', label: 'Disponible' },
		{ status: 'secondary', label: 'Auxiliar' }
	];

	let alertVisible = $state(true);
	let profileLoading = $state(true);
</script>

<div class="lumi-stack lumi-stack--lg">
	{#if alertVisible}
		<Alert color="info" title="Estado informativo" closable bind:active={alertVisible}>
			Una alerta permanece dentro del flujo hasta que deja de ser relevante.
		</Alert>
	{/if}

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
		<DashboardSection title="Toaster" subtitle="Avisos transitorios en una cola única">
			<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
				{#each TOASTS as toast (toast.color)}
					<Button
						variant="border"
						size="sm"
						onclick={() =>
							toaster.show({
								title: toast.title,
								message: 'Aviso de demostración.',
								color: toast.color
							})}
					>
						{toast.label}
					</Button>
				{/each}
			</div>
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
				El layout raíz renderiza un solo <code>&lt;Toaster&gt;</code>; cualquier página llama a
				<code>toaster.show()</code>. Los avisos se pausan al señalarlos o enfocarlos.
			</p>
		</DashboardSection>

		<DashboardSection title="Skeleton" subtitle="Carga con una estructura conocida">
			{#snippet actions()}
				<Switch bind:checked={profileLoading} label="Cargando" size="sm" />
			{/snippet}
			<div aria-busy={profileLoading}>
				{#if profileLoading}
					<div class="lumi-flex lumi-align-items--center lumi-flex--gap-md">
						<Skeleton shape="circle" width="var(--lumi-space-3xl)" height="var(--lumi-space-3xl)" />
						<div class="lumi-flex-item--grow">
							<Skeleton lines={2} />
						</div>
					</div>
				{:else}
					<UserInfo
						name="Ana Torres"
						description="Diseñadora de interfaces"
						color="primary"
						size="lg"
					/>
				{/if}
			</div>
		</DashboardSection>

		<DashboardSection title="Progreso" subtitle="Estados determinados e indeterminados">
			<Progress value={72} color="primary" showLabel aria-label="Progreso de la tarea" />
			<Progress value={48} color="secondary" striped animated aria-label="Subida de archivos" />
			<Progress indeterminate color="info" aria-label="Sincronizando" />
		</DashboardSection>

		<DashboardSection title="Loading" subtitle="Indicadores locales cuando no hay estructura">
			<div class="lumi-flex lumi-flex--wrap lumi-align-items--center lumi-flex--gap-lg">
				<Loading color="primary" />
				<Loading color="secondary" size="sm" text="Cargando datos" />
				<Loading color="info" size="lg" text="Procesando" />
			</div>
		</DashboardSection>

		<DashboardSection title="Sin contenido" subtitle="Orientación cuando no hay elementos">
			<EmptyState
				icon={Inbox}
				iconColor="muted"
				title="Sin elementos"
				description="Los nuevos elementos aparecerán aquí cuando estén disponibles."
			/>
		</DashboardSection>

		<DashboardSection title="Estados de error" subtitle="Recuperación visible desde la página">
			<ErrorState
				status={404}
				message="Recurso de demostración no encontrado."
				homeHref={resolve('/')}
			/>
		</DashboardSection>

		<DashboardSection
			title="StatusIndicator"
			subtitle="Puntos semánticos, siempre con texto"
			class="lumi-grid-item--span-all"
		>
			<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-lg">
				{#each STATUSES as item (item.status)}
					<span class="lumi-flex lumi-align-items--center lumi-flex--gap-xs">
						<StatusIndicator status={item.status} pulse={item.pulse} />
						<span class="lumi-text--sm">{item.label}</span>
					</span>
				{/each}
			</div>
		</DashboardSection>
	</div>
</div>
