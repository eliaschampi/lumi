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
		SegmentedControl
	} from '@lumi-ui/svelte';
	import { colorScheme, setThemePreference, themeChoices } from '$lib/color-scheme.svelte';
	import { navigationMode, setNavigationMode } from '$lib/navigation-mode.svelte';

	const themeOption = themeChoices.map(({ value, label, icon }) => ({ value, label, icon }));

	function themeLabel(value: string): string {
		return themeChoices.find((choice) => choice.value === value)?.label ?? value;
	}

	function resetPreferences(): void {
		colorScheme.setPreference('system');
		setNavigationMode('expanded');
	}
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Apariencia"
		subtitle="Prueba los temas y adapta la navegación a tu forma de explorar."
		level={1}
		icon="settings"
		size="xl"
	>
		{#snippet actions()}
			<Button variant="border" icon="refresh" onclick={resetPreferences}>Restablecer</Button>
		{/snippet}
	</PageHeader>

	<Alert color="info" title="Tu preferencia, tu navegador">
		El tema se recuerda en este navegador. La navegación compacta se aplica durante esta visita.
	</Alert>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
		<Card
			title="Apariencia"
			subtitle="Preferencia persistente y sincronizada con el sistema"
			spaced
		>
			<div class="lumi-stack lumi-stack--lg">
				<Fieldset legend="Tema">
					<SegmentedControl
						value={colorScheme.preference}
						options={themeOption}
						fullWidth
						aria-label="Tema de la interfaz"
						onchange={setThemePreference}
					/>
				</Fieldset>

				<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-sm">
					<InfoItem
						label="Preferencia"
						value={themeLabel(colorScheme.preference)}
						icon="settings"
					/>
					<InfoItem label="Tema actual" value={themeLabel(colorScheme.resolved)} icon="sparkles" />
				</div>

				<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
					<Chip color="primary">Principal</Chip>
					<Chip color="secondary">Secundario</Chip>
					<Chip color="success">Éxito</Chip>
					<Chip color="warning">Advertencia</Chip>
					<Chip color="danger">Error</Chip>
					<Chip color="info">Información</Chip>
				</div>
			</div>
		</Card>

		<Card title="Navegación" subtitle="Elige cuánto espacio ocupa el menú lateral" spaced>
			<div class="lumi-stack lumi-stack--lg">
				<Fieldset legend="Densidad de navegación">
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
