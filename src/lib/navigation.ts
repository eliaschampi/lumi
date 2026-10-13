import type { IconName } from '@lumi-ui/svelte';
import type { Pathname } from '$app/types';

export interface ShowcaseSection {
	label: string;
	href: Pathname;
	icon: IconName;
	description: string;
}

export const SHOWCASE_SECTIONS: readonly ShowcaseSection[] = [
	{
		label: 'Inicio',
		href: '/',
		icon: 'house',
		description:
			'Lumi UI: biblioteca open source de componentes Svelte 5, tokens semánticos y composición responsive.'
	},
	{
		label: 'Empezar',
		href: '/getting-started',
		icon: 'bookOpen',
		description: 'Instala Lumi UI, carga sus estilos y crea tu primera interfaz con Svelte 5.'
	},
	{
		label: 'Componentes',
		href: '/components',
		icon: 'boxes',
		description: 'Explora componentes Lumi UI, prueba sus estados y copia ejemplos de uso.'
	},
	{
		label: 'Formularios',
		href: '/forms',
		icon: 'clipboardPenLine',
		description: 'Prueba un formulario Svelte 5 con validación, selección y controles Lumi UI.'
	},
	{
		label: 'Datos',
		href: '/data',
		icon: 'chartBar',
		description:
			'Explora tablas con búsqueda, selección, paginación y gráficos Lumi UI con datos de ejemplo.'
	},
	{
		label: 'Apariencia',
		href: '/settings',
		icon: 'settings',
		description:
			'Prueba los temas claro, oscuro y del sistema y elige la densidad de navegación de Lumi UI.'
	}
];
