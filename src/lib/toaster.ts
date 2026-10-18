import { createToaster } from '@lumi-ui/svelte';

/**
 * Cola única de avisos del sitio; el layout raíz la renderiza con `<Toaster>`.
 * Solo se llama a `show()` desde manejadores del navegador, así que el prerender
 * nunca comparte avisos entre peticiones.
 */
export const toaster = createToaster({ duration: 4000 });
