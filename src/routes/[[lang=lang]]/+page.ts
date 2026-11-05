import { loadQuickStart } from '$lib/docs/quick-start';
import { langOf } from '$lib/i18n';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, params }) => ({
	...data,
	QuickStart: await loadQuickStart(langOf(params.lang))
});
