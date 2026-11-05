import type { TextareaProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Textarea } from '@lumi-ui/svelte';`,
	use: {
		en: ['Comments, notes and descriptions', 'Any text longer than one line'],
		es: ['Comentarios, notas y descripciones', 'Cualquier texto de más de una línea']
	},
	avoid: {
		en: ['Short values such as a name: use Input', 'Formatted text: this field holds plain text'],
		es: [
			'Valores cortos como un nombre: usa Input',
			'Texto con formato: este campo guarda texto plano'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Label, rows and hint', es: 'Etiqueta, filas y ayuda' },
			text: {
				en: 'It shares its contract with Input, so label, hint and error work the same. Rows sets the starting height.',
				es: 'Comparte contrato con Input, así que label, hint y error funcionan igual. Rows define la altura inicial.'
			},
			demo: 'Basic'
		},
		{
			id: 'counter',
			title: { en: 'Character counter', es: 'Contador de caracteres' },
			text: {
				en: 'With maxlength, showCount tells people how much room is left before they hit the limit.',
				es: 'Con maxlength, showCount indica cuánto espacio queda antes de llegar al límite.'
			},
			demo: 'Counter'
		}
	],
	props: [
		{
			name: 'value',
			type: 'string | null',
			text: { en: 'Bindable value.', es: 'Valor enlazable.' }
		},
		{
			name: 'label',
			type: 'string',
			text: { en: 'Visible label above the field.', es: 'Etiqueta visible sobre el campo.' }
		},
		{
			name: 'hint',
			type: 'string',
			text: { en: 'Helper text below the field.', es: 'Texto de ayuda bajo el campo.' }
		},
		{
			name: 'error',
			type: 'boolean | string | null',
			text: {
				en: 'Invalid state; a string is also shown.',
				es: 'Estado inválido; un texto también se muestra.'
			}
		},
		{
			name: 'size',
			type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			text: { en: 'Size on the field scale.', es: 'Tamaño en la escala de campos.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Accent while focused.', es: 'Acento al tener el foco.' }
		},
		{
			name: 'showCount',
			type: 'boolean',
			default: 'false',
			text: { en: 'Shows the character counter.', es: 'Muestra el contador de caracteres.' }
		}
	],
	propsNote: {
		en: 'Native textarea attributes such as rows, name and maxlength also reach the field.',
		es: 'Los atributos nativos de textarea, como rows, name y maxlength, también llegan al campo.'
	}
} satisfies Doc<TextareaProps>;
