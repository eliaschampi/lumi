import type { ToasterProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Toaster, createToaster } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Confirming an action that just finished',
			'Reporting a failure without blocking the page'
		],
		es: ['Confirmar una acción recién terminada', 'Informar de un fallo sin bloquear la página']
	},
	avoid: {
		en: ['Situations that stay true: use Alert', 'Decisions people must take: use Dialog'],
		es: ['Situaciones que siguen vigentes: usa Alert', 'Decisiones que hay que tomar: usa Dialog']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Show a message', es: 'Muestra un mensaje' },
			text: {
				en: 'Create one toaster, render one Toaster at the root of your app, and call show from anywhere. Messages pause on hover and leave by themselves.',
				es: 'Crea un toaster, renderiza un Toaster en la raíz de tu aplicación y llama a show desde cualquier parte. Los mensajes se pausan al señalarlos y se van solos.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'toaster',
			type: 'ToasterController',
			text: { en: 'The queue from createToaster.', es: 'La cola de createToaster.' }
		},
		{
			name: 'placement',
			type: "'top-end' | 'top-center' | 'bottom-end' | 'bottom-center'",
			text: { en: 'Where messages appear.', es: 'Dónde aparecen los mensajes.' }
		},
		{ name: 'class', type: 'string', text: { en: 'Extra class.', es: 'Clase adicional.' } }
	]
} satisfies Doc<ToasterProps>;
