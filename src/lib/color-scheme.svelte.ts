import { createColorScheme, type ColorSchemeOptions } from '@lumi-ui/svelte/color-scheme';

export const colorSchemeOptions = {
	storageKey: 'lumi-web-color-scheme',
	defaultPreference: 'system'
} satisfies ColorSchemeOptions;

export const colorScheme = createColorScheme(colorSchemeOptions);
