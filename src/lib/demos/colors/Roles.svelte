<script lang="ts">
	import { Button, Card, Chip, type LumiColor } from '@lumi-ui/svelte';

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
		<Card title={role} subtitle={meaning} spaced>
			<div class="lumi-flex lumi-flex--wrap lumi-align-items--center lumi-flex--gap-xs">
				<Button color={role} size="sm">solid</Button>
				<Chip color={role} size="sm">soft</Chip>
				<span class="lumi-text--sm lumi-font--medium lumi-text--{role}">accent</span>
			</div>
		</Card>
	{/each}
</div>
