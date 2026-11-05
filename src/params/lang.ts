import type { ParamMatcher } from '@sveltejs/kit';

/** El inglés vive en la raíz; solo el español lleva prefijo de URL. */
export const match: ParamMatcher = (param) => param === 'es';
