import type { TagOptionProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { TagOption } from '@lumi-ui/svelte';`,
	use: {
		en: ['Visible choices such as sizes or variants'],
		es: ['Opciones visibles como tallas o variantes']
	},
	avoid: {
		en: ['Long lists: use Select', 'Equal segments: use SegmentedControl'],
		es: ['Listas largas: usa Select', 'Segmentos iguales: usa SegmentedControl']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Choosing an option', es: 'Elegir una opción' },
			text: {
				en: 'Keep the choice in your own state and mark it with selected.',
				es: 'Guarda la elección en tu propio estado y márcala con selected.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{ name: 'label', type: 'string', text: { en: 'Text.', es: 'Texto.' } },
		{
			name: 'selected',
			type: 'boolean',
			default: 'false',
			text: { en: 'Marks it as chosen.', es: 'La marca como elegida.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables it.', es: 'La deshabilita.' }
		},
		{
			name: 'onclick',
			type: '() => void',
			text: { en: 'Runs when pressed.', es: 'Se ejecuta al pulsar.' }
		}
	]
} satisfies Doc<TagOptionProps>;
