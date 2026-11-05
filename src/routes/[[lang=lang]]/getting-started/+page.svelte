<script lang="ts">
	import BookOpen from '@lucide/svelte/icons/book-open';
	import Boxes from '@lucide/svelte/icons/boxes';
	import ClipboardPenLine from '@lucide/svelte/icons/clipboard-pen-line';
	import { Alert, Card, Collapse, PageHeader, QuickAccessCard, Title } from '@lumi-ui/svelte';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import InstallCommand from '$lib/InstallCommand.svelte';
	import { currentLang, link } from '$lib/i18n';
	import { docsUrl, libraryUrl, lumiVersion, sveltePeer } from '$lib/site';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const QuickStart = $derived(data.QuickStart);

	const PATTERNS_IMPORT = `import '@lumi-ui/svelte/styles/patterns.css';`;

	const COPY = {
		en: {
			title: 'Get started with Lumi',
			subtitle:
				'Install it, load the styles, pick a language and icons, and build your first screen.',
			requirement:
				'You need a Svelte 5 project. Lumi works with Svelte and SvelteKit and needs no backend. This is the version this site uses.',
			installTitle: '1. Install the packages',
			installNote: 'is optional: install it to import icons as components (step 4).',
			stylesTitle: '2. Load the styles once',
			stylesIntro:
				'In SvelteKit, do it in the root layout. @lumi-ui/svelte/styles includes tokens, base styles, layouts and utilities. Built-in copy is English by default; to use Spanish, call setLumiLocale with lumiEs as shown here.',
			stylesNote:
				'Styles use cascade layers, so your own unlayered CSS always wins. Operational patterns such as filter summaries and toolbars are optional: import patterns.css only in the layouts that use them.',
			patternsLabel: 'Optional patterns',
			firstTitle: '3. Build your first screen',
			firstSubtitle: 'The preview and the code come from the same component.',
			iconsTitle: '4. Icons that fit each page',
			iconsIntro:
				'Pass Lucide components to icon props. With deep imports, each page ships only the icons it shows.',
			iconsLabel: 'Icons as components',
			registryTitle: 'Do you store icon names as data?',
			registryNote:
				'Names like icon="search" render nothing until you register them. Register once in the layout that needs them; the full map costs about 9.7 KB gzip, so avoid it on public pages.',
			registryLabel: 'Icon registry',
			schemeTitle: 'Optional: light, dark or system',
			schemeIntro:
				'ColorSchemeScript applies the preference before the first paint. The controller keeps it in this browser and follows system changes.',
			schemeLabel: 'Appearance control',
			schemeNote: 'Place the script and controller once, at the root. Try it in',
			schemeLink: 'Appearance',
			upgradeTitle: 'Coming from 0.x?',
			upgradeIntro:
				'From a copy of the library, the codemod rewrites props, callbacks and icons, and notes what to review by hand. Apps on 0.4 or 0.5 run migrate-0.6.mjs first.',
			codemod: `node scripts/migrate-1.0.mjs <app>          # report
node scripts/migrate-1.0.mjs <app> --write  # apply the changes`,
			upgradeNote: 'Details are in the',
			upgradeLink: 'upgrade notes',
			issueNote: 'Found a problem?',
			issueLink: 'Share it on GitHub',
			issueEnd: 'with the version and a small example.',
			componentsTitle: 'Explore components',
			componentsText: 'Styles and states with code examples.',
			formsTitle: 'Try a form',
			formsText: 'Connected controls and native validation.'
		},
		es: {
			title: 'Empieza con Lumi',
			subtitle: 'Instálala, carga los estilos, elige idioma e iconos y crea tu primera pantalla.',
			requirement:
				'Necesitas un proyecto Svelte 5. Lumi funciona con Svelte y SvelteKit y no requiere un backend. Esta es la versión que usa este sitio.',
			installTitle: '1. Instala los paquetes',
			installNote: 'es opcional: instálalo para importar iconos como componentes (paso 4).',
			stylesTitle: '2. Carga los estilos una sola vez',
			stylesIntro:
				'En SvelteKit, hazlo en el layout raíz. @lumi-ui/svelte/styles incluye tokens, estilos base, layouts y utilidades. La copia integrada está en inglés por defecto; para usar español, llama a setLumiLocale con lumiEs como se muestra aquí.',
			stylesNote:
				'Los estilos usan capas de cascada, así que tu CSS sin capa siempre gana. Los patrones operativos, como resúmenes de filtros y barras de herramientas, son opcionales: importa patterns.css solo en los layouts que los usan.',
			patternsLabel: 'Patrones opcionales',
			firstTitle: '3. Crea tu primera pantalla',
			firstSubtitle: 'La vista previa y el código provienen del mismo componente.',
			iconsTitle: '4. Iconos a la medida de cada página',
			iconsIntro:
				'Pasa componentes de Lucide a las props icon. Con importaciones profundas, cada página incluye solo los iconos que muestra.',
			iconsLabel: 'Iconos como componentes',
			registryTitle: '¿Guardas nombres de icono como datos?',
			registryNote:
				'Los nombres como icon="search" no renderizan nada hasta registrarlos. Regístralos una vez en el layout que los necesita; el mapa completo cuesta unos 9,7 KB gzip, así que evítalo en páginas públicas.',
			registryLabel: 'Registro de iconos',
			schemeTitle: 'Opcional: claro, oscuro o sistema',
			schemeIntro:
				'ColorSchemeScript aplica la preferencia antes del primer pintado. El controlador la conserva en este navegador y sigue los cambios del sistema.',
			schemeLabel: 'Control de apariencia',
			schemeNote: 'Coloca el script y el controlador una sola vez, en la raíz. Pruébalo en',
			schemeLink: 'Apariencia',
			upgradeTitle: '¿Vienes de una versión 0.x?',
			upgradeIntro:
				'Desde una copia de la biblioteca, el codemod reescribe props, callbacks e iconos y anota lo que debes revisar a mano. Las aplicaciones en 0.4 o 0.5 ejecutan antes migrate-0.6.mjs.',
			codemod: `node scripts/migrate-1.0.mjs <app>          # informe
node scripts/migrate-1.0.mjs <app> --write  # aplica los cambios`,
			upgradeNote: 'Más detalles en las',
			upgradeLink: 'notas de versión',
			issueNote: '¿Encontraste un problema?',
			issueLink: 'Compártelo en GitHub',
			issueEnd: 'con la versión y un ejemplo pequeño.',
			componentsTitle: 'Explorar componentes',
			componentsText: 'Estilos y estados con ejemplos de código.',
			formsTitle: 'Probar un formulario',
			formsText: 'Controles conectados y validación nativa.'
		}
	} as const;

	const t = $derived(COPY[currentLang()]);
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader title={t.title} subtitle={t.subtitle} icon={BookOpen} size="xl" />

	<Alert color="info" title={`Lumi UI ${lumiVersion} · Svelte ${sveltePeer}`}>{t.requirement}</Alert
	>

	<Card spaced>
		{#snippet header()}<Title title={t.installTitle} level={2} size="lg" />{/snippet}
		<div class="lumi-stack lumi-stack--sm lumi-min-width--0">
			<InstallCommand packages={['@lumi-ui/svelte', '@lucide/svelte']} />
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
				<code>@lucide/svelte</code>
				{t.installNote}
			</p>
		</div>
	</Card>

	<Card spaced>
		{#snippet header()}<Title title={t.stylesTitle} level={2} size="lg" />{/snippet}
		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<p class="lumi-margin--none">{t.stylesIntro}</p>
			<CodeBlock code={data.rootLayout} label="src/routes/+layout.svelte" />
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">{t.stylesNote}</p>
			<CodeBlock code={PATTERNS_IMPORT} label={t.patternsLabel} />
		</div>
	</Card>

	<section class="lumi-stack lumi-stack--md" aria-labelledby="first-screen">
		<Title id="first-screen" title={t.firstTitle} subtitle={t.firstSubtitle} level={2} size="lg" />
		<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
			<QuickStart />
			<Card spaced><CodeBlock code={data.quickStartCode} label="src/routes/+page.svelte" /></Card>
		</div>
	</section>

	<Card spaced>
		{#snippet header()}<Title title={t.iconsTitle} level={2} size="lg" />{/snippet}
		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<p class="lumi-margin--none">{t.iconsIntro}</p>
			<CodeBlock code={data.icons} label={t.iconsLabel} />
			<Collapse title={t.registryTitle}>
				<div class="lumi-stack lumi-stack--sm lumi-min-width--0">
					<p class="lumi-text--sm lumi-text--muted lumi-margin--none">{t.registryNote}</p>
					<CodeBlock code={data.iconRegistry} label={t.registryLabel} />
				</div>
			</Collapse>
		</div>
	</Card>

	<Card spaced>
		{#snippet header()}<Title title={t.schemeTitle} level={2} size="lg" />{/snippet}
		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<p class="lumi-margin--none">{t.schemeIntro}</p>
			<CodeBlock code={data.colorScheme} label={t.schemeLabel} />
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
				{t.schemeNote}
				<a href={link('/settings')} class="lumi-text--primary">{t.schemeLink}</a>.
			</p>
		</div>
	</Card>

	<Card spaced>
		{#snippet header()}<Title title={t.upgradeTitle} level={2} size="lg" />{/snippet}
		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<p class="lumi-margin--none">{t.upgradeIntro}</p>
			<CodeBlock code={t.codemod} label="Codemod 1.0" />
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
				{t.upgradeNote}
				<a href={`${docsUrl}/UPGRADE.md`} class="lumi-text--primary">{t.upgradeLink}</a>.
				{t.issueNote}
				<a href={`${libraryUrl}/issues`} class="lumi-text--primary">{t.issueLink}</a>
				{t.issueEnd}
			</p>
		</div>
	</Card>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-md">
		<QuickAccessCard
			href={link('/components')}
			title={t.componentsTitle}
			description={t.componentsText}
			icon={Boxes}
		/>
		<QuickAccessCard
			href={link('/forms')}
			title={t.formsTitle}
			description={t.formsText}
			icon={ClipboardPenLine}
			color="secondary"
		/>
	</div>
</div>
