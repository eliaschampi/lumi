import type { FieldsetProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Fieldset } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Dividing a long form into sections',
			'Fields that answer one question, such as an address'
		],
		es: [
			'Dividir un formulario largo en secciones',
			'Campos que responden a una pregunta, como una dirección'
		]
	},
	avoid: {
		en: ['Short forms of two or three fields: they need no grouping', 'Decorative boxes: use Card'],
		es: [
			'Formularios cortos de dos o tres campos: no necesitan agrupación',
			'Cajas decorativas: usa Card'
		]
	},
	sections: [
		{
			id: 'sections',
			title: { en: 'Sections of a form', es: 'Secciones de un formulario' },
			text: {
				en: 'The legend names the group for everyone, including screen readers, which read it before each field. Put a grid inside so fields sit side by side on large screens and stack on a phone.',
				es: 'La leyenda nombra el grupo para todos, incluidos los lectores de pantalla, que la leen antes de cada campo. Pon una cuadrícula dentro para que los campos vayan en paralelo en pantallas grandes y se apilen en un móvil.'
			},
			demo: 'Sections'
		}
	],
	props: [
		{ name: 'legend', type: 'string', text: { en: 'Name of the group.', es: 'Nombre del grupo.' } },
		{ name: 'class', type: 'string', text: { en: 'Extra class.', es: 'Clase adicional.' } },
		{ name: 'children', type: 'Snippet', text: { en: 'The fields.', es: 'Los campos.' } }
	]
} satisfies Doc<FieldsetProps>;
