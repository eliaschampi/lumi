<script lang="ts">
	import {
		Alert,
		Button,
		Card,
		Checkbox,
		Fieldset,
		Input,
		NumberInput,
		PageHeader,
		SegmentedControl,
		Select,
		Slider,
		Switch,
		Textarea
	} from '@lumi-ui/svelte';
	import { repositoryUrl } from '$lib/site';

	let name = $state('Lumi Workspace');
	let email = $state('hello@example.com');
	let seats = $state(12);
	let region = $state<string | number | Record<string, unknown> | null>('Lima');
	let plan = $state<string | number>('team');
	let notes = $state('Una interfaz tranquila, clara y consistente.');
	let notifications = $state(true);
	let analytics = $state(false);
	let capacity = $state(68);
	let submitted = $state(false);

	const planOptions = [
		{ value: 'starter', label: 'Starter', icon: 'sparkles' },
		{ value: 'team', label: 'Team', icon: 'users' },
		{ value: 'scale', label: 'Scale', icon: 'trendingUp' }
	];

	function submitForm(event: SubmitEvent): void {
		event.preventDefault();
		submitted = true;
	}

	function resetForm(): void {
		name = 'Lumi Workspace';
		email = 'hello@example.com';
		seats = 12;
		region = 'Lima';
		plan = 'team';
		notes = 'Una interfaz tranquila, clara y consistente.';
		notifications = true;
		analytics = false;
		capacity = 68;
		submitted = false;
	}
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Formularios"
		subtitle="Prueba controles conectados, validación nativa y restablecimiento."
		level={1}
		icon="clipboardPenLine"
		size="xl"
	/>
	<p class="lumi-text--sm lumi-text--muted">
		Este formulario usa datos ficticios y no envía información a un servidor. <a
			href={`${repositoryUrl}/blob/main/src/routes/forms/+page.svelte`}
			class="lumi-text--primary">Ver código completo</a
		>.
	</p>

	{#if submitted}
		<Alert color="success" title="Demostración completada" closable bind:active={submitted}>
			El formulario es válido. Los valores solo se conservan mientras visitas esta página.
		</Alert>
	{/if}

	<Card
		title="Configurar un espacio de trabajo"
		subtitle="Todos los controles se pueden probar"
		spaced
	>
		<form class="lumi-stack lumi-stack--lg" onsubmit={submitForm}>
			<Fieldset legend="Identidad">
				<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-md">
					<Input bind:value={name} name="name" label="Nombre" icon="building" required />
					<Input bind:value={email} name="email" type="email" label="Correo" icon="mail" required />
					<NumberInput bind:value={seats} name="seats" label="Miembros" min={1} max={100} />
					<Select
						bind:value={region}
						name="region"
						label="Región"
						options={['Lima', 'Cusco', 'Arequipa', 'Trujillo']}
						autocomplete
					/>
				</div>
			</Fieldset>

			<Fieldset legend="Plan">
				<SegmentedControl
					bind:value={plan}
					options={planOptions}
					fullWidth
					aria-label="Plan del espacio de trabajo"
				/>
			</Fieldset>

			<Fieldset legend="Preferencias">
				<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
					<div class="lumi-stack lumi-stack--md">
						<Switch bind:checked={notifications} label="Notificaciones de actividad" />
						<Checkbox bind:checked={analytics} label="Compartir métricas anónimas" />
					</div>
					<Slider
						bind:value={capacity}
						label="Capacidad objetivo"
						min={0}
						max={100}
						showValue
						showTooltip
					/>
				</div>
			</Fieldset>

			<Textarea bind:value={notes} name="notes" label="Notas" rows={4} maxlength={240} showCount />

			<div class="lumi-flex lumi-flex--wrap lumi-justify--end lumi-flex--gap-sm">
				<Button variant="flat" onclick={resetForm}>Restablecer ejemplo</Button>
				<Button
					variant="filled"
					icon="check"
					type="submit"
					disabled={!name.trim() || !email.trim()}
				>
					Guardar cambios
				</Button>
			</div>
		</form>
	</Card>
</div>
