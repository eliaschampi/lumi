<script lang="ts">
	import { NumberInput } from '@lumi-ui/svelte';

	let quantity = $state(1);
</script>

<NumberInput bind:value={quantity} label="Quantity" min={1} max={20} hint="From 1 to 20 units." />
