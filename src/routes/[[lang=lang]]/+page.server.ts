import { langOf } from '$lib/i18n';
import { demoCode } from '$lib/server/docs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => ({
	quickStartCode: await demoCode(langOf(params.lang), 'home/QuickStart')
});
