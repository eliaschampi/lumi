<script lang="ts">
	import { Button, Input, PageSidebar } from '@lumi-ui/svelte';

	let filtersOpen = $state(false);
</script>

<div class="lumi-layout--two-columns lumi-page-sidebar-layout">
	<PageSidebar bind:mobileOpen={filtersOpen} mobileTitle="Filters">
		{#snippet sidebar()}
			<div class="lumi-page-sidebar__section lumi-stack lumi-stack--sm">
				<Input label="Search" placeholder="Search customers" />
				<Button variant="border">Apply filters</Button>
			</div>
		{/snippet}
	</PageSidebar>

	<section class="lumi-layout--content-right">
		<Button variant="border" onclick={() => (filtersOpen = true)}>Filters</Button>
	</section>
</div>
