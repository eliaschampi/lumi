<script lang="ts">
	import type { LumiColor } from '@lumi-ui/svelte';

	const ROLES: { role: LumiColor; meaning: string }[] = [
		{ role: 'primary', meaning: 'Your brand and the main action' },
		{ role: 'secondary', meaning: 'Supporting identity and contrast' },
		{ role: 'success', meaning: 'Completed, confirmed, positive' },
		{ role: 'warning', meaning: 'Needs attention soon' },
		{ role: 'danger', meaning: 'Errors and destructive actions' },
		{ role: 'info', meaning: 'Neutral information' }
	];
</script>

<div class="lumi-grid lumi-grid--cards lumi-grid--gap-md">
	{#each ROLES as { role, meaning } (role)}
		<div class="role" style:--role="var(--lumi-color-{role})">
			<div
				class="solid lumi-font--semibold"
				style:background="var(--lumi-color-{role}-solid)"
				style:color="var(--lumi-color-{role}-foreground)"
			>
				{role}
			</div>
			<div class="soft lumi-stack lumi-stack--2xs" style:background="var(--lumi-color-{role}-bg)">
				<span class="lumi-font--medium lumi-text--sm">{meaning}</span>
				<code class="lumi-text--xs">color="{role}"</code>
			</div>
		</div>
	{/each}
</div>

<style>
	.role {
		overflow: hidden;
		border: var(--lumi-border-width-thin) solid var(--lumi-color-border-glass);
		border-radius: var(--lumi-radius-panel);
	}

	.solid,
	.soft {
		padding: var(--lumi-space-sm) var(--lumi-space-md);
	}

	.soft code {
		color: var(--role);
	}
</style>
