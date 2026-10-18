<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import { Button, Input } from '@lumi-ui/svelte';
</script>

<!-- Cada página incluye solo los iconos que renderiza. -->
<Input label="Buscar" icon={Search} clearable />
<Button variant="filled" icon={Search}>Buscar</Button>
