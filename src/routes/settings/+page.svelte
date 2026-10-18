<script lang="ts">
	import Palette from '@lucide/svelte/icons/palette';
	import RefreshCcw from '@lucide/svelte/icons/refresh-ccw';
	import SunMoon from '@lucide/svelte/icons/sun-moon';
	import {
		Alert,
		Button,
		Card,
		Chip,
		Fieldset,
		InfoItem,
		PageHeader,
		Radio,
		SegmentedControl,
		Title,
		type LumiColor
	} from '@lumi-ui/svelte';
	import {
		colorScheme,
		resolvedThemeLabel,
		setThemePreference,
		themeChoices
	} from '$lib/color-scheme.svelte';
	import { navigationMode, setNavigationMode } from '$lib/navigation-mode.svelte';
	import { toaster } from '$lib/toaster';

	const THEME_OPTIONS = themeChoices.map(({ value, label, icon }) => ({ value, label, icon }));
	const NAVIGATION_MODES = [
		{ value: 'expanded', label: 'Expandida', description: 'Muestra texto e iconos.' },
		{ value: 'collapsed', label: 'Compacta', description: 'Prioriza el contenido principal.' }
	] as const;
	const PALETTE: readonly { color: LumiColor; label: string }[] = [
		{ color: 'primary', label: 'Principal' },
		{ color: 'secondary', label: 'Secundario' },
		{ color: 'success', label: 'Éxito' },
		{ color: 'warning', label: 'Advertencia' },
		{ color: 'danger', label: 'Error' },
		{ color: 'info', label: 'Información' }
	];

	function resetPreferences(): void {
		colorScheme.setPreference('system');
		setNavigationMode('expanded');
		toaster.show({ title: 'Preferencias restablecidas', color: 'info' });
	}
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Apariencia"
		subtitle="Prueba los temas y adapta la navegación a tu forma de explorar."
		icon={Palette}
		size="xl"
	>
		{#snippet actions()}
			<Button variant="border" icon={RefreshCcw} onclick={resetPreferences}>Restablecer</Button>
		{/snippet}
	</PageHeader>

	<Alert color="info" title="Tu preferencia, tu navegador">
		El tema se recuerda en este navegador. La navegación compacta se aplica durante esta visita y
		solo en pantallas anchas.
	</Alert>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
		<Card spaced>
			{#snippet header()}
				<Title
					title="Tema"
					subtitle="Preferencia persistente y sincronizada con el sistema"
					level={2}
					size="md"
				/>
			{/snippet}
			<div class="lumi-stack lumi-stack--lg">
				<SegmentedControl
					value={colorScheme.preference}
					options={THEME_OPTIONS}
					fullWidth
					aria-label="Tema de la interfaz"
					onchange={setThemePreference}
				/>
				<InfoItem
					label="Tema aplicado"
					value={resolvedThemeLabel(colorScheme.resolved)}
					icon={SunMoon}
				/>
				<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
					{#each PALETTE as swatch (swatch.color)}
						<Chip color={swatch.color}>{swatch.label}</Chip>
					{/each}
				</div>
			</div>
		</Card>

		<Card spaced>
			{#snippet header()}
				<Title
					title="Navegación"
					subtitle="Elige cuánto espacio ocupa el menú lateral"
					level={2}
					size="md"
				/>
			{/snippet}
			<Fieldset legend="Densidad de navegación">
				<div class="lumi-stack lumi-stack--sm">
					{#each NAVIGATION_MODES as mode (mode.value)}
						<Radio
							bind:group={navigationMode.preference}
							name="navigation-mode"
							value={mode.value}
							label={mode.label}
							description={mode.description}
						/>
					{/each}
				</div>
			</Fieldset>
		</Card>
	</div>
</div>
