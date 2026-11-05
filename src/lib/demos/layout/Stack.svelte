<script lang="ts">
	import { Button, Input } from '@lumi-ui/svelte';
</script>

<form class="lumi-stack lumi-stack--md">
	<Input label="Full name" placeholder="Ana Torres" />
	<Input label="Email" type="email" placeholder="you@example.com" />
	<Button type="submit" variant="filled">Create account</Button>
</form>
