<script lang="ts">
	import LogOut from '@lucide/svelte/icons/log-out';
	import Settings from '@lucide/svelte/icons/settings';
	import { Avatar, Dropdown, DropdownItem } from '@lumi-ui/svelte';
</script>

<Dropdown aria-label="Account">
	{#snippet triggerContent()}
		<Avatar name="Ana Torres" />
	{/snippet}

	{#snippet content()}
		<DropdownItem icon={Settings}>Settings</DropdownItem>
		<DropdownItem icon={LogOut}>Sign out</DropdownItem>
	{/snippet}
</Dropdown>
