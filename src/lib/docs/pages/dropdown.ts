import type { DropdownItemProps, DropdownProps } from '@lumi-ui/svelte';
import type { Doc, DocProp } from '../types';
const ITEM_PROPS: DocProp<DropdownItemProps>[] = [
	{ name: 'icon', type: 'IconSource', text: { en: 'Leading icon.', es: 'Icono inicial.' } },
	{ name: 'href', type: 'string', text: { en: 'Renders a link.', es: 'Renderiza un enlace.' } },
	{
		name: 'color',
		type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
		text: { en: 'Semantic color.', es: 'Color semántico.' }
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		text: { en: 'Disables the item.', es: 'Deshabilita el item.' }
	},
	{
		name: 'selected',
		type: 'boolean',
		text: { en: 'Checked choice in a set.', es: 'Opción marcada de un conjunto.' }
	},
	{
		name: 'submit',
		type: 'boolean',
		default: 'false',
		text: { en: 'Submits the surrounding form.', es: 'Envía el formulario que lo contiene.' }
	},
	{
		name: 'onclick',
		type: '(event: MouseEvent) => void',
		text: { en: 'Runs when pressed.', es: 'Se ejecuta al pulsar.' }
	}
];

export default {
	importLine: `import { Dropdown, DropdownItem } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Secondary actions that do not fit in a toolbar',
			'The actions of a table row',
			'Account menus'
		],
		es: [
			'Acciones secundarias que no caben en una barra',
			'Las acciones de una fila de tabla',
			'Menús de cuenta'
		]
	},
	avoid: {
		en: [
			'Choosing a form value: use Select',
			'A right-click menu: use Context',
			'Navigating a whole site: use Sidebar'
		],
		es: [
			'Elegir un valor de formulario: usa Select',
			'Un menú de clic derecho: usa Context',
			'Navegar por todo un sitio: usa Sidebar'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'A menu on a button', es: 'Un menú sobre un botón' },
			text: {
				en: 'The trigger snippet gives you the props to spread on your own Button, and the items go inside. Arrow keys, Home, End and Escape work by themselves. Use the danger color for destructive items.',
				es: 'El snippet trigger te da las props que debes pasar a tu propio Button, y los items van dentro. Las flechas, Home, End y Escape funcionan solos. Usa el color danger en los items destructivos.'
			},
			demo: 'Basic'
		},
		{
			id: 'row',
			title: { en: 'Recipe: row actions', es: 'Receta: acciones de una fila' },
			text: {
				en: 'An icon button in a row needs aria-label. Use placement bottom-end so the menu grows into the table. Items can be links with href, and disabled ones are skipped by the keyboard.',
				es: 'Un botón de icono en una fila necesita aria-label. Usa placement bottom-end para que el menú crezca hacia la tabla. Los items pueden ser enlaces con href, y los deshabilitados se saltan con el teclado.'
			},
			demo: 'RowActions'
		},
		{
			id: 'content',
			title: { en: 'Non-button triggers', es: 'Disparadores que no son botones' },
			text: {
				en: 'For an avatar or other plain content, use triggerContent and put the items in content. Lumi supplies the button, so give it an aria-label.',
				es: 'Para un avatar u otro contenido simple, usa triggerContent y pon los items en content. Lumi aporta el botón, así que dale un aria-label.'
			},
			demo: 'Content'
		},
		{
			id: 'choice',
			title: { en: 'One choice from a menu', es: 'Una opción desde un menú' },
			text: {
				en: 'Selected marks the current option and announces it as checked.',
				es: 'Selected marca la opción actual y la anuncia como marcada.'
			},
			demo: 'Choice'
		}
	],
	props: [
		{
			name: 'open',
			type: 'boolean',
			default: 'false',
			text: { en: 'Visible state, bindable.', es: 'Estado visible, enlazable con bind.' }
		},
		{
			name: 'placement',
			type: 'FloatingPlacement',
			default: "'bottom-start'",
			text: {
				en: 'Preferred side; it flips when space runs out.',
				es: 'Lado preferido; cambia si falta espacio.'
			}
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg'",
			default: "'md'",
			text: { en: 'Menu size.', es: 'Tamaño del menú.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables the trigger.', es: 'Deshabilita el disparador.' }
		},
		{
			name: 'trigger',
			type: 'Snippet<[DropdownTriggerProps]>',
			text: { en: 'Your own interactive trigger.', es: 'Tu propio disparador interactivo.' }
		},
		{
			name: 'triggerContent',
			type: 'Snippet',
			text: {
				en: 'Plain content for the built-in button.',
				es: 'Contenido simple para el botón integrado.'
			}
		},
		{
			name: 'content',
			type: 'Snippet',
			text: { en: 'Menu items, with triggerContent.', es: 'Items del menú, con triggerContent.' }
		}
	],
	moreProps: [{ title: 'DropdownItem', props: ITEM_PROPS }]
} satisfies Doc<DropdownProps>;
