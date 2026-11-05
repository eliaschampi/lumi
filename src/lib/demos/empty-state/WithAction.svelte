<script lang="ts">
	import UserPlus from '@lucide/svelte/icons/user-plus';
	import { Button, EmptyState } from '@lumi-ui/svelte';
</script>

<EmptyState
	icon={UserPlus}
	iconColor="primary"
	title="Add your first customer"
	description="Customers you add will appear in this list."
>
	{#snippet actions()}
		<Button variant="filled">New customer</Button>
	{/snippet}
</EmptyState>
