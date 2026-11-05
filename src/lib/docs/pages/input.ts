import type { InputProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Input } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Text, email, password and search fields',
			'Dates, times and numbers typed by hand',
			'Any field that needs a label and an error message'
		],
		es: [
			'Campos de texto, correo, contraseña y búsqueda',
			'Fechas, horas y números escritos a mano',
			'Cualquier campo que necesite etiqueta y mensaje de error'
		]
	},
	avoid: {
		en: [
			'Long text: use Textarea',
			'Numbers with steppers: use NumberInput',
			'Choosing from a list: use Select'
		],
		es: [
			'Texto largo: usa Textarea',
			'Números con botones de paso: usa NumberInput',
			'Elegir de una lista: usa Select'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Always give it a label', es: 'Dale siempre una etiqueta' },
			text: {
				en: 'The label is what tells people and screen readers what the field is for, so prefer it over a placeholder. Native attributes such as type, required and autocomplete go straight to the input.',
				es: 'La etiqueta indica a las personas y a los lectores de pantalla para qué sirve el campo, así que prefiérela a un placeholder. Los atributos nativos como type, required y autocomplete llegan directamente al input.'
			},
			demo: 'Basic'
		},
		{
			id: 'binding',
			title: { en: 'Read the value', es: 'Leer el valor' },
			text: {
				en: 'Use bind:value to keep the field and your state in sync. Clearable shows a button to empty it while it has text.',
				es: 'Usa bind:value para mantener sincronizados el campo y tu estado. Clearable muestra un botón para vaciarlo mientras tenga texto.'
			},
			demo: 'Binding'
		},
		{
			id: 'icons',
			title: { en: 'Icons', es: 'Iconos' },
			text: {
				en: 'An icon at the start helps people recognize a field in a dense form. It is decorative, so the label still does the naming.',
				es: 'Un icono al inicio ayuda a reconocer un campo en un formulario denso. Es decorativo, así que la etiqueta sigue siendo quien lo nombra.'
			},
			demo: 'Icons'
		},
		{
			id: 'validation',
			title: { en: 'Hints and errors', es: 'Ayudas y errores' },
			text: {
				en: 'Hint explains what to enter. Error marks the field as invalid and replaces the hint with its message, and it also connects that message for screen readers. Here it updates as you type.',
				es: 'Hint explica qué escribir. Error marca el campo como inválido y sustituye la ayuda por su mensaje, y además lo conecta con los lectores de pantalla. Aquí se actualiza mientras escribes.'
			},
			demo: 'Validation'
		},
		{
			id: 'password',
			title: {
				en: 'Recipe: show and hide a password',
				es: 'Receta: mostrar y ocultar una contraseña'
			},
			text: {
				en: 'ActionIcon adds a button inside the field. Remember actionLabel, because an icon alone has no name.',
				es: 'ActionIcon añade un botón dentro del campo. No olvides actionLabel, porque un icono solo no tiene nombre.'
			},
			demo: 'Password'
		},
		{
			id: 'sizes',
			title: { en: 'Sizes', es: 'Tamaños' },
			text: {
				en: 'Medium is the default. Select, Textarea and NumberInput share this same scale, so fields in one row always line up.',
				es: 'Medium es el valor por defecto. Select, Textarea y NumberInput comparten esta escala, así que los campos de una fila siempre quedan alineados.'
			},
			demo: 'Sizes'
		}
	],
	props: [
		{
			name: 'value',
			type: 'string | number | null',
			text: { en: 'Bindable value.', es: 'Valor enlazable.' }
		},
		{
			name: 'label',
			type: 'string',
			text: { en: 'Visible label above the field.', es: 'Etiqueta visible sobre el campo.' }
		},
		{
			name: 'type',
			type: "'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week'",
			default: "'text'",
			text: { en: 'Native input type.', es: 'Tipo nativo del input.' }
		},
		{
			name: 'icon',
			type: 'IconSource',
			text: { en: 'Decorative leading icon.', es: 'Icono decorativo inicial.' }
		},
		{
			name: 'clearable',
			type: 'boolean',
			default: 'false',
			text: {
				en: 'Shows a clear button while it has a value.',
				es: 'Muestra un botón para vaciar mientras tenga valor.'
			}
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
			name: 'actionIcon',
			type: 'IconSource',
			text: { en: 'Icon of a button inside the field.', es: 'Icono de un botón dentro del campo.' }
		},
		{
			name: 'actionLabel',
			type: 'string',
			text: { en: 'Accessible name of that button.', es: 'Nombre accesible de ese botón.' }
		},
		{
			name: 'onactionclick',
			type: '(event: MouseEvent) => void',
			text: { en: 'Runs when that button is pressed.', es: 'Se ejecuta al pulsar ese botón.' }
		}
	],
	propsNote: {
		en: 'Native input attributes such as name, autocomplete, min, max and maxlength also reach the input.',
		es: 'Los atributos nativos del input, como name, autocomplete, min, max y maxlength, también llegan al campo.'
	}
} satisfies Doc<InputProps>;
