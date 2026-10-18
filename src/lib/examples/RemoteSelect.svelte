<script lang="ts">
	import { RemoteSelect } from '@lumi-ui/svelte';

	interface Workspace {
		id: number;
		name: string;
	}

	let selected = $state<Workspace | null>(null);
</script>

<!-- GET /api/workspaces?q=atlas&limit=5 debe filtrar y responder:
     { "items": [{ "id": 1, "name": "Atlas Workspace" }] } -->
<RemoteSelect
	bind:selected
	endpoint="/api/workspaces"
	label="Espacio de trabajo"
	minQueryLength={2}
	limit={5}
	getOptionValue={(item) => String(item.id)}
	getOptionLabel={(item) => item.name}
	errorMessageFallback="No se pudieron cargar los resultados."
/>
