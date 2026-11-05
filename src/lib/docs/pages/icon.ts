import type { IconProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Icon } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Showing a Lucide icon outside a component',
			'Sizing and coloring an icon with Lumi tokens'
		],
		es: [
			'Mostrar un icono de Lucide fuera de un componente',
			'Ajustar tamaño y color de un icono con tokens de Lumi'
		]
	},
	avoid: {
		en: [
			'Buttons and fields: pass icon to the component itself',
			'An icon in a soft tile: use IconBadge'
		],
		es: [
			'Botones y campos: pasa icon al propio componente',
			'Un icono en un fondo suave: usa IconBadge'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Sizes and colors', es: 'Tamaños y colores' },
			text: {
				en: 'Import each icon from its own path, so a page ships only what it shows. Icons are decorative by default; add aria-label when one carries meaning alone.',
				es: 'Importa cada icono desde su propia ruta, así una página incluye solo lo que muestra. Los iconos son decorativos por defecto; añade aria-label cuando uno aporte significado por sí solo.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'icon',
			type: 'IconSource',
			text: {
				en: 'Icon component or registered name.',
				es: 'Componente de icono o nombre registrado.'
			}
		},
		{
			name: 'size',
			type: 'LumiSize | string',
			default: "'md'",
			text: { en: 'Scale value or a CSS size.', es: 'Valor de la escala o tamaño CSS.' }
		},
		{
			name: 'color',
			type: "LumiColor | 'muted' | 'inherit' | `var(--lumi-${string})`",
			default: "'inherit'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{
			name: 'stroke',
			type: 'number',
			default: '2',
			text: { en: 'Stroke width.', es: 'Grosor del trazo.' }
		},
		{
			name: 'aria-label',
			type: 'string',
			text: {
				en: 'Accessible name for a meaningful icon.',
				es: 'Nombre accesible de un icono con significado.'
			}
		}
	]
} satisfies Doc<IconProps>;
