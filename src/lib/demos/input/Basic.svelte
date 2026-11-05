<script lang="ts">
	import { Input } from '@lumi-ui/svelte';
</script>

<div class="lumi-stack lumi-stack--md">
	<Input label="Full name" placeholder="Ana Torres" />
	<Input label="Email" type="email" placeholder="you@example.com" autocomplete="email" required />
	<Input label="Birth date" type="date" />
</div>
