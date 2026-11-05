<script lang="ts">
	import { Checkbox } from '@lumi-ui/svelte';

	let accepted = $state(false);
</script>

<Checkbox bind:checked={accepted} name="terms" label="I accept the terms" required />
