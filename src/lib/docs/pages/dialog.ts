import type { DialogProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Dialog } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Confirming a decision',
			'Short forms that should not leave the page',
			'Details that need full attention'
		],
		es: [
			'Confirmar una decisión',
			'Formularios cortos que no deben salir de la página',
			'Detalles que requieren toda la atención'
		]
	},
	avoid: {
		en: [
			'A list of actions: use Dropdown',
			'A confirmation after the fact: use Toaster',
			'Long workflows: use a full page'
		],
		es: [
			'Una lista de acciones: usa Dropdown',
			'Una confirmación posterior: usa Toaster',
			'Procesos largos: usa una página completa'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Open and close', es: 'Abrir y cerrar' },
			text: {
				en: 'Keep the dialog mounted and control it with bind:open, because Lumi animates a change of open. The title also names the dialog for screen readers. Focus moves inside and returns to the button when it closes.',
				es: 'Mantén el diálogo montado y contrólalo con bind:open, porque Lumi anima el cambio de open. El título también nombra el diálogo para los lectores de pantalla. El foco entra y vuelve al botón al cerrar.'
			},
			demo: 'Basic'
		},
		{
			id: 'form',
			title: { en: 'Recipe: a form that saves', es: 'Receta: un formulario que guarda' },
			text: {
				en: 'The footer sits outside the form, so its button calls requestSubmit, which still runs validation, and Enter keeps working in the fields. While saving, block every way out with persistent, hideClose and closeOnEscape, so the work cannot be interrupted, and close the dialog on success.',
				es: 'El pie queda fuera del formulario, así que su botón llama a requestSubmit, que conserva la validación, y Enter sigue funcionando en los campos. Mientras guarda, bloquea todas las salidas con persistent, hideClose y closeOnEscape, para que no se interrumpa el trabajo, y cierra el diálogo al terminar.'
			},
			demo: 'FormDialog'
		},
		{
			id: 'scrollable',
			title: { en: 'Long content', es: 'Contenido largo' },
			text: {
				en: 'Scrollable keeps the title and footer in view while the body scrolls.',
				es: 'Scrollable mantiene visibles el título y el pie mientras se desplaza el cuerpo.'
			},
			demo: 'Scrollable'
		}
	],
	props: [
		{
			name: 'open',
			type: 'boolean',
			default: 'false',
			text: { en: 'Visible state, bindable.', es: 'Estado visible, enlazable con bind.' }
		},
		{
			name: 'title',
			type: 'string',
			text: { en: 'Heading and accessible name.', es: 'Título y nombre accesible.' }
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			text: { en: 'Width.', es: 'Ancho.' }
		},
		{
			name: 'persistent',
			type: 'boolean',
			default: 'false',
			text: { en: 'Ignores backdrop clicks.', es: 'Ignora los clics en el fondo.' }
		},
		{
			name: 'scrollable',
			type: 'boolean',
			default: 'false',
			text: { en: 'Scrolls the body, not the page.', es: 'Desplaza el cuerpo, no la página.' }
		},
		{
			name: 'fullScreen',
			type: 'boolean',
			default: 'false',
			text: { en: 'Fills the screen.', es: 'Ocupa toda la pantalla.' }
		},
		{
			name: 'hideClose',
			type: 'boolean',
			default: 'false',
			text: { en: 'Hides the close button.', es: 'Oculta el botón de cerrar.' }
		},
		{
			name: 'closeOnEscape',
			type: 'boolean',
			default: 'true',
			text: { en: 'Closes with Escape.', es: 'Cierra con Escape.' }
		},
		{ name: 'footer', type: 'Snippet', text: { en: 'Actions row.', es: 'Fila de acciones.' } },
		{
			name: 'header',
			type: 'Snippet',
			text: { en: 'Custom header, replacing title.', es: 'Cabecera propia, en lugar de title.' }
		},
		{
			name: 'onclose',
			type: '() => void',
			text: { en: 'The person dismissed it.', es: 'La persona lo descartó.' }
		},
		{
			name: 'onafterclose',
			type: '() => void',
			text: { en: 'The exit animation finished.', es: 'Terminó la animación de salida.' }
		}
	]
} satisfies Doc<DialogProps>;
