<script lang="ts">
	import { StatusIndicator } from '@lumi-ui/svelte';
</script>

<div class="lumi-flex lumi-align-items--center lumi-flex--gap-md">
	<StatusIndicator status="success" tooltip="Online" />
	<StatusIndicator status="warning" pulse tooltip="Reconnecting" />
	<StatusIndicator status="danger" tooltip="Offline" />
</div>
