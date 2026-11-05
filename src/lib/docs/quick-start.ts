import type { Component } from 'svelte';
import type { Lang } from '$lib/i18n';

/**
 * Import directo y no el mapa de `demos.ts`: SvelteKit precarga el CSS de todo lo
 * que una ruta puede importar, y estas páginas solo muestran esta demo.
 */
export async function loadQuickStart(lang: Lang): Promise<Component> {
	const module = await (lang === 'es'
		? import('$lib/demos-es/home/QuickStart.svelte')
		: import('$lib/demos/home/QuickStart.svelte'));
	return module.default;
}
