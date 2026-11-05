import type { Doc } from '../types';

export default {
	importLine: `import { PageSidebar } from '@lumi-ui/svelte';`,
	use: {
		en: [
			'Filters beside a list',
			'They stay beside the content on desktop and open as a panel on a phone'
		],
		es: [
			'Filtros junto a una lista',
			'Quedan junto al contenido en escritorio y se abren como panel en un móvil'
		]
	},
	avoid: {
		en: ['The main navigation: use Sidebar'],
		es: ['La navegación principal: usa Sidebar']
	},
	sections: [
		{
			id: 'filters',
			title: { en: 'Filters beside content', es: 'Filtros junto al contenido' },
			text: {
				en: 'Use lumi-layout--two-columns with lumi-page-sidebar-layout, and open the phone panel with bind:mobileOpen. It needs a whole page, so it is shown as code.',
				es: 'Usa lumi-layout--two-columns con lumi-page-sidebar-layout, y abre el panel móvil con bind:mobileOpen. Necesita una página completa, así que se muestra como código.'
			},
			demo: 'Filters',
			preview: false
		}
	]
} satisfies Doc;
