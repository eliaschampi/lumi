import Monitor from '@lucide/svelte/icons/monitor';
import Moon from '@lucide/svelte/icons/moon';
import Sun from '@lucide/svelte/icons/sun';
import type { IconComponent } from '@lumi-ui/svelte';
import type { Text } from '$lib/i18n';
import {
	createColorScheme,
	parseColorSchemePreference,
	type ColorSchemeOptions,
	type ColorSchemePreference,
	type ResolvedColorScheme
} from '@lumi-ui/svelte/color-scheme';

/** Un único objeto para el script previo al pintado y el controlador (GUIDE §3). */
export const colorSchemeOptions = {
	storageKey: 'lumi-web-color-scheme',
	defaultPreference: 'system'
} satisfies ColorSchemeOptions;

export const colorScheme = createColorScheme(colorSchemeOptions);

export const themeChoices: readonly {
	value: ColorSchemePreference;
	label: Text;
	icon: IconComponent;
}[] = [
	{ value: 'system', label: { en: 'System', es: 'Sistema' }, icon: Monitor },
	{ value: 'light', label: { en: 'Light', es: 'Claro' }, icon: Sun },
	{ value: 'dark', label: { en: 'Dark', es: 'Oscuro' }, icon: Moon }
];

const RESOLVED_LABELS: Record<ResolvedColorScheme, Text> = {
	light: themeChoices[1].label,
	dark: themeChoices[2].label
};

export function resolvedThemeLabel(value: ResolvedColorScheme): Text {
	return RESOLVED_LABELS[value];
}

/** Adaptador para `SegmentedControl.onchange`, que entrega `string | number`. */
export function setThemePreference(value: string | number): void {
	const preference = parseColorSchemePreference(String(value));
	if (preference) colorScheme.setPreference(preference);
}
