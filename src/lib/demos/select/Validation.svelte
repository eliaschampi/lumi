<script lang="ts">
	import { Select, type SelectValue } from '@lumi-ui/svelte';

	let city = $state<SelectValue | null>(null);
	const error = $derived(city ? undefined : 'Choose a city to continue.');
</script>

<Select
	bind:value={city}
	name="city"
	label="City"
	placeholder="Choose a city"
	options={['Lima', 'Cusco']}
	required
	hint="We use it to calculate delivery."
	{error}
/>
