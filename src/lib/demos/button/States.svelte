<script lang="ts">
	import { Button } from '@lumi-ui/svelte';

	let saving = $state(false);

	function save(): void {
		saving = true;
		setTimeout(() => (saving = false), 1500);
	}
</script>

<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
	<Button variant="filled" loading={saving} onclick={save}>Save changes</Button>
	<Button variant="filled" disabled>Not available</Button>
	<Button variant="border" loading>Sending</Button>
</div>
