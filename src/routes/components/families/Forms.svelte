<script lang="ts">
	import {
		Button,
		Collapse,
		DashboardSection,
		DateRangeFilter,
		FileUpload,
		Select,
		TagOption,
		formatDate,
		type FileUploadFile,
		type SelectValue,
		type TagOptionColor
	} from '@lumi-ui/svelte';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import remoteSelectSource from '$lib/examples/RemoteSelect.svelte?raw';
	import { MAX_UPLOAD_BYTES, WORKSPACES, WORKSPACE_STATUS, WORKSPACE_STATUSES } from '$lib/demo';
	import { siteLocale } from '$lib/site';
	import { toaster } from '$lib/toaster';

	const TAGS: readonly { value: string; label: string; color: TagOptionColor }[] = [
		{ value: 'all', label: 'Todos', color: 'primary' },
		...WORKSPACE_STATUSES.map((value) => ({ value, ...WORKSPACE_STATUS[value] }))
	];
	const WORKSPACE_NAMES = WORKSPACES.map((workspace) => workspace.name);
	const MAX_UPLOAD_MB = MAX_UPLOAD_BYTES / 1_000_000;

	let selectedTag = $state('all');
	let workspace = $state<SelectValue | null>(null);
	let from = $state('');
	let to = $state('');
	let appliedRange = $state('');
	let files = $state<FileUploadFile[]>([]);

	const selectedTagLabel = $derived(TAGS.find((tag) => tag.value === selectedTag)?.label);

	function dateLabel(value: string, fallback: string): string {
		return value ? formatDate(value, { locale: siteLocale.locale, dateStyle: 'medium' }) : fallback;
	}

	function applyRange(): void {
		appliedRange = `${dateLabel(from, 'Sin inicio')} → ${dateLabel(to, 'Sin fin')}`;
	}
</script>

<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
	<DashboardSection title="TagOption" subtitle="Selección semántica por color">
		<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
			{#each TAGS as tag (tag.value)}
				<TagOption
					label={tag.label}
					color={tag.color}
					selected={selectedTag === tag.value}
					onclick={() => (selectedTag = tag.value)}
				/>
			{/each}
		</div>
		<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
			Filtro actual: <strong>{selectedTagLabel}</strong>
		</p>
	</DashboardSection>

	<DashboardSection title="Select con búsqueda" subtitle="Filtrado local, selección y limpieza">
		<Select
			bind:value={workspace}
			options={WORKSPACE_NAMES}
			label="Espacio de trabajo"
			placeholder="Busca un espacio"
			searchable
			clearable
		/>
		<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
			Seleccionado: {workspace ?? 'ninguno'}
		</p>
	</DashboardSection>

	<DashboardSection title="DateRangeFilter" subtitle="Rango de fechas nativo con acción opcional">
		<DateRangeFilter
			bind:fromValue={from}
			bind:toValue={to}
			fromLabel="Desde"
			toLabel="Hasta"
			applyLabel="Aplicar rango"
			onapply={applyRange}
		/>
		<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
			Rango aplicado: {appliedRange || 'todavía no has aplicado un rango.'}
		</p>
	</DashboardSection>

	<DashboardSection title="FileUpload" subtitle="Validación local, sin endpoint">
		<FileUpload
			bind:files
			accept="image/*,.pdf"
			multiple
			maxSize={MAX_UPLOAD_BYTES}
			placeholderText="Subir archivos"
			hintText={`Arrastra imágenes o PDF (máx. ${MAX_UPLOAD_MB} MB) o haz clic para seleccionar`}
			oninvalid={(message) =>
				toaster.show({ title: 'Archivo rechazado', message, color: 'warning' })}
		/>
		<div
			class="lumi-flex lumi-flex--wrap lumi-justify--between lumi-align-items--center lumi-flex--gap-sm"
		>
			<span class="lumi-text--sm lumi-text--muted">Archivos seleccionados: {files.length}</span>
			{#if files.length}
				<Button variant="ghost" size="sm" onclick={() => (files = [])}>Vaciar lista</Button>
			{/if}
		</div>
	</DashboardSection>

	<DashboardSection
		title="RemoteSelect en tu aplicación"
		subtitle="Búsqueda contra una API propia"
		class="lumi-grid-item--span-all"
	>
		<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
			Espera un servidor que filtre por <code>q</code> y respete <code>limit</code>. Este sitio es
			estático: usa el Select anterior para probar una búsqueda local.
		</p>
		<Collapse title="Ver integración de RemoteSelect">
			<CodeBlock code={remoteSelectSource} label="RemoteSelect y contrato de respuesta" />
		</Collapse>
	</DashboardSection>
</div>
