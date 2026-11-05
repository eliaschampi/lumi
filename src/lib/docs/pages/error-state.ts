import type { ErrorStateProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { ErrorState } from '@lumi-ui/svelte';`,
	use: {
		en: ['Error pages such as 404 and 500', 'A route that failed to load'],
		es: ['Páginas de error como 404 y 500', 'Una ruta que no pudo cargarse']
	},
	avoid: {
		en: ['Nothing to show yet: use EmptyState', 'A failed action: use Alert or Toaster'],
		es: ['Aún no hay nada que mostrar: usa EmptyState', 'Una acción fallida: usa Alert o Toaster']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'An error page', es: 'Una página de error' },
			text: {
				en: 'Pass the status, and Lumi chooses the message in the active language. HomeHref offers a way back.',
				es: 'Pasa el status y Lumi elige el mensaje en el idioma activo. HomeHref ofrece una forma de volver.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'status',
			type: 'number',
			default: '500',
			text: { en: 'HTTP status.', es: 'Estado HTTP.' }
		},
		{
			name: 'message',
			type: 'string',
			default: "''",
			text: { en: 'Custom message.', es: 'Mensaje propio.' }
		},
		{
			name: 'homeHref',
			type: 'string',
			default: "'/'",
			text: { en: 'Link back home.', es: 'Enlace de vuelta al inicio.' }
		}
	]
} satisfies Doc<ErrorStateProps>;
