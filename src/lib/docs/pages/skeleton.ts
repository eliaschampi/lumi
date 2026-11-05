import type { SkeletonProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Skeleton } from '@lumi-ui/svelte';`,
	use: {
		en: ['Content whose shape you already know', 'Reducing layout jumps while data loads'],
		es: ['Contenido cuya forma ya conoces', 'Reducir saltos de diseño mientras cargan datos']
	},
	avoid: {
		en: ['Unknown layouts: use Loading', 'Tables: use the loading prop of Table'],
		es: ['Disposiciones desconocidas: usa Loading', 'Tablas: usa la prop loading de Table']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Shapes and lines', es: 'Formas y líneas' },
			text: {
				en: 'Match the real content: a circle for an avatar and text lines for copy. The shimmer stops for people who prefer reduced motion.',
				es: 'Imita el contenido real: un círculo para un avatar y líneas para el texto. El brillo se detiene para quienes prefieren menos movimiento.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'shape',
			type: "'text' | 'rect' | 'circle'",
			default: "'text'",
			text: { en: 'Shape.', es: 'Forma.' }
		},
		{ name: 'width', type: 'string', text: { en: 'CSS width.', es: 'Ancho CSS.' } },
		{ name: 'height', type: 'string', text: { en: 'CSS height.', es: 'Alto CSS.' } },
		{
			name: 'lines',
			type: 'number',
			default: '1',
			text: { en: 'Number of text lines.', es: 'Número de líneas de texto.' }
		}
	]
} satisfies Doc<SkeletonProps>;
