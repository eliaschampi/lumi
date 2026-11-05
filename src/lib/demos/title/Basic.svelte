<script lang="ts">
	import Users from '@lucide/svelte/icons/users';
	import { Title } from '@lumi-ui/svelte';
</script>

<div class="lumi-stack lumi-stack--md">
	<Title title="Team" subtitle="People with access" level={2} size="lg" />
	<Title title="Members" level={3} size="md" icon={Users} iconColor="primary" />
</div>
