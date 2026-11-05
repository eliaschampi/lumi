import type { Pathname } from '$app/types';
import { resolve } from '$app/paths';
import { page } from '$app/state';

export const LANGS = ['en', 'es'] as const;
export type Lang = (typeof LANGS)[number];

/** Texto en todos los idiomas; el tipo impide olvidar una traducción. */
export type Text = Record<Lang, string>;
export type SitePath = `/${string}`;

/** Idioma de la página actual, derivado de la URL. */
export const currentLang = (): Lang => (page.params.lang === 'es' ? 'es' : 'en');

/** Enlace interno en el idioma pedido; por defecto, el que se está leyendo. */
export function link(path: SitePath, lang: Lang = currentLang()): string {
	const localized = lang === 'en' ? path : path === '/' ? '/es' : `/es${path}`;
	return resolve(localized as Pathname);
}

/**
 * Ruta del sitio sin base ni prefijo de idioma, común a ambas versiones de una página.
 * Sale de la ruta y sus parámetros: la URL incluye la base, y `resolve` es relativo al prerenderizar.
 */
export function sitePath(): SitePath {
	const params: Record<string, string | undefined> = page.params;
	const path = (page.route.id ?? '/')
		.replace('/[[lang=lang]]', '')
		.replace(/\[(\w+)(?:=\w+)?\]/g, (_, name: string) => params[name] ?? '');
	return (path || '/') as SitePath;
}
