<script lang="ts">
	import BookOpen from '@lucide/svelte/icons/book-open';
	import Boxes from '@lucide/svelte/icons/boxes';
	import ClipboardPenLine from '@lucide/svelte/icons/clipboard-pen-line';
	import { Alert, Card, Collapse, PageHeader, QuickAccessCard, Title } from '@lumi-ui/svelte';
	import { resolve } from '$app/paths';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import InstallCommand from '$lib/InstallCommand.svelte';
	import QuickStart from '$lib/examples/QuickStart.svelte';
	import colorSchemeSource from '$lib/examples/ColorScheme.svelte?raw';
	import iconRegistrySource from '$lib/examples/IconRegistry.svelte?raw';
	import iconsSource from '$lib/examples/Icons.svelte?raw';
	import quickStartSource from '$lib/examples/QuickStart.svelte?raw';
	import rootLayoutSource from '$lib/examples/RootLayout.svelte?raw';
	import { docsUrl, libraryUrl, lumiVersion, sveltePeer } from '$lib/site';

	const PATTERNS_IMPORT = `import '@lumi-ui/svelte/styles/patterns.css';`;
	const CODEMOD = `node scripts/migrate-1.0.mjs <app>          # informe
node scripts/migrate-1.0.mjs <app> --write  # aplica los cambios`;
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Empieza con Lumi"
		subtitle="Instala, carga los estilos, elige idioma e iconos y crea tu primera interfaz."
		icon={BookOpen}
		size="xl"
	/>

	<Alert color="info" title={`Lumi UI ${lumiVersion} · Svelte ${sveltePeer}`}>
		Necesitas un proyecto Svelte 5. Lumi funciona con Svelte y SvelteKit y no requiere un backend.
		La versión indicada corresponde al paquete que usa este sitio.
	</Alert>

	<Card spaced>
		{#snippet header()}<Title title="1. Instala los paquetes" level={2} size="lg" />{/snippet}
		<div class="lumi-stack lumi-stack--sm lumi-min-width--0">
			<InstallCommand packages={['@lumi-ui/svelte', '@lucide/svelte']} />
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
				<code>@lucide/svelte</code> es opcional: instálalo para importar iconos como componentes (paso
				4).
			</p>
		</div>
	</Card>

	<Card spaced>
		{#snippet header()}
			<Title title="2. Carga los estilos y el idioma una sola vez" level={2} size="lg" />
		{/snippet}
		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<p class="lumi-margin--none">
				En SvelteKit, hazlo en el layout raíz. <code>@lumi-ui/svelte/styles</code> incluye los
				tokens, la base, los layouts y las utilidades. La copia integrada está en inglés por
				defecto:
				<code>setLumiLocale</code> con <code>lumiEs</code> traduce etiquetas, paginación y formatos.
			</p>
			<CodeBlock code={rootLayoutSource} label="src/routes/+layout.svelte" />
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
				Los estilos usan capas de cascada, así que tu CSS sin capa siempre gana. Las composiciones
				operativas (resúmenes de filtros, barras de herramientas…) son opcionales: importa
				<code>patterns.css</code> solo en los layouts o páginas que las usan.
			</p>
			<CodeBlock code={PATTERNS_IMPORT} label="Patrones opcionales" />
		</div>
	</Card>

	<section class="lumi-stack lumi-stack--md" aria-labelledby="first-interface">
		<Title
			id="first-interface"
			title="3. Compón tu primera interfaz"
			subtitle="La vista previa y el código provienen del mismo componente."
			level={2}
			size="lg"
		/>
		<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
			<QuickStart />
			<Card spaced><CodeBlock code={quickStartSource} label="src/routes/+page.svelte" /></Card>
		</div>
	</section>

	<Card spaced>
		{#snippet header()}<Title
				title="4. Iconos a la medida de cada página"
				level={2}
				size="lg"
			/>{/snippet}
		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<p class="lumi-margin--none">
				Pasa componentes de Lucide a las props <code>icon</code>. Con importaciones profundas, cada
				página incluye solo los iconos que muestra.
			</p>
			<CodeBlock code={iconsSource} label="Iconos como componentes" />
			<Collapse title="¿Guardas nombres de icono como datos?">
				<div class="lumi-stack lumi-stack--sm lumi-min-width--0">
					<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
						Los nombres como <code>icon="search"</code> no renderizan nada hasta registrarlos. Regístralos
						una vez en el layout que los necesita; el mapa completo cuesta unos 9,7 KB gzip, así que evítalo
						en páginas públicas.
					</p>
					<CodeBlock code={iconRegistrySource} label="Registro de iconos" />
				</div>
			</Collapse>
		</div>
	</Card>

	<Card spaced>
		{#snippet header()}<Title
				title="Opcional: claro, oscuro o sistema"
				level={2}
				size="lg"
			/>{/snippet}
		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<p class="lumi-margin--none">
				<code>ColorSchemeScript</code> aplica la preferencia antes del primer pintado. El controlador
				la conserva en este navegador y sigue los cambios del sistema.
			</p>
			<CodeBlock code={colorSchemeSource} label="Control de apariencia" />
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
				Coloca el script y el controlador una sola vez en la raíz. Pruébalo en
				<a href={resolve('/settings')} class="lumi-text--primary">Apariencia</a>.
			</p>
		</div>
	</Card>

	<Card spaced>
		{#snippet header()}<Title title="¿Vienes de una versión 0.x?" level={2} size="lg" />{/snippet}
		<div class="lumi-stack lumi-stack--md lumi-min-width--0">
			<p class="lumi-margin--none">
				Desde una copia de la biblioteca, el codemod reescribe props, callbacks e iconos y anota lo
				que debes revisar a mano. Las aplicaciones en 0.4 o 0.5 ejecutan antes
				<code>migrate-0.6.mjs</code>.
			</p>
			<CodeBlock code={CODEMOD} label="Codemod 1.0" />
			<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
				Detalles en <a href={`${docsUrl}/UPGRADE.md`} class="lumi-text--primary"
					>las notas de migración</a
				>. ¿Encontraste un problema?
				<a href={`${libraryUrl}/issues`} class="lumi-text--primary">Compártelo en GitHub</a> con la versión
				y un ejemplo reproducible.
			</p>
		</div>
	</Card>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-md">
		<QuickAccessCard
			href={resolve('/components')}
			title="Explorar componentes"
			description="Variantes y estados con ejemplos de código."
			icon={Boxes}
		/>
		<QuickAccessCard
			href={resolve('/forms')}
			title="Probar un formulario"
			description="Controles conectados y validación nativa."
			icon={ClipboardPenLine}
			color="secondary"
		/>
	</div>
</div>
