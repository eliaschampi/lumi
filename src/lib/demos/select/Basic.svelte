<script lang="ts">
	import { Select, type SelectValue } from '@lumi-ui/svelte';

	let city = $state<SelectValue | null>(null);
</script>

<Select bind:value={city} label="City" options={['Lima', 'Cusco', 'Arequipa', 'Trujillo']} />
