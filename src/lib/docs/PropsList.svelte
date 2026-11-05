<script lang="ts">
	import { Card, Chip } from '@lumi-ui/svelte';
	import { currentLang } from '$lib/i18n';
	import type { DocPropView } from './types';

	const { props }: { props: DocPropView[] } = $props();

	const DEFAULT = { en: 'default', es: 'por defecto' };
</script>

<Card spaced>
	<div class="lumi-stack lumi-stack--md" role="list">
		{#each props as prop (prop.name)}
			<div class="lumi-stack lumi-stack--2xs" role="listitem">
				<div class="lumi-flex lumi-flex--wrap lumi-align-items--center lumi-flex--gap-xs">
					<code class="lumi-font--semibold lumi-text--primary">{prop.name}</code>
					<code class="lumi-text--sm lumi-text--muted lumi-text-break">{prop.type}</code>
					{#if prop.default}
						<Chip color="secondary" size="sm">{DEFAULT[currentLang()]}: {prop.default}</Chip>
					{/if}
				</div>
				<span class="lumi-text--sm">{prop.text}</span>
			</div>
		{/each}
	</div>
</Card>
