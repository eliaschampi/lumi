<script lang="ts">
	import Activity from '@lucide/svelte/icons/activity';
	import Boxes from '@lucide/svelte/icons/boxes';
	import ClipboardPenLine from '@lucide/svelte/icons/clipboard-pen-line';
	import Compass from '@lucide/svelte/icons/compass';
	import Layers from '@lucide/svelte/icons/layers';
	import MousePointerClick from '@lucide/svelte/icons/mouse-pointer-click';
	import Users from '@lucide/svelte/icons/users';
	import { Collapse, PageHeader, Tabs, Title } from '@lumi-ui/svelte';
	import '@lumi-ui/svelte/styles/patterns.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import actionsSource from '$lib/examples/Actions.svelte?raw';
	import formsSource from '$lib/examples/Forms.svelte?raw';
	import identitySource from '$lib/examples/Identity.svelte?raw';
	import navigationSource from '$lib/examples/Navigation.svelte?raw';
	import overlaysSource from '$lib/examples/Overlays.svelte?raw';
	import statusSource from '$lib/examples/Status.svelte?raw';
	import { docsUrl, sourceUrl } from '$lib/site';
	import Actions from './families/Actions.svelte';
	import Forms from './families/Forms.svelte';
	import Identity from './families/Identity.svelte';
	import Navigation from './families/Navigation.svelte';
	import Overlays from './families/Overlays.svelte';
	import Status from './families/Status.svelte';

	/** Parámetro de la URL que conserva la familia abierta al compartir o recargar. */
	const FAMILY_PARAM = 'familia';

	/** Cada familia une su demostración interactiva con un ejemplo compilado de verdad. */
	const FAMILIES = [
		{
			value: 'actions',
			label: 'Acciones',
			icon: MousePointerClick,
			panel: Actions,
			example: actionsSource
		},
		{
			value: 'forms',
			label: 'Formularios',
			icon: ClipboardPenLine,
			panel: Forms,
			example: formsSource
		},
		{ value: 'status', label: 'Estados', icon: Activity, panel: Status, example: statusSource },
		{
			value: 'identity',
			label: 'Identidad',
			icon: Users,
			panel: Identity,
			example: identitySource
		},
		{
			value: 'navigation',
			label: 'Navegación',
			icon: Compass,
			panel: Navigation,
			example: navigationSource
		},
		{ value: 'overlays', label: 'Overlays', icon: Layers, panel: Overlays, example: overlaysSource }
	] as const;

	type Family = (typeof FAMILIES)[number];

	const TABS = FAMILIES.map(({ value, label, icon }) => ({ value, label, icon }));

	function familyFor(value: string | null): Family {
		return FAMILIES.find((family) => family.value === value) ?? FAMILIES[0];
	}

	let family = $state<Family>(FAMILIES[0]);
	// El prerender no tiene query string: la familia de la URL se aplica al hidratar y navegar.
	$effect(() => {
		family = familyFor(page.url.searchParams.get(FAMILY_PARAM));
	});

	function selectFamily(value: string | number): void {
		const url = new URL(page.url);
		url.searchParams.set(FAMILY_PARAM, String(value));
		void goto(url, { noScroll: true, keepFocus: true });
	}
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Componentes"
		subtitle="Prueba las familias de componentes y copia ejemplos para tu aplicación."
		icon={Boxes}
		size="xl"
	/>

	<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
		Cada familia incluye un ejemplo de uso. Consulta
		<a href={`${docsUrl}/COMPONENTS.md`} class="lumi-text--primary">el catálogo completo</a>
		y
		<a href={sourceUrl('src/routes/components')} class="lumi-text--primary"
			>el código de esta página</a
		>.
	</p>

	<Tabs
		value={family.value}
		tabs={TABS}
		onchange={selectFamily}
		aria-label="Familias de componentes"
	>
		<div class="lumi-stack lumi-stack--lg lumi-min-width--0">
			<Title title={family.label} level={2} size="md" />
			<family.panel />
			<Collapse title="Ver ejemplo de código">
				<CodeBlock code={family.example} label={`Ejemplo: ${family.label}`} />
			</Collapse>
		</div>
	</Tabs>
</div>
