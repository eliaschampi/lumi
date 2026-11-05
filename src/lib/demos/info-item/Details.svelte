<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';
	import User from '@lucide/svelte/icons/user';
	import { InfoItem } from '@lumi-ui/svelte';
</script>

<div class="lumi-grid lumi-grid--columns-2-lg lumi-grid--gap-md">
	<InfoItem icon={User} label="Customer" value="Ana Torres" />
	<InfoItem icon={Mail} label="Email" value="ana@example.com" />
	<InfoItem icon={Phone} label="Phone" value="+51 900 000 000" />
	<InfoItem icon={MapPin} label="City" value="Cusco" />
</div>
