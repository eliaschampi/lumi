# Contribuir a Lumi

Gracias por ayudar a mejorar Lumi. Las propuestas, correcciones de documentación y ejemplos reproducibles son bienvenidos.

## Elige el repositorio

- **[lumi](https://github.com/eliaschampi/lumi)**: este sitio, sus textos, navegación, ejemplos y publicación.
- **[lumi-ui](https://github.com/eliaschampi/lumi-ui)**: componentes Svelte, contratos de props, tokens, accesibilidad interna y paquete npm.

Antes de un cambio amplio, abre un issue que describa el problema y el resultado esperado. Para un defecto, incluye versiones de Lumi y Svelte, pasos mínimos, comportamiento esperado y observado; añade una captura cuando ayude a entenderlo.

## Trabaja en el sitio

Sigue la instalación del [README](./README.md). Conserva SvelteKit, Svelte 5 runes y TypeScript estricto. Los componentes, clases y tokens públicos de Lumi son el sistema visual de este proyecto: no copies su implementación ni introduzcas un segundo framework CSS.

- Escribe textos de interfaz y documentación del sitio en español claro.
- Usa `navigation.ts` para secciones y descripciones, `site.ts` para enlaces públicos y `href()` para rutas internas.
- Usa `asset()` de SvelteKit para recursos locales.
- Prefiere demostraciones pequeñas con estados vacíos, validación y feedback observables.
- Identifica los datos ficticios y el alcance local de las interacciones. No simules que hay una operación de servidor.
- Mantén los ejemplos copiables y sus imports válidos para el paquete publicado.
- No dependas de servicios de imágenes externos para una demostración esencial.
- Actualiza la documentación que describa el comportamiento modificado.

La estructura actual es suficiente para este sitio. Añade un archivo o abstracción cuando tenga una responsabilidad concreta; evita capas genéricas y páginas vacías para funciones futuras.

## Verifica tu cambio

```bash
pnpm run format
pnpm run lint
pnpm run check
PAGES_BASE_PATH=/lumi pnpm run build
git diff --check
```

Para cambios visuales, revisa escritorio y móvil, los temas claro y oscuro, navegación con teclado y rutas directas. Para overlays, comprueba apertura, Escape, foco y retorno al disparador. Para formularios y tablas, prueba validación, restablecimiento, búsqueda sin resultados y paginación.

Si cambias código de ejemplo, verifica que compile y que represente la API instalada. Si actualizas Lumi, revisa sus [notas de migración](https://github.com/eliaschampi/lumi-ui/blob/main/docs/UPGRADE.md) y conserva `pnpm-lock.yaml` en el cambio.

## Envía un pull request

Describe el problema y el comportamiento resultante. Incluye las comprobaciones ejecutadas y capturas cuando el cambio sea visual. Mantén el diff enfocado para que pueda revisarse con claridad.

Los pull requests ejecutan validación sin publicar. El despliegue ocurre desde `main` una vez integrado el cambio.

## Licencia

El proyecto se distribuye bajo [MIT](./LICENSE). Conserva los avisos de licencia aplicables al código o recursos que aportes.
