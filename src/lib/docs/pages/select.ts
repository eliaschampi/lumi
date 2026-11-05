import type { SelectProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Select } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Choosing one option from a list',
			'Long lists, with search',
			'Values that come from your data'
		],
		es: [
			'Elegir una opción de una lista',
			'Listas largas, con búsqueda',
			'Valores que vienen de tus datos'
		]
	},
	avoid: {
		en: [
			'Two to four visible options: use SegmentedControl or Radio',
			'Options loaded while typing: use RemoteSelect',
			'Actions: use Dropdown'
		],
		es: [
			'De dos a cuatro opciones visibles: usa SegmentedControl o Radio',
			'Opciones cargadas al escribir: usa RemoteSelect',
			'Acciones: usa Dropdown'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Simple lists', es: 'Listas simples' },
			text: {
				en: 'Pass plain strings or numbers: each one is both the value and the label. Keep the value with bind:value.',
				es: 'Pasa textos o números simples: cada uno es a la vez valor y etiqueta. Guarda el valor con bind:value.'
			},
			demo: 'Basic'
		},
		{
			id: 'options',
			title: { en: 'Values and labels', es: 'Valores y etiquetas' },
			text: {
				en: 'Use objects when what you store differs from what you show. An option can also be disabled. Clearable is on by default, so required choices usually set clearable to false.',
				es: 'Usa objetos cuando lo que guardas difiere de lo que muestras. Una opción también puede estar deshabilitada. Clearable está activo por defecto, así que las opciones obligatorias suelen poner clearable en false.'
			},
			demo: 'Options'
		},
		{
			id: 'searchable',
			title: { en: 'Search long lists', es: 'Buscar en listas largas' },
			text: {
				en: 'Searchable lets people type to filter. Turn it on once a list has more than a handful of options.',
				es: 'Searchable permite escribir para filtrar. Actívalo cuando una lista tenga más de unas pocas opciones.'
			},
			demo: 'Searchable'
		},
		{
			id: 'validation',
			title: { en: 'Forms and errors', es: 'Formularios y errores' },
			text: {
				en: 'Select follows the same contract as Input: label, hint and error. With name, it also submits with the form, and required takes part in native validation.',
				es: 'Select sigue el mismo contrato que Input: label, hint y error. Con name, también se envía con el formulario, y required participa en la validación nativa.'
			},
			demo: 'Validation'
		}
	],
	props: [
		{
			name: 'value',
			type: 'SelectValue | null',
			default: 'null',
			text: { en: 'Selected value, bindable.', es: 'Valor seleccionado, enlazable con bind.' }
		},
		{
			name: 'options',
			type: 'SelectOptionInput[]',
			default: '[]',
			text: {
				en: 'Options: objects, strings or numbers.',
				es: 'Opciones: objetos, textos o números.'
			}
		},
		{
			name: 'label',
			type: 'string',
			text: { en: 'Visible label above the field.', es: 'Etiqueta visible sobre el campo.' }
		},
		{
			name: 'placeholder',
			type: 'string',
			default: 'locale',
			text: { en: 'Text while nothing is selected.', es: 'Texto mientras no hay selección.' }
		},
		{
			name: 'searchable',
			type: 'boolean',
			default: 'false',
			text: { en: 'Type to filter the options.', es: 'Escribe para filtrar las opciones.' }
		},
		{
			name: 'clearable',
			type: 'boolean',
			default: 'true',
			text: { en: 'Shows a clear button.', es: 'Muestra un botón para limpiar.' }
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
			name: 'name',
			type: 'string',
			text: { en: 'Submits the value with the form.', es: 'Envía el valor con el formulario.' }
		},
		{
			name: 'required',
			type: 'boolean',
			default: 'false',
			text: { en: 'Must have a value.', es: 'Debe tener un valor.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables the field.', es: 'Deshabilita el campo.' }
		},
		{
			name: 'loading',
			type: 'boolean',
			default: 'false',
			text: {
				en: 'Shows a spinner and blocks selection.',
				es: 'Muestra un spinner y bloquea la selección.'
			}
		},
		{
			name: 'size',
			type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			text: { en: 'Size on the field scale.', es: 'Tamaño en la escala de campos.' }
		},
		{
			name: 'noDataText',
			type: 'string',
			default: 'locale',
			text: { en: 'Text when nothing matches.', es: 'Texto cuando nada coincide.' }
		},
		{
			name: 'onchange',
			type: '(value: SelectValue | null) => void',
			text: { en: 'Runs when the value changes.', es: 'Se ejecuta al cambiar el valor.' }
		}
	]
} satisfies Doc<SelectProps>;
