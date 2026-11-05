<script lang="ts">
	import Heart from '@lucide/svelte/icons/heart';
	import { Icon } from '@lumi-ui/svelte';
</script>

<div class="lumi-flex lumi-align-items--center lumi-flex--gap-sm">
	<Icon icon={Heart} size="sm" />
	<Icon icon={Heart} size="md" />
	<Icon icon={Heart} size="lg" color="danger" />
	<Icon icon={Heart} size="xl" color="primary" aria-label="Favorite" />
</div>
