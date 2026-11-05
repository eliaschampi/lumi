import type { ProgressProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Progress } from '@lumi-ui/svelte';`,
	use: {
		en: ['Work with a known percentage', 'Uploads, imports and long tasks'],
		es: ['Trabajo con porcentaje conocido', 'Subidas, importaciones y tareas largas']
	},
	avoid: {
		en: ['Brief waits: use Loading'],
		es: ['Esperas breves: usa Loading']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Value, style and unknown time', es: 'Valor, estilo y tiempo desconocido' },
			text: {
				en: 'Pass value from 0 to 100. Use indeterminate when the total is unknown, and give it a name with label or aria-label.',
				es: 'Pasa value de 0 a 100. Usa indeterminate cuando no se conozca el total, y nómbralo con label o aria-label.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'value',
			type: 'number',
			default: '0',
			text: { en: 'Current value.', es: 'Valor actual.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{
			name: 'size',
			type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			text: { en: 'Size.', es: 'Tamaño.' }
		},
		{ name: 'label', type: 'string', text: { en: 'Visible name.', es: 'Nombre visible.' } },
		{
			name: 'showLabel',
			type: 'boolean',
			default: 'false',
			text: { en: 'Shows the label.', es: 'Muestra la etiqueta.' }
		},
		{
			name: 'striped',
			type: 'boolean',
			default: 'false',
			text: { en: 'Adds stripes.', es: 'Añade rayas.' }
		},
		{
			name: 'animated',
			type: 'boolean',
			default: 'false',
			text: { en: 'Animates the stripes.', es: 'Anima las rayas.' }
		},
		{
			name: 'indeterminate',
			type: 'boolean',
			default: 'false',
			text: { en: 'Unknown progress.', es: 'Progreso desconocido.' }
		},
		{
			name: 'oncomplete',
			type: '() => void',
			text: { en: 'Runs when it finishes.', es: 'Se ejecuta al terminar.' }
		}
	]
} satisfies Doc<ProgressProps>;
