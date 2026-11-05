import { loadDemo } from '$lib/docs/load';
import type { Lang } from '$lib/i18n';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const lang: Lang = params.lang === 'es' ? 'es' : 'en';
	return { quickStart: await loadDemo(lang, 'home/QuickStart') };
};
