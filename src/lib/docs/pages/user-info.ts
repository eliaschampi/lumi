import type { UserInfoProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { UserInfo } from '@lumi-ui/svelte';`,
	use: {
		en: ['A person in a table or list', 'An avatar with a name and a line of detail'],
		es: ['Una persona en una tabla o lista', 'Un avatar con nombre y una línea de detalle']
	},
	avoid: {
		en: ['The avatar alone: use Avatar'],
		es: ['Solo el avatar: usa Avatar']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Name and details', es: 'Nombre y detalles' },
			text: {
				en: 'It joins Avatar, a name and a description. Use trailing for a status, and href to link to the profile.',
				es: 'Une Avatar, un nombre y una descripción. Usa trailing para un estado y href para enlazar al perfil.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'name',
			type: 'string',
			default: "''",
			text: { en: 'Person name.', es: 'Nombre de la persona.' }
		},
		{
			name: 'description',
			type: 'string',
			default: "''",
			text: { en: 'Second line.', es: 'Segunda línea.' }
		},
		{
			name: 'src',
			type: 'string',
			default: "''",
			text: { en: 'Photo URL.', es: 'URL de la foto.' }
		},
		{
			name: 'size',
			type: 'AvatarSize',
			default: "'md'",
			text: { en: 'Avatar size.', es: 'Tamaño del avatar.' }
		},
		{
			name: 'color',
			type: 'AvatarColor',
			default: "'primary'",
			text: { en: 'Avatar color.', es: 'Color del avatar.' }
		},
		{ name: 'href', type: 'string', text: { en: 'Links the name.', es: 'Enlaza el nombre.' } },
		{
			name: 'trailing',
			type: 'Snippet',
			text: { en: 'Content at the end.', es: 'Contenido al final.' }
		}
	]
} satisfies Doc<UserInfoProps>;
