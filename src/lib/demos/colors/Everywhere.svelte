<script lang="ts">
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import { Alert, Button, Chip, IconBadge } from '@lumi-ui/svelte';
</script>

<div class="lumi-stack lumi-stack--md">
	<div class="lumi-flex lumi-flex--wrap lumi-align-items--center lumi-flex--gap-sm">
		<IconBadge icon={CircleCheck} color="success" />
		<Chip color="success">Paid</Chip>
		<Button variant="flat" color="success">Confirm</Button>
	</div>
	<Alert color="success" title="Payment received">The receipt was sent by email.</Alert>
</div>
