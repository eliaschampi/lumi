/** Ejemplos públicos autocontenidos; los estilos se cargan una vez en la raíz. */
export const rootLayoutExample = `<script lang="ts">
  import '@lumi-ui/svelte/styles';
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

{@render children()}`;

export const colorSchemeExample = `<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '@lumi-ui/svelte';
  import {
    ColorSchemeScript,
    createColorScheme
  } from '@lumi-ui/svelte/color-scheme';

  const theme = createColorScheme();
  onMount(theme.start);
</script>

<ColorSchemeScript />
<Button onclick={theme.cyclePreference}>Cambiar tema</Button>`;

export const componentExamples = {
	actions: `<script lang="ts">
  import { Button, Chip } from '@lumi-ui/svelte';
</script>

<Button variant="filled" color="primary" icon="plus">Crear</Button>
<Button variant="border">Editar</Button>
<Chip color="success">Completado</Chip>`,
	forms: `<script lang="ts">
  import { Select } from '@lumi-ui/svelte';

  let workspace = $state<string | number | Record<string, unknown> | null>(null);
</script>

<Select
  bind:value={workspace}
  label="Espacio de trabajo"
  options={['Atlas', 'Northwind', 'Nexus']}
  autocomplete
  clearable
/>`,
	status: `<script lang="ts">
  import { Alert, Progress } from '@lumi-ui/svelte';

  let visible = $state(true);
</script>

<Alert color="success" title="Cambios guardados" closable bind:active={visible}>
  La operación terminó correctamente.
</Alert>
<Progress value={72} showLabel aria-label="Progreso de la tarea" />`,
	identity: `<script lang="ts">
  import { Avatar, AvatarGroup } from '@lumi-ui/svelte';
</script>

<Avatar text="Ana Torres" color="primary" />
<AvatarGroup items={[{ text: 'Ana Torres' }, { text: 'Bruno Díaz' }]} max={3} />`,
	navigation: `<script lang="ts">
  import { Tabs } from '@lumi-ui/svelte';

  let tab = $state<string | number>('summary');
  const tabs = [
    { value: 'summary', label: 'Resumen' },
    { value: 'details', label: 'Detalle' }
  ];
</script>

<Tabs bind:value={tab} {tabs} aria-label="Secciones">
  {#if tab === 'summary'}<p>Resumen del proyecto</p>
  {:else}<p>Detalle del proyecto</p>{/if}
</Tabs>`,
	overlays: `<script lang="ts">
  import { Button, Dialog } from '@lumi-ui/svelte';

  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Abrir diálogo</Button>
<Dialog bind:open title="Un diálogo sencillo" closeLabel="Cerrar diálogo">
  <p>El foco permanece en el diálogo. Pulsa Escape para cerrarlo.</p>
</Dialog>`
} as const;

export const remoteSelectExample = `<script lang="ts">
  import { RemoteSelect } from '@lumi-ui/svelte';

  let selected = $state<{ id: number; name: string } | null>(null);
</script>

<RemoteSelect
  bind:selected
  endpoint="/api/workspaces"
  label="Espacio de trabajo"
  minQueryLength={2}
  debounceMs={250}
  limit={5}
  getOptionValue={(item) => String(item.id)}
  getOptionLabel={(item) => item.name}
  errorMessageFallback="No se pudieron cargar los resultados."
/>

<!-- GET /api/workspaces?q=atlas&limit=5 debe filtrar y devolver:
{ "items": [{ "id": 1, "name": "Atlas Workspace" }] }
-->`;
