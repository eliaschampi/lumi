import type { Text } from '$lib/i18n';

export interface DocSection {
	/** Ancla de la sección. */
	id: string;
	title: Text;
	text: Text;
	/** Fichero de `src/lib/demos/{slug}/`, sin extensión. */
	demo?: string;
	/** `false` oculta el código de una demo que solo ilustra. */
	showCode?: boolean;
	/** Código sin vista previa, como CSS de la aplicación. */
	snippet?: { label: string; code: string };
}

export interface DocProp<Props> {
	name: Extract<keyof Props, string>;
	type: string;
	default?: string;
	text: Text;
}

export interface DocPropGroup {
	title: string;
	props: DocProp<Record<string, unknown>>[];
}

export interface Doc<Props = Record<string, unknown>> {
	/** Línea de importación que encabeza la página. */
	importLine?: string;
	use?: { en: string[]; es: string[] };
	avoid?: { en: string[]; es: string[] };
	sections: DocSection[];
	props?: DocProp<Props>[];
	/** Atributos nativos que también acepta, además de las props listadas. */
	propsNote?: Text;
	/** Tablas de las piezas que acompañan al componente, como `DropdownItem`. */
	moreProps?: DocPropGroup[];
}
