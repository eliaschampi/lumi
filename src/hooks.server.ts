import type { Handle } from '@sveltejs/kit';

/** `app.html` es único: el idioma del documento se decide por página al prerenderizar. */
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%lang%', event.params.lang === 'es' ? 'es' : 'en')
	});
