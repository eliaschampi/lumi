<script lang="ts">
	import {
		Card,
		Chip,
		Collapse,
		PageHeader,
		QuickAccessCard,
		SegmentedControl,
		StatusIndicator,
		Title
	} from '@lumi-ui/svelte';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import QuickStartDemo from '$lib/QuickStartDemo.svelte';
	import quickStartSource from '$lib/QuickStartDemo.svelte?raw';
	import { href } from '$lib/paths';
	import { docsUrl, libraryUrl, lumiVersion, packageUrl } from '$lib/site';

	let manager = $state<string | number>('pnpm');
	const managers = [
		{ value: 'pnpm', label: 'pnpm' },
		{ value: 'npm', label: 'npm' },
		{ value: 'yarn', label: 'Yarn' }
	];
	const installCommand = $derived(
		`${manager === 'npm' ? 'npm install' : `${manager} add`} @lumi-ui/svelte`
	);
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Lumi UI"
		subtitle="Componentes Svelte 5 para interfaces claras y consistentes."
		level={1}
		size="xl"
	>
		{#snippet actions()}
			<Chip color="primary">v{lumiVersion}</Chip>
			<div class="lumi-flex lumi-align-items--center lumi-flex--gap-sm">
				<StatusIndicator status="pending" />
				<span class="lumi-text--sm">En desarrollo</span>
			</div>
		{/snippet}
	</PageHeader>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
		<Card spaced>
			{#snippet header()}<Title title="De la idea a la interfaz" level={2} size="lg" />{/snippet}
			<div class="lumi-stack lumi-stack--lg">
				<p>
					Formularios, tablas, navegación y diálogos con una misma identidad visual. Combina
					componentes tipados, tokens semánticos y clases de composición en tu aplicación Svelte.
				</p>
				<SegmentedControl
					value={manager}
					options={managers}
					onchange={(value) => (manager = value)}
					aria-label="Gestor de paquetes"
				/>
				<CodeBlock code={installCommand} label="Instalación" />
				<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-lg">
					<a class="lumi-text--primary lumi-font--semibold" href={href('/getting-started')}
						>Empezar con Lumi →</a
					>
					<a class="lumi-text--primary" href={packageUrl}>Ver paquete en npm</a>
				</div>
			</div>
		</Card>
		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<QuickStartDemo />
			<Collapse title="Ver el código de este ejemplo">
				<CodeBlock code={quickStartSource} label="Ejemplo Svelte" />
			</Collapse>
		</div>
	</div>

	<section class="lumi-stack lumi-stack--md" aria-labelledby="explore-title">
		<Title
			id="explore-title"
			title="Explora a tu ritmo"
			level={2}
			size="lg"
			subtitle="Primero instala. Después prueba y compón."
		/>
		<div class="lumi-grid lumi-grid--columns-3 lumi-grid--gap-md">
			<QuickAccessCard
				href={href('/getting-started')}
				title="Empezar"
				description="Instalación, estilos y tu primera pantalla."
				icon="bookOpen"
				color="primary"
			/>
			<QuickAccessCard
				href={href('/components')}
				title="Componentes"
				description="Prueba variantes, estados y ejemplos de uso."
				icon="boxes"
				color="secondary"
			/>
			<QuickAccessCard
				href={href('/data')}
				title="Composiciones"
				description="Tablas, filtros y gráficos con datos de ejemplo."
				icon="chartBar"
				color="info"
			/>
		</div>
	</section>

	<div class="lumi-grid lumi-grid--columns-3 lumi-grid--gap-md">
		<Card title="Una identidad, muchas interfaces" spaced>
			<p class="lumi-text--sm lumi-text--muted">
				Colores semánticos, espaciado y superficies compartidas. Temas claro y oscuro con
				preferencia del sistema.
			</p>
		</Card>
		<Card title="Svelte 5 y TypeScript" spaced>
			<p class="lumi-text--sm lumi-text--muted">
				Runes, snippets y contratos tipados. Usa los componentes que necesitas y mantén tus reglas
				de negocio en tu aplicación.
			</p>
		</Card>
		<Card title="Un proyecto abierto" spaced>
			<p class="lumi-text--sm lumi-text--muted">
				Código disponible bajo MIT. Puedes inspeccionarlo, proponer mejoras y compartir casos de
				uso.
			</p>
		</Card>
	</div>

	<Card spaced>
		{#snippet header()}<Title
				title="Código abierto, documentación a mano"
				level={2}
				size="md"
			/>{/snippet}
		<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-lg">
			<a href={libraryUrl} class="lumi-text--primary">Código de la biblioteca</a>
			<a href={`${docsUrl}/GUIDE.md`} class="lumi-text--primary">Guía completa</a>
			<a href={`${docsUrl}/COMPONENTS.md`} class="lumi-text--primary">Referencia de componentes</a>
			<a href={`${libraryUrl}/issues`} class="lumi-text--primary">Ideas y problemas</a>
		</div>
		<p class="lumi-text--sm lumi-text--muted">
			Este sitio usa el paquete publicado en npm. Los ejemplos son interactivos y sus datos son
			ficticios.
		</p>
	</Card>
</div>
