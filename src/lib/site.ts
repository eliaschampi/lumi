import type { LumiLocaleOptions } from '@lumi-ui/svelte';

/** Metadatos públicos. La versión se toma del paquete realmente instalado al compilar. */
export const lumiVersion = __LUMI_VERSION__;
export const sveltePeer = __LUMI_SVELTE_PEER__;
export const libraryUrl = 'https://github.com/eliaschampi/lumi-ui';
export const repositoryUrl = 'https://github.com/eliaschampi/lumi';
export const packageUrl = 'https://www.npmjs.com/package/@lumi-ui/svelte';
export const docsUrl = `${libraryUrl}/blob/main/docs`;
export const siteUrl = __SITE_URL__;

/** Idioma y formato del sitio: copia en español, soles y hora de Lima en servidor y navegador. */
export const siteLocale = {
	locale: 'es-PE',
	currency: 'PEN',
	timeZone: 'America/Lima'
} as const satisfies Omit<LumiLocaleOptions, 'messages'>;

/** Enlace al código fuente de una ruta del sitio, para los avisos «Ver código». */
export function sourceUrl(path: string): string {
	return `${repositoryUrl}/blob/main/${path}`;
}
