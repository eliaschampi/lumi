import { base } from '$app/paths';

/** Prefija una ruta raiz-relativa con la base de despliegue. */
export function href(path: string): string {
	return `${base}${path}`;
}

/** Elimina la base de despliegue de un pathname. */
export function route(pathname: string): string {
	if (base && pathname === base) return '/';
	if (base && pathname.startsWith(`${base}/`)) return pathname.slice(base.length);
	return pathname;
}
