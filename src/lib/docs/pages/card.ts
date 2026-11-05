import type { CardProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Card } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Grouping related information',
			'Items in a grid: products, plans, reports',
			'Whole surfaces that open something'
		],
		es: [
			'Agrupar información relacionada',
			'Elementos en una cuadrícula: productos, planes, informes',
			'Superficies completas que abren algo'
		]
	},
	avoid: {
		en: [
			'A titled panel on a dashboard: use DashboardSection',
			'Rows of records: use Table or List',
			'Spacing alone: use lumi-stack'
		],
		es: [
			'Un panel con título en un dashboard: usa DashboardSection',
			'Filas de registros: usa Table o List',
			'Solo separar contenido: usa lumi-stack'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Title and content', es: 'Título y contenido' },
			text: {
				en: 'Title and subtitle fill the header. Add spaced to separate the header, content and footer, which is what you want almost every time.',
				es: 'Title y subtitle llenan la cabecera. Añade spaced para separar cabecera, contenido y pie, que es lo que quieres casi siempre.'
			},
			demo: 'Basic'
		},
		{
			id: 'footer',
			title: { en: 'Footer actions', es: 'Acciones en el pie' },
			text: {
				en: 'The footer snippet keeps actions in a predictable place at the bottom of the card.',
				es: 'El snippet footer mantiene las acciones en un lugar predecible al final de la tarjeta.'
			},
			demo: 'Footer'
		},
		{
			id: 'link',
			title: {
				en: 'The whole card as a link or button',
				es: 'Toda la tarjeta como enlace o botón'
			},
			text: {
				en: 'Use href for a real link and clickable for a button. Do not put other buttons or links inside, because a control cannot live inside another.',
				es: 'Usa href para un enlace real y clickable para un botón. No pongas otros botones o enlaces dentro, porque un control no puede vivir dentro de otro.'
			},
			demo: 'Link'
		},
		{
			id: 'selected',
			title: { en: 'Selectable cards', es: 'Tarjetas seleccionables' },
			text: {
				en: 'Selected marks the current choice, which works well for picking a plan. Press a card to try it.',
				es: 'Selected marca la opción actual, ideal para elegir un plan. Pulsa una tarjeta para probarlo.'
			},
			demo: 'Selected'
		}
	],
	props: [
		{ name: 'title', type: 'string', text: { en: 'Heading.', es: 'Título.' } },
		{
			name: 'subtitle',
			type: 'string',
			text: { en: 'Line under the heading.', es: 'Línea bajo el título.' }
		},
		{
			name: 'spaced',
			type: 'boolean',
			default: 'false',
			text: {
				en: 'Adds room between header, content and footer.',
				es: 'Añade espacio entre cabecera, contenido y pie.'
			}
		},
		{
			name: 'href',
			type: 'string',
			text: { en: 'Renders the card as a link.', es: 'Renderiza la tarjeta como enlace.' }
		},
		{
			name: 'clickable',
			type: 'boolean',
			default: 'false',
			text: { en: 'Renders the card as a button.', es: 'Renderiza la tarjeta como botón.' }
		},
		{
			name: 'selected',
			type: 'boolean',
			default: 'false',
			text: { en: 'Marks the current choice.', es: 'Marca la opción actual.' }
		},
		{
			name: 'hoverable',
			type: 'boolean',
			default: 'false',
			text: { en: 'Adds a hover effect.', es: 'Añade un efecto al pasar el puntero.' }
		},
		{
			name: 'image',
			type: 'string',
			text: { en: 'Image URL at the top.', es: 'URL de una imagen arriba.' }
		},
		{
			name: 'imageAlt',
			type: 'string',
			text: {
				en: 'Alt text; omit it for decoration.',
				es: 'Texto alternativo; omítelo si es decorativa.'
			}
		},
		{ name: 'header', type: 'Snippet', text: { en: 'Custom header.', es: 'Cabecera propia.' } },
		{ name: 'footer', type: 'Snippet', text: { en: 'Footer content.', es: 'Contenido del pie.' } },
		{
			name: 'media',
			type: 'Snippet',
			text: {
				en: 'Custom media, replacing image.',
				es: 'Contenido visual propio, en lugar de image.'
			}
		}
	]
} satisfies Doc<CardProps>;
