<script lang="ts">
	import { Chip, UserInfo } from '@lumi-ui/svelte';
</script>

<div class="lumi-stack lumi-stack--md">
	<UserInfo name="Ana Torres" description="ana@example.com" />
	<UserInfo name="Bruno Díaz" description="Sales" color="secondary">
		{#snippet trailing()}
			<Chip color="success" size="sm">Active</Chip>
		{/snippet}
	</UserInfo>
</div>
