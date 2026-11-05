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
	import { currentLang } from '$lib/i18n';
	import { sourceUrl } from '$lib/site';
	import { toaster } from '$lib/toaster';

	const COPY = {
		en: {
			title: 'Forms',
			subtitle: 'Connected controls, field-level validation messages and reset.',
			notice: 'This form uses sample data and sends nothing to a server.',
			source: 'See the full code',
			cardTitle: 'Set up a workspace',
			cardSubtitle: 'Every control can be tried',
			identity: 'Identity',
			name: 'Name',
			namePlaceholder: 'Acme Studio',
			email: 'Email',
			emailPlaceholder: 'you@example.com',
			emailHint: 'It will receive the workspace notices.',
			members: 'Members',
			membersHint: (min: number, max: number) => `Between ${min} and ${max} people.`,
			region: 'Region',
			regionPlaceholder: 'Choose a region',
			plan: 'Plan',
			planLabel: 'Workspace plan',
			preferences: 'Preferences',
			notifications: 'Activity notifications',
			analytics: 'Share anonymous metrics',
			capacity: 'Target capacity',
			notes: 'Notes',
			notesPlaceholder: 'Anything your team should know',
			defaultNotes: 'A calm, clear and consistent interface.',
			reset: 'Reset example',
			save: 'Save changes',
			nameError: 'Enter a name for the workspace.',
			emailError: 'Enter a valid email, for example ana@company.com.',
			done: 'Demo finished',
			valid: (name: string) => `“${name}” is valid. Nothing was sent to a server.`
		},
		es: {
			title: 'Formularios',
			subtitle: 'Controles conectados, validación con mensajes de campo y restablecimiento.',
			notice: 'Este formulario usa datos ficticios y no envía información a un servidor.',
			source: 'Ver código completo',
			cardTitle: 'Configurar un espacio de trabajo',
			cardSubtitle: 'Todos los controles se pueden probar',
			identity: 'Identidad',
			name: 'Nombre',
			namePlaceholder: 'Estudio Andino',
			email: 'Correo',
			emailPlaceholder: 'tu@ejemplo.com',
			emailHint: 'Recibirá los avisos del espacio.',
			members: 'Miembros',
			membersHint: (min: number, max: number) => `Entre ${min} y ${max} personas.`,
			region: 'Región',
			regionPlaceholder: 'Elige una región',
			plan: 'Plan',
			planLabel: 'Plan del espacio de trabajo',
			preferences: 'Preferencias',
			notifications: 'Notificaciones de actividad',
			analytics: 'Compartir métricas anónimas',
			capacity: 'Capacidad objetivo',
			notes: 'Notas',
			notesPlaceholder: 'Lo que tu equipo deba saber',
			defaultNotes: 'Una interfaz tranquila, clara y consistente.',
			reset: 'Restablecer ejemplo',
			save: 'Guardar cambios',
			nameError: 'Escribe un nombre para el espacio.',
			emailError: 'Escribe un correo válido, por ejemplo ana@empresa.com.',
			done: 'Demostración completada',
			valid: (name: string) => `«${name}» es válido. Nada se envió a un servidor.`
		}
	};

	// El layout remonta la página al cambiar de idioma: el texto no necesita ser reactivo.
	const t = COPY[currentLang()];

	const DEFAULTS = {
		name: 'Lumi Workspace',
		email: 'hello@example.com',
		seats: 12,
		region: 'Lima' as SelectValue | null,
		plan: 'team' as string | number,
		notes: t.defaultNotes,
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
		name: attempted && !values.name.trim() ? t.nameError : undefined,
		email: attempted && !EMAIL.test(values.email.trim()) ? t.emailError : undefined
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
			title: t.done,
			message: t.valid(values.name.trim()),
			color: 'success'
		});
	}

	function reset(): void {
		values = { ...DEFAULTS };
		attempted = false;
	}
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader title={t.title} subtitle={t.subtitle} icon={ClipboardPenLine} size="xl" />
	<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
		{t.notice}
		<a href={sourceUrl('src/routes/[[lang=lang]]/forms/+page.svelte')} class="lumi-text--primary">
			{t.source}
		</a>.
	</p>

	<Card spaced>
		{#snippet header()}
			<Title title={t.cardTitle} subtitle={t.cardSubtitle} level={2} size="md" />
		{/snippet}
		<form bind:this={form} class="lumi-stack lumi-stack--lg" novalidate onsubmit={submit}>
			<Fieldset legend={t.identity}>
				<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-md">
					<Input
						bind:value={values.name}
						name="name"
						label={t.name}
						placeholder={t.namePlaceholder}
						icon={Building}
						autocomplete="organization"
						required
						error={errors.name}
					/>
					<Input
						bind:value={values.email}
						name="email"
						type="email"
						label={t.email}
						placeholder={t.emailPlaceholder}
						icon={Mail}
						autocomplete="email"
						required
						error={errors.email}
						hint={t.emailHint}
					/>
					<NumberInput
						bind:value={values.seats}
						name="seats"
						label={t.members}
						min={LIMITS.seats.min}
						max={LIMITS.seats.max}
						hint={t.membersHint(LIMITS.seats.min, LIMITS.seats.max)}
					/>
					<Select
						bind:value={values.region}
						name="region"
						label={t.region}
						placeholder={t.regionPlaceholder}
						options={REGIONS}
						searchable
					/>
				</div>
			</Fieldset>

			<Fieldset legend={t.plan}>
				<SegmentedControl
					bind:value={values.plan}
					options={PLANS}
					fullWidth
					aria-label={t.planLabel}
				/>
			</Fieldset>

			<Fieldset legend={t.preferences}>
				<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
					<div class="lumi-stack lumi-stack--md">
						<Switch
							bind:checked={values.notifications}
							name="notifications"
							label={t.notifications}
						/>
						<Checkbox bind:checked={values.analytics} name="analytics" label={t.analytics} />
					</div>
					<Slider
						bind:value={values.capacity}
						name="capacity"
						label={t.capacity}
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
				label={t.notes}
				placeholder={t.notesPlaceholder}
				rows={4}
				maxlength={LIMITS.notes}
				showCount
			/>

			<div class="lumi-flex lumi-flex--wrap lumi-justify--end lumi-flex--gap-sm">
				<Button variant="flat" onclick={reset}>{t.reset}</Button>
				<Button variant="filled" icon={Check} type="submit">{t.save}</Button>
			</div>
		</form>
	</Card>
</div>
