import type { InfoItemProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { InfoItem } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'The details of a customer, order or student',
			'Read-only values in a profile',
			'Summaries inside a Card'
		],
		es: [
			'Los detalles de un cliente, pedido o alumno',
			'Valores de solo lectura en un perfil',
			'Resúmenes dentro de una Card'
		]
	},
	avoid: {
		en: [
			'Editable values: use Input',
			'Many records side by side: use Table',
			'Big dashboard numbers: use StatCard'
		],
		es: [
			'Valores editables: usa Input',
			'Muchos registros en paralelo: usa Table',
			'Números grandes de dashboard: usa StatCard'
		]
	},
	sections: [
		{
			id: 'details',
			title: { en: 'Details of a record', es: 'Detalles de un registro' },
			text: {
				en: 'Put several in a grid. An icon, a label and a value is the shape used almost everywhere in real apps.',
				es: 'Pon varios en una cuadrícula. Un icono, una etiqueta y un valor es la forma usada casi siempre en aplicaciones reales.'
			},
			demo: 'Details'
		},
		{
			id: 'layouts',
			title: { en: 'Horizontal or vertical', es: 'Horizontal o vertical' },
			text: {
				en: 'Horizontal is the default. Vertical suits narrow columns.',
				es: 'Horizontal es el valor por defecto. Vertical va bien en columnas estrechas.'
			},
			demo: 'Layouts'
		},
		{
			id: 'rich',
			title: { en: 'Rich values', es: 'Valores enriquecidos' },
			text: {
				en: 'Pass content as children instead of value when the value is more than text, such as a status chip.',
				es: 'Pasa contenido como children en lugar de value cuando el valor es más que texto, como un chip de estado.'
			},
			demo: 'Rich'
		}
	],
	props: [
		{ name: 'label', type: 'string', text: { en: 'What the value is.', es: 'Qué es el valor.' } },
		{
			name: 'value',
			type: 'string',
			text: { en: 'The value as text.', es: 'El valor como texto.' }
		},
		{ name: 'icon', type: 'IconSource', text: { en: 'Leading icon.', es: 'Icono inicial.' } },
		{
			name: 'iconColor',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			text: { en: 'Color of the icon.', es: 'Color del icono.' }
		},
		{
			name: 'layout',
			type: "'horizontal' | 'vertical'",
			default: "'horizontal'",
			text: { en: 'Orientation.', es: 'Orientación.' }
		},
		{
			name: 'children',
			type: 'Snippet',
			text: { en: 'Rich value, replacing value.', es: 'Valor enriquecido, en lugar de value.' }
		}
	]
} satisfies Doc<InfoItemProps>;
