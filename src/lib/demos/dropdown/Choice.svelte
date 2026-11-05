<script lang="ts">
	import { Button, Dropdown, DropdownItem } from '@lumi-ui/svelte';

	const ORDERS = ['Newest first', 'Oldest first', 'Name'];

	let order = $state('Newest first');
</script>

<Dropdown>
	{#snippet trigger(props)}
		<Button {...props} variant="border">{order}</Button>
	{/snippet}

	{#each ORDERS as name (name)}
		<DropdownItem selected={name === order} onclick={() => (order = name)}>{name}</DropdownItem>
	{/each}
</Dropdown>
