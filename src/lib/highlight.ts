/**
 * Resaltado mínimo de Svelte, TypeScript y CSS. Un solo patrón recorre el código
 * una vez; lo que no coincide queda como texto. Los colores vienen de tokens de
 * Lumi, así que siguen al tema y a la marca sin cargar una biblioteca.
 */
const TOKEN = new RegExp(
	[
		String.raw`(?<comment><!--[\s\S]*?-->|/\*[\s\S]*?\*/|(?<![:\w"'])//[^\n]*)`,
		String.raw`(?<string>(?<!\w)"[^"\n]*"|(?<!\w)'[^'\n]*'|` + '`[^`]*`)',
		String.raw`(?<tag></[A-Za-z][\w.-]*|(?<![\w$])<[A-Za-z][\w.-]*|/?>)`,
		String.raw`(?<attr>[\w:-]+(?==["'{]))`,
		String.raw`(?<keyword>\b(?:import|from|export|const|let|function|return|type|interface|as|async|await|if|else|for|of|new|\$state|\$derived|\$props|\$effect|\{#\w+|\{/\w+|\{:\w+)\b)`,
		String.raw`(?<token>--[a-z][\w-]*)`
	].join('|'),
	'g'
);

const ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
const escape = (text: string): string => text.replace(/[&<>]/g, (char) => ESCAPES[char]);

/** Devuelve HTML seguro: todo el texto, incluidos los tokens, pasa por `escape`. */
export function highlight(code: string): string {
	let html = '';
	let last = 0;

	for (const match of code.matchAll(TOKEN)) {
		const kind = Object.entries(match.groups ?? {}).find(([, value]) => value !== undefined)?.[0];
		html += escape(code.slice(last, match.index));
		html += `<span class="code-${kind}">${escape(match[0])}</span>`;
		last = match.index + match[0].length;
	}

	return html + escape(code.slice(last));
}
