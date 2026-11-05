import BookOpen from '@lucide/svelte/icons/book-open';
import Boxes from '@lucide/svelte/icons/boxes';
import ChartBar from '@lucide/svelte/icons/chart-bar';
import ClipboardPenLine from '@lucide/svelte/icons/clipboard-pen-line';
import House from '@lucide/svelte/icons/house';
import LayoutGrid from '@lucide/svelte/icons/layout-grid';
import MousePointerClick from '@lucide/svelte/icons/mouse-pointer-click';
import Palette from '@lucide/svelte/icons/palette';
import Swatches from '@lucide/svelte/icons/swatch-book';
import type { IconComponent } from '@lumi-ui/svelte';
import type { Lang, SitePath, Text } from '$lib/i18n';

export interface NavItem {
	path: SitePath;
	label: Text;
	icon: IconComponent;
	/** Resumen de la página: subtítulo, meta descripción y tarjetas de acceso. */
	description: Text;
}

export interface NavGroup {
	id: string;
	label: Text;
	icon: IconComponent;
	items: readonly NavItem[];
}

export type NavEntry = NavItem | NavGroup;

/** Única fuente de la navegación: menú lateral, títulos y metadatos. */
export const NAVIGATION: readonly NavEntry[] = [
	{
		path: '/',
		label: { en: 'Home', es: 'Inicio' },
		icon: House,
		description: {
			en: 'Lumi UI: an open source Svelte 5 component library with semantic tokens, in English and Spanish.',
			es: 'Lumi UI: biblioteca open source de componentes Svelte 5 con tokens semánticos, en inglés y español.'
		}
	},
	{
		path: '/getting-started',
		label: { en: 'Get started', es: 'Empezar' },
		icon: BookOpen,
		description: {
			en: 'Install Lumi UI, load its styles, pick a language and icons, and build your first screen.',
			es: 'Instala Lumi UI, carga sus estilos, elige idioma e iconos y crea tu primera pantalla.'
		}
	},
	{
		id: 'foundations',
		label: { en: 'Foundations', es: 'Fundamentos' },
		icon: Swatches,
		items: [
			{
				path: '/foundations/colors',
				label: { en: 'Colors', es: 'Colores' },
				icon: Palette,
				description: {
					en: 'The six color roles, what each one means, and how to use them in components and CSS.',
					es: 'Los seis roles de color, qué significa cada uno y cómo usarlos en componentes y CSS.'
				}
			},
			{
				path: '/foundations/layout',
				label: { en: 'Layout', es: 'Layout' },
				icon: LayoutGrid,
				description: {
					en: 'Stack, flex and grid classes: the few helpers that arrange almost every screen.',
					es: 'Clases stack, flex y grid: las pocas ayudas que ordenan casi todas las pantallas.'
				}
			}
		]
	},
	{
		id: 'components',
		label: { en: 'Components', es: 'Componentes' },
		icon: Boxes,
		items: [
			{
				path: '/components',
				label: { en: 'Overview', es: 'Vista general' },
				icon: Boxes,
				description: {
					en: 'Explore Lumi UI components, try their states and copy usage examples.',
					es: 'Explora los componentes de Lumi UI, prueba sus estados y copia ejemplos de uso.'
				}
			},
			{
				path: '/components/button',
				label: { en: 'Button', es: 'Button' },
				icon: MousePointerClick,
				description: {
					en: 'Five styles, six colors and four sizes for every action, link and toggle.',
					es: 'Cinco estilos, seis colores y cuatro tamaños para cada acción, enlace e interruptor.'
				}
			}
		]
	},
	{
		id: 'recipes',
		label: { en: 'Recipes', es: 'Recetas' },
		icon: ClipboardPenLine,
		items: [
			{
				path: '/forms',
				label: { en: 'Forms', es: 'Formularios' },
				icon: ClipboardPenLine,
				description: {
					en: 'A Svelte 5 form with validation, selection and Lumi UI controls.',
					es: 'Un formulario Svelte 5 con validación, selección y controles de Lumi UI.'
				}
			},
			{
				path: '/data',
				label: { en: 'Data', es: 'Datos' },
				icon: ChartBar,
				description: {
					en: 'Tables with search, filters, selection and pagination, plus charts with sample data.',
					es: 'Tablas con búsqueda, filtros, selección y paginación, y gráficos con datos de ejemplo.'
				}
			}
		]
	},
	{
		path: '/settings',
		label: { en: 'Appearance', es: 'Apariencia' },
		icon: Palette,
		description: {
			en: 'Try the light, dark and system themes and choose the navigation density.',
			es: 'Prueba los temas claro, oscuro y del sistema y elige la densidad de navegación.'
		}
	}
];

export const isGroup = (entry: NavEntry): entry is NavGroup => 'items' in entry;

/** Todas las páginas, en el orden de lectura del menú. */
export const NAV_ITEMS: readonly NavItem[] = NAVIGATION.flatMap((entry) =>
	isGroup(entry) ? entry.items : [entry]
);

/** Página para una ruta del sitio; una ruta desconocida cae en Inicio. */
export const navItemFor = (path: SitePath): NavItem =>
	NAV_ITEMS.find((item) => item.path === path) ?? NAV_ITEMS[0];

/** Páginas generadas desde `src/lib/docs`: `/{section}/{slug}`. */
export const DOC_PAGES = NAV_ITEMS.flatMap(({ path }) => {
	const [, section, slug] = path.match(/^\/(components|foundations)\/([^/]+)$/) ?? [];
	return section ? [{ section, slug }] : [];
});

/** Título de una página en el idioma pedido. */
export const pageTitle = (item: NavItem, lang: Lang): string =>
	item.path === '/' ? 'Lumi UI · Svelte 5' : `${item.label[lang]} · Lumi UI`;
