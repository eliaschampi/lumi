# Lumi · sitio público de Lumi UI

**[Explorar el sitio](https://eliaschampi.github.io/lumi/)** · [Biblioteca](https://github.com/eliaschampi/lumi-ui) · [npm](https://www.npmjs.com/package/@lumi-ui/svelte) · [Contribuir](./CONTRIBUTING.md)

Lumi UI es una biblioteca open source de componentes **Svelte 5**, contratos TypeScript, tokens semánticos y clases de composición. Este repositorio contiene su sitio público: una introducción, una guía de instalación y ejemplos interactivos construidos con el paquete publicado en npm.

## Usar Lumi en tu aplicación

```bash
pnpm add @lumi-ui/svelte
```

Importa los estilos una sola vez en la raíz de tu aplicación:

```svelte
<script lang="ts">
	import '@lumi-ui/svelte/styles';
	import { Button, Card, Input } from '@lumi-ui/svelte';

	let name = $state('Mi proyecto');
</script>

<Card title="Mi primera interfaz" spaced>
	<div class="lumi-stack lumi-stack--md">
		<Input bind:value={name} label="Nombre" />
		<Button variant="filled" disabled={!name.trim()}>Continuar</Button>
	</div>
</Card>
```

Consulta [Empezar](https://eliaschampi.github.io/lumi/getting-started), la [referencia de componentes](https://github.com/eliaschampi/lumi-ui/blob/main/docs/COMPONENTS.md) y las [notas de migración](https://github.com/eliaschampi/lumi-ui/blob/main/docs/UPGRADE.md). Los contratos de la biblioteca viven en `lumi-ui`; este sitio los consume.

## Qué encontrarás

| Sección     | Propósito                                                |
| ----------- | -------------------------------------------------------- |
| Inicio      | Qué ofrece Lumi, instalación y una primera interacción   |
| Empezar     | Estilos, ejemplo copiable y control de apariencia        |
| Componentes | Familias, variantes, estados, diálogos y código de uso   |
| Formularios | Validación nativa, selección y restablecimiento          |
| Datos       | Búsqueda, selección, paginación y gráficos               |
| Apariencia  | Tema persistente y navegación compacta durante la visita |

Los datos son ficticios. Los formularios y archivos seleccionados permanecen en el navegador; no hay cuentas, envíos ni persistencia en un servidor. `RemoteSelect` se documenta como una integración con una API real: GitHub Pages no ejecuta consultas de servidor. La búsqueda interactiva del sitio usa `Select` con filtrado local.

## Desarrollar este sitio

Requisitos: Node.js **22.12 o posterior** y **pnpm 10.33.2**, declarado en `packageManager`. CI usa Node.js 24.

```bash
git clone https://github.com/eliaschampi/lumi.git lumi-web
cd lumi-web
pnpm install --frozen-lockfile
pnpm run dev
```

El servidor abre en `http://localhost:5174`. Comandos disponibles:

| Comando            | Resultado                                          |
| ------------------ | -------------------------------------------------- |
| `pnpm run dev`     | Desarrollo con recarga automática                  |
| `pnpm run format`  | Formato del proyecto                               |
| `pnpm run lint`    | Verificación de formato                            |
| `pnpm run check`   | TypeScript, Svelte y diagnósticos de accesibilidad |
| `pnpm run build`   | Sitio prerenderizado en `build/`                   |
| `pnpm run preview` | Vista previa del build en `http://localhost:4173`  |

### Versión de la biblioteca

`pnpm-lock.yaml` fija la versión instalada. El sitio lee su versión y requisito de Svelte desde el `package.json` de ese paquete al compilar; no mantiene una segunda versión manual en la interfaz.

```bash
pnpm list @lumi-ui/svelte
# Después de revisar las notas de migración:
pnpm update @lumi-ui/svelte --latest
pnpm run lint
pnpm run check
pnpm run build
```

`private: true` evita publicar el sitio como otro paquete npm. El código del sitio es público y tiene licencia MIT; el paquete distribuido es `@lumi-ui/svelte`.

## Publicación

[GitHub Actions](./.github/workflows/deploy.yml) valida formato, tipos y build en los pull requests. Los pushes a `main` y las ejecuciones manuales también publican en Pages. Los pull requests no despliegan.

En **Settings → Pages**, selecciona **Source: GitHub Actions**. El workflow obtiene de Pages la base y URL reales; también funcionan un cambio de nombre del repositorio o un dominio personalizado. No requiere un backend.

Para verificar localmente la ruta de producción:

```bash
PAGES_BASE_PATH=/lumi pnpm run build
PAGES_BASE_PATH=/lumi pnpm run preview
# Abrir http://localhost:4173/lumi/
```

En otros hosts estáticos, sirve `build/`. Para construir en una base o dominio diferentes, declara `PAGES_BASE_PATH` y `PAGES_SITE_URL` antes del build; esta última define las URLs canónicas y los metadatos para compartir.

## Estructura y responsabilidades

```text
.github/workflows/deploy.yml   Validación y publicación en GitHub Pages
src/app.html                  Documento base, idioma y favicon
src/lib/
  navigation.ts               Única fuente de secciones y descripciones
  site.ts                     Enlaces públicos y metadatos de la biblioteca
  paths.ts                    Rutas internas resueltas por SvelteKit
  color-scheme.svelte.ts       Preferencia de tema de este sitio
  navigation-mode.svelte.ts   Densidad de navegación durante la visita
  CodeBlock.svelte            Código seleccionable, copia y feedback
  QuickStartDemo.svelte       Ejemplo inicial y fuente del código mostrado
  code-examples.ts            Ejemplos autocontenidos para la documentación
src/routes/
  +layout.svelte              Shell, navegación, metadatos y pie de página
  +layout.ts                  Prerender estático
  +page.svelte                Presentación de la biblioteca
  getting-started/            Guía de inicio
  components/                 Galería interactiva por familias
  forms/ data/ settings/      Composiciones y apariencia
static/                       Recursos locales de demostración
```

Usamos Svelte 5 runes, TypeScript estricto y componentes, clases y tokens públicos de Lumi. No copiamos componentes internos de la biblioteca ni añadimos otro sistema CSS. El código del ejemplo inicial se importa como texto desde su componente real para evitar que la vista previa y el ejemplo diverjan.

## Contribuciones y licencia

Para mejorar este sitio, consulta [CONTRIBUTING.md](./CONTRIBUTING.md). Para cambiar un componente, token o contrato público, contribuye en [lumi-ui](https://github.com/eliaschampi/lumi-ui).

[MIT](./LICENSE) © Elias Champi.
