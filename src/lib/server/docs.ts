import { demoPath } from '$lib/docs/demos';
import type { Doc, DocPropGroupView, DocPropView, DocProp, DocView } from '$lib/docs/types';
import type { Lang } from '$lib/i18n';

/**
 * Prosa y código de la documentación. Viven solo en el servidor: cada página
 * prerenderizada recibe su idioma como datos, y el cliente nunca carga el resto.
 */
const DOCS = import.meta.glob<{ default: Doc }>('/src/lib/docs/pages/*.ts');

const SOURCES: Record<Lang, Record<string, () => Promise<string>>> = {
	en: import.meta.glob<string>('/src/lib/demos/**/*.svelte', { query: '?raw', import: 'default' }),
	es: import.meta.glob<string>('/src/lib/demos-es/**/*.svelte', {
		query: '?raw',
		import: 'default'
	})
};

export const demoCode = (lang: Lang, name: string): Promise<string> =>
	SOURCES[lang][demoPath(lang, name)]();

const propView =
	(lang: Lang) =>
	(prop: DocProp<Record<string, unknown>>): DocPropView => ({
		...prop,
		text: prop.text[lang]
	});

/** La página en un idioma, con el código de cada demo; `undefined` si no existe. */
export async function loadDocView(slug: string, lang: Lang): Promise<DocView | undefined> {
	const doc = (await DOCS[`/src/lib/docs/pages/${slug}.ts`]?.())?.default;
	if (!doc) return undefined;

	const toView = propView(lang);
	const moreProps: DocPropGroupView[] | undefined = doc.moreProps?.map((group) => ({
		title: group.title,
		props: group.props.map(toView)
	}));

	return {
		importLine: doc.importLine,
		use: doc.use?.[lang],
		avoid: doc.avoid?.[lang],
		sections: await Promise.all(
			doc.sections.map(async ({ id, title, text, demo, showCode, preview, snippet }) => ({
				id,
				title: title[lang],
				text: text[lang],
				demo,
				preview: preview !== false,
				snippet,
				code: demo && showCode !== false ? await demoCode(lang, `${slug}/${demo}`) : undefined
			}))
		),
		props: doc.props?.map(toView),
		propsNote: doc.propsNote?.[lang],
		moreProps
	};
}
