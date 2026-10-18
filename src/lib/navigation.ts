import BookOpen from '@lucide/svelte/icons/book-open';
import Boxes from '@lucide/svelte/icons/boxes';
import ChartBar from '@lucide/svelte/icons/chart-bar';
import ClipboardPenLine from '@lucide/svelte/icons/clipboard-pen-line';
import House from '@lucide/svelte/icons/house';
import Palette from '@lucide/svelte/icons/palette';
import type { IconComponent } from '@lumi-ui/svelte';
import type { RouteId } from '$app/types';

export interface SiteSection {
	label: string;
	route: RouteId;
	icon: IconComponent;
	/** Meta descripción de la página y resumen en las tarjetas de acceso. */
	description: string;
}

/** Única fuente de la navegación: menú lateral, título de la barra, `<title>` y metadatos. */
export const SITE_SECTIONS = [
	{
		label: 'Inicio',
		route: '/',
		icon: House,
		description:
			'Lumi UI: biblioteca open source de componentes Svelte 5, tokens semánticos y composición responsive.'
	},
	{
		label: 'Empezar',
		route: '/getting-started',
		icon: BookOpen,
		description:
			'Instala Lumi UI, carga sus estilos, elige idioma e iconos y crea tu primera interfaz.'
	},
	{
		label: 'Componentes',
		route: '/components',
		icon: Boxes,
		description: 'Explora componentes Lumi UI, prueba sus estados y copia ejemplos de uso.'
	},
	{
		label: 'Formularios',
		route: '/forms',
		icon: ClipboardPenLine,
		description: 'Prueba un formulario Svelte 5 con validación, selección y controles Lumi UI.'
	},
	{
		label: 'Datos',
		route: '/data',
		icon: ChartBar,
		description:
			'Explora tablas con búsqueda, filtros, selección, paginación y gráficos Lumi UI con datos de ejemplo.'
	},
	{
		label: 'Apariencia',
		route: '/settings',
		icon: Palette,
		description:
			'Prueba los temas claro, oscuro y del sistema y elige la densidad de navegación de Lumi UI.'
	}
] as const satisfies readonly SiteSection[];

export type SiteRoute = (typeof SITE_SECTIONS)[number]['route'];

/** Sección activa para una ruta; las rutas anidadas heredan su sección. */
export function sectionFor(routeId: string | null): SiteSection {
	const id = routeId ?? '/';
	return (
		SITE_SECTIONS.find((section) =>
			section.route === '/' ? id === '/' : id.startsWith(section.route)
		) ?? SITE_SECTIONS[0]
	);
}
