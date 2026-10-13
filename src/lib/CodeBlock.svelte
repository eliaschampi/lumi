<script lang="ts">
	import { Button } from '@lumi-ui/svelte';

	const { code, label = 'Código' }: { code: string; label?: string } = $props();
	let status = $state('');

	async function copy(): Promise<void> {
		try {
			await navigator.clipboard.writeText(code);
			status = 'Código copiado.';
		} catch {
			status = 'No se pudo copiar. Puedes seleccionar el código y copiarlo manualmente.';
		}
	}
</script>

<div class="lumi-stack lumi-stack--sm lumi-min-width--0">
	<div
		class="lumi-flex lumi-flex--wrap lumi-justify--between lumi-align-items--center lumi-flex--gap-sm"
	>
		<span class="lumi-text--sm lumi-font--medium">{label}</span>
		<Button variant="border" size="sm" icon="copy" aria-label={`Copiar ${label}`} onclick={copy}>
			Copiar
		</Button>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex (La región desplazable necesita foco para permitir desplazamiento con teclado.) -->
	<pre
		role="region"
		class="lumi-overflow-x-auto lumi-padding--md lumi-bg--control lumi-text--sm lumi-margin--none"
		tabindex="0"
		aria-label={label}><code>{code}</code></pre>
	<p role="status" class="lumi-text--sm lumi-text--muted lumi-margin--none">{status}</p>
</div>
