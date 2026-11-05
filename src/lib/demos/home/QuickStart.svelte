<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import { Alert, Button, Card, Input } from '@lumi-ui/svelte';

	let name = $state('My project');
	let saved = $state(false);
	const message = $derived(`${name.trim()} is ready. This only lives in your browser.`);
</script>

<Card title="Your first screen" subtitle="Try the components right here" spaced>
	<form
		class="lumi-stack lumi-stack--md"
		onsubmit={(event) => {
			event.preventDefault();
			saved = true;
		}}
	>
		<Input bind:value={name} name="project" label="Project name" required clearable />
		<Button type="submit" variant="filled" icon={Check} disabled={!name.trim()}>Try it</Button>
		{#if saved}
			<Alert color="success" title="It works!" closable bind:active={saved}>{message}</Alert>
		{/if}
	</form>
</Card>
