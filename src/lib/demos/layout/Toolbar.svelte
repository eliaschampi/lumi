<script lang="ts">
	import Plus from '@lucide/svelte/icons/plus';
	import { Button, Title } from '@lumi-ui/svelte';
</script>

<div
	class="lumi-flex lumi-flex--wrap lumi-justify--between lumi-align-items--center lumi-flex--gap-sm"
>
	<Title title="Customers" level={3} size="sm" />
	<div class="lumi-flex lumi-flex--gap-xs">
		<Button variant="border" size="sm">Export</Button>
		<Button variant="filled" size="sm" icon={Plus}>New customer</Button>
	</div>
</div>
