import type { TableProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Table } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Records people compare, sort through or act on',
			'Lists with search, selection or pagination',
			'Anything with several columns'
		],
		es: [
			'Registros que se comparan, revisan o sobre los que se actúa',
			'Listados con búsqueda, selección o paginación',
			'Cualquier cosa con varias columnas'
		]
	},
	avoid: {
		en: [
			'Short lists with one or two values: use List',
			'The details of one record: use InfoItem',
			'Layout: tables are for data only'
		],
		es: [
			'Listas cortas con uno o dos valores: usa List',
			'Los detalles de un registro: usa InfoItem',
			'Maquetación: las tablas son solo para datos'
		]
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Define columns with two snippets', es: 'Define las columnas con dos snippets' },
			text: {
				en: 'Pass your rows in data. The thead snippet draws the headers and row draws the cells of each record, so any cell can hold a component. Row is typed from your data. Give the table an aria-label.',
				es: 'Pasa tus filas en data. El snippet thead dibuja las cabeceras y row las celdas de cada registro, así que cualquier celda admite un componente. Row toma el tipo de tus datos. Dale a la tabla un aria-label.'
			},
			demo: 'Basic'
		},
		{
			id: 'search',
			title: { en: 'Search and pagination', es: 'Búsqueda y paginación' },
			text: {
				en: 'Search and pagination work on the data you pass. For server data, use paginationMode with onpagechange and onsearch, and pass only the current page.',
				es: 'Search y pagination funcionan sobre los datos que pasas. Con datos del servidor, usa paginationMode con onpagechange y onsearch, y pasa solo la página actual.'
			},
			demo: 'SearchPages'
		},
		{
			id: 'selection',
			title: { en: 'Selecting rows', es: 'Seleccionar filas' },
			text: {
				en: 'Selectable adds a checkbox to each row and bind:selected keeps the chosen records.',
				es: 'Selectable añade una casilla a cada fila y bind:selected guarda los registros elegidos.'
			},
			demo: 'Selection'
		},
		{
			id: 'states',
			title: { en: 'Loading and empty', es: 'Cargando y vacía' },
			text: {
				en: 'Loading shows skeleton rows with the same columns, so the layout does not jump. NoDataText sets the empty message. Switch between them here.',
				es: 'Loading muestra filas skeleton con las mismas columnas, así la disposición no salta. NoDataText define el mensaje vacío. Alterna entre ambos aquí.'
			},
			demo: 'States'
		}
	],
	props: [
		{ name: 'data', type: 'TRow[]', default: '[]', text: { en: 'The rows.', es: 'Las filas.' } },
		{ name: 'thead', type: 'Snippet', text: { en: 'Header cells.', es: 'Celdas de cabecera.' } },
		{
			name: 'row',
			type: 'Snippet<[{ row, index }]>',
			text: { en: 'Cells of each row.', es: 'Celdas de cada fila.' }
		},
		{
			name: 'rowKey',
			type: '(row: TRow) => string | number',
			text: {
				en: 'Identity when rows lack id or key.',
				es: 'Identidad si las filas no tienen id o key.'
			}
		},
		{
			name: 'hover',
			type: 'boolean',
			default: 'false',
			text: { en: 'Highlights the row under the pointer.', es: 'Resalta la fila bajo el puntero.' }
		},
		{
			name: 'stripe',
			type: 'boolean',
			default: 'false',
			text: { en: 'Alternates row backgrounds.', es: 'Alterna el fondo de las filas.' }
		},
		{
			name: 'compact',
			type: 'boolean',
			default: 'false',
			text: { en: 'Tighter padding.', es: 'Relleno más ajustado.' }
		},
		{
			name: 'search',
			type: 'boolean',
			default: 'false',
			text: { en: 'Search field in the header.', es: 'Campo de búsqueda en la cabecera.' }
		},
		{
			name: 'pagination',
			type: 'boolean',
			default: 'false',
			text: { en: 'Pagination footer.', es: 'Pie con paginación.' }
		},
		{
			name: 'itemsPerPage',
			type: 'number',
			text: { en: 'Rows per page.', es: 'Filas por página.' }
		},
		{
			name: 'paginationMode',
			type: "'client' | 'server'",
			default: "'client'",
			text: { en: 'Who slices the data.', es: 'Quién divide los datos.' }
		},
		{
			name: 'selectable',
			type: 'boolean',
			default: 'false',
			text: { en: 'Row checkboxes.', es: 'Casillas en las filas.' }
		},
		{
			name: 'selected',
			type: 'TRow[]',
			text: { en: 'Selected rows, bindable.', es: 'Filas seleccionadas, enlazable con bind.' }
		},
		{
			name: 'loading',
			type: 'boolean',
			default: 'false',
			text: { en: 'Skeleton rows.', es: 'Filas skeleton.' }
		},
		{
			name: 'noDataText',
			type: 'string',
			default: 'locale',
			text: { en: 'Text with no rows.', es: 'Texto sin filas.' }
		},
		{
			name: 'onrowclick',
			type: '(row: TRow, index: number) => void',
			text: { en: 'Runs when a row is pressed.', es: 'Se ejecuta al pulsar una fila.' }
		}
	]
} satisfies Doc<TableProps>;
