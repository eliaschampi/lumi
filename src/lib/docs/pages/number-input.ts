import type { NumberInputProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { NumberInput } from '@lumi-ui/svelte';`,
	use: {
		en: ['Quantities with limits', 'Values people adjust by small steps'],
		es: ['Cantidades con límites', 'Valores que se ajustan en pasos pequeños']
	},
	avoid: {
		en: [
			'Codes or phone numbers: use Input',
			'Very long ranges: type in Input, or use Slider for a rough value'
		],
		es: [
			'Códigos o teléfonos: usa Input',
			'Rangos muy amplios: escribe en Input o usa Slider para un valor aproximado'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Limits', es: 'Límites' },
			text: {
				en: 'Min and max stop the buttons and keep the value in range. Arrow keys also step the value. Say the limits in the hint so nobody has to discover them.',
				es: 'Min y max detienen los botones y mantienen el valor en rango. Las flechas del teclado también cambian el valor. Indica los límites en la ayuda para que nadie tenga que descubrirlos.'
			},
			demo: 'Basic'
		},
		{
			id: 'step',
			title: { en: 'Steps', es: 'Pasos' },
			text: {
				en: 'Step sets how much each press changes the value, including decimals.',
				es: 'Step define cuánto cambia el valor cada pulsación, incluidos decimales.'
			},
			demo: 'Step'
		}
	],
	props: [
		{ name: 'value', type: 'number', text: { en: 'Bindable value.', es: 'Valor enlazable.' } },
		{ name: 'min', type: 'number', text: { en: 'Lowest value.', es: 'Valor mínimo.' } },
		{ name: 'max', type: 'number', text: { en: 'Highest value.', es: 'Valor máximo.' } },
		{
			name: 'step',
			type: 'number',
			default: '1',
			text: { en: 'Change per press.', es: 'Cambio por pulsación.' }
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
			name: 'onchange',
			type: '(value: number) => void',
			text: { en: 'Runs when the value changes.', es: 'Se ejecuta al cambiar el valor.' }
		}
	]
} satisfies Doc<NumberInputProps>;
