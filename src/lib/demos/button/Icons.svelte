<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Pencil from '@lucide/svelte/icons/pencil';
	import Plus from '@lucide/svelte/icons/plus';
	import Trash2 from '@lucide/svelte/icons/trash-2';
	import { Button, Tooltip } from '@lumi-ui/svelte';
</script>

<div class="lumi-flex lumi-flex--wrap lumi-align-items--center lumi-flex--gap-sm">
	<Button variant="filled" icon={Plus}>New record</Button>
	<Button variant="border" icon={ArrowRight} iconAfter>Continue</Button>

	<Tooltip text="Edit record">
		<Button variant="flat" size="sm" icon={Pencil} aria-label="Edit record" />
	</Tooltip>
	<Tooltip text="Delete record">
		<Button variant="flat" size="sm" color="danger" icon={Trash2} aria-label="Delete record" />
	</Tooltip>
</div>
