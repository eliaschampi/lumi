<script lang="ts">
	import Copy from '@lucide/svelte/icons/copy';
	import { Button } from '@lumi-ui/svelte';
	import { toaster } from '$lib/toaster';

	interface Props {
		code: string;
		/** Nombre visible del bloque; también nombra la región desplazable. */
		label?: string;
	}

	const { code, label = 'Código' }: Props = $props();

	async function copy(): Promise<void> {
		try {
			await navigator.clipboard.writeText(code);
			toaster.show({ title: 'Código copiado', message: label, color: 'success' });
		} catch {
			toaster.show({
				title: 'No se pudo copiar',
				message: 'Selecciona el código y cópialo manualmente.',
				color: 'warning'
			});
		}
	}
</script>

<figure class="code-block lumi-stack lumi-stack--xs lumi-min-width--0 lumi-margin--none">
	<figcaption
		class="lumi-flex lumi-justify--between lumi-align-items--center lumi-flex--gap-sm lumi-min-width--0"
	>
		<span class="lumi-text--sm lumi-font--medium lumi-text-ellipsis">{label}</span>
		<Button variant="ghost" size="sm" icon={Copy} aria-label={`Copiar ${label}`} onclick={copy}>
			Copiar
		</Button>
	</figcaption>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex (La región desplazable necesita foco para desplazarse con teclado.) -->
	<pre
		class="lumi-padding--md lumi-margin--none lumi-text--sm"
		role="region"
		tabindex="0"
		aria-label={label}><code>{code}</code></pre>
</figure>

<style>
	/* Composición propia con tokens públicos: la biblioteca no ofrece un bloque de código. */
	pre {
		overflow-x: auto;
		tab-size: 2;
		font-family: var(--lumi-font-family-mono);
		line-height: var(--lumi-line-height-relaxed);
		border-radius: var(--lumi-radius-panel);
		border: var(--lumi-border-width-thin) solid var(--lumi-color-border-glass);
		background: var(--lumi-scroll-well-bg);
	}

	pre:focus-visible {
		outline: var(--lumi-focus-outline);
		outline-offset: var(--lumi-focus-outline-offset);
	}
</style>
