import type { DashboardSectionProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { DashboardSection } from '@lumi-ui/svelte';`,
	use: {
		en: ['Titled panels on a dashboard', 'Blocks of a detail page with their own actions'],
		es: [
			'Paneles con título en un dashboard',
			'Bloques de una página de detalle con acciones propias'
		]
	},
	avoid: {
		en: ['Generic groups of content: use Card', 'Page titles: use PageHeader'],
		es: ['Grupos genéricos de contenido: usa Card', 'Títulos de página: usa PageHeader']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Title and actions', es: 'Título y acciones' },
			text: {
				en: 'It is a Card with a ready-made heading row, so the title, icon and actions always line up across a dashboard.',
				es: 'Es una Card con una fila de encabezado ya resuelta, así el título, el icono y las acciones siempre se alinean en un dashboard.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{ name: 'title', type: 'string', text: { en: 'Heading.', es: 'Título.' } },
		{
			name: 'subtitle',
			type: 'string',
			text: { en: 'Line under the heading.', es: 'Línea bajo el título.' }
		},
		{ name: 'icon', type: 'IconSource', text: { en: 'Leading icon.', es: 'Icono inicial.' } },
		{
			name: 'titleColor',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			text: { en: 'Color of the title.', es: 'Color del título.' }
		},
		{
			name: 'spaced',
			type: 'boolean',
			default: 'true',
			text: { en: 'Adds room around the content.', es: 'Añade espacio alrededor del contenido.' }
		},
		{
			name: 'actions',
			type: 'Snippet',
			text: { en: 'Actions at the end of the heading.', es: 'Acciones al final del encabezado.' }
		},
		{ name: 'footer', type: 'Snippet', text: { en: 'Footer content.', es: 'Contenido del pie.' } }
	]
} satisfies Doc<DashboardSectionProps>;
