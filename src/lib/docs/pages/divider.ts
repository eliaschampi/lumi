import type { DividerProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Divider } from '@lumi-ui/svelte';`,
	use: {
		en: ['Separating groups of content', 'A labeled break, such as Or continue with'],
		es: ['Separar grupos de contenido', 'Una pausa con texto, como O continúa con']
	},
	avoid: {
		en: ['Space between items: use lumi-stack', 'Rows of a list: List draws its own'],
		es: ['Espacio entre elementos: usa lumi-stack', 'Filas de una lista: List dibuja las suyas']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Line, label and style', es: 'Línea, etiqueta y estilo' },
			text: {
				en: 'It renders a real separator. Add a label for a named break, or use dashed for a softer line.',
				es: 'Renderiza un separador real. Añade una etiqueta para una pausa con nombre, o usa dashed para una línea más suave.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'label',
			type: 'string',
			text: { en: 'Text on the line.', es: 'Texto sobre la línea.' }
		},
		{
			name: 'align',
			type: "'start' | 'center' | 'end'",
			default: "'center'",
			text: { en: 'Position of the label.', es: 'Posición de la etiqueta.' }
		},
		{
			name: 'variant',
			type: "'solid' | 'dashed'",
			default: "'solid'",
			text: { en: 'Line style.', es: 'Estilo de línea.' }
		},
		{
			name: 'spacing',
			type: "'none' | 'sm' | 'md' | 'lg'",
			default: "'md'",
			text: { en: 'Room around the line.', es: 'Espacio alrededor de la línea.' }
		},
		{
			name: 'orientation',
			type: "'horizontal' | 'vertical'",
			default: "'horizontal'",
			text: { en: 'Direction.', es: 'Dirección.' }
		}
	]
} satisfies Doc<DividerProps>;
