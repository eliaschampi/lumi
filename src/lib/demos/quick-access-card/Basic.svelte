<script lang="ts">
	import BookOpen from '@lucide/svelte/icons/book-open';
	import { QuickAccessCard } from '@lumi-ui/svelte';
</script>

<div class="lumi-grid lumi-grid--cards lumi-grid--gap-md">
	<QuickAccessCard
		href="https://svelte.dev/docs"
		title="Documentation"
		description="Read the guide"
		icon={BookOpen}
	/>
</div>
