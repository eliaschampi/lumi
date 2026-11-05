import type { IconBadgeProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { IconBadge } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'An icon that introduces a section or a metric',
			'Small visual anchors in lists and cards'
		],
		es: [
			'Un icono que introduce una sección o métrica',
			'Anclas visuales pequeñas en listas y tarjetas'
		]
	},
	avoid: {
		en: ['Actions: use Button with an icon', 'People: use Avatar'],
		es: ['Acciones: usa Button con icono', 'Personas: usa Avatar']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Colors and sizes', es: 'Colores y tamaños' },
			text: {
				en: 'It places an icon on a soft tile in any of the six roles.',
				es: 'Coloca un icono sobre un fondo suave en cualquiera de los seis roles.'
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
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			text: { en: 'Size.', es: 'Tamaño.' }
		}
	]
} satisfies Doc<IconBadgeProps>;
