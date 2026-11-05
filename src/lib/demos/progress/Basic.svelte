<script lang="ts">
	import { Progress } from '@lumi-ui/svelte';
</script>

<div class="lumi-stack lumi-stack--md">
	<Progress value={40} label="Uploading" showLabel />
	<Progress value={75} color="success" striped animated aria-label="Import" />
	<Progress indeterminate color="secondary" aria-label="Preparing" />
</div>
