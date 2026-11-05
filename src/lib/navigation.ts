import AppWindow from '@lucide/svelte/icons/app-window';
import BookOpen from '@lucide/svelte/icons/book-open';
import Boxes from '@lucide/svelte/icons/boxes';
import ChartBar from '@lucide/svelte/icons/chart-bar';
import ChevronDown from '@lucide/svelte/icons/chevron-down';
import CircleUser from '@lucide/svelte/icons/circle-user';
import ClipboardPenLine from '@lucide/svelte/icons/clipboard-pen-line';
import Columns3 from '@lucide/svelte/icons/columns-3';
import Compass from '@lucide/svelte/icons/compass';
import Database from '@lucide/svelte/icons/database';
import Group from '@lucide/svelte/icons/group';
import Hash from '@lucide/svelte/icons/hash';
import Heading1 from '@lucide/svelte/icons/heading-1';
import House from '@lucide/svelte/icons/house';
import Inbox from '@lucide/svelte/icons/inbox';
import Info from '@lucide/svelte/icons/info';
import Layers from '@lucide/svelte/icons/layers';
import LayoutGrid from '@lucide/svelte/icons/layout-grid';
import List from '@lucide/svelte/icons/list';
import ListChecks from '@lucide/svelte/icons/list-checks';
import ListFilter from '@lucide/svelte/icons/list-filter';
import MessageCircleMore from '@lucide/svelte/icons/message-circle-more';
import Megaphone from '@lucide/svelte/icons/megaphone';
import MousePointerClick from '@lucide/svelte/icons/mouse-pointer-click';
import MousePointer2 from '@lucide/svelte/icons/mouse-pointer-2';
import Palette from '@lucide/svelte/icons/palette';
import PanelTop from '@lucide/svelte/icons/panel-top';
import PanelsTopLeft from '@lucide/svelte/icons/panels-top-left';
import Rows3 from '@lucide/svelte/icons/rows-3';
import SquareCheck from '@lucide/svelte/icons/square-check';
import SquareStack from '@lucide/svelte/icons/square-stack';
import Swatches from '@lucide/svelte/icons/swatch-book';
import Table2 from '@lucide/svelte/icons/table-2';
import Tag from '@lucide/svelte/icons/tag';
import TextCursorInput from '@lucide/svelte/icons/text-cursor-input';
import TextInitial from '@lucide/svelte/icons/text-initial';
import ToggleLeft from '@lucide/svelte/icons/toggle-left';
import TriangleAlert from '@lucide/svelte/icons/triangle-alert';
import CircleDot from '@lucide/svelte/icons/circle-dot';
import Search from '@lucide/svelte/icons/search';
import Tags from '@lucide/svelte/icons/tags';
import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
import CalendarRange from '@lucide/svelte/icons/calendar-range';
import Upload from '@lucide/svelte/icons/upload';
import UserRound from '@lucide/svelte/icons/user-round';
import Gauge from '@lucide/svelte/icons/gauge';
import ChartLine from '@lucide/svelte/icons/chart-line';
import MessagesSquare from '@lucide/svelte/icons/messages-square';
import ImageIcon from '@lucide/svelte/icons/image';
import Shapes from '@lucide/svelte/icons/shapes';
import BadgeCheck from '@lucide/svelte/icons/badge-check';
import Heading2 from '@lucide/svelte/icons/heading-2';
import Minus from '@lucide/svelte/icons/minus';
import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
import OctagonAlert from '@lucide/svelte/icons/octagon-alert';
import LoaderCircle from '@lucide/svelte/icons/loader-circle';
import RectangleHorizontal from '@lucide/svelte/icons/rectangle-horizontal';
import Percent from '@lucide/svelte/icons/percent';
import Circle from '@lucide/svelte/icons/circle';
import Ellipsis from '@lucide/svelte/icons/ellipsis';
import PanelLeft from '@lucide/svelte/icons/panel-left';
import PanelRight from '@lucide/svelte/icons/panel-right';
import Zap from '@lucide/svelte/icons/zap';
import Type from '@lucide/svelte/icons/type';
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

const component = (
	slug: string,
	name: string,
	icon: IconComponent,
	description: Text
): NavItem => ({
	path: `/components/${slug}`,
	label: { en: name, es: name },
	icon,
	description
});

/** Familias de componentes: menú lateral y catálogo. */
export const COMPONENT_GROUPS: readonly NavGroup[] = [
	{
		id: 'actions',
		label: { en: 'Actions', es: 'Acciones' },
		icon: MousePointerClick,
		items: [
			component('button', 'Button', MousePointerClick, {
				en: 'Five styles, six colors and four sizes for every action, link and toggle.',
				es: 'Cinco estilos, seis colores y cuatro tamaños para cada acción, enlace e interruptor.'
			}),
			component('toggle-group', 'ToggleGroup', Columns3, {
				en: 'Several independent options that can be on at the same time.',
				es: 'Varias opciones independientes que pueden estar activas a la vez.'
			})
		]
	},
	{
		id: 'forms',
		label: { en: 'Forms', es: 'Formularios' },
		icon: TextCursorInput,
		items: [
			component('input', 'Input', TextCursorInput, {
				en: 'Text fields with a label, icons, hints and error messages built in.',
				es: 'Campos de texto con etiqueta, iconos, ayudas y mensajes de error integrados.'
			}),
			component('textarea', 'Textarea', TextInitial, {
				en: 'Multi-line text with the same label, hint and error as Input.',
				es: 'Texto de varias líneas con la misma etiqueta, ayuda y error que Input.'
			}),
			component('number-input', 'NumberInput', Hash, {
				en: 'Numbers with stepper buttons, limits and keyboard control.',
				es: 'Números con botones de paso, límites y control por teclado.'
			}),
			component('select', 'Select', ListFilter, {
				en: 'Pick one option from a list, with search when the list is long.',
				es: 'Elige una opción de una lista, con búsqueda cuando la lista es larga.'
			}),
			component('remote-select', 'RemoteSelect', Search, {
				en: 'A Select that searches on your server as people type.',
				es: 'Un Select que busca en tu servidor mientras se escribe.'
			}),
			component('checkbox', 'Checkbox', SquareCheck, {
				en: 'A yes or no that is sent with the form.',
				es: 'Un sí o no que se envía con el formulario.'
			}),
			component('switch', 'Switch', ToggleLeft, {
				en: 'A setting that takes effect the moment it changes.',
				es: 'Un ajuste que surte efecto en el momento en que cambia.'
			}),
			component('radio', 'Radio', CircleDot, {
				en: 'One choice from a visible list, with room to explain each option.',
				es: 'Una elección de una lista visible, con espacio para explicar cada opción.'
			}),
			component('segmented-control', 'SegmentedControl', Rows3, {
				en: 'One choice from two to five short options, always in view.',
				es: 'Una elección entre dos y cinco opciones cortas, siempre a la vista.'
			}),
			component('tag-option', 'TagOption', Tags, {
				en: 'Pick a visible option, such as a size or a variant.',
				es: 'Elige una opción visible, como una talla o una variante.'
			}),
			component('slider', 'Slider', SlidersHorizontal, {
				en: 'Choose a rough value inside a range.',
				es: 'Elige un valor aproximado dentro de un rango.'
			}),
			component('date-range-filter', 'DateRangeFilter', CalendarRange, {
				en: 'Two dates that filter reports and lists.',
				es: 'Dos fechas que filtran informes y listados.'
			}),
			component('file-upload', 'FileUpload', Upload, {
				en: 'Choose files with validation and a list of what was added.',
				es: 'Elige archivos con validación y una lista de lo añadido.'
			}),
			component('fieldset', 'Fieldset', Group, {
				en: 'Groups related fields under one heading inside a form.',
				es: 'Agrupa campos relacionados bajo un título dentro de un formulario.'
			})
		]
	},
	{
		id: 'data',
		label: { en: 'Data display', es: 'Datos' },
		icon: Database,
		items: [
			component('table', 'Table', Table2, {
				en: 'Rows of records with search, selection, pagination and loading states.',
				es: 'Tablas de registros con búsqueda, selección, paginación y estados de carga.'
			}),
			component('list', 'List', List, {
				en: 'Short rows with a title, a description and an action.',
				es: 'Filas cortas con un título, una descripción y una acción.'
			}),
			component('card', 'Card', PanelTop, {
				en: 'A surface that groups related content, with optional header and footer.',
				es: 'Una superficie que agrupa contenido relacionado, con cabecera y pie opcionales.'
			}),
			component('dashboard-section', 'DashboardSection', SquareStack, {
				en: 'A titled panel with its own actions, for dashboards and detail pages.',
				es: 'Un panel con título y acciones propias, para dashboards y páginas de detalle.'
			}),
			component('info-item', 'InfoItem', Info, {
				en: 'A label and its value, for reading the details of a record.',
				es: 'Una etiqueta y su valor, para leer los detalles de un registro.'
			}),
			component('chip', 'Chip', Tag, {
				en: 'Compact labels for statuses, categories and active filters.',
				es: 'Etiquetas compactas para estados, categorías y filtros activos.'
			}),
			component('avatar', 'Avatar', CircleUser, {
				en: 'A person as a photo or as initials, in any size or color.',
				es: 'Una persona como foto o como iniciales, en cualquier tamaño o color.'
			}),
			component('user-info', 'UserInfo', UserRound, {
				en: 'An avatar with a name and a line of detail.',
				es: 'Un avatar con nombre y una línea de detalle.'
			}),
			component('stat-card', 'StatCard', Gauge, {
				en: 'The key numbers of a dashboard.',
				es: 'Los números clave de un dashboard.'
			}),
			component('dashboard-chart', 'Charts', ChartLine, {
				en: 'Line, bar and donut charts with no extra dependencies.',
				es: 'Gráficos de línea, barras y dona sin dependencias extra.'
			}),
			component('message', 'Message', MessagesSquare, {
				en: 'Chat bubbles and a scrolling conversation.',
				es: 'Burbujas de chat y una conversación con scroll.'
			}),
			component('image', 'Image', ImageIcon, {
				en: 'Images with a stable layout, and loading and error states.',
				es: 'Imágenes con disposición estable y estados de carga y error.'
			}),
			component('icon', 'Icon', Shapes, {
				en: 'Lucide icons sized and colored with Lumi tokens.',
				es: 'Iconos de Lucide con tamaño y color de los tokens de Lumi.'
			}),
			component('icon-badge', 'IconBadge', BadgeCheck, {
				en: 'An icon on a soft tile, in any color role.',
				es: 'Un icono sobre un fondo suave, en cualquier rol de color.'
			}),
			component('title', 'Title', Heading2, {
				en: 'Headings with a separate level and size.',
				es: 'Encabezados con nivel y tamaño independientes.'
			}),
			component('divider', 'Divider', Minus, {
				en: 'A line between groups of content, with an optional label.',
				es: 'Una línea entre grupos de contenido, con etiqueta opcional.'
			}),
			component('collapse', 'Collapse', ChevronsUpDown, {
				en: 'Content that opens and closes in place.',
				es: 'Contenido que se abre y se cierra en su sitio.'
			})
		]
	},
	{
		id: 'feedback',
		label: { en: 'Feedback', es: 'Avisos' },
		icon: Megaphone,
		items: [
			component('alert', 'Alert', TriangleAlert, {
				en: 'A message that stays on the page until the situation changes.',
				es: 'Un mensaje que permanece en la página hasta que la situación cambia.'
			}),
			component('toaster', 'Toaster', Megaphone, {
				en: 'Short messages that confirm an action and leave by themselves.',
				es: 'Mensajes breves que confirman una acción y se van solos.'
			}),
			component('empty-state', 'EmptyState', Inbox, {
				en: 'What to show when there is nothing to show, and what to do next.',
				es: 'Qué mostrar cuando no hay nada que mostrar y qué hacer a continuación.'
			}),
			component('error-state', 'ErrorState', OctagonAlert, {
				en: 'Error pages such as 404, in the active language.',
				es: 'Páginas de error como 404, en el idioma activo.'
			}),
			component('loading', 'Loading', LoaderCircle, {
				en: 'A spinner for waits with an unknown layout.',
				es: 'Un spinner para esperas de disposición desconocida.'
			}),
			component('skeleton', 'Skeleton', RectangleHorizontal, {
				en: 'Placeholders that keep the layout while content loads.',
				es: 'Marcadores que mantienen la disposición mientras carga el contenido.'
			}),
			component('progress', 'Progress', Percent, {
				en: 'A bar for work with a known percentage.',
				es: 'Una barra para trabajo con porcentaje conocido.'
			}),
			component('status-indicator', 'StatusIndicator', Circle, {
				en: 'A small status dot with an explanation.',
				es: 'Un pequeño punto de estado con explicación.'
			})
		]
	},
	{
		id: 'overlays',
		label: { en: 'Overlays', es: 'Capas' },
		icon: Layers,
		items: [
			component('dialog', 'Dialog', AppWindow, {
				en: 'A modal window for focused tasks and confirmations.',
				es: 'Una ventana modal para tareas concretas y confirmaciones.'
			}),
			component('dropdown', 'Dropdown', ChevronDown, {
				en: 'A menu of actions anchored to a button.',
				es: 'Un menú de acciones anclado a un botón.'
			}),
			component('context', 'Context', MousePointer2, {
				en: 'A right-click menu for the item under the pointer.',
				es: 'Un menú de clic derecho para el elemento bajo el puntero.'
			}),
			component('tooltip', 'Tooltip', MessageCircleMore, {
				en: 'A short hint on hover and keyboard focus.',
				es: 'Una ayuda breve al señalar o enfocar con el teclado.'
			})
		]
	},
	{
		id: 'navigation',
		label: { en: 'Navigation', es: 'Navegación' },
		icon: Compass,
		items: [
			component('page-header', 'PageHeader', Heading1, {
				en: 'The title of a screen, its icon and its main actions.',
				es: 'El título de una pantalla, su icono y sus acciones principales.'
			}),
			component('tabs', 'Tabs', PanelsTopLeft, {
				en: 'Switch between sections of one page with a full keyboard model.',
				es: 'Cambia entre secciones de una página con control completo por teclado.'
			}),
			component('pagination', 'Pagination', Ellipsis, {
				en: 'Move through pages of results, with real links when you need them.',
				es: 'Muévete entre páginas de resultados, con enlaces reales cuando los necesites.'
			}),
			component('sidebar', 'Sidebar', PanelLeft, {
				en: 'The main navigation of an application, with the Navbar.',
				es: 'La navegación principal de una aplicación, con Navbar.'
			}),
			component('page-sidebar', 'PageSidebar', PanelRight, {
				en: 'Filters beside content, and a panel on phones.',
				es: 'Filtros junto al contenido, y un panel en móviles.'
			}),
			component('quick-access-card', 'QuickAccessCard', Zap, {
				en: 'Shortcut cards for a home screen.',
				es: 'Tarjetas de acceso directo para una pantalla de inicio.'
			})
		]
	}
];

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
				path: '/foundations/typography',
				label: { en: 'Typography', es: 'Tipografía' },
				icon: Type,
				description: {
					en: 'Sizes, weights and text colors, and which font your app really shows.',
					es: 'Tamaños, pesos y colores de texto, y qué fuente muestra de verdad tu aplicación.'
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
		path: '/components',
		label: { en: 'Components', es: 'Componentes' },
		icon: Boxes,
		description: {
			en: 'Every documented Lumi UI component, grouped by purpose, with examples to copy.',
			es: 'Todos los componentes documentados de Lumi UI, agrupados por propósito, con ejemplos para copiar.'
		}
	},
	...COMPONENT_GROUPS,
	{
		id: 'recipes',
		label: { en: 'Recipes', es: 'Recetas' },
		icon: ListChecks,
		items: [
			{
				path: '/forms',
				label: { en: 'Full form', es: 'Formulario completo' },
				icon: ClipboardPenLine,
				description: {
					en: 'A Svelte 5 form with validation, selection and Lumi UI controls.',
					es: 'Un formulario Svelte 5 con validación, selección y controles de Lumi UI.'
				}
			},
			{
				path: '/data',
				label: { en: 'Data page', es: 'Página de datos' },
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
