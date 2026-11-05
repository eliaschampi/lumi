import type { Doc } from '../types';

export default {
	use: {
		en: [
			'Utility classes for size, weight and tone, before writing any CSS',
			'The system font, which adds no weight and always renders at once',
			'Title and PageHeader for headings, so the page keeps its structure'
		],
		es: [
			'Clases de utilidad para tamaño, peso y tono, antes de escribir CSS',
			'La fuente del sistema, que no añade peso y siempre aparece al instante',
			'Title y PageHeader para encabezados, así la página conserva su estructura'
		]
	},
	avoid: {
		en: [
			'Sizes in pixels: every size has a class or a token',
			'Heading tags chosen by their look: use the size of Title instead',
			'Font services that add a third-party connection to every page'
		],
		es: [
			'Tamaños en píxeles: cada tamaño tiene su clase o token',
			'Etiquetas de encabezado elegidas por su aspecto: usa el tamaño de Title',
			'Servicios de fuentes que añaden una conexión a terceros en cada página'
		]
	},
	sections: [
		{
			id: 'scale',
			title: { en: 'Size scale', es: 'Escala de tamaños' },
			text: {
				en: 'Text is base size by default. Reach for a class only to step up or down, so a whole product keeps the same rhythm. All sizes are in rem, so they follow the reading size set in the browser.',
				es: 'El texto tiene tamaño base por defecto. Usa una clase solo para subir o bajar, así todo el producto conserva el mismo ritmo. Los tamaños van en rem, así que siguen el tamaño de lectura definido en el navegador.'
			},
			demo: 'Scale'
		},
		{
			id: 'weights',
			title: { en: 'Weights', es: 'Pesos' },
			text: {
				en: 'Regular is the default. Medium and semibold cover almost everything else. A label at medium reads better than a bigger size, because it adds hierarchy without taking more room.',
				es: 'Regular es el valor por defecto. Medium y semibold cubren casi todo lo demás. Una etiqueta en medium se lee mejor que un tamaño mayor, porque añade jerarquía sin ocupar más espacio.'
			},
			demo: 'Weights'
		},
		{
			id: 'tones',
			title: { en: 'Text color', es: 'Color del texto' },
			text: {
				en: 'Use lumi-text--muted for secondary text and a role class for meaning. These classes adapt to light and dark on their own.',
				es: 'Usa lumi-text--muted para el texto secundario y una clase de rol para dar significado. Estas clases se adaptan solas a claro y oscuro.'
			},
			demo: 'Tones'
		},
		{
			id: 'font',
			title: { en: 'Which font Lumi uses', es: 'Qué fuente usa Lumi' },
			text: {
				en: 'The token --lumi-font-family-sans asks for Inter and then the system font, but Lumi does not load Inter: a font file would add about 47 KB to every first visit. If your app loads nothing, people see the font of their system, which is fast and free, though it varies between devices.',
				es: 'El token --lumi-font-family-sans pide Inter y luego la fuente del sistema, pero Lumi no carga Inter: un fichero de fuente añadiría unos 47 KB a cada primera visita. Si tu aplicación no carga nada, cada persona ve la fuente de su sistema, que es rápida y no cuesta nada, aunque varía entre dispositivos.'
			},
			snippet: {
				label: 'Default',
				code: `--lumi-font-family-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif;`
			}
		},
		{
			id: 'load-inter',
			title: { en: 'Load Inter in your app', es: 'Carga Inter en tu aplicación' },
			text: {
				en: 'When your brand needs it, serve the file from your own app and not from a font service: the bytes are the same, but you avoid a third-party connection and get long caching. A variable file covers every weight, and the Latin subset covers English and Spanish. Keep font-display swap so text never stays hidden. No Lumi token changes, because Inter is already first in the list.',
				es: 'Cuando tu marca lo necesite, sirve el fichero desde tu propia aplicación y no desde un servicio de fuentes: los bytes son los mismos, pero evitas una conexión a terceros y obtienes caché larga. Un fichero variable cubre todos los pesos, y el subconjunto latino cubre inglés y español. Mantén font-display swap para que el texto nunca quede oculto. No cambia ningún token de Lumi, porque Inter ya es la primera de la lista.'
			},
			snippet: {
				label: 'app.css',
				code: `@font-face {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 100 900;
	font-display: swap;
	src: url('./fonts/inter-latin-wght-normal.woff2') format('woff2');
}`
			}
		},
		{
			id: 'own-font',
			title: { en: 'Use another font', es: 'Usa otra fuente' },
			text: {
				en: 'Load it the same way and override only the token. Keep the system fonts after yours, so text still appears if the file fails.',
				es: 'Cárgala del mismo modo y sobrescribe solo el token. Deja las fuentes del sistema después de la tuya, para que el texto aparezca aunque falle el fichero.'
			},
			snippet: {
				label: 'app.css',
				code: `:root {
	--lumi-font-family-sans: 'Your Font', system-ui, sans-serif;
}`
			}
		}
	]
} satisfies Doc;
