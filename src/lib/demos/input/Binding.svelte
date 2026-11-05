<script lang="ts">
	import { Input } from '@lumi-ui/svelte';

	let name = $state('');
	const greeting = $derived(name.trim() ? `Hello, ${name.trim()}!` : 'Type your name');
</script>

<div class="lumi-stack lumi-stack--sm">
	<Input bind:value={name} label="Name" clearable />
	<p class="lumi-text--muted lumi-margin--none">{greeting}</p>
</div>
