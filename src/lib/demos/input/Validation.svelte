<script lang="ts">
	import { Input } from '@lumi-ui/svelte';

	let email = $state('ana@');
	const error = $derived(email.includes('.') ? undefined : 'Enter a complete email address.');
</script>

<Input
	bind:value={email}
	label="Email"
	type="email"
	hint="We will send the receipt here."
	{error}
/>
