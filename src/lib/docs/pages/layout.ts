import type { Doc } from '../types';

export default {
	use: {
		en: [
			'lumi-stack: one thing under another, the most used class in real apps',
			'lumi-flex: things in a row, with space between them',
			'lumi-grid: columns that adapt to the screen'
		],
		es: [
			'lumi-stack: una cosa bajo otra, la clase más usada en aplicaciones reales',
			'lumi-flex: cosas en fila, con espacio entre ellas',
			'lumi-grid: columnas que se adaptan a la pantalla'
		]
	},
	avoid: {
		en: [
			'Margins between components: let the parent set the gap',
			'Fixed pixel widths: they break on phones',
			'Inline styles: every spacing has a class or a token'
		],
		es: [
			'Márgenes entre componentes: deja que el padre defina el espacio',
			'Anchos fijos en píxeles: se rompen en móviles',
			'Estilos en línea: cada espacio tiene su clase o token'
		]
	},
	sections: [
		{
			id: 'stack',
			title: { en: 'Stack: one under another', es: 'Stack: una cosa bajo otra' },
			text: {
				en: 'Use lumi-stack with a size from 2xs to xl. Sizes also set the rhythm of a page: sm or md inside a block, lg or xl between sections.',
				es: 'Usa lumi-stack con un tamaño de 2xs a xl. Los tamaños también marcan el ritmo de una página: sm o md dentro de un bloque, lg o xl entre secciones.'
			},
			demo: 'Stack'
		},
		{
			id: 'flex',
			title: { en: 'Flex: the toolbar pattern', es: 'Flex: el patrón de barra de herramientas' },
			text: {
				en: 'Title on one side and actions on the other is the most repeated row in any app. Combine lumi-flex with lumi-justify--between, center the items, and add lumi-flex--wrap so it never overflows on a phone.',
				es: 'Título a un lado y acciones al otro es la fila más repetida de cualquier aplicación. Combina lumi-flex con lumi-justify--between, centra los elementos y añade lumi-flex--wrap para que nunca se desborde en un móvil.'
			},
			demo: 'Toolbar'
		},
		{
			id: 'grid',
			title: {
				en: 'Grid: cards that fit the screen',
				es: 'Grid: tarjetas que se ajustan a la pantalla'
			},
			text: {
				en: 'lumi-grid--cards fits as many cards as the width allows, with no breakpoints to manage. Resize the window to see it.',
				es: 'lumi-grid--cards coloca tantas tarjetas como permita el ancho, sin puntos de corte que gestionar. Cambia el tamaño de la ventana para verlo.'
			},
			demo: 'Cards'
		},
		{
			id: 'columns',
			title: { en: 'Fixed columns on large screens', es: 'Columnas fijas en pantallas grandes' },
			text: {
				en: 'Use lumi-grid--columns-2-lg, 3-lg or 4-lg for fields that sit side by side on desktop and stack on a phone.',
				es: 'Usa lumi-grid--columns-2-lg, 3-lg o 4-lg para campos que van en paralelo en escritorio y se apilan en un móvil.'
			},
			demo: 'Columns'
		},
		{
			id: 'truncate',
			title: { en: 'Long text that must not overflow', es: 'Texto largo que no debe desbordarse' },
			text: {
				en: 'In a flex row, text refuses to shrink until you add lumi-min-width--0. Pair it with lumi-text-ellipsis to cut long names.',
				es: 'En una fila flex, el texto no se encoge hasta que añades lumi-min-width--0. Combínalo con lumi-text-ellipsis para recortar nombres largos.'
			},
			demo: 'Truncate'
		}
	]
} satisfies Doc;
