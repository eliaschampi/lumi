<script lang="ts">
	import Building from '@lucide/svelte/icons/building';
	import Check from '@lucide/svelte/icons/check';
	import ClipboardPenLine from '@lucide/svelte/icons/clipboard-pen-line';
	import Mail from '@lucide/svelte/icons/mail';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import Users from '@lucide/svelte/icons/users';
	import { tick } from 'svelte';
	import {
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
		Textarea,
		Title,
		type SelectValue
	} from '@lumi-ui/svelte';
	import { sourceUrl } from '$lib/site';
	import { toaster } from '$lib/toaster';

	const DEFAULTS = {
		name: 'Lumi Workspace',
		email: 'hello@example.com',
		seats: 12,
		region: 'Lima' as SelectValue | null,
		plan: 'team' as string | number,
		notes: 'Una interfaz tranquila, clara y consistente.',
		notifications: true,
		analytics: false,
		capacity: 68
	};

	// Límites del formulario: los controles y sus mensajes leen de aquí.
	const LIMITS = {
		seats: { min: 1, max: 100 },
		capacity: { min: 0, max: 100 },
		notes: 240
	} as const;

	const REGIONS = ['Lima', 'Cusco', 'Arequipa', 'Trujillo'];
	const PLANS = [
		{ value: 'starter', label: 'Starter', icon: Sparkles },
		{ value: 'team', label: 'Team', icon: Users },
		{ value: 'scale', label: 'Scale', icon: TrendingUp }
	];
	const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	let form: HTMLFormElement;
	let values = $state({ ...DEFAULTS });
	// Los errores aparecen tras el primer envío y se actualizan mientras se corrige.
	let attempted = $state(false);

	const errors = $derived({
		name: attempted && !values.name.trim() ? 'Escribe un nombre para el espacio.' : undefined,
		email:
			attempted && !EMAIL.test(values.email.trim())
				? 'Escribe un correo válido, por ejemplo ana@empresa.com.'
				: undefined
	});

	async function submit(event: SubmitEvent): Promise<void> {
		event.preventDefault();
		attempted = true;
		if (errors.name || errors.email) {
			await tick();
			form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
			return;
		}
		toaster.show({
			title: 'Demostración completada',
			message: `«${values.name.trim()}» es válido. Nada se envió a un servidor.`,
			color: 'success'
		});
	}

	function reset(): void {
		values = { ...DEFAULTS };
		attempted = false;
	}
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Formularios"
		subtitle="Controles conectados, validación con mensajes de campo y restablecimiento."
		icon={ClipboardPenLine}
		size="xl"
	/>
	<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
		Este formulario usa datos ficticios y no envía información a un servidor.
		<a href={sourceUrl('src/routes/forms/+page.svelte')} class="lumi-text--primary"
			>Ver código completo</a
		>.
	</p>

	<Card spaced>
		{#snippet header()}
			<Title
				title="Configurar un espacio de trabajo"
				subtitle="Todos los controles se pueden probar"
				level={2}
				size="md"
			/>
		{/snippet}
		<form bind:this={form} class="lumi-stack lumi-stack--lg" novalidate onsubmit={submit}>
			<Fieldset legend="Identidad">
				<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-md">
					<Input
						bind:value={values.name}
						name="name"
						label="Nombre"
						icon={Building}
						autocomplete="organization"
						required
						error={errors.name}
					/>
					<Input
						bind:value={values.email}
						name="email"
						type="email"
						label="Correo"
						icon={Mail}
						autocomplete="email"
						required
						error={errors.email}
						hint="Recibirá los avisos del espacio."
					/>
					<NumberInput
						bind:value={values.seats}
						name="seats"
						label="Miembros"
						min={LIMITS.seats.min}
						max={LIMITS.seats.max}
						hint={`Entre ${LIMITS.seats.min} y ${LIMITS.seats.max} personas.`}
					/>
					<Select
						bind:value={values.region}
						name="region"
						label="Región"
						options={REGIONS}
						searchable
					/>
				</div>
			</Fieldset>

			<Fieldset legend="Plan">
				<SegmentedControl
					bind:value={values.plan}
					options={PLANS}
					fullWidth
					aria-label="Plan del espacio de trabajo"
				/>
			</Fieldset>

			<Fieldset legend="Preferencias">
				<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
					<div class="lumi-stack lumi-stack--md">
						<Switch
							bind:checked={values.notifications}
							name="notifications"
							label="Notificaciones de actividad"
						/>
						<Checkbox
							bind:checked={values.analytics}
							name="analytics"
							label="Compartir métricas anónimas"
						/>
					</div>
					<Slider
						bind:value={values.capacity}
						name="capacity"
						label="Capacidad objetivo"
						min={LIMITS.capacity.min}
						max={LIMITS.capacity.max}
						showValue
						showTooltip
					/>
				</div>
			</Fieldset>

			<Textarea
				bind:value={values.notes}
				name="notes"
				label="Notas"
				rows={4}
				maxlength={LIMITS.notes}
				showCount
			/>

			<div class="lumi-flex lumi-flex--wrap lumi-justify--end lumi-flex--gap-sm">
				<Button variant="flat" onclick={reset}>Restablecer ejemplo</Button>
				<Button variant="filled" icon={Check} type="submit">Guardar cambios</Button>
			</div>
		</form>
	</Card>
</div>
