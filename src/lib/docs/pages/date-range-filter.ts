import type { DateRangeFilterProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { DateRangeFilter } from '@lumi-ui/svelte';`,
	use: {
		en: ['Filtering reports and lists by date'],
		es: ['Filtrar informes y listados por fecha']
	},
	avoid: {
		en: ['One single date: use Input with type date'],
		es: ['Una sola fecha: usa Input con type date']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'From and to', es: 'Desde y hasta' },
			text: {
				en: 'Bind both dates to your state. They use native date fields, so they work well on phones.',
				es: 'Enlaza las dos fechas a tu estado. Usan campos de fecha nativos, así funcionan bien en móviles.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'fromValue',
			type: 'string',
			default: "''",
			text: { en: 'Start date, bindable.', es: 'Fecha inicial, enlazable con bind.' }
		},
		{
			name: 'toValue',
			type: 'string',
			default: "''",
			text: { en: 'End date, bindable.', es: 'Fecha final, enlazable con bind.' }
		},
		{ name: 'fromLabel', type: 'string', text: { en: 'Start label.', es: 'Etiqueta inicial.' } },
		{ name: 'toLabel', type: 'string', text: { en: 'End label.', es: 'Etiqueta final.' } },
		{
			name: 'applyLabel',
			type: 'string',
			text: { en: 'Text of the apply button.', es: 'Texto del botón de aplicar.' }
		},
		{
			name: 'compact',
			type: 'boolean',
			default: 'false',
			text: { en: 'Tighter layout.', es: 'Disposición más compacta.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables it.', es: 'Lo deshabilita.' }
		},
		{
			name: 'onapply',
			type: '() => void',
			text: { en: 'Runs when applying.', es: 'Se ejecuta al aplicar.' }
		}
	]
} satisfies Doc<DateRangeFilterProps>;
