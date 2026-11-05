<script lang="ts">
	import Ellipsis from '@lucide/svelte/icons/ellipsis';
	import { Button, Dropdown, DropdownItem } from '@lumi-ui/svelte';
</script>

<Dropdown placement="bottom-end">
	{#snippet trigger(props)}
		<Button {...props} variant="ghost" size="sm" icon={Ellipsis} aria-label="More actions" />
	{/snippet}

	<DropdownItem>Duplicate</DropdownItem>
	<DropdownItem disabled>Archive</DropdownItem>
	<DropdownItem href="https://svelte.dev/docs">Open the guide</DropdownItem>
</Dropdown>
