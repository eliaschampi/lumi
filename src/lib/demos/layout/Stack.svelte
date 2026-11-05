<script lang="ts">
	import { Button, Input } from '@lumi-ui/svelte';
</script>

<form class="lumi-stack lumi-stack--md">
	<Input label="Full name" />
	<Input label="Email" type="email" />
	<Button type="submit" variant="filled">Create account</Button>
</form>
