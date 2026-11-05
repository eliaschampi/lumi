<script lang="ts">
	import { Slider } from '@lumi-ui/svelte';

	let discount = $state(15);
</script>

<Slider
	bind:value={discount}
	label="Discount"
	min={0}
	max={50}
	step={5}
	color="success"
	showValue
/>
