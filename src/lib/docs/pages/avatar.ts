import type { AvatarProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { Avatar } from '@lumi-ui/svelte';`,
	use: {
		en: ['Showing who a record belongs to', 'Account menus and message lists'],
		es: ['Mostrar a quién pertenece un registro', 'Menús de cuenta y listas de mensajes']
	},
	avoid: {
		en: ['Pictures of things: use Image', 'An icon in a soft tile: use IconBadge'],
		es: ['Imágenes de cosas: usa Image', 'Un icono en un fondo suave: usa IconBadge']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Initials from a name', es: 'Iniciales desde un nombre' },
			text: {
				en: 'Pass name and Lumi builds the initials, which also work as the fallback when a photo in src fails to load.',
				es: 'Pasa name y Lumi construye las iniciales, que también sirven de respaldo cuando falla la foto de src.'
			},
			demo: 'Basic'
		},
		{
			id: 'sizes',
			title: { en: 'Sizes', es: 'Tamaños' },
			text: {
				en: 'Sizes follow the shared scale, so an avatar lines up with buttons and text.',
				es: 'Los tamaños siguen la escala compartida, así un avatar se alinea con botones y texto.'
			},
			demo: 'Sizes'
		}
	],
	props: [
		{
			name: 'name',
			type: 'string',
			text: {
				en: 'Name used for initials and alt text.',
				es: 'Nombre para las iniciales y el texto alternativo.'
			}
		},
		{ name: 'src', type: 'string', text: { en: 'Photo URL.', es: 'URL de la foto.' } },
		{
			name: 'alt',
			type: 'string',
			text: { en: 'Alt text of the photo.', es: 'Texto alternativo de la foto.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			default: "'primary'",
			text: { en: 'Background color.', es: 'Color de fondo.' }
		},
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl'",
			default: "'md'",
			text: { en: 'Size.', es: 'Tamaño.' }
		}
	]
} satisfies Doc<AvatarProps>;
