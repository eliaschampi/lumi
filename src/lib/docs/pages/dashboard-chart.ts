import type {
	DashboardChartProps,
	DashboardBarChartProps,
	DashboardDonutChartProps
} from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { DashboardChart, DashboardBarChart, DashboardDonutChart } from '@lumi-ui/svelte';`,
	use: {
		en: ['Trends over time', 'Comparing a few categories', 'Parts of a whole'],
		es: ['Tendencias en el tiempo', 'Comparar pocas categorías', 'Partes de un todo']
	},
	avoid: {
		en: ['Exact values people must read: use Table', 'One single number: use StatCard'],
		es: ['Valores exactos que hay que leer: usa Table', 'Un solo número: usa StatCard']
	},
	sections: [
		{
			id: 'line',
			title: { en: 'Lines', es: 'Líneas' },
			text: {
				en: 'DashboardChart compares one or more series over time. Always give it an aria-label that says what it shows.',
				es: 'DashboardChart compara una o más series en el tiempo. Dale siempre un aria-label que diga qué muestra.'
			},
			demo: 'Line'
		},
		{
			id: 'bars',
			title: { en: 'Bars', es: 'Barras' },
			text: {
				en: 'DashboardBarChart compares categories.',
				es: 'DashboardBarChart compara categorías.'
			},
			demo: 'Bars'
		},
		{
			id: 'donut',
			title: { en: 'Donut', es: 'Dona' },
			text: {
				en: 'DashboardDonutChart shows parts of a whole, and the center can hold the total.',
				es: 'DashboardDonutChart muestra partes de un todo, y el centro puede mostrar el total.'
			},
			demo: 'Donut'
		}
	],
	props: [
		{
			name: 'series',
			type: 'DashboardChartSeries[]',
			text: { en: 'Series to draw.', es: 'Series que se dibujan.' }
		},
		{
			name: 'data',
			type: 'ChartSeriesPoint[]',
			default: '[]',
			text: { en: 'One series, as points.', es: 'Una sola serie, como puntos.' }
		},
		{
			name: 'color',
			type: 'ChartColor',
			default: "'primary'",
			text: { en: 'Color of a single series.', es: 'Color de una sola serie.' }
		},
		{
			name: 'height',
			type: 'number',
			default: '220',
			text: { en: 'Height in pixels.', es: 'Altura en píxeles.' }
		},
		{
			name: 'valueFormat',
			type: 'ChartValueFormat',
			default: "'number'",
			text: { en: 'How values are written.', es: 'Cómo se escriben los valores.' }
		},
		{
			name: 'emptyMessage',
			type: 'string',
			text: { en: 'Text with no data.', es: 'Texto sin datos.' }
		}
	]
} satisfies Doc<DashboardChartProps>;
