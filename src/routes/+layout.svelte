<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import { ColorSchemeScript } from '@lumi-ui/svelte/color-scheme';
	import {
		Avatar,
		Chip,
		Dropdown,
		DropdownItem,
		Icon,
		Navbar,
		Sidebar,
		SidebarHeader,
		SidebarItem
	} from '@lumi-ui/svelte';
	import '@lumi-ui/svelte/styles';
	import { colorScheme, colorSchemeOptions } from '$lib/color-scheme.svelte';
	import { navigationMode, setNavigationMode } from '$lib/navigation-mode.svelte';
	import { SHOWCASE_SECTIONS } from '$lib/navigation';
	import { href, route } from '$lib/paths';

	interface Props {
		children: Snippet;
	}

	const MOBILE_MEDIA_QUERY = '(max-width: 64rem)';
	const THEME_LABELS = {
		system: { label: 'Sistema', icon: 'monitor' },
		light: { label: 'Claro', icon: 'sun' },
		dark: { label: 'Oscuro', icon: 'moon' }
	} as const;

	const { children }: Props = $props();

	let isMobile = $state(false);
	let sidebarMobileOpen = $state(false);

	const pathname = $derived(route(page.url.pathname));
	const resolvedSidebarCollapsed = $derived(navigationMode.preference === 'collapsed' && !isMobile);
	const resolvedSidebarMobileOpen = $derived(sidebarMobileOpen && isMobile);
	const activeSection = $derived(
		SHOWCASE_SECTIONS.find((item) =>
			item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
		) ?? SHOWCASE_SECTIONS[0]
	);
	const activeTheme = $derived(THEME_LABELS[colorScheme.preference]);

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

	function toggleSidebar(): void {
		if (isMobile) {
			sidebarMobileOpen = !sidebarMobileOpen;
			return;
		}

		setNavigationMode(navigationMode.preference === 'collapsed' ? 'expanded' : 'collapsed');
	}

	function closeMobileSidebar(): void {
		sidebarMobileOpen = false;
	}
</script>

<svelte:head>
	<title>{activeSection.label} · Lumi UI</title>
</svelte:head>

<ColorSchemeScript {...colorSchemeOptions} />

<div
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
		ariaLabel="Navegación del showcase"
	>
		{#snippet header()}
			<SidebarHeader
				collapsed={resolvedSidebarCollapsed}
				userName="Lumi UI"
				userMeta="Showcase · Svelte 5"
				avatarText="LU"
			/>
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
			<Chip icon="sparkles" color="secondary" size="sm" class="lumi-hidden-mobile">Lumi UI</Chip>

			<Dropdown placement="bottom-end" aria-label="Menú del showcase">
				{#snippet triggerContent()}
					<Avatar text="Lumi UI" size="sm" color="primary" />
				{/snippet}

				<DropdownItem icon={activeTheme.icon} onclick={colorScheme.cyclePreference}>
					Tema: {activeTheme.label}
				</DropdownItem>
				<DropdownItem icon="settings" href={href('/settings')}>Ajustes</DropdownItem>
				<DropdownItem icon="bookOpen" href={href('/components')}>Ver componentes</DropdownItem>
			</Dropdown>
		{/snippet}
	</Navbar>

	<main class="lumi-dashboard-layout__content">
		<div class="lumi-container lumi-container--ultrawide lumi-min-width--0">
			{@render children()}
		</div>
	</main>
</div>
