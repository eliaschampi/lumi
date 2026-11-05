import { loadDemo } from '$lib/docs/demos';
import { langOf } from '$lib/i18n';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, params }) => {
	const lang = langOf(params.lang);
	const demos = await Promise.all(
		data.doc.sections.map(({ demo, preview }) =>
			demo && preview ? loadDemo(lang, `${params.slug}/${demo}`) : undefined
		)
	);
	return { ...data, demos };
};
