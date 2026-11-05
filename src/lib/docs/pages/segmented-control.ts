import type { SegmentedControlProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { SegmentedControl } from '@lumi-ui/svelte';`,
	use: {
		en: ['Two to five short options', 'Switching a view or period'],
		es: ['De dos a cinco opciones cortas', 'Cambiar una vista o un periodo']
	},
	avoid: {
		en: [
			'Moving between sections: use Tabs',
			'Several options at once: use ToggleGroup',
			'Long option lists: use Select'
		],
		es: [
			'Moverse entre secciones: usa Tabs',
			'Varias opciones a la vez: usa ToggleGroup',
			'Listas largas: usa Select'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'One choice, always visible', es: 'Una elección, siempre visible' },
			text: {
				en: 'Every option stays in view, so people compare them without opening anything. Always give it an aria-label.',
				es: 'Todas las opciones quedan a la vista, así se comparan sin abrir nada. Dale siempre un aria-label.'
			},
			demo: 'Basic'
		},
		{
			id: 'icons',
			title: { en: 'Icons only', es: 'Solo iconos' },
			text: {
				en: 'With iconOnly, each option needs its own ariaLabel, because an icon alone has no name.',
				es: 'Con iconOnly, cada opción necesita su propio ariaLabel, porque un icono solo no tiene nombre.'
			},
			demo: 'Icons'
		},
		{
			id: 'full',
			title: { en: 'Full width', es: 'Ancho completo' },
			text: {
				en: 'FullWidth divides the space evenly, which suits narrow forms and phones.',
				es: 'FullWidth reparte el espacio por igual, ideal en formularios estrechos y móviles.'
			},
			demo: 'FullWidth'
		}
	],
	props: [
		{
			name: 'value',
			type: 'string | number',
			text: { en: 'Selected value, bindable.', es: 'Valor seleccionado, enlazable con bind.' }
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
			text: { en: 'Color of the active option.', es: 'Color de la opción activa.' }
		},
		{ name: 'size', type: "'sm' | 'md'", default: "'md'", text: { en: 'Size.', es: 'Tamaño.' } },
		{
			name: 'fullWidth',
			type: 'boolean',
			default: 'false',
			text: { en: 'Fills the width.', es: 'Ocupa todo el ancho.' }
		},
		{
			name: 'iconOnly',
			type: 'boolean',
			default: 'false',
			text: { en: 'Shows only icons.', es: 'Muestra solo iconos.' }
		},
		{
			name: 'orientation',
			type: "'horizontal' | 'vertical'",
			default: "'horizontal'",
			text: { en: 'Direction.', es: 'Dirección.' }
		},
		{
			name: 'clearable',
			type: 'boolean',
			default: 'false',
			text: {
				en: 'A second press clears the choice.',
				es: 'Una segunda pulsación quita la elección.'
			}
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables it.', es: 'Lo deshabilita.' }
		},
		{
			name: 'onchange',
			type: '(value: string | number) => void',
			text: { en: 'Runs when it changes.', es: 'Se ejecuta al cambiar.' }
		}
	]
} satisfies Doc<SegmentedControlProps>;
