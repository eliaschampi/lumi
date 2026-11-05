import { error } from '@sveltejs/kit';
import { loadDemo, loadDoc } from '$lib/docs/load';
import type { Lang } from '$lib/i18n';
import { DOC_PAGES } from '$lib/navigation';
import type { EntryGenerator, PageLoad } from './$types';

/** Cada página existe en ambos idiomas; el rastreador no ve los grupos cerrados del menú. */
export const entries: EntryGenerator = () =>
	DOC_PAGES.flatMap((page) => [page, { ...page, lang: 'es' }]);

export const load: PageLoad = async ({ params }) => {
	const doc = await loadDoc(params.slug);
	if (!doc) error(404);

	const lang: Lang = params.lang === 'es' ? 'es' : 'en';
	const demos = await Promise.all(
		doc.sections.map(({ demo }) => (demo ? loadDemo(lang, `${params.slug}/${demo}`) : undefined))
	);
	return { doc, demos };
};
