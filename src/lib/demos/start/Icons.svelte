<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import { Button, Input } from '@lumi-ui/svelte';
</script>

<!-- Each page ships only the icons it renders. -->
<Input label="Search" placeholder="Search customers" icon={Search} clearable />
<Button variant="filled" icon={Search}>Search</Button>
