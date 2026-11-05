import type { StatCardProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { StatCard } from '@lumi-ui/svelte';`,
	use: {
		en: ['The key numbers of a dashboard'],
		es: ['Los números clave de un dashboard']
	},
	avoid: {
		en: ['Details of one record: use InfoItem', 'Trends over time: use a chart'],
		es: ['Detalles de un registro: usa InfoItem', 'Tendencias en el tiempo: usa un gráfico']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Numbers at a glance', es: 'Números de un vistazo' },
			text: {
				en: 'Put them in a lumi-grid--cards. With href, the whole card becomes a link to the detail.',
				es: 'Ponlas en un lumi-grid--cards. Con href, toda la tarjeta se convierte en un enlace al detalle.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{ name: 'title', type: 'string', text: { en: 'What the number is.', es: 'Qué es el número.' } },
		{
			name: 'value',
			type: 'number | string',
			text: { en: 'The number or text.', es: 'El número o texto.' }
		},
		{ name: 'icon', type: 'IconSource', text: { en: 'Icon.', es: 'Icono.' } },
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{
			name: 'subtitle',
			type: 'string',
			default: "''",
			text: { en: 'Extra context.', es: 'Contexto adicional.' }
		},
		{
			name: 'href',
			type: 'string',
			text: { en: 'Makes the card a link.', es: 'Convierte la tarjeta en enlace.' }
		},
		{
			name: 'hoverable',
			type: 'boolean',
			text: { en: 'Adds a hover effect.', es: 'Añade un efecto al señalar.' }
		}
	]
} satisfies Doc<StatCardProps>;
