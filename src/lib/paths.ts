import { resolve } from '$app/paths';
import type { Pathname } from '$app/types';

/** Resuelve rutas internas con la base de SvelteKit, también durante el prerender. */
export function href(path: Pathname): string {
	return resolve(path);
}
