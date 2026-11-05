<script lang="ts">
	import { Skeleton } from '@lumi-ui/svelte';
</script>

<div class="lumi-flex lumi-flex--gap-sm">
	<Skeleton shape="circle" />
	<div class="lumi-flex-item--grow lumi-stack lumi-stack--xs">
		<Skeleton shape="text" width="40%" />
		<Skeleton lines={3} />
	</div>
</div>
