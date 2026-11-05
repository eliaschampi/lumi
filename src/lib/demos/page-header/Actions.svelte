<script lang="ts">
	import Plus from '@lucide/svelte/icons/plus';
	import Users from '@lucide/svelte/icons/users';
	import { Button, PageHeader } from '@lumi-ui/svelte';
</script>

<PageHeader title="Customers" subtitle="Everyone who has bought from you" icon={Users}>
	{#snippet actions()}
		<Button variant="border">Export</Button>
		<Button variant="filled" icon={Plus}>New customer</Button>
	{/snippet}
</PageHeader>
