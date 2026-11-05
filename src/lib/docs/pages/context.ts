import type { ContextItemProps, ContextProps } from '@lumi-ui/svelte';
import type { Doc, DocProp } from '../types';
const ITEM_PROPS: DocProp<ContextItemProps>[] = [
	{ name: 'title', type: 'string', text: { en: 'Label.', es: 'Etiqueta.' } },
	{ name: 'icon', type: 'IconSource', text: { en: 'Leading icon.', es: 'Icono inicial.' } },
	{
		name: 'shortcut',
		type: 'string',
		text: { en: 'Keyboard hint at the end.', es: 'Atajo de teclado al final.' }
	},
	{
		name: 'color',
		type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
		text: { en: 'Semantic color.', es: 'Color semántico.' }
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		text: { en: 'Disables the item.', es: 'Deshabilita el item.' }
	},
	{
		name: 'onclick',
		type: '(event: MouseEvent) => void',
		text: { en: 'Runs when pressed.', es: 'Se ejecuta al pulsar.' }
	}
];

export default {
	importLine: `import { Context, ContextItem } from '@lumi-ui/svelte';`,
	use: {
		en: ['Extra actions on a right click', 'Rows and cards with many actions'],
		es: ['Acciones extra con clic derecho', 'Filas y tarjetas con muchas acciones']
	},
	avoid: {
		en: [
			'The only way to reach an action: touch and keyboard users need another path, so offer a Dropdown too',
			'Menus on a button: use Dropdown'
		],
		es: [
			'La única forma de llegar a una acción: quien usa táctil o teclado necesita otro camino, así que ofrece también un Dropdown',
			'Menús sobre un botón: usa Dropdown'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Open at the pointer', es: 'Abre en el puntero' },
			text: {
				en: 'Keep a reference with bind:this and call open with the event, which also prevents the browser menu. It closes on any outside press or scroll, and focus returns to where it was.',
				es: 'Guarda una referencia con bind:this y llama a open con el evento, lo que además evita el menú del navegador. Se cierra con cualquier pulsación o desplazamiento fuera, y el foco vuelve a donde estaba.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			text: { en: 'Minimum width.', es: 'Ancho mínimo.' }
		},
		{
			name: 'onopen',
			type: '(event, data, top, left) => void',
			text: { en: 'Runs when it opens.', es: 'Se ejecuta al abrir.' }
		},
		{
			name: 'onclose',
			type: '() => void',
			text: { en: 'Runs when it closes.', es: 'Se ejecuta al cerrar.' }
		},
		{
			name: 'children',
			type: 'Snippet<[{ data }]>',
			text: {
				en: 'Items; receives the data passed to open.',
				es: 'Items; recibe los datos pasados a open.'
			}
		}
	],
	moreProps: [{ title: 'ContextItem', props: ITEM_PROPS }]
} satisfies Doc<ContextProps>;
