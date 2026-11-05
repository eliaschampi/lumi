<script lang="ts">
	import Bell from '@lucide/svelte/icons/bell';
	import { IconBadge } from '@lumi-ui/svelte';
</script>

<div class="lumi-flex lumi-flex--wrap lumi-align-items--center lumi-flex--gap-sm">
	<IconBadge icon={Bell} size="sm" />
	<IconBadge icon={Bell} color="success" />
	<IconBadge icon={Bell} color="warning" size="lg" />
	<IconBadge icon={Bell} color="danger" size="xl" />
</div>
