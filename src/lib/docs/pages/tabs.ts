import type { TabsProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Tabs } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Sections of one record or page',
			'Content people switch between without losing their place'
		],
		es: [
			'Secciones de un registro o página',
			'Contenido entre el que se cambia sin perder el lugar'
		]
	},
	avoid: {
		en: [
			'Choosing a value in a form: use SegmentedControl',
			'Moving between pages: use links or the sidebar'
		],
		es: [
			'Elegir un valor en un formulario: usa SegmentedControl',
			'Moverse entre páginas: usa enlaces o el menú lateral'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Tabs and their panel', es: 'Pestañas y su panel' },
			text: {
				en: 'Keep the active tab with bind:value and render the panel as children. Disabled tabs are skipped, and an unknown value falls back to the first enabled tab, so the list always has one active.',
				es: 'Guarda la pestaña activa con bind:value y renderiza el panel como children. Las pestañas deshabilitadas se saltan, y un valor desconocido vuelve a la primera habilitada, así siempre hay una activa.'
			},
			demo: 'Basic'
		},
		{
			id: 'vertical',
			title: { en: 'Icons, color and direction', es: 'Iconos, color y dirección' },
			text: {
				en: 'Vertical tabs suit settings pages with many sections.',
				es: 'Las pestañas verticales van bien en páginas de ajustes con muchas secciones.'
			},
			demo: 'Icons'
		}
	],
	props: [
		{
			name: 'value',
			type: 'string | number',
			text: { en: 'Active tab, bindable.', es: 'Pestaña activa, enlazable con bind.' }
		},
		{
			name: 'tabs',
			type: 'Tab[]',
			text: {
				en: 'Tabs: value, label, icon, disabled, content.',
				es: 'Pestañas: value, label, icon, disabled, content.'
			}
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Color of the active tab.', es: 'Color de la pestaña activa.' }
		},
		{
			name: 'orientation',
			type: "'horizontal' | 'vertical'",
			default: "'horizontal'",
			text: { en: 'Direction.', es: 'Dirección.' }
		},
		{
			name: 'onchange',
			type: '(value, previousValue) => void',
			text: { en: 'Runs when the tab changes.', es: 'Se ejecuta al cambiar de pestaña.' }
		}
	]
} satisfies Doc<TabsProps>;
