<script lang="ts">
	import Download from '@lucide/svelte/icons/download';
	import Pencil from '@lucide/svelte/icons/pencil';
	import Trash2 from '@lucide/svelte/icons/trash-2';
	import { Button, Dropdown, DropdownItem } from '@lumi-ui/svelte';
</script>

<Dropdown>
	{#snippet trigger(props)}
		<Button {...props} variant="border">Actions</Button>
	{/snippet}

	<DropdownItem icon={Pencil}>Edit</DropdownItem>
	<DropdownItem icon={Download}>Export</DropdownItem>
	<DropdownItem icon={Trash2} color="danger">Delete</DropdownItem>
</Dropdown>
