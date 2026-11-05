import type { ChipProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Chip } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'The status of a record in a table',
			'Categories and tags',
			'Active filters that can be removed'
		],
		es: [
			'El estado de un registro en una tabla',
			'Categorías y etiquetas',
			'Filtros activos que se pueden quitar'
		]
	},
	avoid: {
		en: [
			'Main actions: use Button',
			'Long sentences: use Alert',
			'Choosing one option in a form: use SegmentedControl or Select'
		],
		es: [
			'Acciones principales: usa Button',
			'Frases largas: usa Alert',
			'Elegir una opción en un formulario: usa SegmentedControl o Select'
		]
	},
	sections: [
		{
			id: 'colors',
			title: { en: 'Colors', es: 'Colores' },
			text: {
				en: 'The same six roles as everywhere else. To keep statuses consistent, read the color from a single map, as explained in Colors.',
				es: 'Los mismos seis roles de siempre. Para mantener los estados coherentes, lee el color de un único mapa, como se explica en Colores.'
			},
			demo: 'Colors'
		},
		{
			id: 'sizes',
			title: { en: 'Sizes and icons', es: 'Tamaños e iconos' },
			text: {
				en: 'Use sm inside tables and lists, the most common choice in real apps, and medium elsewhere. An icon helps people scan a long column.',
				es: 'Usa sm en tablas y listas, la opción más común en aplicaciones reales, y medium en lo demás. Un icono ayuda a recorrer una columna larga.'
			},
			demo: 'Sizes'
		},
		{
			id: 'removable',
			title: { en: 'Removable filters', es: 'Filtros que se pueden quitar' },
			text: {
				en: 'Add closable and handle onclose. Give each one a closeLabel that names what it removes, so screen readers do not hear the same word several times.',
				es: 'Añade closable y gestiona onclose. Da a cada uno un closeLabel que nombre lo que quita, para que los lectores de pantalla no repitan la misma palabra.'
			},
			demo: 'Removable'
		},
		{
			id: 'clickable',
			title: { en: 'Clickable chips', es: 'Chips que se pueden pulsar' },
			text: {
				en: 'With onclick, a chip becomes a real button you can reach with the keyboard, which suits quick category filters.',
				es: 'Con onclick, un chip se convierte en un botón real al que se llega con el teclado, ideal para filtros rápidos por categoría.'
			},
			demo: 'Clickable'
		}
	],
	props: [
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{ name: 'size', type: "'sm' | 'md'", default: "'md'", text: { en: 'Size.', es: 'Tamaño.' } },
		{ name: 'icon', type: 'IconSource', text: { en: 'Leading icon.', es: 'Icono inicial.' } },
		{
			name: 'closable',
			type: 'boolean',
			default: 'false',
			text: { en: 'Shows a remove button.', es: 'Muestra un botón para quitar.' }
		},
		{
			name: 'closeLabel',
			type: 'string',
			default: 'locale',
			text: { en: 'Accessible name of that button.', es: 'Nombre accesible de ese botón.' }
		},
		{
			name: 'onclose',
			type: '(event: MouseEvent) => void',
			text: { en: 'Runs when the chip is removed.', es: 'Se ejecuta al quitar el chip.' }
		},
		{
			name: 'onclick',
			type: '(event: MouseEvent) => void',
			text: { en: 'Makes the chip a button.', es: 'Convierte el chip en un botón.' }
		}
	]
} satisfies Doc<ChipProps>;
