import type { AlertProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Alert } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Situations that stay true: a closed period, an expired plan',
			'Errors that block a whole form',
			'Important context above a screen'
		],
		es: [
			'Situaciones que siguen vigentes: un periodo cerrado, un plan vencido',
			'Errores que bloquean todo un formulario',
			'Contexto importante sobre una pantalla'
		]
	},
	avoid: {
		en: [
			'Confirming an action that just happened: use Toaster',
			'An error in one field: use the error prop of that field',
			'A short status inside a row: use Chip'
		],
		es: [
			'Confirmar una acción recién hecha: usa Toaster',
			'Un error en un solo campo: usa la prop error de ese campo',
			'Un estado breve dentro de una fila: usa Chip'
		]
	},
	sections: [
		{
			id: 'colors',
			title: { en: 'Choose the color by meaning', es: 'Elige el color por su significado' },
			text: {
				en: 'Info is the default. Use success for good news, warning for something that needs attention soon, and danger when something failed. Each color brings its own icon and the right role for screen readers.',
				es: 'Info es el valor por defecto. Usa success para buenas noticias, warning para algo que requiere atención pronto y danger cuando algo falló. Cada color trae su icono y el rol adecuado para lectores de pantalla.'
			},
			demo: 'Colors'
		},
		{
			id: 'titled',
			title: { en: 'Add a title for longer messages', es: 'Añade un título en mensajes largos' },
			text: {
				en: 'A title helps when there are two ideas: what happened and what to do about it. For one short sentence, leave it out.',
				es: 'Un título ayuda cuando hay dos ideas: qué pasó y qué hacer al respecto. Para una sola frase corta, omítelo.'
			},
			demo: 'Titled'
		},
		{
			id: 'closable',
			title: { en: 'Let people dismiss it', es: 'Permite descartarla' },
			text: {
				en: 'Alerts stay until you remove them, so closable is off by default and you never need to write closable={false}. Turn it on for messages people can safely ignore, and use bind:active to know when one was closed.',
				es: 'Las alertas permanecen hasta que las quitas, por eso closable está desactivado por defecto y nunca necesitas escribir closable={false}. Actívalo en mensajes que se pueden ignorar sin riesgo, y usa bind:active para saber cuándo se cerró.'
			},
			demo: 'Closable'
		},
		{
			id: 'form-error',
			title: {
				en: 'Recipe: show a server error on a form',
				es: 'Receta: mostrar un error del servidor en un formulario'
			},
			text: {
				en: 'When a whole form fails, show one danger alert at the top and render it only when there is an error. Send the form to try it.',
				es: 'Cuando falla todo un formulario, muestra una alerta danger arriba y renderízala solo cuando haya un error. Envía el formulario para probarlo.'
			},
			demo: 'FormError'
		}
	],
	props: [
		{
			name: 'color',
			type: "'info' | 'success' | 'warning' | 'danger'  (+ primary, secondary)",
			default: "'info'",
			text: { en: 'Meaning of the message.', es: 'Significado del mensaje.' }
		},
		{
			name: 'title',
			type: 'string',
			text: { en: 'Heading above the message.', es: 'Título sobre el mensaje.' }
		},
		{
			name: 'icon',
			type: 'boolean',
			default: 'true',
			text: { en: 'Shows the status icon.', es: 'Muestra el icono de estado.' }
		},
		{
			name: 'closable',
			type: 'boolean',
			default: 'false',
			text: { en: 'Shows a dismiss button.', es: 'Muestra un botón para descartar.' }
		},
		{
			name: 'closeLabel',
			type: 'string',
			default: 'locale',
			text: { en: 'Accessible name of that button.', es: 'Nombre accesible de ese botón.' }
		},
		{
			name: 'active',
			type: 'boolean',
			default: 'true',
			text: { en: 'Visible state, bindable.', es: 'Estado visible, enlazable con bind.' }
		},
		{
			name: 'onclose',
			type: '() => void',
			text: { en: 'Runs once the alert has left.', es: 'Se ejecuta cuando la alerta ya se fue.' }
		}
	]
} satisfies Doc<AlertProps>;
