<script lang="ts">
	import DocPage from '$lib/docs/DocPage.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<DocPage doc={data.doc} demos={data.demos} />
