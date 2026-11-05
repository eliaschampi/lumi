import type { Doc } from '../types';

export default {
	importLine: `import { RemoteSelect } from '@lumi-ui/svelte';`,
	use: {
		en: ['Lists too long to load at once', 'Searching records on your server'],
		es: ['Listas demasiado largas para cargarlas de una vez', 'Buscar registros en tu servidor']
	},
	avoid: {
		en: ['Lists you already have in the page: use Select'],
		es: ['Listas que ya tienes en la página: usa Select']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Search on your server', es: 'Busca en tu servidor' },
			text: {
				en: 'It calls your endpoint as people type and shows the results. This site has no server, so this page shows only the code. For every field prop, see Select.',
				es: 'Llama a tu endpoint mientras se escribe y muestra los resultados. Este sitio no tiene servidor, así que esta página muestra solo el código. Para las props del campo, consulta Select.'
			},
			demo: 'Basic',
			preview: false
		}
	]
} satisfies Doc;
