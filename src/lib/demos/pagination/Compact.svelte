<script lang="ts">
	import { Pagination } from '@lumi-ui/svelte';

	let page = $state(2);
</script>

<Pagination bind:page pages={5} compact aria-label="Messages" />
