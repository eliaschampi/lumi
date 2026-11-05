import type { QuickAccessCardProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { QuickAccessCard } from '@lumi-ui/svelte';`,
	use: {
		en: ['Shortcuts on a home screen'],
		es: ['Accesos directos en una pantalla de inicio']
	},
	avoid: {
		en: ['Content cards: use Card'],
		es: ['Tarjetas de contenido: usa Card']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'A shortcut', es: 'Un acceso directo' },
			text: {
				en: 'The whole card is a link. This site uses them on its home and in the catalog.',
				es: 'Toda la tarjeta es un enlace. Este sitio las usa en su inicio y en el catálogo.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{ name: 'href', type: 'string', text: { en: 'Destination.', es: 'Destino.' } },
		{ name: 'title', type: 'string', text: { en: 'Heading.', es: 'Título.' } },
		{
			name: 'description',
			type: 'string',
			text: { en: 'Supporting line.', es: 'Línea de apoyo.' }
		},
		{ name: 'icon', type: 'IconSource', text: { en: 'Icon.', es: 'Icono.' } },
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{
			name: 'hoverable',
			type: 'boolean',
			default: 'true',
			text: { en: 'Adds a hover effect.', es: 'Añade un efecto al señalar.' }
		}
	]
} satisfies Doc<QuickAccessCardProps>;
