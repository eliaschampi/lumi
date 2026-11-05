<script lang="ts">
	import { asset } from '$app/paths';
	import { Image } from '@lumi-ui/svelte';
</script>

<Image src={asset('/favicon.svg')} alt="Lumi logo" ratio="16 / 9" fit="contain" radius="lg" />
