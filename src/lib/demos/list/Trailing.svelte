<script lang="ts">
	import { Chip, List, ListItem } from '@lumi-ui/svelte';
</script>

<List>
	<ListItem title="Order 1024" description="Ana Torres">
		{#snippet trailing()}
			<Chip color="success" size="sm">Paid</Chip>
		{/snippet}
	</ListItem>
	<ListItem title="Order 1025" description="Bruno Díaz">
		{#snippet trailing()}
			<Chip color="warning" size="sm">Pending</Chip>
		{/snippet}
	</ListItem>
</List>
