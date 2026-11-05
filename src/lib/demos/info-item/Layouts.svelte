<script lang="ts">
	import Calendar from '@lucide/svelte/icons/calendar';
	import { InfoItem } from '@lumi-ui/svelte';
</script>

<div class="lumi-grid lumi-grid--columns-2-lg lumi-grid--gap-md">
	<InfoItem icon={Calendar} label="Horizontal" value="March 12" />
	<InfoItem icon={Calendar} layout="vertical" label="Vertical" value="March 12" />
</div>
