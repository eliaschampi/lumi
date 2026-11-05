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
	import { currentLang } from '$lib/i18n';
	import { navigationMode, setNavigationMode } from '$lib/navigation-mode.svelte';
	import { toaster } from '$lib/toaster';

	const COPY = {
		en: {
			title: 'Appearance',
			subtitle: 'Try the themes and fit the navigation to the way you browse.',
			reset: 'Reset',
			resetDone: 'Preferences reset',
			noticeTitle: 'Your preference, your browser',
			notice:
				'The theme is remembered in this browser. Compact navigation applies during this visit and only on wide screens.',
			theme: 'Theme',
			themeSubtitle: 'Saved preference, in sync with your system',
			themeLabel: 'Interface theme',
			applied: 'Applied theme',
			navigation: 'Navigation',
			navigationSubtitle: 'Choose how much room the side menu takes',
			density: 'Navigation density',
			modes: [
				{ value: 'expanded', label: 'Expanded', description: 'Shows text and icons.' },
				{ value: 'collapsed', label: 'Compact', description: 'Puts the main content first.' }
			],
			palette: ['Primary', 'Secondary', 'Success', 'Warning', 'Danger', 'Info']
		},
		es: {
			title: 'Apariencia',
			subtitle: 'Prueba los temas y adapta la navegación a tu forma de explorar.',
			reset: 'Restablecer',
			resetDone: 'Preferencias restablecidas',
			noticeTitle: 'Tu preferencia, tu navegador',
			notice:
				'El tema se recuerda en este navegador. La navegación compacta se aplica durante esta visita y solo en pantallas anchas.',
			theme: 'Tema',
			themeSubtitle: 'Preferencia persistente y sincronizada con el sistema',
			themeLabel: 'Tema de la interfaz',
			applied: 'Tema aplicado',
			navigation: 'Navegación',
			navigationSubtitle: 'Elige cuánto espacio ocupa el menú lateral',
			density: 'Densidad de navegación',
			modes: [
				{ value: 'expanded', label: 'Expandida', description: 'Muestra texto e iconos.' },
				{ value: 'collapsed', label: 'Compacta', description: 'Prioriza el contenido principal.' }
			],
			palette: ['Principal', 'Secundario', 'Éxito', 'Advertencia', 'Error', 'Información']
		}
	} as const;

	const PALETTE: readonly LumiColor[] = [
		'primary',
		'secondary',
		'success',
		'warning',
		'danger',
		'info'
	];

	// El layout remonta la página al cambiar de idioma: el texto no necesita ser reactivo.
	const lang = currentLang();
	const t = COPY[lang];
	const themeOptions = themeChoices.map(({ value, label, icon }) => ({
		value,
		label: label[lang],
		icon
	}));

	function resetPreferences(): void {
		colorScheme.setPreference('system');
		setNavigationMode('expanded');
		toaster.show({ title: t.resetDone, color: 'info' });
	}
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader title={t.title} subtitle={t.subtitle} icon={Palette} size="xl">
		{#snippet actions()}
			<Button variant="border" icon={RefreshCcw} onclick={resetPreferences}>{t.reset}</Button>
		{/snippet}
	</PageHeader>

	<Alert color="info" title={t.noticeTitle}>{t.notice}</Alert>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
		<Card spaced>
			{#snippet header()}
				<Title title={t.theme} subtitle={t.themeSubtitle} level={2} size="md" />
			{/snippet}
			<div class="lumi-stack lumi-stack--lg">
				<SegmentedControl
					value={colorScheme.preference}
					options={themeOptions}
					fullWidth
					aria-label={t.themeLabel}
					onchange={setThemePreference}
				/>
				<InfoItem
					label={t.applied}
					value={resolvedThemeLabel(colorScheme.resolved)[lang]}
					icon={SunMoon}
				/>
				<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
					{#each PALETTE as color, index (color)}
						<Chip {color}>{t.palette[index]}</Chip>
					{/each}
				</div>
			</div>
		</Card>

		<Card spaced>
			{#snippet header()}
				<Title title={t.navigation} subtitle={t.navigationSubtitle} level={2} size="md" />
			{/snippet}
			<Fieldset legend={t.density}>
				<div class="lumi-stack lumi-stack--sm">
					{#each t.modes as mode (mode.value)}
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
