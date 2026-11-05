<script lang="ts">
	import Eye from '@lucide/svelte/icons/eye';
	import EyeOff from '@lucide/svelte/icons/eye-off';
	import { Input } from '@lumi-ui/svelte';

	let visible = $state(false);
</script>

<Input
	label="Password"
	type={visible ? 'text' : 'password'}
	actionIcon={visible ? EyeOff : Eye}
	actionLabel={visible ? 'Hide password' : 'Show password'}
	onactionclick={() => (visible = !visible)}
/>
