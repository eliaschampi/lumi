<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import { ColorSchemeScript } from '@lumi-ui/svelte/color-scheme';
	import {
		Chip,
		Button,
		Icon,
		IconBadge,
		Navbar,
		StatusIndicator,
		SegmentedControl,
		Sidebar,
		SidebarItem
	} from '@lumi-ui/svelte';
	import '@lumi-ui/svelte/styles';
	import {
		colorScheme,
		colorSchemeOptions,
		setThemePreference,
		themeChoices
	} from '$lib/color-scheme.svelte';
	import { navigationMode, setNavigationMode } from '$lib/navigation-mode.svelte';
	import { SHOWCASE_SECTIONS } from '$lib/navigation';
	import { href } from '$lib/paths';
	import { libraryUrl, lumiVersion, repositoryUrl, siteUrl } from '$lib/site';

	interface Props {
		children: Snippet;
	}

	const MOBILE_MEDIA_QUERY = '(max-width: 64rem)';
	const themeSwitcherOptions = themeChoices.map(({ value, icon, label }) => ({
		value,
		icon,
		ariaLabel: label
	}));

	const { children }: Props = $props();

	let isMobile = $state(false);
	let sidebarMobileOpen = $state(false);
	let shell: HTMLDivElement;
	let navigationTrigger: HTMLElement | null = null;

	const pathname = $derived(page.route.id ?? '/');
	const resolvedSidebarCollapsed = $derived(navigationMode.preference === 'collapsed' && !isMobile);
	const resolvedSidebarMobileOpen = $derived(sidebarMobileOpen && isMobile);
	const activeSection = $derived(
		SHOWCASE_SECTIONS.find((item) =>
			item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
		) ?? SHOWCASE_SECTIONS[0]
	);
	const pageTitle = $derived(
		pathname === '/' ? 'Lumi UI · Componentes Svelte 5' : `${activeSection.label} · Lumi UI`
	);
	const canonicalUrl = $derived(`${siteUrl}${activeSection.href}`);

	onMount(colorScheme.start);

	onMount(() => {
		const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
		const syncViewport = (): void => {
			isMobile = mediaQuery.matches;
			if (!isMobile) sidebarMobileOpen = false;
		};

		syncViewport();
		mediaQuery.addEventListener('change', syncViewport);

		return () => mediaQuery.removeEventListener('change', syncViewport);
	});

	async function toggleSidebar(): Promise<void> {
		if (isMobile) {
			if (sidebarMobileOpen) {
				closeMobileSidebar();
			} else {
				navigationTrigger =
					document.activeElement instanceof HTMLElement ? document.activeElement : null;
				sidebarMobileOpen = true;
				await tick();
				shell.querySelector<HTMLElement>('aside a[href]')?.focus();
			}
			return;
		}

		setNavigationMode(navigationMode.preference === 'collapsed' ? 'expanded' : 'collapsed');
	}

	function closeMobileSidebar(): void {
		sidebarMobileOpen = false;
		navigationTrigger?.focus();
		navigationTrigger = null;
	}

	function handleNavigationKey(event: KeyboardEvent): void {
		if (!resolvedSidebarMobileOpen) return;
		if (event.key === 'Escape') {
			event.preventDefault();
			closeMobileSidebar();
		} else if (event.key === 'Tab') {
			const controls = shell.querySelectorAll<HTMLElement>(
				'aside a[href], aside button:not([disabled])'
			);
			const first = controls[0];
			const last = controls[controls.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last?.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first?.focus();
			}
		}
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={activeSection.description} />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={activeSection.description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Lumi UI" />
</svelte:head>

<ColorSchemeScript {...colorSchemeOptions} />
<svelte:window onkeydown={handleNavigationKey} />

<div
	bind:this={shell}
	class="lumi-dashboard-layout"
	class:lumi-sidebar--is-collapsed={resolvedSidebarCollapsed}
	class:lumi-sidebar--mobile-open={resolvedSidebarMobileOpen}
>
	{#if resolvedSidebarMobileOpen}
		<button
			type="button"
			class="lumi-mobile-overlay lumi-border--none"
			aria-label="Cerrar navegación"
			onclick={closeMobileSidebar}
		></button>
	{/if}

	<Sidebar
		collapsed={resolvedSidebarCollapsed}
		mobileOpen={resolvedSidebarMobileOpen}
		ariaLabel="Navegación principal"
	>
		{#snippet header()}
			<div
				class="lumi-flex lumi-align-items--center lumi-flex--gap-sm lumi-min-width--0"
				class:lumi-justify--between={isMobile}
				class:lumi-justify--center={resolvedSidebarCollapsed}
			>
				<div class="lumi-flex lumi-align-items--center lumi-flex--gap-sm lumi-min-width--0">
					<IconBadge icon="sparkles" color="primary" size="md" />
					{#if !resolvedSidebarCollapsed}
						<div class="lumi-stack lumi-stack--2xs lumi-min-width--0">
							<strong class="lumi-text--lg">Lumi UI</strong>
							<div class="lumi-flex lumi-align-items--center lumi-flex--gap-xs">
								<StatusIndicator status="pending" />
								<span class="lumi-text--xs">En desarrollo</span>
							</div>
						</div>
					{/if}
				</div>
				{#if isMobile}
					<Button
						variant="ghost"
						size="sm"
						icon="x"
						aria-label="Cerrar navegación"
						onclick={closeMobileSidebar}
					/>
				{/if}
			</div>
		{/snippet}

		{#each SHOWCASE_SECTIONS as item (item.href)}
			<SidebarItem
				href={href(item.href)}
				active={item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)}
				collapsed={resolvedSidebarCollapsed}
				onclick={closeMobileSidebar}
			>
				{#snippet icon()}<Icon icon={item.icon} />{/snippet}
				{item.label}
			</SidebarItem>
		{/each}
	</Sidebar>

	<Navbar ontoggle-sidebar={toggleSidebar}>
		{#snippet title()}{activeSection.label}{/snippet}

		{#snippet actions()}
			<!-- El chip se ancla arriba; el contenedor conserva el centrado de la barra. -->
			<span class="lumi-flex lumi-hidden-mobile">
				<Chip color="secondary" size="sm">v{lumiVersion}</Chip>
			</span>
			<a href={libraryUrl} class="lumi-text--sm lumi-font--semibold lumi-text--primary">GitHub</a>
			<SegmentedControl
				value={colorScheme.preference}
				options={themeSwitcherOptions}
				iconOnly
				aria-label="Tema de la interfaz"
				onchange={setThemePreference}
			/>
		{/snippet}
	</Navbar>

	<main class="lumi-dashboard-layout__content" inert={resolvedSidebarMobileOpen}>
		<div class="lumi-container lumi-container--ultrawide lumi-min-width--0">
			{@render children()}
			<footer
				class="lumi-flex lumi-flex--wrap lumi-flex--gap-md lumi-padding-y--lg lumi-text--sm lumi-text--muted"
			>
				<span>Lumi UI v{lumiVersion}</span>
				<a href={`${libraryUrl}/blob/main/LICENSE`}>Licencia MIT</a>
				<a href={`${libraryUrl}/issues`}>Reportar un problema</a>
				<a href={`${repositoryUrl}/blob/main/CONTRIBUTING.md`}>Contribuir</a>
			</footer>
		</div>
	</main>
</div>
