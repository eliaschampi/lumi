import type { ButtonProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Button } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Actions: save, delete, open a dialog',
			'Links that should look like an action, with href',
			'On and off states, with pressed'
		],
		es: [
			'Acciones: guardar, eliminar, abrir un diálogo',
			'Enlaces que deben verse como una acción, con href',
			'Estados de activado y desactivado, con pressed'
		]
	},
	avoid: {
		en: [
			'Links inside a sentence: use a plain <a>',
			'Several independent options: use ToggleGroup',
			'Choosing one of few options: use SegmentedControl'
		],
		es: [
			'Enlaces dentro de una frase: usa un <a> normal',
			'Varias opciones independientes: usa ToggleGroup',
			'Elegir entre pocas opciones: usa SegmentedControl'
		]
	},
	sections: [
		{
			id: 'variants',
			title: { en: 'Pick a style by importance', es: 'Elige el estilo según la importancia' },
			text: {
				en: 'The style tells people how much an action matters. Use filled for the one main action of a view and border for everyday actions, the most common choice in real apps. Flat suits quiet actions in toolbars, ghost suits Cancel and low-priority actions, and gradient is for rare moments that must stand out.',
				es: 'El estilo indica cuánto importa una acción. Usa filled para la única acción principal de una vista y border para las acciones cotidianas, la opción más común en aplicaciones reales. Flat va bien en acciones discretas de barras de herramientas, ghost en Cancelar y acciones de baja prioridad, y gradient en momentos excepcionales que deben destacar.'
			},
			demo: 'Variants'
		},
		{
			id: 'colors',
			title: { en: 'All colors in every style', es: 'Todos los colores en cada estilo' },
			text: {
				en: 'The color tells people what an action means, not how important it is. Keep primary as the default and use danger for anything destructive. The full meaning of each color is in Colors.',
				es: 'El color indica qué significa una acción, no cuánto importa. Deja primary por defecto y usa danger para todo lo destructivo. El significado completo de cada color está en Colores.'
			},
			demo: 'Colors'
		},
		{
			id: 'sizes',
			title: { en: 'Sizes', es: 'Tamaños' },
			text: {
				en: 'Medium is the default. Use sm inside tables, cards and toolbars, and lg or xl for a single call to action.',
				es: 'Medium es el valor por defecto. Usa sm en tablas, tarjetas y barras de herramientas, y lg o xl para una sola llamada a la acción.'
			},
			demo: 'Sizes'
		},
		{
			id: 'icons',
			title: { en: 'Icons', es: 'Iconos' },
			text: {
				en: 'Pass a Lucide icon with icon, and add iconAfter when it should follow the label. A button with no text needs aria-label, so screen readers can name it. Pair it with a Tooltip so everyone else can too.',
				es: 'Pasa un icono de Lucide con icon y añade iconAfter si debe ir después de la etiqueta. Un botón sin texto necesita aria-label para que los lectores de pantalla puedan nombrarlo. Combínalo con un Tooltip para que los demás también lo entiendan.'
			},
			demo: 'Icons'
		},
		{
			id: 'states',
			title: { en: 'Loading and disabled', es: 'Cargando y deshabilitado' },
			text: {
				en: 'Set loading while work is running: it shows a spinner and blocks repeat clicks, so an action cannot be sent twice. Press the first button to try it.',
				es: 'Activa loading mientras algo se ejecuta: muestra un spinner y bloquea los clics repetidos, así una acción no se envía dos veces. Pulsa el primer botón para probarlo.'
			},
			demo: 'States'
		},
		{
			id: 'links',
			title: { en: 'Links that look like buttons', es: 'Enlaces con aspecto de botón' },
			text: {
				en: 'With href, Button renders a real <a>. Search engines can follow it, and it opens in a new tab like any link. Use href to go somewhere and onclick to do something.',
				es: 'Con href, Button renderiza un <a> real. Los buscadores pueden seguirlo y se abre en otra pestaña como cualquier enlace. Usa href para ir a un sitio y onclick para hacer algo.'
			},
			demo: 'Links'
		},
		{
			id: 'toggle',
			title: { en: 'Toggle button', es: 'Botón interruptor' },
			text: {
				en: 'Pass pressed for a button that stays on or off. It also sets aria-pressed for assistive technology. Leave pressed out on normal actions.',
				es: 'Pasa pressed para un botón que queda activado o desactivado. También define aria-pressed para las tecnologías de asistencia. No uses pressed en acciones normales.'
			},
			demo: 'Toggle'
		},
		{
			id: 'disclosure',
			title: { en: 'Show and hide without JavaScript', es: 'Mostrar y ocultar sin JavaScript' },
			text: {
				en: 'Inside a native <details>, summary renders the toggle. It works before the page hydrates and reads as pressed while open.',
				es: 'Dentro de un <details> nativo, summary renderiza el control. Funciona antes de hidratar la página y se ve activo mientras está abierto.'
			},
			demo: 'Disclosure'
		},
		{
			id: 'confirm',
			title: { en: 'Recipe: confirm before deleting', es: 'Receta: confirmar antes de eliminar' },
			text: {
				en: 'A pattern used across real apps: a quiet danger button opens a Dialog, and only the confirmation is filled. The strongest style stays on the final decision.',
				es: 'Un patrón habitual en aplicaciones reales: un botón danger discreto abre un Dialog y solo la confirmación es filled. El estilo más fuerte queda en la decisión final.'
			},
			demo: 'ConfirmDelete'
		}
	],
	props: [
		{
			name: 'variant',
			type: `'filled' | 'gradient' | 'border' | 'flat' | 'ghost'`,
			default: `'filled'`,
			text: { en: 'Visual style.', es: 'Estilo visual.' }
		},
		{
			name: 'color',
			type: `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,
			default: `'primary'`,
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{
			name: 'size',
			type: `'sm' | 'md' | 'lg' | 'xl'`,
			default: `'md'`,
			text: { en: 'Size on the shared scale.', es: 'Tamaño en la escala compartida.' }
		},
		{
			name: 'icon',
			type: 'IconSource',
			text: {
				en: 'Icon component or registered name.',
				es: 'Componente de icono o nombre registrado.'
			}
		},
		{
			name: 'iconAfter',
			type: 'boolean',
			default: 'false',
			text: {
				en: 'Places the icon after the label.',
				es: 'Coloca el icono después de la etiqueta.'
			}
		},
		{
			name: 'loading',
			type: 'boolean',
			default: 'false',
			text: {
				en: 'Shows a spinner and blocks clicks.',
				es: 'Muestra un spinner y bloquea los clics.'
			}
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables the button.', es: 'Deshabilita el botón.' }
		},
		{
			name: 'pressed',
			type: 'boolean',
			text: {
				en: 'Toggle state, with aria-pressed.',
				es: 'Estado de interruptor, con aria-pressed.'
			}
		},
		{
			name: 'type',
			type: `'button' | 'submit' | 'reset'`,
			default: `'button'`,
			text: { en: 'Native button type.', es: 'Tipo nativo del botón.' }
		},
		{
			name: 'href',
			type: 'string',
			text: { en: 'Renders a real link.', es: 'Renderiza un enlace real.' }
		},
		{
			name: 'target',
			type: 'string',
			text: { en: 'Link target, with href.', es: 'Destino del enlace, con href.' }
		},
		{
			name: 'rel',
			type: 'string',
			text: { en: 'Link relationship, with href.', es: 'Relación del enlace, con href.' }
		},
		{
			name: 'download',
			type: 'string | boolean',
			text: {
				en: 'Downloads the linked file, with href.',
				es: 'Descarga el archivo enlazado, con href.'
			}
		},
		{
			name: 'summary',
			type: 'boolean',
			default: 'false',
			text: {
				en: 'Renders the <summary> of a parent <details>. Not with href.',
				es: 'Renderiza el <summary> de un <details> padre. No con href.'
			}
		}
	]
} satisfies Doc<ButtonProps>;
