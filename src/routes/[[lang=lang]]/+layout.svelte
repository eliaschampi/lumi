<script lang="ts">
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import Languages from '@lucide/svelte/icons/languages';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import X from '@lucide/svelte/icons/x';
	import { onMount, tick, type Snippet } from 'svelte';
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
	import { LANGS, currentLang, link, sitePath, type Lang } from '$lib/i18n';
	import { NAVIGATION, isGroup, navItemFor, pageTitle, type NavGroup } from '$lib/navigation';
	import {
		libraryUrl,
		lumiVersion,
		packageUrl,
		repositoryUrl,
		siteLocales,
		siteUrl
	} from '$lib/site';
	import { toaster } from '$lib/toaster';

	const { children }: { children: Snippet } = $props();

	// Mismo umbral que el shell de Lumi (GUIDE §4): por debajo, el menú es un panel móvil.
	const MOBILE_MEDIA_QUERY = '(max-width: 64rem)';

	const COPY = {
		en: {
			navigation: 'Main navigation',
			home: 'Lumi UI, home',
			closeNavigation: 'Close navigation',
			theme: 'Interface theme',
			otherLanguage: 'Leer en español',
			issue: 'Report an issue',
			contribute: 'Contribute to this site'
		},
		es: {
			navigation: 'Navegación principal',
			home: 'Lumi UI, inicio',
			closeNavigation: 'Cerrar navegación',
			theme: 'Tema de la interfaz',
			otherLanguage: 'Read in English',
			issue: 'Reportar un problema',
			contribute: 'Contribuir a este sitio'
		}
	} as const;
	const OG_LOCALE: Record<Lang, string> = { en: 'en_US', es: 'es_PE' };

	const lang = $derived(currentLang());
	const t = $derived(COPY[lang]);
	const otherLang = $derived<Lang>(lang === 'en' ? 'es' : 'en');

	setLumiLocale(() =>
		currentLang() === 'es' ? { ...siteLocales.es, messages: lumiEs } : siteLocales.en
	);

	let isMobile = $state(false);
	let mobileOpen = $state(false);
	let shell: HTMLDivElement;
	let navigationTrigger: HTMLElement | null = null;

	const path = $derived(sitePath());
	const item = $derived(navItemFor(path));
	const themeOptions = $derived(
		themeChoices.map(({ value, icon, label }) => ({ value, icon, ariaLabel: label[lang] }))
	);
	const collapsed = $derived(navigationMode.preference === 'collapsed' && !isMobile);
	const drawerOpen = $derived(mobileOpen && isMobile);
	const title = $derived(pageTitle(item, lang));

	/** Grupos abiertos a mano; sin elección, se abre el que contiene la página actual. */
	let openedGroups = $state<Record<string, boolean>>({});
	const groupHasPage = (group: NavGroup): boolean => group.items.some((entry) => entry === item);
	const groupOpen = (group: NavGroup): boolean => openedGroups[group.id] ?? groupHasPage(group);

	function toggleGroup(group: NavGroup): void {
		if (collapsed) setNavigationMode('expanded');
		openedGroups[group.id] = collapsed || !groupOpen(group);
	}

	const absoluteUrl = (target: Lang): string => {
		const prefix = target === 'es' ? '/es' : '';
		return `${siteUrl}${prefix}${path === '/' ? (prefix ? '' : '/') : path}`;
	};

	// La navegación cliente no recarga `app.html`: el idioma del documento se mantiene aquí.
	$effect(() => {
		document.documentElement.lang = lang;
	});

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
	<title>{title}</title>
	<meta name="description" content={item.description[lang]} />
	<link rel="canonical" href={absoluteUrl(lang)} />
	{#each LANGS as target (target)}
		<link rel="alternate" hreflang={target} href={absoluteUrl(target)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={absoluteUrl('en')} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={item.description[lang]} />
	<meta property="og:url" content={absoluteUrl(lang)} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Lumi UI" />
	<meta property="og:locale" content={OG_LOCALE[lang]} />
</svelte:head>

<ColorSchemeScript {...colorSchemeOptions} />
<svelte:window onkeydown={handleDrawerKeydown} />

<div
	bind:this={shell}
	class="lumi-dashboard-layout"
	class:lumi-sidebar--is-collapsed={collapsed}
	class:lumi-sidebar--mobile-open={drawerOpen}
>
	<Sidebar {collapsed} mobileOpen={drawerOpen} aria-label={t.navigation}>
		{#snippet header()}
			<div
				class="lumi-flex lumi-align-items--center lumi-flex--gap-sm lumi-min-width--0"
				class:lumi-justify--between={isMobile}
				class:lumi-justify--center={collapsed}
			>
				<a
					href={link('/')}
					class="lumi-flex lumi-align-items--center lumi-flex--gap-sm lumi-min-width--0 lumi-text-decoration--none"
					aria-label={collapsed ? t.home : undefined}
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
						aria-label={t.closeNavigation}
						onclick={closeDrawer}
					/>
				{/if}
			</div>
		{/snippet}

		{#each NAVIGATION as entry (isGroup(entry) ? entry.id : entry.path)}
			{#if isGroup(entry)}
				{@const open = groupOpen(entry) && !collapsed}
				<SidebarItem
					current={collapsed && groupHasPage(entry)}
					expanded={collapsed ? undefined : open}
					{collapsed}
					onclick={() => toggleGroup(entry)}
				>
					{#snippet icon()}<Icon icon={entry.icon} />{/snippet}
					<span class="lumi-sidebar-nav-label">
						<span>{entry.label[lang]}</span>
						{#if !collapsed}
							<Icon icon={open ? ChevronUp : ChevronDown} size="xs" />
						{/if}
					</span>
				</SidebarItem>
				{#if open}
					<div class="lumi-sidebar-subitems">
						{#each entry.items as child (child.path)}
							<SidebarItem
								href={link(child.path)}
								level="sub"
								current={child === item}
								onclick={closeDrawer}
							>
								{#snippet icon()}<Icon icon={child.icon} size="sm" />{/snippet}
								{child.label[lang]}
							</SidebarItem>
						{/each}
					</div>
				{/if}
			{:else}
				<SidebarItem
					href={link(entry.path)}
					current={entry === item}
					{collapsed}
					onclick={closeDrawer}
				>
					{#snippet icon()}<Icon icon={entry.icon} />{/snippet}
					{entry.label[lang]}
				</SidebarItem>
			{/if}
		{/each}
	</Sidebar>

	<Navbar ontogglesidebar={toggleSidebar}>
		{#snippet title()}{item.label[lang]}{/snippet}

		{#snippet actions()}
			<Button
				variant="ghost"
				size="sm"
				icon={Languages}
				href={link(path, otherLang)}
				aria-label={t.otherLanguage}
				title={t.otherLanguage}
			>
				{otherLang.toUpperCase()}
			</Button>
			<Button variant="ghost" size="sm" href={libraryUrl}>GitHub</Button>
			<SegmentedControl
				value={colorScheme.preference}
				options={themeOptions}
				iconOnly
				aria-label={t.theme}
				onchange={setThemePreference}
			/>
		{/snippet}
	</Navbar>

	<main class="lumi-dashboard-layout__content" inert={drawerOpen}>
		<div class="lumi-container lumi-container--ultrawide lumi-min-width--0">
			{#key lang}
				{@render children()}
			{/key}
			<footer
				class="lumi-flex lumi-flex--wrap lumi-flex--gap-md lumi-margin-top--lg lumi-padding-y--md lumi-text--sm lumi-text--muted"
			>
				<span>Lumi UI v{lumiVersion} · MIT</span>
				<a class="lumi-text--muted" href={packageUrl}>npm</a>
				<a class="lumi-text--muted" href={`${libraryUrl}/issues`}>{t.issue}</a>
				<a class="lumi-text--muted" href={`${repositoryUrl}/blob/main/CONTRIBUTING.md`}>
					{t.contribute}
				</a>
			</footer>
		</div>
	</main>

	<button
		type="button"
		class="lumi-mobile-overlay lumi-border--none"
		aria-label={t.closeNavigation}
		tabindex="-1"
		onclick={closeDrawer}
	></button>
</div>

<Toaster {toaster} placement="bottom-end" />
