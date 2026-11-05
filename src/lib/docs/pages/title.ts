import type { TitleProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Title } from '@lumi-ui/svelte';`,
	use: {
		en: ['Headings inside a page', 'Section titles with a subtitle or icon'],
		es: ['Encabezados dentro de una página', 'Títulos de sección con subtítulo o icono']
	},
	avoid: {
		en: [
			'The main title of a screen: use PageHeader',
			'The heading of a card: use the title prop of Card'
		],
		es: [
			'El título principal de una pantalla: usa PageHeader',
			'El título de una tarjeta: usa la prop title de Card'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Level and size', es: 'Nivel y tamaño' },
			text: {
				en: 'Level sets the real heading tag, for structure. Size sets how it looks. Keep them separate: choose the level by the page outline, and the size by the design.',
				es: 'Level define la etiqueta real de encabezado, para la estructura. Size define cómo se ve. Mantenlos separados: elige el nivel por el esquema de la página y el tamaño por el diseño.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'title',
			type: 'string',
			default: "''",
			text: { en: 'Heading text.', es: 'Texto del encabezado.' }
		},
		{
			name: 'subtitle',
			type: 'string',
			default: "''",
			text: { en: 'Line under the heading.', es: 'Línea bajo el encabezado.' }
		},
		{
			name: 'level',
			type: '1 | 2 | 3 | 4 | 5 | 6',
			default: '3',
			text: { en: 'Heading level.', es: 'Nivel de encabezado.' }
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			text: { en: 'Visual size.', es: 'Tamaño visual.' }
		},
		{
			name: 'color',
			type: "LumiColor | 'text'",
			default: "'text'",
			text: { en: 'Color.', es: 'Color.' }
		},
		{ name: 'icon', type: 'IconSource', text: { en: 'Leading icon.', es: 'Icono inicial.' } },
		{
			name: 'iconColor',
			type: "LumiColor | 'text'",
			text: { en: 'Color of the icon.', es: 'Color del icono.' }
		},
		{
			name: 'id',
			type: 'string',
			text: {
				en: 'Id, to link it with aria-labelledby.',
				es: 'Id, para enlazarlo con aria-labelledby.'
			}
		}
	]
} satisfies Doc<TitleProps>;
