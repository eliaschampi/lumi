import type { Component } from 'svelte';
import type { Lang } from '$lib/i18n';
import type { Doc } from './types';

export interface LoadedDemo {
	component: Component;
	code: string;
}

type Importers<T> = Record<string, () => Promise<T>>;

const DOCS = import.meta.glob<{ default: Doc }>('./pages/*.ts');

const COMPONENTS = {
	en: import.meta.glob<{ default: Component }>('/src/lib/demos/**/*.svelte'),
	es: import.meta.glob<{ default: Component }>('/src/lib/demos-es/**/*.svelte')
} satisfies Record<Lang, Importers<{ default: Component }>>;

const SOURCES = {
	en: import.meta.glob<string>('/src/lib/demos/**/*.svelte', { query: '?raw', import: 'default' }),
	es: import.meta.glob<string>('/src/lib/demos-es/**/*.svelte', {
		query: '?raw',
		import: 'default'
	})
} satisfies Record<Lang, Importers<string>>;

const demoPath = (lang: Lang, name: string): string =>
	`/src/lib/${lang === 'es' ? 'demos-es' : 'demos'}/${name}.svelte`;

export async function loadDoc(slug: string): Promise<Doc | undefined> {
	return (await DOCS[`./pages/${slug}.ts`]?.())?.default;
}

/** Código de una demo que no se muestra en vivo, como un layout raíz. */
export const loadCode = (lang: Lang, name: string): Promise<string> =>
	SOURCES[lang][demoPath(lang, name)]();

/** Vista previa y código salen del mismo fichero, así que no pueden divergir. */
export async function loadDemo(lang: Lang, name: string): Promise<LoadedDemo> {
	const path = demoPath(lang, name);
	const [module, code] = await Promise.all([COMPONENTS[lang][path](), SOURCES[lang][path]()]);
	return { component: module.default, code };
}
