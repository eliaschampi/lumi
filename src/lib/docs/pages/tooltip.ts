import type { TooltipProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Tooltip } from '@lumi-ui/svelte';`,
	use: {
		en: ['Naming an icon button', 'A short extra detail'],
		es: ['Nombrar un botón de icono', 'Un detalle breve adicional']
	},
	avoid: {
		en: [
			'Information people must read: put it on the page',
			'Actions or links inside: use Dialog or Dropdown'
		],
		es: [
			'Información que hay que leer: ponla en la página',
			'Acciones o enlaces dentro: usa Dialog o Dropdown'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Name an icon button', es: 'Nombra un botón de icono' },
			text: {
				en: 'It opens on hover and on keyboard focus. Lumi links the text to the control as its description. The aria-label is still needed, because a description is not a name.',
				es: 'Se abre al señalar y al enfocar con el teclado. Lumi enlaza el texto con el control como su descripción. El aria-label sigue siendo necesario, porque una descripción no es un nombre.'
			},
			demo: 'Basic'
		},
		{
			id: 'placement',
			title: { en: 'Placement', es: 'Posición' },
			text: {
				en: 'Top is the default, and it flips by itself when there is no room.',
				es: 'Top es el valor por defecto y cambia solo cuando falta espacio.'
			},
			demo: 'Placement'
		},
		{
			id: 'disabled',
			title: { en: 'Explain a disabled button', es: 'Explica un botón deshabilitado' },
			text: {
				en: 'Disabled controls take no pointer events, so the tooltip wrapper still opens on hover. Say why it is not available.',
				es: 'Los controles deshabilitados no reciben eventos de puntero, así que el contenedor del tooltip sigue abriéndose. Di por qué no está disponible.'
			},
			demo: 'Disabled'
		}
	],
	props: [
		{ name: 'text', type: 'string', text: { en: 'Plain text.', es: 'Texto simple.' } },
		{
			name: 'placement',
			type: "'top' | 'bottom' | 'left' | 'right'",
			default: "'top'",
			text: { en: 'Preferred side.', es: 'Lado preferido.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Accent.', es: 'Acento.' }
		},
		{
			name: 'delay',
			type: 'number',
			default: '0',
			text: { en: 'Delay before showing, in ms.', es: 'Espera antes de mostrar, en ms.' }
		},
		{
			name: 'content',
			type: 'Snippet',
			text: { en: 'Rich content, replacing text.', es: 'Contenido enriquecido, en lugar de text.' }
		}
	]
} satisfies Doc<TooltipProps>;
