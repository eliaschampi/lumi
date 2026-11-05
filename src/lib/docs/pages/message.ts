import type { MessageProps, MessageListProps } from '@lumi-ui/svelte';
import type { Doc, DocProp } from '../types';
const LIST_PROPS: DocProp<MessageListProps>[] = [
	{
		name: 'loading',
		type: 'boolean',
		default: 'false',
		text: {
			en: 'Shows that older messages are loading.',
			es: 'Indica que se cargan mensajes anteriores.'
		}
	},
	{
		name: 'onloadmore',
		type: '() => void',
		text: { en: 'Runs when the top is reached.', es: 'Se ejecuta al llegar arriba.' }
	}
];

export default {
	importLine: `import { Message, MessageList } from '@lumi-ui/svelte';`,
	use: {
		en: ['Chats and comment threads', 'Conversations between people'],
		es: ['Chats e hilos de comentarios', 'Conversaciones entre personas']
	},
	avoid: {
		en: ['System notices: use Alert or Toaster'],
		es: ['Avisos del sistema: usa Alert o Toaster']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'A conversation', es: 'Una conversación' },
			text: {
				en: 'MessageList scrolls and takes the height of its parent, so give the parent one. Use align end for your own messages, and name and time for context.',
				es: 'MessageList se desplaza y toma la altura de su padre, así que dale una. Usa align end en tus propios mensajes, y name y time para dar contexto.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'align',
			type: "'start' | 'end'",
			default: "'start'",
			text: { en: 'Side of the message.', es: 'Lado del mensaje.' }
		},
		{
			name: 'variant',
			type: "'soft' | 'filled' | 'outline' | 'ghost'",
			text: { en: 'Bubble style.', es: 'Estilo de la burbuja.' }
		},
		{
			name: 'color',
			type: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
			text: { en: 'Semantic color.', es: 'Color semántico.' }
		},
		{ name: 'name', type: 'string', text: { en: 'Author.', es: 'Autor.' } },
		{ name: 'time', type: 'string', text: { en: 'Time label.', es: 'Etiqueta de hora.' } },
		{
			name: 'grouped',
			type: 'boolean',
			default: 'false',
			text: { en: 'Joins it to the previous message.', es: 'Lo une al mensaje anterior.' }
		},
		{
			name: 'avatar',
			type: 'Snippet',
			text: { en: 'Avatar content.', es: 'Contenido del avatar.' }
		},
		{
			name: 'footer',
			type: 'Snippet',
			text: { en: 'Content under the bubble.', es: 'Contenido bajo la burbuja.' }
		}
	],
	moreProps: [{ title: 'MessageList', props: LIST_PROPS }]
} satisfies Doc<MessageProps>;
