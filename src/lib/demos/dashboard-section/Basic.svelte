<script lang="ts">
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import { Button, DashboardSection, InfoItem } from '@lumi-ui/svelte';
</script>

<DashboardSection title="This month" subtitle="Compared with the last one" icon={TrendingUp}>
	{#snippet actions()}
		<Button variant="flat" size="sm">Export</Button>
	{/snippet}

	<InfoItem label="Orders" value="128" />
</DashboardSection>
