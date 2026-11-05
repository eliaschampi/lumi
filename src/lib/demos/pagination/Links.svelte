<script lang="ts">
	import { Pagination } from '@lumi-ui/svelte';
</script>

<Pagination page={1} pages={4} href={(page) => `?page=${page}`} aria-label="Products" />
