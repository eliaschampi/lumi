<script lang="ts">
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import X from '@lucide/svelte/icons/x';
	import { onMount, tick, type Snippet } from 'svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import {
		Button,
		Icon,
		IconBadge,
		Navbar,
		SegmentedControl,
		Sidebar,
		SidebarItem,
		Toaster,
		lumiEs,
		setLumiLocale
	} from '@lumi-ui/svelte';
	import { ColorSchemeScript } from '@lumi-ui/svelte/color-scheme';
	import '@lumi-ui/svelte/styles';
	import {
		colorScheme,
		colorSchemeOptions,
		setThemePreference,
		themeChoices
	} from '$lib/color-scheme.svelte';
	import { navigationMode, setNavigationMode } from '$lib/navigation-mode.svelte';
	import { SITE_SECTIONS, sectionFor } from '$lib/navigation';
	import {
		libraryUrl,
		lumiVersion,
		packageUrl,
		repositoryUrl,
		siteLocale,
		siteUrl
	} from '$lib/site';
	import { toaster } from '$lib/toaster';

	const { children }: { children: Snippet } = $props();

	// Mismo umbral que el shell de Lumi (GUIDE §4): por debajo, el menú es un panel móvil.
	const MOBILE_MEDIA_QUERY = '(max-width: 64rem)';
	const THEME_OPTIONS = themeChoices.map(({ value, icon, label }) => ({
		value,
		icon,
		ariaLabel: label
	}));

	setLumiLocale({ ...siteLocale, messages: lumiEs });

	let isMobile = $state(false);
	let mobileOpen = $state(false);
	let shell: HTMLDivElement;
	let navigationTrigger: HTMLElement | null = null;

	const section = $derived(sectionFor(page.route.id));
	const collapsed = $derived(navigationMode.preference === 'collapsed' && !isMobile);
	const drawerOpen = $derived(mobileOpen && isMobile);
	const pageTitle = $derived(
		section.route === '/' ? 'Lumi UI · Componentes Svelte 5' : `${section.label} · Lumi UI`
	);
	const canonicalUrl = $derived(`${siteUrl}${section.route === '/' ? '/' : section.route}`);

	onMount(colorScheme.start);

	onMount(() => {
		const query = window.matchMedia(MOBILE_MEDIA_QUERY);
		const sync = (): void => {
			isMobile = query.matches;
			if (!isMobile) mobileOpen = false;
		};
		sync();
		query.addEventListener('change', sync);
		return () => query.removeEventListener('change', sync);
	});

	function drawerControls(): HTMLElement[] {
		return [...shell.querySelectorAll<HTMLElement>('nav a[href], nav button:not([disabled])')];
	}

	async function toggleSidebar(): Promise<void> {
		if (!isMobile) {
			setNavigationMode(collapsed ? 'expanded' : 'collapsed');
			return;
		}
		if (mobileOpen) {
			closeDrawer();
			return;
		}
		navigationTrigger =
			document.activeElement instanceof HTMLElement ? document.activeElement : null;
		mobileOpen = true;
		await tick();
		drawerControls()[0]?.focus();
	}

	function closeDrawer(): void {
		if (!mobileOpen) return;
		mobileOpen = false;
		navigationTrigger?.focus();
		navigationTrigger = null;
	}

	/** El panel móvil es modal: Escape lo cierra y Tab no sale de él. */
	function handleDrawerKeydown(event: KeyboardEvent): void {
		if (!drawerOpen) return;
		if (event.key === 'Escape') {
			event.preventDefault();
			closeDrawer();
			return;
		}
		if (event.key !== 'Tab') return;
		const controls = drawerControls();
		const first = controls[0];
		const last = controls.at(-1);
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last?.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first?.focus();
		}
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={section.description} />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={section.description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Lumi UI" />
	<meta property="og:locale" content="es_PE" />
</svelte:head>

<ColorSchemeScript {...colorSchemeOptions} />
<svelte:window onkeydown={handleDrawerKeydown} />

<div
	bind:this={shell}
	class="lumi-dashboard-layout"
	class:lumi-sidebar--is-collapsed={collapsed}
	class:lumi-sidebar--mobile-open={drawerOpen}
>
	<Sidebar {collapsed} mobileOpen={drawerOpen} aria-label="Navegación principal">
		{#snippet header()}
			<div
				class="lumi-flex lumi-align-items--center lumi-flex--gap-sm lumi-min-width--0"
				class:lumi-justify--between={isMobile}
				class:lumi-justify--center={collapsed}
			>
				<a
					href={resolve('/')}
					class="brand lumi-flex lumi-align-items--center lumi-flex--gap-sm lumi-min-width--0 lumi-text-decoration--none"
					aria-label={collapsed ? 'Lumi UI, inicio' : undefined}
					onclick={closeDrawer}
				>
					<IconBadge icon={Sparkles} color="primary" size="md" />
					{#if !collapsed}
						<span class="lumi-stack lumi-stack--2xs lumi-min-width--0">
							<strong class="lumi-text--lg">Lumi UI</strong>
							<span class="lumi-text--xs lumi-text--muted">v{lumiVersion} · Svelte 5</span>
						</span>
					{/if}
				</a>
				{#if isMobile}
					<Button
						variant="ghost"
						size="sm"
						icon={X}
						aria-label="Cerrar navegación"
						onclick={closeDrawer}
					/>
				{/if}
			</div>
		{/snippet}

		{#each SITE_SECTIONS as item (item.route)}
			<SidebarItem
				href={resolve(item.route)}
				current={item.route === section.route}
				{collapsed}
				onclick={closeDrawer}
			>
				{#snippet icon()}<Icon icon={item.icon} />{/snippet}
				{item.label}
			</SidebarItem>
		{/each}
	</Sidebar>

	<Navbar ontogglesidebar={toggleSidebar}>
		{#snippet title()}{section.label}{/snippet}

		{#snippet actions()}
			<Button variant="ghost" size="sm" href={libraryUrl}>GitHub</Button>
			<SegmentedControl
				value={colorScheme.preference}
				options={THEME_OPTIONS}
				iconOnly
				aria-label="Tema de la interfaz"
				onchange={setThemePreference}
			/>
		{/snippet}
	</Navbar>

	<main class="lumi-dashboard-layout__content" inert={drawerOpen}>
		<div class="lumi-container lumi-container--ultrawide lumi-min-width--0">
			{@render children()}
			<footer
				class="lumi-flex lumi-flex--wrap lumi-flex--gap-md lumi-margin-top--lg lumi-padding-y--md lumi-text--sm lumi-text--muted"
			>
				<span>Lumi UI v{lumiVersion} · MIT</span>
				<a class="lumi-text--muted" href={packageUrl}>npm</a>
				<a class="lumi-text--muted" href={`${libraryUrl}/issues`}>Reportar un problema</a>
				<a class="lumi-text--muted" href={`${repositoryUrl}/blob/main/CONTRIBUTING.md`}>
					Contribuir a este sitio
				</a>
			</footer>
		</div>
	</main>

	<button
		type="button"
		class="lumi-mobile-overlay lumi-border--none"
		aria-label="Cerrar navegación"
		tabindex="-1"
		onclick={closeDrawer}
	></button>
</div>

<Toaster {toaster} placement="bottom-end" />

<style>
	/* La marca es un enlace, pero conserva el color del texto del menú. */
	.brand {
		color: inherit;
	}
</style>
