import type { PaginationProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Pagination } from '@lumi-ui/svelte';`,
	use: {
		en: ['Long lists outside a Table', 'Public pages that search engines should crawl'],
		es: ['Listas largas fuera de una Table', 'Páginas públicas que los buscadores deben rastrear']
	},
	avoid: {
		en: ['Tables: use the pagination prop of Table', 'Short lists that fit on one page'],
		es: ['Tablas: usa la prop pagination de Table', 'Listas cortas que caben en una página']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Basic use', es: 'Uso básico' },
			text: {
				en: 'Keep the current page with bind:page. In narrow containers the numbers collapse to a 2 / 5 status, and the step buttons show only their icons when space runs out.',
				es: 'Guarda la página actual con bind:page. En contenedores estrechos los números se reducen a un estado 2 / 5, y los botones de paso muestran solo sus iconos cuando falta espacio.'
			},
			demo: 'Basic'
		},
		{
			id: 'compact',
			title: { en: 'Compact', es: 'Compacta' },
			text: {
				en: 'Compact always shows the short status, which suits side panels.',
				es: 'Compact muestra siempre el estado corto, ideal para paneles laterales.'
			},
			demo: 'Compact'
		},
		{
			id: 'links',
			title: { en: 'Real links', es: 'Enlaces reales' },
			text: {
				en: 'With href, every page is a real link that search engines can follow.',
				es: 'Con href, cada página es un enlace real que los buscadores pueden seguir.'
			},
			demo: 'Links'
		}
	],
	props: [
		{
			name: 'page',
			type: 'number',
			default: '1',
			text: { en: 'Current page, bindable.', es: 'Página actual, enlazable con bind.' }
		},
		{ name: 'pages', type: 'number', text: { en: 'Total pages.', es: 'Total de páginas.' } },
		{
			name: 'siblings',
			type: 'number',
			default: '1',
			text: {
				en: 'Numbers shown around the current page.',
				es: 'Números visibles alrededor de la página actual.'
			}
		},
		{
			name: 'compact',
			type: 'boolean',
			default: 'false',
			text: { en: 'Always shows the short status.', es: 'Muestra siempre el estado corto.' }
		},
		{ name: 'size', type: "'sm' | 'md'", default: "'sm'", text: { en: 'Size.', es: 'Tamaño.' } },
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables it.', es: 'La deshabilita.' }
		},
		{
			name: 'href',
			type: '(page: number) => string',
			text: { en: 'Builds a real link for each page.', es: 'Crea un enlace real para cada página.' }
		},
		{
			name: 'onpagechange',
			type: '(page: number) => void',
			text: { en: 'Runs when the page changes.', es: 'Se ejecuta al cambiar de página.' }
		}
	]
} satisfies Doc<PaginationProps>;
