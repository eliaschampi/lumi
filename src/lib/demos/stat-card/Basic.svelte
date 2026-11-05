<script lang="ts">
	import Coins from '@lucide/svelte/icons/coins';
	import Users from '@lucide/svelte/icons/users';
	import { StatCard } from '@lumi-ui/svelte';
</script>

<div class="lumi-grid lumi-grid--cards lumi-grid--gap-md">
	<StatCard title="Customers" value={128} icon={Users} color="primary" />
	<StatCard title="Sales" value="$4,210" subtitle="This month" icon={Coins} color="success" />
</div>
