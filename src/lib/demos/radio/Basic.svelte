<script lang="ts">
	import { Radio } from '@lumi-ui/svelte';

	let delivery = $state('pickup');
</script>

<div class="lumi-stack lumi-stack--xs" role="radiogroup" aria-label="Delivery">
	<Radio bind:group={delivery} name="delivery" value="pickup" label="Pick up at the store" />
	<Radio bind:group={delivery} name="delivery" value="home" label="Home delivery" />
</div>
