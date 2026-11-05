<script lang="ts">
	import Plus from '@lucide/svelte/icons/plus';
	import { Button, Dialog, Input } from '@lumi-ui/svelte';

	let open = $state(false);
	let saving = $state(false);
	let form = $state<HTMLFormElement>();

	function save(event: SubmitEvent): void {
		event.preventDefault();
		saving = true;
		setTimeout(() => {
			saving = false;
			open = false;
		}, 1000);
	}
</script>

<Button variant="filled" icon={Plus} onclick={() => (open = true)}>New customer</Button>

<Dialog
	bind:open
	title="New customer"
	persistent={saving}
	hideClose={saving}
	closeOnEscape={!saving}
>
	<form bind:this={form} class="lumi-stack lumi-stack--md" onsubmit={save}>
		<Input label="Full name" placeholder="Ana Torres" required />
		<Input label="Email" type="email" placeholder="you@example.com" />
	</form>

	{#snippet footer()}
		<Button variant="ghost" disabled={saving} onclick={() => (open = false)}>Cancel</Button>
		<Button variant="filled" loading={saving} onclick={() => form?.requestSubmit()}>Save</Button>
	{/snippet}
</Dialog>
