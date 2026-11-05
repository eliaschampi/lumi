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
	import CodeBlock from '$lib/CodeBlock.svelte';
	import InstallCommand from '$lib/InstallCommand.svelte';
	import { currentLang, link } from '$lib/i18n';
	import { NAV_ITEMS } from '$lib/navigation';
	import { docsUrl, libraryUrl, lumiVersion, packageUrl } from '$lib/site';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const QuickStart = $derived(data.QuickStart);

	const ACCENTS: readonly LumiColor[] = ['primary', 'secondary', 'info', 'success', 'warning'];
	const DESTINATIONS = [
		'/getting-started',
		'/foundations/colors',
		'/foundations/layout',
		'/components',
		'/forms',
		'/data'
	];
	const destinations = NAV_ITEMS.filter((item) => DESTINATIONS.includes(item.path));
	const ICONS = [Feather, Languages, Layers];

	const COPY = {
		en: {
			subtitle: 'Lightweight, accessible Svelte 5 components, in English and Spanish.',
			heroTitle: 'From idea to interface',
			hero: 'Forms, tables, navigation and dialogs that share one visual identity. Combine typed components, semantic tokens and layout classes in your Svelte app.',
			start: 'Get started',
			npm: 'View on npm',
			showCode: 'See the code of this example',
			exploreTitle: 'Explore at your own pace',
			exploreSubtitle: 'Each page shows a live example and the code to copy.',
			highlightsTitle: 'Why Lumi',
			highlightsSubtitle: 'Built and proven in real products.',
			highlights: [
				{
					title: 'Light by default',
					text: 'Each page pays only for the components and icons it renders. No theme provider, no CSS-in-JS.'
				},
				{
					title: 'Bilingual',
					text: 'English by default and Spanish in one line: labels, pagination and Intl formats.'
				},
				{
					title: 'One recipe per role',
					text: 'Fields, switchers, spinners and skeletons share recipes in light and dark.'
				}
			],
			guide: 'Full guide',
			catalog: 'Component catalog',
			upgrade: 'Upgrade notes',
			source: 'Code on GitHub'
		},
		es: {
			subtitle: 'Componentes Svelte 5 ligeros y accesibles, en inglés y español.',
			heroTitle: 'De la idea a la interfaz',
			hero: 'Formularios, tablas, navegación y diálogos con una misma identidad visual. Combina componentes tipados, tokens semánticos y clases de layout en tu aplicación Svelte.',
			start: 'Empezar con Lumi',
			npm: 'Ver en npm',
			showCode: 'Ver el código de este ejemplo',
			exploreTitle: 'Explora a tu ritmo',
			exploreSubtitle: 'Cada página muestra un ejemplo vivo y el código para copiar.',
			highlightsTitle: 'Por qué Lumi',
			highlightsSubtitle: 'Creada y probada en productos reales.',
			highlights: [
				{
					title: 'Ligera por defecto',
					text: 'Cada página paga solo los componentes e iconos que renderiza. Sin proveedor de tema ni CSS-in-JS.'
				},
				{
					title: 'Bilingüe',
					text: 'Inglés por defecto y español con una línea: etiquetas, paginación y formatos Intl.'
				},
				{
					title: 'Una receta por rol',
					text: 'Campos, selectores, spinners y skeletons comparten recetas en claro y oscuro.'
				}
			],
			guide: 'Guía completa',
			catalog: 'Catálogo de componentes',
			upgrade: 'Notas de versión',
			source: 'Código en GitHub'
		}
	} as const;

	const lang = $derived(currentLang());
	const t = $derived(COPY[lang]);
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader title="Lumi UI" subtitle={t.subtitle} size="xl">
		{#snippet actions()}
			<Chip color="primary">v{lumiVersion}</Chip>
		{/snippet}
	</PageHeader>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
		<Card spaced>
			{#snippet header()}
				<Title title={t.heroTitle} level={2} size="lg" />
			{/snippet}
			<div class="lumi-stack lumi-stack--lg lumi-min-width--0">
				<p class="lumi-margin--none">{t.hero}</p>
				<InstallCommand />
				<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
					<Button variant="filled" href={link('/getting-started')} icon={ArrowRight} iconAfter>
						{t.start}
					</Button>
					<Button variant="border" href={packageUrl}>{t.npm}</Button>
				</div>
			</div>
		</Card>

		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<QuickStart />
			<Collapse title={t.showCode}>
				<CodeBlock code={data.quickStartCode} label="QuickStart.svelte" />
			</Collapse>
		</div>
	</div>

	<section class="lumi-stack lumi-stack--md" aria-labelledby="explore-title">
		<Title
			id="explore-title"
			title={t.exploreTitle}
			subtitle={t.exploreSubtitle}
			level={2}
			size="lg"
		/>
		<div class="lumi-grid lumi-grid--cards lumi-grid--gap-md">
			{#each destinations as item, index (item.path)}
				<QuickAccessCard
					href={link(item.path)}
					title={item.label[lang]}
					description={item.description[lang]}
					icon={item.icon}
					color={ACCENTS[index % ACCENTS.length]}
				/>
			{/each}
		</div>
	</section>

	<section class="lumi-stack lumi-stack--md" aria-labelledby="highlights-title">
		<Title
			id="highlights-title"
			title={t.highlightsTitle}
			subtitle={t.highlightsSubtitle}
			level={2}
			size="lg"
		/>
		<div class="lumi-grid lumi-grid--columns-3 lumi-grid--gap-md">
			{#each t.highlights as item, index (item.title)}
				<DashboardSection title={item.title} icon={ICONS[index]}>
					<p class="lumi-text--sm lumi-text--muted lumi-margin--none">{item.text}</p>
				</DashboardSection>
			{/each}
		</div>
		<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
			<Button variant="border" size="sm" href={`${docsUrl}/GUIDE.md`}>{t.guide}</Button>
			<Button variant="border" size="sm" href={`${docsUrl}/COMPONENTS.md`}>{t.catalog}</Button>
			<Button variant="border" size="sm" href={`${docsUrl}/UPGRADE.md`}>{t.upgrade}</Button>
			<Button variant="ghost" size="sm" href={libraryUrl}>{t.source}</Button>
		</div>
	</section>
</div>
