import type { CheckboxProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Checkbox } from '@lumi-ui/svelte';`,
	use: {
		en: ['Consent inside a form', 'Several independent choices'],
		es: ['Consentimiento dentro de un formulario', 'Varias opciones independientes']
	},
	avoid: {
		en: ['Settings that apply at once: use Switch', 'One choice from several: use Radio'],
		es: ['Ajustes que se aplican al momento: usa Switch', 'Una elección entre varias: usa Radio']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Sent with the form', es: 'Se envía con el formulario' },
			text: {
				en: 'Use bind:checked for your state and name to submit it. It takes part in native validation with required. The whole label is clickable.',
				es: 'Usa bind:checked para tu estado y name para enviarlo. Participa en la validación nativa con required. Toda la etiqueta se puede pulsar.'
			},
			demo: 'Basic'
		},
		{
			id: 'select-all',
			title: { en: 'Recipe: select all', es: 'Receta: seleccionar todo' },
			text: {
				en: 'Indeterminate shows that only some options are on. Derive it from your data, and use onchange because the parent does not own one value.',
				es: 'Indeterminate muestra que solo algunas opciones están activas. Derívalo de tus datos y usa onchange porque el padre no posee un solo valor.'
			},
			demo: 'SelectAll'
		}
	],
	props: [
		{
			name: 'checked',
			type: 'boolean',
			default: 'false',
			text: { en: 'Bindable state.', es: 'Estado enlazable.' }
		},
		{
			name: 'indeterminate',
			type: 'boolean',
			default: 'false',
			text: { en: 'Partly selected state.', es: 'Estado parcialmente seleccionado.' }
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
			text: { en: 'Must be checked.', es: 'Debe estar marcado.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables it.', es: 'Lo deshabilita.' }
		},
		{ name: 'size', type: "'sm' | 'md'", default: "'md'", text: { en: 'Size.', es: 'Tamaño.' } },
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
} satisfies Doc<CheckboxProps>;
