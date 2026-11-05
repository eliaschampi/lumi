<script lang="ts">
	import Download from '@lucide/svelte/icons/download';
	import { Button, Tooltip } from '@lumi-ui/svelte';
</script>

<Tooltip text="Download report">
	<Button variant="flat" icon={Download} aria-label="Download report" />
</Tooltip>
