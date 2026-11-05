<script lang="ts">
	import { Button, Table } from '@lumi-ui/svelte';

	interface Person {
		id: number;
		name: string;
	}

	const people: Person[] = [
		{ id: 1, name: 'Ana Torres' },
		{ id: 2, name: 'Bruno Díaz' },
		{ id: 3, name: 'Carla Ruiz' }
	];

	let selected = $state<Person[]>([]);
</script>

<div class="lumi-stack lumi-stack--sm">
	<Table data={people} selectable bind:selected aria-label="People">
		{#snippet thead()}
			<th scope="col">Name</th>
		{/snippet}

		{#snippet row({ row })}
			<td>{row.name}</td>
		{/snippet}
	</Table>
	<Button variant="border" size="sm" disabled={!selected.length}>Export selected</Button>
</div>
