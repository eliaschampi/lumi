<script lang="ts">
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import { Button } from '@lumi-ui/svelte';
</script>

<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
	<Button variant="border" href="https://svelte.dev/docs/svelte">Read the guide</Button>
	<Button
		variant="flat"
		icon={ExternalLink}
		iconAfter
		href="https://www.npmjs.com/package/@lumi-ui/svelte"
		target="_blank"
		rel="noreferrer"
	>
		Open npm
	</Button>
</div>
