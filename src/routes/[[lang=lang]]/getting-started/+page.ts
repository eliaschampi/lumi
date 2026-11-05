import { loadCode, loadDemo } from '$lib/docs/load';
import type { Lang } from '$lib/i18n';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const lang: Lang = params.lang === 'es' ? 'es' : 'en';
	const [quickStart, rootLayout, icons, iconRegistry, colorScheme] = await Promise.all([
		loadDemo(lang, 'home/QuickStart'),
		loadCode(lang, 'start/RootLayout'),
		loadCode(lang, 'start/Icons'),
		loadCode(lang, 'start/IconRegistry'),
		loadCode(lang, 'start/ColorScheme')
	]);
	return { quickStart, rootLayout, icons, iconRegistry, colorScheme };
};
