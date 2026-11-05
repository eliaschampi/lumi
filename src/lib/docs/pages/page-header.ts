import type { PageHeaderProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { PageHeader } from '@lumi-ui/svelte';`,
	use: {
		en: ['The top of every screen', 'A title with its main actions'],
		es: ['La parte superior de cada pantalla', 'Un título con sus acciones principales']
	},
	avoid: {
		en: ['Headings inside a page: use Title', 'The title of a card: use the title prop of Card'],
		es: [
			'Títulos dentro de una página: usa Title',
			'El título de una tarjeta: usa la prop title de Card'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Name the screen', es: 'Nombra la pantalla' },
			text: {
				en: 'Use one per page. It renders a real h1, which helps screen readers and search engines. The subtitle says what the page is for.',
				es: 'Usa uno por página. Renderiza un h1 real, lo que ayuda a los lectores de pantalla y a los buscadores. El subtítulo dice para qué sirve la página.'
			},
			demo: 'Basic'
		},
		{
			id: 'actions',
			title: { en: 'Add the main actions', es: 'Añade las acciones principales' },
			text: {
				en: 'The actions snippet aligns buttons to the end and wraps them on a phone. Keep one filled action here at most.',
				es: 'El snippet actions alinea los botones al final y los reordena en un móvil. Deja aquí como máximo una acción filled.'
			},
			demo: 'Actions'
		},
		{
			id: 'sizes',
			title: { en: 'Sizes', es: 'Tamaños' },
			text: {
				en: 'Xl suits top-level pages. Smaller sizes suit nested screens.',
				es: 'Xl va bien en páginas principales. Los tamaños menores, en pantallas anidadas.'
			},
			demo: 'Sizes'
		}
	],
	props: [
		{ name: 'title', type: 'string', text: { en: 'Page title.', es: 'Título de la página.' } },
		{
			name: 'subtitle',
			type: 'string',
			text: { en: 'Line under the title.', es: 'Línea bajo el título.' }
		},
		{ name: 'icon', type: 'IconSource', text: { en: 'Leading icon.', es: 'Icono inicial.' } },
		{
			name: 'iconColor',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			text: { en: 'Color of the icon.', es: 'Color del icono.' }
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			text: { en: 'Title size.', es: 'Tamaño del título.' }
		},
		{
			name: 'level',
			type: '1 | 2 | 3 | 4 | 5 | 6',
			default: '1',
			text: { en: 'Heading level.', es: 'Nivel de encabezado.' }
		},
		{
			name: 'actions',
			type: 'Snippet',
			text: {
				en: 'Page actions, aligned to the end.',
				es: 'Acciones de la página, alineadas al final.'
			}
		}
	]
} satisfies Doc<PageHeaderProps>;
