import type { FileUploadProps } from '@lumi-ui/svelte';
import type { Doc } from '../types';

export default {
	importLine: `import { FileUpload } from '@lumi-ui/svelte';`,
	use: {
		en: ['Choosing files with drag and drop', 'Showing the state of each upload'],
		es: ['Elegir archivos arrastrando y soltando', 'Mostrar el estado de cada subida']
	},
	avoid: {
		en: ['A plain file field in a simple form'],
		es: ['Un campo de archivo simple en un formulario sencillo']
	},
	sections: [
		{
			id: 'basic',
			title: { en: 'Choose files', es: 'Elegir archivos' },
			text: {
				en: 'Keep the list with bind:files, and limit the type and size. Lumi validates and shows the files; uploading them is up to your app.',
				es: 'Guarda la lista con bind:files y limita el tipo y el tamaño. Lumi valida y muestra los archivos; subirlos corresponde a tu aplicación.'
			},
			demo: 'Basic'
		}
	],
	props: [
		{
			name: 'files',
			type: 'FileUploadFile[]',
			default: '[]',
			text: { en: 'Files, bindable.', es: 'Archivos, enlazable con bind.' }
		},
		{ name: 'accept', type: 'string', text: { en: 'Allowed types.', es: 'Tipos permitidos.' } },
		{
			name: 'multiple',
			type: 'boolean',
			default: 'false',
			text: { en: 'Allows several files.', es: 'Permite varios archivos.' }
		},
		{
			name: 'maxSize',
			type: 'number',
			default: '0',
			text: { en: 'Limit in bytes.', es: 'Límite en bytes.' }
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			text: { en: 'Disables it.', es: 'Lo deshabilita.' }
		},
		{
			name: 'validateFile',
			type: '(file: File) => string | null',
			text: { en: 'Your own validation.', es: 'Tu propia validación.' }
		},
		{
			name: 'onchange',
			type: '(files: FileUploadFile[]) => void',
			text: { en: 'Runs when the list changes.', es: 'Se ejecuta al cambiar la lista.' }
		},
		{
			name: 'onremove',
			type: '(fileId: string) => void',
			text: { en: 'Runs when a file is removed.', es: 'Se ejecuta al quitar un archivo.' }
		}
	]
} satisfies Doc<FileUploadProps>;
