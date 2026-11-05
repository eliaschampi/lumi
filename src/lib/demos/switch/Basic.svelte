<script lang="ts">
	import { Switch } from '@lumi-ui/svelte';

	let notifications = $state(true);
	let reports = $state(false);
</script>

<div class="lumi-stack lumi-stack--sm">
	<Switch bind:checked={notifications} label="Activity notifications" />
	<Switch bind:checked={reports} label="Weekly report" color="success" />
	<Switch label="Single sign-on" disabled />
</div>
