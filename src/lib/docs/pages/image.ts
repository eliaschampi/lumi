import type { ImageProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Image } from '@lumi-ui/svelte';`,
	use: {
		en: ['Photos with loading and error states', 'Keeping a layout stable before an image arrives'],
		es: [
			'Fotos con estados de carga y error',
			'Mantener estable el diseño antes de que llegue una imagen'
		]
	},
	avoid: {
		en: ['People: use Avatar', 'The image of a card: use the image prop of Card'],
		es: ['Personas: usa Avatar', 'La imagen de una tarjeta: usa la prop image de Card']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Ratio and fit', es: 'Proporción y ajuste' },
			text: {
				en: 'Ratio reserves the space, so the page does not jump while the image loads. Always write a useful alt.',
				es: 'Ratio reserva el espacio, así la página no salta mientras carga la imagen. Escribe siempre un alt útil.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{ name: 'src', type: 'string', text: { en: 'Image URL.', es: 'URL de la imagen.' } },
		{
			name: 'alt',
			type: 'string',
			default: "''",
			text: { en: 'Alternative text.', es: 'Texto alternativo.' }
		},
		{ name: 'ratio', type: 'string', text: { en: 'Aspect ratio.', es: 'Proporción.' } },
		{
			name: 'fit',
			type: "'cover' | 'contain'",
			default: "'cover'",
			text: { en: 'How it fills the box.', es: 'Cómo llena el espacio.' }
		},
		{
			name: 'radius',
			type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
			default: "'lg'",
			text: { en: 'Corner radius.', es: 'Radio de las esquinas.' }
		},
		{
			name: 'loading',
			type: "'eager' | 'lazy'",
			default: "'lazy'",
			text: { en: 'Native loading mode.', es: 'Modo de carga nativo.' }
		},
		{
			name: 'zoom',
			type: 'boolean',
			default: 'false',
			text: { en: 'Zooms on hover.', es: 'Amplía al señalar.' }
		},
		{
			name: 'srcset',
			type: 'string',
			text: { en: 'Native responsive sources.', es: 'Fuentes adaptables nativas.' }
		}
	]
} satisfies Doc<ImageProps>;
