/**
 * Genera `src/lib/demos-es` desde `src/lib/demos`: cada demo se escribe una vez,
 * en inglés, y la vista previa y el código en español salen del mismo fichero.
 * Falla si un texto visible no está en el glosario, para que ninguna página en
 * español muestre inglés por descuido, incluidos los comentarios. El texto mixto
 * con `{expresiones}` no se traduce: una demo debe sacar esos textos a una cadena.
 */
import { cpSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'src/lib/demos');
const output = join(root, 'src/lib/demos-es');

const VISIBLE_PROP =
	/\b(?:label|title|subtitle|description|placeholder|legend|hint|text|message|ariaLabel|aria-label)(?:=|:\s*)(["'])((?:(?!\1).)+)\1/g;
const STRING = /(["'`])((?:\\.|(?!\1).)*?)\1/g;
const TEXT_NODE = />([^<>{}]*\p{L}[^<>{}]*)</gu;
const COMMENT = /(?<=^\s*(?:\/\/|<!--) )(.+?)(?= -->|$)/gm;

/**
 * @param {string} file
 * @param {string} code
 * @param {Record<string, string>} glossary
 * @param {Set<string>} used
 */
function translate(file, code, glossary, used) {
	/** @param {string} value */
	const lookup = (value) => {
		const translation = glossary[value];
		if (translation === undefined) {
			throw new Error(`${file}: falta traducir «${value}» en src/lib/demos/es.json`);
		}
		used.add(value);
		return translation;
	};

	for (const [, , value] of code.matchAll(VISIBLE_PROP)) lookup(value);

	const markupStart = code.indexOf('</script>');
	const texts = code
		.slice(markupStart < 0 ? 0 : markupStart)
		.replace(TEXT_NODE, (/** @type {string} */ match, /** @type {string} */ text) =>
			text.trim() ? match.replace(text.trim(), lookup(text.trim())) : match
		);
	const translated = (code.slice(0, markupStart < 0 ? 0 : markupStart) + texts).replace(
		COMMENT,
		lookup
	);

	return translated.replace(
		STRING,
		(/** @type {string} */ match, /** @type {string} */ quote, /** @type {string} */ value) =>
			value in glossary ? (used.add(value), `${quote}${glossary[value]}${quote}`) : match
	);
}

export function translateDemos() {
	const glossary = JSON.parse(readFileSync(join(source, 'es.json'), 'utf8'));
	const used = new Set();

	rmSync(output, { recursive: true, force: true });
	cpSync(source, output, {
		recursive: true,
		filter: (/** @type {string} */ path) => !path.endsWith('.json')
	});

	for (const file of readdirSync(source, { recursive: true, encoding: 'utf8' })) {
		if (!file.endsWith('.svelte')) continue;
		const code = readFileSync(join(source, file), 'utf8');
		writeFileSync(join(output, file), translate(file, code, glossary, used));
	}

	const unused = Object.keys(glossary).filter((key) => !used.has(key));
	if (unused.length) throw new Error(`Glosario sin usar: ${unused.join(', ')}`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) translateDemos();
