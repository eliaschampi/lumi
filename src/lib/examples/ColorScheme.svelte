<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '@lumi-ui/svelte';
	import { ColorSchemeScript, createColorScheme } from '@lumi-ui/svelte/color-scheme';

	const theme = createColorScheme();
	onMount(theme.start);
</script>

<ColorSchemeScript />
<Button onclick={theme.cyclePreference}>Cambiar tema</Button>
