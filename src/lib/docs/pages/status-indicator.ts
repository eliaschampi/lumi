import type { StatusIndicatorProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { StatusIndicator } from '@lumi-ui/svelte';`,
	use: {
		en: ['A compact status beside a name', 'Online or connection states'],
		es: ['Un estado compacto junto a un nombre', 'Estados de conexión']
	},
	avoid: {
		en: ['A status people must read: use Chip'],
		es: ['Un estado que hay que leer: usa Chip']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Dots with meaning', es: 'Puntos con significado' },
			text: {
				en: 'Color alone says nothing to everyone, so add a tooltip with the meaning.',
				es: 'El color por sí solo no le dice nada a todos, así que añade un tooltip con el significado.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'status',
			type: "'default' | 'active' | 'inactive' | 'pending' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'default'",
			text: { en: 'Status.', es: 'Estado.' }
		},
		{
			name: 'pulse',
			type: 'boolean',
			default: 'false',
			text: { en: 'Animates the dot.', es: 'Anima el punto.' }
		},
		{
			name: 'tooltip',
			type: 'string',
			default: "''",
			text: { en: 'Text of its meaning.', es: 'Texto con su significado.' }
		},
		{
			name: 'active',
			type: 'boolean',
			text: { en: 'Shows the dot as on.', es: 'Muestra el punto como activo.' }
		}
	]
} satisfies Doc<StatusIndicatorProps>;
