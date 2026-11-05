<script lang="ts">
	import { Alert, Button, Input } from '@lumi-ui/svelte';

	let error = $state('');
</script>

<form
	class="lumi-stack lumi-stack--md"
	onsubmit={(event) => {
		event.preventDefault();
		error = 'We could not sign you in. Check your details and try again.';
	}}
>
	{#if error}
		<Alert color="danger">{error}</Alert>
	{/if}
	<Input label="Email" type="email" placeholder="you@example.com" />
	<div class="lumi-flex lumi-justify--end">
		<Button type="submit" variant="filled">Sign in</Button>
	</div>
</form>
