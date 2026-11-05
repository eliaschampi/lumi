<script lang="ts">
	import { RemoteSelect } from '@lumi-ui/svelte';

	interface Customer {
		id: number;
		name: string;
	}

	let selected = $state<Customer | null>(null);
</script>

<!-- GET /api/customers?q=ana&limit=5 returns { "items": [{ "id": 1, "name": "Ana" }] } -->
<RemoteSelect
	bind:selected
	endpoint="/api/customers"
	label="Customer"
	minQueryLength={2}
	limit={5}
	getOptionValue={(item) => String(item.id)}
	getOptionLabel={(item) => item.name}
/>
