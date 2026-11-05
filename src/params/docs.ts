import type { ParamMatcher } from '@sveltejs/kit';

/** Secciones cuyas páginas se generan desde `src/lib/docs`. */
export const match: ParamMatcher = (param) => param === 'components' || param === 'foundations';
