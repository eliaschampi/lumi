import type { ListItemProps, ListProps } from '@lumi-ui/svelte';
import type { Doc, DocProp } from '../types';
const ITEM_PROPS: DocProp<ListItemProps>[] = [
	{ name: 'title', type: 'ListText', text: { en: 'Main line.', es: 'Línea principal.' } },
	{ name: 'description', type: 'ListText', text: { en: 'Second line.', es: 'Segunda línea.' } },
	{ name: 'icon', type: 'IconSource', text: { en: 'Leading icon.', es: 'Icono inicial.' } },
	{
		name: 'leading',
		type: 'Snippet',
		text: { en: 'Custom start, such as an avatar.', es: 'Inicio propio, como un avatar.' }
	},
	{
		name: 'trailing',
		type: 'Snippet',
		text: { en: 'Content at the end.', es: 'Contenido al final.' }
	},
	{ name: 'href', type: 'string', text: { en: 'Renders a link.', es: 'Renderiza un enlace.' } },
	{
		name: 'onclick',
		type: '(event: MouseEvent) => void',
		text: { en: 'Renders a button.', es: 'Renderiza un botón.' }
	},
	{
		name: 'selected',
		type: 'boolean',
		default: 'false',
		text: { en: 'Marks the current row.', es: 'Marca la fila actual.' }
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		text: { en: 'Disables the row.', es: 'Deshabilita la fila.' }
	}
];

export default {
	importLine: `import { List, ListItem } from '@lumi-ui/svelte';`,
	use: {
		en: ['Short rows with one or two values', 'Menus of options in a panel'],
		es: ['Filas cortas con uno o dos valores', 'Menús de opciones en un panel']
	},
	avoid: {
		en: ['Several columns to compare: use Table', 'Grids of items: use Card'],
		es: ['Varias columnas para comparar: usa Table', 'Cuadrículas de elementos: usa Card']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Title and description', es: 'Título y descripción' },
			text: {
				en: 'ListItem handles the layout and the truncation of long text.',
				es: 'ListItem resuelve la disposición y el recorte de textos largos.'
			},
			demo: 'Basic'
		},
		{
			id: 'trailing',
			title: { en: 'Something at the end', es: 'Algo al final' },
			text: {
				en: 'The trailing snippet fits a status or an action. There is also leading, for an avatar.',
				es: 'El snippet trailing admite un estado o una acción. También existe leading, para un avatar.'
			},
			demo: 'Trailing'
		},
		{
			id: 'selectable',
			title: { en: 'Selectable rows', es: 'Filas seleccionables' },
			text: {
				en: 'With onclick or href, a row becomes a real button or link. Selected marks the current one.',
				es: 'Con onclick o href, una fila se vuelve un botón o enlace real. Selected marca la actual.'
			},
			demo: 'Selectable'
		}
	],
	props: [
		{
			name: 'size',
			type: "'sm' | 'md'",
			default: "'md'",
			text: { en: 'Size of the rows.', es: 'Tamaño de las filas.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Accent of selected rows.', es: 'Acento de las filas seleccionadas.' }
		},
		{
			name: 'maxHeight',
			type: 'ListMaxHeight',
			text: { en: 'Caps the height and scrolls.', es: 'Limita la altura y desplaza.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables all rows.', es: 'Deshabilita todas las filas.' }
		}
	],
	moreProps: [{ title: 'ListItem', props: ITEM_PROPS }]
} satisfies Doc<ListProps>;
