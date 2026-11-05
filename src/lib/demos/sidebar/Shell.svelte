<script lang="ts">
	import House from '@lucide/svelte/icons/house';
	import type { Snippet } from 'svelte';
	import { Icon, Navbar, Sidebar, SidebarItem } from '@lumi-ui/svelte';

	const { children }: { children: Snippet } = $props();

	let collapsed = $state(false);
</script>

<div class="lumi-dashboard-layout" class:lumi-sidebar--is-collapsed={collapsed}>
	<Sidebar {collapsed} aria-label="Main navigation">
		<SidebarItem href="/" current {collapsed}>
			{#snippet icon()}<Icon icon={House} />{/snippet}
			Home
		</SidebarItem>
	</Sidebar>

	<Navbar ontogglesidebar={() => (collapsed = !collapsed)}>
		{#snippet title()}Home{/snippet}
	</Navbar>

	<main class="lumi-dashboard-layout__content">
		{@render children()}
	</main>
</div>
