<script lang="ts">
	import { Select, type SelectValue } from '@lumi-ui/svelte';

	const COUNTRIES = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Peru'];

	let country = $state<SelectValue | null>(null);
</script>

<Select bind:value={country} label="Country" options={COUNTRIES} searchable />
