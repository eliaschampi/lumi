import type { Doc } from '../types';

export default {
	sections: [
		{
			id: 'roles',
			title: { en: 'Six roles, one meaning each', es: 'Seis roles, un significado cada uno' },
			text: {
				en: 'Lumi names colors by what they mean, not how they look. You write danger, never red, so a whole product can change its palette without touching a single component. All of them adapt to light and dark automatically: try the theme switch at the top.',
				es: 'Lumi nombra los colores por lo que significan, no por cómo se ven. Escribes danger, nunca red, así un producto entero puede cambiar de paleta sin tocar un solo componente. Todos se adaptan solos a claro y oscuro: prueba el selector de tema de arriba.'
			},
			demo: 'Roles',
			showCode: false
		},
		{
			id: 'everywhere',
			title: { en: 'One prop everywhere', es: 'La misma prop en todas partes' },
			text: {
				en: 'Every component that takes a color uses the same color prop with the same six values. Learn it once and it works on Button, Chip, Alert, IconBadge and the rest.',
				es: 'Todos los componentes con color usan la misma prop color con los mismos seis valores. Apréndela una vez y funciona en Button, Chip, Alert, IconBadge y los demás.'
			},
			demo: 'Everywhere'
		},
		{
			id: 'status',
			title: { en: 'Map your statuses to colors', es: 'Traduce tus estados a colores' },
			text: {
				en: 'Lumi knows nothing about your business. Keep one map from each status to a label and a color, and read it wherever you render that status. This is how real apps stay consistent: one change updates every screen.',
				es: 'Lumi no sabe nada de tu negocio. Mantén un solo mapa de cada estado a su etiqueta y color, y léelo donde muestres ese estado. Así se mantienen coherentes las aplicaciones reales: un cambio actualiza todas las pantallas.'
			},
			demo: 'StatusMap'
		},
		{
			id: 'tokens',
			title: { en: 'Four tokens per role', es: 'Cuatro tokens por rol' },
			text: {
				en: 'Each role comes in four tokens. --lumi-color-{role} is the accent for text, borders and icons. Use -solid for strong fills, and always put -foreground on top of it, because that pair is what guarantees readable contrast. Use -bg for soft tinted backgrounds.',
				es: 'Cada rol trae cuatro tokens. --lumi-color-{role} es el acento para texto, bordes e iconos. Usa -solid para rellenos fuertes y pon siempre -foreground encima, porque esa pareja es la que garantiza un contraste legible. Usa -bg para fondos suaves.'
			},
			demo: 'CustomStyles'
		},
		{
			id: 'neutrals',
			title: { en: 'Text and surfaces', es: 'Texto y superficies' },
			text: {
				en: 'Neutral text and surfaces carry everything with no meaning of its own. Use these utilities before writing any CSS.',
				es: 'El texto y las superficies neutras cubren todo lo que no tiene significado propio. Usa estas utilidades antes de escribir CSS.'
			},
			demo: 'Neutrals',
			showCode: false
		},
		{
			id: 'brand',
			title: { en: 'Use your own brand', es: 'Usa tu propia marca' },
			text: {
				en: 'Override only the seeds. Lumi derives everything else, including dark mode and tinted surfaces. Leave out any seed you do not want to change, and never set --lumi-color-* directly.',
				es: 'Sobrescribe solo las semillas. Lumi deriva todo lo demás, incluidos el modo oscuro y las superficies tintadas. Omite las semillas que no quieras cambiar y nunca definas --lumi-color-* directamente.'
			},
			snippet: {
				label: 'app.css',
				code: `:root {
	--lumi-brand-primary: oklch(52% 0.18 262);
	--lumi-brand-secondary: oklch(68% 0.13 195);

	--lumi-status-success: oklch(52% 0.14 150);
	--lumi-status-warning: oklch(77% 0.15 84);
	--lumi-status-danger: oklch(52% 0.195 30);
	--lumi-status-info: oklch(52% 0.16 295);
}`
			}
		}
	]
} satisfies Doc;
