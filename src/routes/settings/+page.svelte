<script lang="ts">
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
		type SegmentedControlOption
	} from '@lumi-ui/svelte';
	import { colorScheme } from '$lib/color-scheme.svelte';
	import { navigationMode, setNavigationMode } from '$lib/navigation-mode.svelte';

	const themeOption: SegmentedControlOption[] = [
		{ value: 'system', label: 'Sistema', icon: 'monitor' },
		{ value: 'light', label: 'Claro', icon: 'sun' },
		{ value: 'dark', label: 'Oscuro', icon: 'moon' }
	];

	function setColorScheme(value: string | number): void {
		if (value === 'system' || value === 'light' || value === 'dark') {
			colorScheme.setPreference(value);
		}
	}

	function resetPreferences(): void {
		colorScheme.setPreference('system');
		setNavigationMode('expanded');
	}
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Ajustes"
		subtitle="Color scheme con CSS del consumidor y preferencias reales del sitio"
		icon="settings"
		size="xl"
	>
		{#snippet actions()}
			<Button variant="border" icon="refresh" onclick={resetPreferences}>Restablecer</Button>
		{/snippet}
	</PageHeader>

	<Alert color="info" title="Separación de responsabilidades">
		La identidad primary/secondary pertenece al desarrollador. El usuario final solo elige sistema,
		claro u oscuro; la densidad de navegación cambia el sidebar de este sitio en tiempo real.
	</Alert>

	<div
		class="lumi-grid lumi-grid--responsive lumi-grid--gap-lg"
		style="--lumi-grid-responsive-min: var(--lumi-centered-card-width-md)"
	>
		<Card
			title="Apariencia"
			subtitle="Preferencia persistente y sincronizada con el sistema"
			spaced
		>
			<div class="lumi-stack lumi-stack--lg">
				<Fieldset legend="Color scheme">
					<SegmentedControl
						value={colorScheme.preference}
						options={themeOption}
						fullWidth
						aria-label="Color scheme"
						onchange={setColorScheme}
					/>
				</Fieldset>

				<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-sm">
					<InfoItem label="Preferencia" value={colorScheme.preference} icon="settings" />
					<InfoItem label="Tema resuelto" value={colorScheme.resolved} icon="sparkles" />
				</div>

				<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
					<Chip color="primary">Primary</Chip>
					<Chip color="secondary">Secondary</Chip>
					<Chip color="success">Success</Chip>
					<Chip color="warning">Warning</Chip>
					<Chip color="danger">Danger</Chip>
					<Chip color="info">Info</Chip>
				</div>
			</div>
		</Card>

		<Card title="Navegación" subtitle="Densidad aplicada al sidebar del showcase" spaced>
			<div class="lumi-stack lumi-stack--lg">
				<Fieldset legend="Estado inicial del sidebar">
					<div class="lumi-stack lumi-stack--sm">
						<Radio
							bind:group={navigationMode.preference}
							name="navigation-mode"
							value="expanded"
							label="Expandida"
							description="Muestra texto e iconos."
						/>
						<Radio
							bind:group={navigationMode.preference}
							name="navigation-mode"
							value="collapsed"
							label="Compacta"
							description="Prioriza el contenido principal."
						/>
					</div>
				</Fieldset>

				<InfoItem
					label="Modo activo"
					value={navigationMode.preference === 'collapsed' ? 'Compacta' : 'Expandida'}
					icon="menu"
				/>
			</div>
		</Card>
	</div>
</div>
