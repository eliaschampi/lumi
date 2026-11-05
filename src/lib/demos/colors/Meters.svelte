<script lang="ts">
	import { Progress, Slider, type LumiColor } from '@lumi-ui/svelte';

	const ROLES: LumiColor[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

	let values = $state([75, 60, 90, 45, 30, 65]);
</script>

<div class="lumi-grid lumi-grid--columns-2-lg lumi-grid--gap-lg">
	{#each ROLES as color, index (color)}
		<div class="lumi-stack lumi-stack--xs">
			<Slider bind:value={values[index]} label={color} {color} showValue />
			<Progress value={values[index]} {color} striped animated aria-label={color} />
		</div>
	{/each}
</div>
