<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import Search from '@lucide/svelte/icons/search';
	import { Input } from '@lumi-ui/svelte';
</script>

<div class="lumi-grid lumi-grid--columns-2-lg lumi-grid--gap-md">
	<Input label="Email" type="email" icon={Mail} />
	<Input label="Search" type="search" icon={Search} clearable />
</div>
