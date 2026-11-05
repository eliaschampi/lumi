import type { CollapseProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Collapse } from '@lumi-ui/svelte';`,
	use: {
		en: ['Frequently asked questions', 'Secondary details that would clutter a page'],
		es: ['Preguntas frecuentes', 'Detalles secundarios que recargarían una página']
	},
	avoid: {
		en: ['Content people must always see', 'Switching between sections: use Tabs'],
		es: ['Contenido que siempre debe verse', 'Cambiar entre secciones: usa Tabs']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Show and hide', es: 'Mostrar y ocultar' },
			text: {
				en: 'The title is a real button, so it works with the keyboard. Use open to start expanded.',
				es: 'El título es un botón real, así que funciona con el teclado. Usa open para empezar expandido.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'title',
			type: 'string',
			default: "''",
			text: { en: 'Text of the trigger.', es: 'Texto del disparador.' }
		},
		{
			name: 'open',
			type: 'boolean',
			default: 'false',
			text: { en: 'Open state, bindable.', es: 'Estado abierto, enlazable con bind.' }
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
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables the trigger.', es: 'Deshabilita el disparador.' }
		},
		{
			name: 'ontoggle',
			type: '(open: boolean) => void',
			text: { en: 'Runs when it opens or closes.', es: 'Se ejecuta al abrir o cerrar.' }
		}
	]
} satisfies Doc<CollapseProps>;
