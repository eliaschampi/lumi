<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import { Chip } from '@lumi-ui/svelte';
</script>

<div class="lumi-flex lumi-flex--wrap lumi-align-items--center lumi-flex--gap-xs">
	<Chip color="success" size="sm">Small</Chip>
	<Chip color="success">Medium</Chip>
	<Chip color="success" size="sm" icon={Check}>Paid</Chip>
	<Chip color="success" icon={Check}>Paid</Chip>
</div>
