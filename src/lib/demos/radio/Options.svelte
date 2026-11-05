<script lang="ts">
	import { Radio } from '@lumi-ui/svelte';

	let plan = $state('team');
</script>

<div class="lumi-stack lumi-stack--sm" role="radiogroup" aria-label="Plan">
	<Radio
		bind:group={plan}
		name="plan"
		value="starter"
		label="Starter"
		description="For one person getting started."
	/>
	<Radio
		bind:group={plan}
		name="plan"
		value="team"
		label="Team"
		description="Shared workspaces for up to ten people."
	/>
</div>
