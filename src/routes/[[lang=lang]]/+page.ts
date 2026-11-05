import { loadDemo } from '$lib/docs/demos';
import { langOf } from '$lib/i18n';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, params }) => ({
	...data,
	QuickStart: await loadDemo(langOf(params.lang), 'home/QuickStart')
});
