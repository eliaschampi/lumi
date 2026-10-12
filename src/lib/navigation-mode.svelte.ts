/** Preferencia de densidad de navegación compartida entre el shell y Ajustes. */
export type NavigationMode = 'expanded' | 'collapsed';

export const navigationMode = $state<{ preference: NavigationMode }>({
	preference: 'expanded'
});

export function setNavigationMode(mode: NavigationMode): void {
	navigationMode.preference = mode;
}
