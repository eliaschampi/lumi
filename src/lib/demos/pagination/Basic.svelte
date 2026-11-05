<script lang="ts">
	import { Pagination } from '@lumi-ui/svelte';

	let page = $state(3);
</script>

<Pagination bind:page pages={12} aria-label="Orders" />
