<script lang="ts">
	import { Chip, type LumiColor } from '@lumi-ui/svelte';

	type OrderStatus = 'paid' | 'pending' | 'cancelled';

	const STATUS: Record<OrderStatus, { label: string; color: LumiColor }> = {
		paid: { label: 'Paid', color: 'success' },
		pending: { label: 'Pending', color: 'warning' },
		cancelled: { label: 'Cancelled', color: 'danger' }
	};

	const orders: OrderStatus[] = ['paid', 'pending', 'cancelled'];
</script>

<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
	{#each orders as status (status)}
		<Chip color={STATUS[status].color} size="sm">{STATUS[status].label}</Chip>
	{/each}
</div>
