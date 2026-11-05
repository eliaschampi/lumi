import type { ToggleGroupProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { ToggleGroup } from '@lumi-ui/svelte';`,
	use: {
		en: ['Several independent options on at once', 'Formatting toolbars and channel filters'],
		es: ['Varias opciones independientes activas a la vez', 'Barras de formato y filtros de canal']
	},
	avoid: {
		en: [
			'Only one option at a time: use SegmentedControl',
			'One standalone toggle: use Button with pressed'
		],
		es: [
			'Solo una opción a la vez: usa SegmentedControl',
			'Un único interruptor: usa Button con pressed'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Any number of options', es: 'Cualquier número de opciones' },
			text: {
				en: 'The value is the array of everything that is on. Press several to try it.',
				es: 'El valor es el array de todo lo que está activo. Pulsa varias para probarlo.'
			},
			demo: 'Basic'
		},
		{
			id: 'icons',
			title: { en: 'Icon toolbars', es: 'Barras de iconos' },
			text: {
				en: 'With icons, give each option an ariaLabel. Arrow keys move between buttons, and the group counts as one stop for Tab.',
				es: 'Con iconos, da a cada opción un ariaLabel. Las flechas se mueven entre botones, y el grupo cuenta como una sola parada de Tab.'
			},
			demo: 'Icons'
		}
	],
	props: [
		{
			name: 'value',
			type: 'ToggleGroupValue[]',
			default: '[]',
			text: { en: 'Pressed values, bindable.', es: 'Valores pulsados, enlazable con bind.' }
		},
		{
			name: 'options',
			type: 'LumiChoiceOption[]',
			text: {
				en: 'Options: value, label, icon, ariaLabel.',
				es: 'Opciones: value, label, icon, ariaLabel.'
			}
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Color of pressed options.', es: 'Color de las opciones pulsadas.' }
		},
		{ name: 'size', type: "'sm' | 'md'", default: "'md'", text: { en: 'Size.', es: 'Tamaño.' } },
		{
			name: 'fullWidth',
			type: 'boolean',
			default: 'false',
			text: { en: 'Fills the width.', es: 'Ocupa todo el ancho.' }
		},
		{
			name: 'orientation',
			type: "'horizontal' | 'vertical'",
			default: "'horizontal'",
			text: { en: 'Direction.', es: 'Dirección.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables it.', es: 'Lo deshabilita.' }
		},
		{
			name: 'onchange',
			type: '(value: ToggleGroupValue[]) => void',
			text: { en: 'Runs when it changes.', es: 'Se ejecuta al cambiar.' }
		}
	]
} satisfies Doc<ToggleGroupProps>;
