import { langOf } from '$lib/i18n';
import { demoCode } from '$lib/server/docs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const lang = langOf(params.lang);
	const [quickStartCode, rootLayout, icons, iconRegistry, colorScheme] = await Promise.all([
		demoCode(lang, 'home/QuickStart'),
		demoCode(lang, 'start/RootLayout'),
		demoCode(lang, 'start/Icons'),
		demoCode(lang, 'start/IconRegistry'),
		demoCode(lang, 'start/ColorScheme')
	]);
	return { quickStartCode, rootLayout, icons, iconRegistry, colorScheme };
};
