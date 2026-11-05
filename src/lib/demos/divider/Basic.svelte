<script lang="ts">
	import { Divider } from '@lumi-ui/svelte';
</script>

<div class="lumi-stack lumi-stack--xs">
	<p class="lumi-margin--none">Before the line</p>
	<Divider />
	<p class="lumi-margin--none">After the line</p>
	<Divider label="Or continue with" />
	<Divider variant="dashed" />
</div>
