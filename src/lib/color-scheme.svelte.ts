import type { IconName } from '@lumi-ui/svelte';
import {
	createColorScheme,
	type ColorSchemeOptions,
	type ColorSchemePreference
} from '@lumi-ui/svelte/color-scheme';

export const colorSchemeOptions = {
	storageKey: 'lumi-web-color-scheme',
	defaultPreference: 'system'
} satisfies ColorSchemeOptions;

export const colorScheme = createColorScheme(colorSchemeOptions);

export const themeChoices: readonly {
	value: ColorSchemePreference;
	label: string;
	icon: IconName;
}[] = [
	{ value: 'system', label: 'Sistema', icon: 'monitor' },
	{ value: 'light', label: 'Claro', icon: 'sun' },
	{ value: 'dark', label: 'Oscuro', icon: 'moon' }
];

export function setThemePreference(value: string | number): void {
	if (value === 'system' || value === 'light' || value === 'dark') {
		colorScheme.setPreference(value);
	}
}
