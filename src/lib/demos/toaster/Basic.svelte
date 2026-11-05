<script lang="ts">
	import { Button, Toaster, createToaster } from '@lumi-ui/svelte';

	const toaster = createToaster({ duration: 3000 });
</script>

<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
	<Button
		variant="border"
		color="success"
		onclick={() => toaster.show({ title: 'Saved', color: 'success' })}
	>
		Save
	</Button>
	<Button
		variant="border"
		color="danger"
		onclick={() =>
			toaster.show({
				title: 'Could not save',
				message: 'Check your connection and try again.',
				color: 'danger'
			})}
	>
		Fail
	</Button>
</div>

<Toaster {toaster} placement="bottom-end" />
