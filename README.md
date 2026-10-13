# Lumi Web

Showcase público de **[Lumi UI](https://github.com/eliaschampi/lumi-ui)** — una biblioteca de componentes Svelte 5 con tokens semánticos, glassmorfismo sereno y composición real.

Este sitio está construido con **SvelteKit** y consume `@lumi-ui/svelte` desde npm: cada página, layout y patrón visible se compone exclusivamente con componentes Lumi y sus clases públicas. Sin estilos de aplicación, sin colores crudos, sin frameworks de CSS.

## Explorar

| Sección         | Contenido                                                        |
| --------------- | ---------------------------------------------------------------- |
| **Inicio**      | Shell responsive, métricas, accesos rápidos y actividad          |
| **Componentes** | Acciones, formularios, estados, identidad, navegación y overlays |
| **Formularios** | Controles accesibles organizados con Grid y Stack                |
| **Datos**       | Tablas tipadas, selección, paginación y gráficos responsivos     |
| **Ajustes**     | Color scheme persistente y densidad real de navegación           |

## Desarrollo

```bash
pnpm install
pnpm run dev      # http://localhost:5174
```

Otros comandos:

```bash
pnpm run build    # build estático prerenderizado en build/
pnpm run preview  # sirve el build localmente
pnpm run check    # svelte-check
pnpm run lint     # prettier --check .
pnpm run format   # prettier --write .
```

## Despliegue

### GitHub Pages (automático)

El flujo de trabajo [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) detecta solo la base de despliegue: raíz para un sitio de usuario (`eliaschampi.github.io`) o subdirectorio para un sitio de proyecto (`eliaschampi.github.io/<repo>/`).

Puesta en marcha:

1. En **Settings → Actions → General**, permite todas las acciones.
2. En **Settings → Pages**, elige **Source: GitHub Actions** (no "Deploy from a branch").
3. En la pestaña **Actions**, ejecuta **Deploy to GitHub Pages** (o haz push a `main`).

Para el sitio en la raíz (`https://eliaschampi.github.io/`), renombra el repositorio a **`eliaschampi.github.io`**; el flujo de trabajo se adapta solo. Con un **dominio propio** tampoco requiere cambios: la base sigue en la raíz.

### Otros hosts

El build es 100% estático (`adapter-static`, todas las rutas prerenderizadas): sirve `build/` desde Netlify, Vercel, Cloudflare Pages o cualquier hosting de archivos. En despliegue estático el endpoint `/api/workspaces` entrega el catálogo prerenderizado; la búsqueda remota filtra en el servidor solo en entornos con funciones (dev, Node o serverless).

## Estructura

```
src/
├── app.html                     # viewport-fit=cover, idioma es
├── lib/
│   ├── color-scheme.svelte.ts   # preferencia system/light/dark persistente
│   ├── navigation.ts            # secciones del showcase
│   ├── navigation-mode.svelte.ts# densidad del sidebar compartida
│   └── paths.ts                 # helpers base-aware para GitHub Pages
└── routes/
    ├── +layout.svelte           # shell: Sidebar + Navbar + contenido
    ├── +page.svelte             # inicio
    ├── components/ forms/ data/ settings/
    └── api/workspaces/          # endpoint de RemoteSelect ({ items })
```

## Reglas del showcase

- Svelte 5 Runes únicamente.
- Componentes importados desde `@lumi-ui/svelte`; un solo import global de estilos.
- Composición exclusiva con clases públicas de `core.css` y `patterns.css`.
- Cero `<style>` local, colores crudos o frameworks CSS: solo tokens `--lumi-*`.

## Licencia

[MIT](./LICENSE) © Elias Champi
