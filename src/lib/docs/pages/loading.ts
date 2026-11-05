import type { LoadingProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Loading } from '@lumi-ui/svelte';`,
	use: {
		en: ['Waiting for something with an unknown layout', 'A whole panel that is loading'],
		es: ['Esperar algo de disposición desconocida', 'Un panel completo que está cargando']
	},
	avoid: {
		en: ['Content with a known shape: use Skeleton', 'A button at work: use its loading prop'],
		es: ['Contenido de forma conocida: usa Skeleton', 'Un botón trabajando: usa su prop loading']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Size, color and text', es: 'Tamaño, color y texto' },
			text: {
				en: 'Add text to say what is being loaded.',
				es: 'Añade text para decir qué se está cargando.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			text: { en: 'Size.', es: 'Tamaño.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{
			name: 'text',
			type: 'string',
			default: "''",
			text: { en: 'Text under the spinner.', es: 'Texto bajo el spinner.' }
		}
	]
} satisfies Doc<LoadingProps>;
