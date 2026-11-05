import type { RadioProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Radio } from '@lumi-ui/svelte';`,
	use: {
		en: ['One choice from a short list', 'Options that need an explanation'],
		es: ['Una elección de una lista corta', 'Opciones que necesitan explicación']
	},
	avoid: {
		en: ['Long lists: use Select', 'Short labels in little space: use SegmentedControl'],
		es: ['Listas largas: usa Select', 'Etiquetas cortas en poco espacio: usa SegmentedControl']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'A group of options', es: 'Un grupo de opciones' },
			text: {
				en: 'Give every radio the same name and bind:group to the same state. Wrap them in a radiogroup so assistive technology reads them as one question. Arrow keys move between them.',
				es: 'Da a cada radio el mismo name y enlaza bind:group al mismo estado. Envuélvelos en un radiogroup para que las tecnologías de asistencia los lean como una pregunta. Las flechas se mueven entre ellos.'
			},
			demo: 'Basic'
		},
		{
			id: 'options',
			title: { en: 'Options with a description', es: 'Opciones con descripción' },
			text: {
				en: 'Add description and the whole card becomes clickable, which suits plans and delivery methods.',
				es: 'Añade description y toda la tarjeta se vuelve pulsable, ideal para planes y métodos de entrega.'
			},
			demo: 'Options'
		}
	],
	props: [
		{
			name: 'group',
			type: 'unknown',
			text: { en: 'Selected value, bindable.', es: 'Valor seleccionado, enlazable con bind.' }
		},
		{
			name: 'value',
			type: 'unknown',
			text: { en: 'Value of this option.', es: 'Valor de esta opción.' }
		},
		{ name: 'label', type: 'string', text: { en: 'Visible label.', es: 'Etiqueta visible.' } },
		{
			name: 'description',
			type: 'string',
			text: { en: 'Second line, as a card.', es: 'Segunda línea, como tarjeta.' }
		},
		{ name: 'name', type: 'string', text: { en: 'Group name.', es: 'Nombre del grupo.' } },
		{
			name: 'option',
			type: 'boolean',
			default: 'false',
			text: { en: 'Bordered card without a description.', es: 'Tarjeta con borde sin descripción.' }
		},
		{
			name: 'busy',
			type: 'boolean',
			default: 'false',
			text: { en: 'Blocks it while saving.', es: 'Lo bloquea mientras guarda.' }
		},
		{
			name: 'required',
			type: 'boolean',
			default: 'false',
			text: { en: 'One must be chosen.', es: 'Hay que elegir uno.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables it.', es: 'Lo deshabilita.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		}
	]
} satisfies Doc<RadioProps>;
