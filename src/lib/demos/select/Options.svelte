<script lang="ts">
	import { Select, type SelectValue } from '@lumi-ui/svelte';

	const ROLES = [
		{ value: 'admin', label: 'Administrator' },
		{ value: 'editor', label: 'Editor' },
		{ value: 'owner', label: 'Owner', disabled: true }
	];

	let role = $state<SelectValue | null>('editor');
</script>

<Select bind:value={role} label="Role" options={ROLES} clearable={false} />
