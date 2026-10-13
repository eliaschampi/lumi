<script lang="ts">
	import { Alert, Card, PageHeader, QuickAccessCard, Title } from '@lumi-ui/svelte';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import QuickStartDemo from '$lib/QuickStartDemo.svelte';
	import quickStartSource from '$lib/QuickStartDemo.svelte?raw';
	import { colorSchemeExample, rootLayoutExample } from '$lib/code-examples';
	import { href } from '$lib/paths';
	import { docsUrl, libraryUrl, lumiVersion, sveltePeer } from '$lib/site';
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Empieza con Lumi"
		subtitle="Instala, importa los estilos y crea tu primera interfaz."
		level={1}
		icon="bookOpen"
		size="xl"
	/>

	<Alert color="info" title={`Lumi UI ${lumiVersion} · Svelte ${sveltePeer}`}>
		Necesitas un proyecto Svelte 5. Lumi funciona con Svelte y SvelteKit; sus componentes no
		requieren un backend. La versión indicada corresponde al paquete que usa este sitio.
	</Alert>

	<Card spaced>
		{#snippet header()}<Title title="1. Instala el paquete" level={2} size="lg" />{/snippet}
		<CodeBlock code="pnpm add @lumi-ui/svelte" label="Terminal" />
		<p class="lumi-text--sm lumi-text--muted">
			También puedes usar <code>npm install @lumi-ui/svelte</code> o
			<code>yarn add @lumi-ui/svelte</code>.
		</p>
	</Card>

	<Card spaced>
		{#snippet header()}<Title
				title="2. Carga los estilos una sola vez"
				level={2}
				size="lg"
			/>{/snippet}
		<p>
			En SvelteKit, importa los estilos en el layout raíz. Incluyen los tokens, las clases de
			composición y los patrones públicos.
		</p>
		<CodeBlock code={rootLayoutExample} label="src/routes/+layout.svelte" />
		<p class="lumi-text--sm lumi-text--muted">
			En un proyecto Svelte con Vite, añade el mismo import de estilos a <code>App.svelte</code>. No
			necesitas un framework CSS adicional.
		</p>
	</Card>

	<section class="lumi-stack lumi-stack--md" aria-labelledby="first-interface">
		<Title
			id="first-interface"
			title="3. Compón tu primera interfaz"
			level={2}
			size="lg"
			subtitle="La vista previa y el código provienen del mismo componente."
		/>
		<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
			<QuickStartDemo />
			<Card spaced><CodeBlock code={quickStartSource} label="src/routes/+page.svelte" /></Card>
		</div>
	</section>

	<Card spaced>
		{#snippet header()}<Title
				title="Opcional: claro, oscuro o sistema"
				level={2}
				size="lg"
			/>{/snippet}
		<p>
			<code>ColorSchemeScript</code> aplica la preferencia antes del primer pintado. El controlador la
			conserva en este navegador y sigue los cambios del sistema.
		</p>
		<CodeBlock code={colorSchemeExample} label="Control de apariencia" />
		<p class="lumi-text--sm lumi-text--muted">
			Coloca el script y el controlador una sola vez en la raíz. Puedes probar el resultado en <a
				href={href('/settings')}
				class="lumi-text--primary">Apariencia</a
			>.
		</p>
	</Card>

	<Card spaced>
		{#snippet header()}<Title title="Elige bien el siguiente paso" level={2} size="md" />{/snippet}
		<div class="lumi-stack lumi-stack--md">
			<p>
				Lumi aporta la interfaz. La aplicación conserva las rutas, permisos, validación de negocio y
				persistencia. Los formularios de este sitio son demostraciones y no envían datos a un
				servidor.
			</p>
			<p class="lumi-text--sm lumi-text--muted">
				Antes de actualizar una aplicación existente, revisa <a
					href={`${docsUrl}/UPGRADE.md`}
					class="lumi-text--primary">las notas de migración</a
				>. La referencia de props y los contratos completos están en
				<a href={`${docsUrl}/COMPONENTS.md`} class="lumi-text--primary"
					>la documentación de la biblioteca</a
				>.
			</p>
			<p class="lumi-text--sm lumi-text--muted">
				¿Encontraste un problema? <a href={`${libraryUrl}/issues`} class="lumi-text--primary"
					>Compártelo en GitHub</a
				> con la versión y un ejemplo reproducible.
			</p>
		</div>
	</Card>

	<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-md">
		<QuickAccessCard
			href={href('/components')}
			title="Explorar componentes"
			description="Variantes y estados con ejemplos de código."
			icon="boxes"
		/>
		<QuickAccessCard
			href={href('/forms')}
			title="Probar un formulario"
			description="Controles conectados y validación nativa."
			icon="clipboardPenLine"
			color="secondary"
		/>
	</div>
</div>
