<script lang="ts">
	import Lock from '@lucide/svelte/icons/lock';
	import { EmptyState } from '@lumi-ui/svelte';
</script>

<EmptyState
	icon={Lock}
	iconColor="warning"
	title="No access"
	description="Ask an administrator for permission to view these files."
/>
