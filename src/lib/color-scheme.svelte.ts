import Monitor from '@lucide/svelte/icons/monitor';
import Moon from '@lucide/svelte/icons/moon';
import Sun from '@lucide/svelte/icons/sun';
import type { IconComponent } from '@lumi-ui/svelte';
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
	label: string;
	icon: IconComponent;
}[] = [
	{ value: 'system', label: 'Sistema', icon: Monitor },
	{ value: 'light', label: 'Claro', icon: Sun },
	{ value: 'dark', label: 'Oscuro', icon: Moon }
];

const RESOLVED_LABELS: Record<ResolvedColorScheme, string> = { light: 'Claro', dark: 'Oscuro' };

export function resolvedThemeLabel(value: ResolvedColorScheme): string {
	return RESOLVED_LABELS[value];
}

/** Adaptador para `SegmentedControl.onchange`, que entrega `string | number`. */
export function setThemePreference(value: string | number): void {
	const preference = parseColorSchemePreference(String(value));
	if (preference) colorScheme.setPreference(preference);
}
