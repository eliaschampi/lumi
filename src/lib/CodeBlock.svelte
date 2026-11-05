<script lang="ts">
	import Copy from '@lucide/svelte/icons/copy';
	import { Button } from '@lumi-ui/svelte';
	import { highlight } from '$lib/highlight';
	import { currentLang } from '$lib/i18n';
	import { toaster } from '$lib/toaster';

	interface Props {
		code: string;
		/** Nombre visible del bloque; también nombra la región desplazable. */
		label?: string;
	}

	const { code, label = 'Code' }: Props = $props();

	const COPY = {
		en: {
			copy: 'Copy',
			copied: 'Code copied',
			failed: 'Could not copy',
			manual: 'Select the code and copy it by hand.'
		},
		es: {
			copy: 'Copiar',
			copied: 'Código copiado',
			failed: 'No se pudo copiar',
			manual: 'Selecciona el código y cópialo manualmente.'
		}
	} as const;

	const t = $derived(COPY[currentLang()]);

	async function copy(): Promise<void> {
		try {
			await navigator.clipboard.writeText(code);
			toaster.show({ title: t.copied, message: label, color: 'success' });
		} catch {
			toaster.show({
				title: t.failed,
				message: t.manual,
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
		<Button variant="ghost" size="sm" icon={Copy} aria-label={`${t.copy} ${label}`} onclick={copy}>
			{t.copy}
		</Button>
	</figcaption>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex (La región desplazable necesita foco para desplazarse con teclado.) -->
	<pre
		class="lumi-scroll-well lumi-margin--none lumi-text--sm"
		role="region"
		tabindex="0"
		aria-label={label}><code>{@html highlight(code)}</code></pre>
</figure>

<style>
	/* La biblioteca no ofrece un bloque de código: el pozo es suyo, esto es lo propio del código. */
	pre {
		/* Sin tope: el código se lee entero, sin un segundo scroll dentro de la página. */
		max-height: none;
		overflow-x: auto;
		tab-size: 2;
		font-family: var(--lumi-font-family-mono);
		line-height: var(--lumi-line-height-relaxed);
	}

	pre:focus-visible {
		outline: var(--lumi-focus-outline);
		outline-offset: var(--lumi-focus-outline-offset);
	}
</style>
