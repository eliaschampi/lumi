import type { EmptyStateProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { EmptyState } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'A list with no records yet',
			'A search with no results',
			'A section the person cannot access'
		],
		es: [
			'Una lista sin registros todavía',
			'Una búsqueda sin resultados',
			'Una sección a la que la persona no puede acceder'
		]
	},
	avoid: {
		en: [
			'Something that failed to load: use ErrorState',
			'Content that is on its way: use Skeleton or Loading',
			'An empty table: use its noDataText prop first'
		],
		es: [
			'Algo que no pudo cargarse: usa ErrorState',
			'Contenido que está en camino: usa Skeleton o Loading',
			'Una tabla vacía: usa primero su prop noDataText'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Say what is missing', es: 'Di qué falta' },
			text: {
				en: 'A title and a short description are enough. Explain what will appear here, not just that it is empty.',
				es: 'Un título y una descripción corta son suficientes. Explica qué aparecerá aquí, no solo que está vacío.'
			},
			demo: 'Basic'
		},
		{
			id: 'action',
			title: { en: 'Offer the next step', es: 'Ofrece el siguiente paso' },
			text: {
				en: 'When people can fix the emptiness, put that action right here with the actions snippet.',
				es: 'Cuando la persona pueda resolver el vacío, pon esa acción aquí mismo con el snippet actions.'
			},
			demo: 'WithAction'
		},
		{
			id: 'results',
			title: { en: 'No search results', es: 'Sin resultados de búsqueda' },
			text: {
				en: 'This is the most frequent use in real apps. Say that nothing matched and offer a way back.',
				es: 'Es el uso más frecuente en aplicaciones reales. Di que nada coincide y ofrece una forma de volver.'
			},
			demo: 'NoResults'
		},
		{
			id: 'access',
			title: { en: 'No access', es: 'Sin acceso' },
			text: {
				en: 'Explain why the content is missing and who can help. IconColor uses the same roles as the color prop.',
				es: 'Explica por qué falta el contenido y quién puede ayudar. IconColor usa los mismos roles que la prop color.'
			},
			demo: 'NoAccess'
		}
	],
	props: [
		{
			name: 'title',
			type: 'string',
			default: 'locale',
			text: { en: 'Main message.', es: 'Mensaje principal.' }
		},
		{
			name: 'description',
			type: 'string',
			text: { en: 'Supporting text.', es: 'Texto de apoyo.' }
		},
		{
			name: 'icon',
			type: 'IconSource',
			default: 'Inbox',
			text: { en: 'Icon above the text.', es: 'Icono sobre el texto.' }
		},
		{
			name: 'iconColor',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted'",
			default: "'muted'",
			text: { en: 'Color of the icon.', es: 'Color del icono.' }
		},
		{
			name: 'image',
			type: 'string',
			text: {
				en: 'Decorative illustration; wins over icon.',
				es: 'Ilustración decorativa; tiene prioridad sobre icon.'
			}
		},
		{
			name: 'actions',
			type: 'Snippet',
			text: { en: 'Actions under the text.', es: 'Acciones bajo el texto.' }
		},
		{
			name: 'visual',
			type: 'Snippet',
			text: {
				en: 'Custom visual, replacing image and icon.',
				es: 'Visual propio, en lugar de image e icon.'
			}
		}
	]
} satisfies Doc<EmptyStateProps>;
