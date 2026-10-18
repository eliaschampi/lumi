<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Feather from '@lucide/svelte/icons/feather';
	import Languages from '@lucide/svelte/icons/languages';
	import Layers from '@lucide/svelte/icons/layers';
	import {
		Button,
		Card,
		Chip,
		Collapse,
		DashboardSection,
		PageHeader,
		QuickAccessCard,
		Title,
		type LumiColor
	} from '@lumi-ui/svelte';
	import { resolve } from '$app/paths';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import InstallCommand from '$lib/InstallCommand.svelte';
	import QuickStart from '$lib/examples/QuickStart.svelte';
	import quickStartSource from '$lib/examples/QuickStart.svelte?raw';
	import { SITE_SECTIONS } from '$lib/navigation';
	import { docsUrl, libraryUrl, lumiVersion, packageUrl } from '$lib/site';

	const ACCENTS: readonly LumiColor[] = ['primary', 'secondary', 'info', 'success', 'warning'];
	const destinations = SITE_SECTIONS.filter((section) => section.route !== '/');

	const HIGHLIGHTS = [
		{
			title: 'Ligera por defecto',
			icon: Feather,
			text: 'Cada página paga solo los componentes e iconos que renderiza. Sin proveedor de tema ni CSS-in-JS.'
		},
		{
			title: 'Bilingüe',
			icon: Languages,
			text: 'Inglés por defecto y español con una línea: etiquetas, paginación y formatos Intl.'
		},
		{
			title: 'Una receta por rol',
			icon: Layers,
			text: 'Campos, selectores, spinners y skeletons comparten recetas en claro y oscuro.'
		}
	];
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Lumi UI"
		subtitle="Componentes Svelte 5 ligeros, accesibles y en español para interfaces claras."
		size="xl"
	>
		{#snippet actions()}
			<Chip color="primary">v{lumiVersion}</Chip>
		{/snippet}
	</PageHeader>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
		<Card spaced>
			{#snippet header()}
				<Title title="De la idea a la interfaz" level={2} size="lg" />
			{/snippet}
			<div class="lumi-stack lumi-stack--lg lumi-min-width--0">
				<p class="lumi-margin--none">
					Formularios, tablas, navegación y diálogos con una misma identidad visual. Combina
					componentes tipados, tokens semánticos y clases de composición en tu aplicación Svelte.
				</p>
				<InstallCommand />
				<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
					<Button variant="filled" href={resolve('/getting-started')} icon={ArrowRight} iconAfter>
						Empezar con Lumi
					</Button>
					<Button variant="border" href={packageUrl}>Ver en npm</Button>
				</div>
			</div>
		</Card>

		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<QuickStart />
			<Collapse title="Ver el código de este ejemplo">
				<CodeBlock code={quickStartSource} label="QuickStart.svelte" />
			</Collapse>
		</div>
	</div>

	<section class="lumi-stack lumi-stack--md" aria-labelledby="explore-title">
		<Title
			id="explore-title"
			title="Explora a tu ritmo"
			subtitle="Primero instala. Después prueba y compón."
			level={2}
			size="lg"
		/>
		<div class="lumi-grid lumi-grid--cards lumi-grid--gap-md">
			{#each destinations as section, index (section.route)}
				<QuickAccessCard
					href={resolve(section.route)}
					title={section.label}
					description={section.description}
					icon={section.icon}
					color={ACCENTS[index % ACCENTS.length]}
				/>
			{/each}
		</div>
	</section>

	<section class="lumi-stack lumi-stack--md" aria-labelledby="highlights-title">
		<Title
			id="highlights-title"
			title="Qué trae la versión 1.0"
			subtitle="Primera versión mayor pública: más ligera, bilingüe y con un nombre por concepto."
			level={2}
			size="lg"
		/>
		<div class="lumi-grid lumi-grid--columns-3 lumi-grid--gap-md">
			{#each HIGHLIGHTS as item (item.title)}
				<DashboardSection title={item.title} icon={item.icon}>
					<p class="lumi-text--sm lumi-text--muted lumi-margin--none">{item.text}</p>
				</DashboardSection>
			{/each}
		</div>
		<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
			<Button variant="border" size="sm" href={`${docsUrl}/GUIDE.md`}>Guía completa</Button>
			<Button variant="border" size="sm" href={`${docsUrl}/COMPONENTS.md`}>
				Catálogo de componentes
			</Button>
			<Button variant="border" size="sm" href={`${docsUrl}/UPGRADE.md`}>Migrar a 1.0</Button>
			<Button variant="ghost" size="sm" href={libraryUrl}>Código en GitHub</Button>
		</div>
	</section>
</div>
