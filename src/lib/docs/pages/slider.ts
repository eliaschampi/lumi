import type { SliderProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Slider } from '@lumi-ui/svelte';`,
	use: {
		en: ['A rough value inside a known range', 'Settings people adjust by feel'],
		es: ['Un valor aproximado dentro de un rango conocido', 'Ajustes que se regulan a ojo']
	},
	avoid: {
		en: ['Exact numbers: use NumberInput', 'Choosing from named options: use SegmentedControl'],
		es: [
			'Números exactos: usa NumberInput',
			'Elegir entre opciones con nombre: usa SegmentedControl'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Basic use', es: 'Uso básico' },
			text: {
				en: 'Keep the value with bind:value. ShowValue prints it next to the label.',
				es: 'Guarda el valor con bind:value. ShowValue lo muestra junto a la etiqueta.'
			},
			demo: 'Basic'
		},
		{
			id: 'range',
			title: { en: 'Range and steps', es: 'Rango y pasos' },
			text: {
				en: 'Min, max and step define which values can be chosen.',
				es: 'Min, max y step definen qué valores se pueden elegir.'
			},
			demo: 'Range'
		}
	],
	props: [
		{
			name: 'value',
			type: 'number',
			default: '0',
			text: { en: 'Bindable value.', es: 'Valor enlazable.' }
		},
		{
			name: 'min',
			type: 'number',
			default: '0',
			text: { en: 'Lowest value.', es: 'Valor mínimo.' }
		},
		{
			name: 'max',
			type: 'number',
			default: '100',
			text: { en: 'Highest value.', es: 'Valor máximo.' }
		},
		{
			name: 'step',
			type: 'number',
			default: '1',
			text: { en: 'Change per step.', es: 'Cambio por paso.' }
		},
		{
			name: 'label',
			type: 'string',
			default: "''",
			text: { en: 'Visible label.', es: 'Etiqueta visible.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			text: { en: 'Size.', es: 'Tamaño.' }
		},
		{
			name: 'showValue',
			type: 'boolean',
			default: 'false',
			text: { en: 'Prints the value.', es: 'Muestra el valor.' }
		},
		{
			name: 'showTooltip',
			type: 'boolean',
			default: 'true',
			text: { en: 'Shows the value on hover.', es: 'Muestra el valor al señalar.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables it.', es: 'Lo deshabilita.' }
		},
		{
			name: 'onchange',
			type: '(value: number) => void',
			text: { en: 'Runs when the value is committed.', es: 'Se ejecuta al confirmar el valor.' }
		}
	]
} satisfies Doc<SliderProps>;
