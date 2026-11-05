<script lang="ts">
	import { Button, type ButtonVariant, type LumiColor } from '@lumi-ui/svelte';

	const VARIANTS: ButtonVariant[] = ['filled', 'gradient', 'border', 'flat', 'ghost'];
	const COLORS: LumiColor[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
</script>

<div class="lumi-stack lumi-stack--sm">
	{#each VARIANTS as variant (variant)}
		<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
			{#each COLORS as color (color)}
				<Button {variant} {color}>{color}</Button>
			{/each}
		</div>
	{/each}
</div>
