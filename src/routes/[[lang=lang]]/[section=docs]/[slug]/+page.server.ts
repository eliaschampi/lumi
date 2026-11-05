import { error } from '@sveltejs/kit';
import { langOf } from '$lib/i18n';
import { DOC_PAGES } from '$lib/navigation';
import { loadDocView } from '$lib/server/docs';
import type { EntryGenerator, PageServerLoad } from './$types';

/** Cada página existe en ambos idiomas; el rastreador no ve los grupos cerrados del menú. */
export const entries: EntryGenerator = () =>
	DOC_PAGES.flatMap((page) => [page, { ...page, lang: 'es' }]);

export const load: PageServerLoad = async ({ params }) => {
	const doc = await loadDocView(params.slug, langOf(params.lang));
	if (!doc) error(404);
	return { doc };
};
