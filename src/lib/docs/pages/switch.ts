import type { SwitchProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Switch } from '@lumi-ui/svelte';`,
	use: {
		en: ['Settings that apply immediately', 'Turning a feature on or off'],
		es: ['Ajustes que se aplican de inmediato', 'Activar o desactivar una función']
	},
	avoid: {
		en: [
			'Choices that wait for a Save button: use Checkbox',
			'Picking between two named options: use SegmentedControl'
		],
		es: [
			'Elecciones que esperan un botón Guardar: usa Checkbox',
			'Elegir entre dos opciones con nombre: usa SegmentedControl'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'On and off', es: 'Activado y desactivado' },
			text: {
				en: 'A switch promises an immediate effect, so save the change as soon as it flips. Word the label as what is on, never as a question. Screen readers announce it as a switch.',
				es: 'Un switch promete un efecto inmediato, así que guarda el cambio en cuanto se mueva. Redacta la etiqueta como lo que queda activo, nunca como una pregunta. Los lectores de pantalla lo anuncian como interruptor.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'checked',
			type: 'boolean',
			default: 'false',
			text: { en: 'Bindable state.', es: 'Estado enlazable.' }
		},
		{ name: 'label', type: 'string', text: { en: 'Visible label.', es: 'Etiqueta visible.' } },
		{ name: 'name', type: 'string', text: { en: 'Form field name.', es: 'Nombre del campo.' } },
		{
			name: 'value',
			type: 'string',
			default: "'on'",
			text: { en: 'Submitted value.', es: 'Valor enviado.' }
		},
		{
			name: 'required',
			type: 'boolean',
			default: 'false',
			text: { en: 'Must be on.', es: 'Debe estar activo.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables it.', es: 'Lo deshabilita.' }
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			text: { en: 'Size.', es: 'Tamaño.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{
			name: 'onchange',
			type: '(checked: boolean, event: Event) => void',
			text: { en: 'Runs when it changes.', es: 'Se ejecuta al cambiar.' }
		}
	]
} satisfies Doc<SwitchProps>;
