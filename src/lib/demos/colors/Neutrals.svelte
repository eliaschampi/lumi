<script lang="ts">
	const TOKENS: { name: string; use: string }[] = [
		{ name: 'color-text', use: 'Main text' },
		{ name: 'color-text-muted', use: 'Secondary text' },
		{ name: 'color-primary', use: 'Text links and accents' }
	];
	const SURFACES: { name: string; use: string }[] = [
		{ name: 'color-canvas', use: 'Page background' },
		{ name: 'color-surface-card', use: 'Cards and panels' },
		{ name: 'color-surface-inset', use: 'Sunken wells' }
	];
</script>

<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-md">
	<ul class="lumi-stack lumi-stack--xs">
		{#each TOKENS as { name, use } (name)}
			<li class="lumi-flex lumi-justify--between lumi-flex--gap-sm">
				<span class="lumi-font--medium" style:color="var(--lumi-{name})">{use}</span>
				<code class="lumi-text--xs">--lumi-{name}</code>
			</li>
		{/each}
	</ul>
	<ul class="lumi-stack lumi-stack--xs">
		{#each SURFACES as { name, use } (name)}
			<li
				class="surface lumi-flex lumi-justify--between lumi-flex--gap-sm"
				style:background="var(--lumi-{name})"
			>
				<span class="lumi-font--medium">{use}</span>
				<code class="lumi-text--xs">--lumi-{name}</code>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.surface {
		padding: var(--lumi-space-xs) var(--lumi-space-sm);
		border: var(--lumi-border-width-thin) solid var(--lumi-color-border-glass);
		border-radius: var(--lumi-radius-control);
	}
</style>
