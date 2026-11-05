import type { Component } from 'svelte';
import type { Lang } from '$lib/i18n';

type DemoImporters = Record<string, () => Promise<{ default: Component }>>;

const DEMOS: Record<Lang, DemoImporters> = {
	en: import.meta.glob<{ default: Component }>('/src/lib/demos/**/*.svelte'),
	es: import.meta.glob<{ default: Component }>('/src/lib/demos-es/**/*.svelte')
};

export const demoPath = (lang: Lang, name: string): string =>
	`/src/lib/${lang === 'es' ? 'demos-es' : 'demos'}/${name}.svelte`;

/** Componente de una demo. Su código llega aparte, desde el servidor, solo en este idioma. */
export async function loadDemo(lang: Lang, name: string): Promise<Component> {
	return (await DEMOS[lang][demoPath(lang, name)]()).default;
}
