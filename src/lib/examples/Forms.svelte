<script lang="ts">
	import { Select, type SelectValue } from '@lumi-ui/svelte';

	let workspace = $state<SelectValue | null>(null);
</script>

<Select
	bind:value={workspace}
	label="Espacio de trabajo"
	options={['Atlas', 'Northwind', 'Nexus']}
	searchable
	clearable
/>
