<script lang="ts">
	import Copy from '@lucide/svelte/icons/copy';
	import Trash2 from '@lucide/svelte/icons/trash-2';
	import { Card, Context, ContextItem } from '@lumi-ui/svelte';

	let menu = $state<Context>();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div oncontextmenu={(event) => menu?.open(event)}>
	<Card title="Right-click this card" subtitle="Or use the menu key on a keyboard" spaced />
</div>

<Context bind:this={menu}>
	<ContextItem icon={Copy} title="Copy" shortcut="Ctrl+C" />
	<ContextItem icon={Trash2} title="Delete" color="danger" />
</Context>
