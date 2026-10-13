<script lang="ts">
	import {
		Alert,
		Avatar,
		AvatarGroup,
		AvatarPicker,
		Button,
		Card,
		Chip,
		Collapse,
		Context,
		ContextItem,
		Dialog,
		DateRangeFilter,
		Divider,
		EmptyState,
		ErrorState,
		FileUpload,
		IconBadge,
		Image,
		Input,
		Loading,
		Notification,
		PageHeader,
		PageSidebar,
		Progress,
		Radio,
		Select,
		StatusIndicator,
		TagOption,
		Tabs,
		Tooltip,
		Title,
		UserInfo,
		type FileUploadFile,
		type NotificationColor
	} from '@lumi-ui/svelte';
	import { asset } from '$app/paths';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import { componentExamples, remoteSelectExample } from '$lib/code-examples';
	import { docsUrl, repositoryUrl } from '$lib/site';
	import { href } from '$lib/paths';

	const tabs = [
		{ value: 'actions', label: 'Acciones', icon: 'sparkles' },
		{ value: 'forms', label: 'Formularios', icon: 'clipboardPenLine' },
		{ value: 'status', label: 'Estados', icon: 'activity' },
		{ value: 'identity', label: 'Identidad', icon: 'users' },
		{ value: 'navigation', label: 'Navegación', icon: 'menu' },
		{ value: 'overlays', label: 'Overlays', icon: 'layers' }
	];

	let activeTab = $state('actions');
	// El prerender no recibe queries; sincronizamos la familia al hidratar y navegar.
	$effect(() => {
		activeTab =
			tabs.find((tab) => tab.value === page.url.searchParams.get('familia'))?.value ?? 'actions';
	});
	const exampleCode = $derived(componentExamples[activeTab as keyof typeof componentExamples]);
	let demoAction = $state('');
	let dialogOpen = $state(false);
	let nestedDialogOpen = $state(false);

	function selectFamily(value: string | number): void {
		const url = new URL(page.url);
		url.searchParams.set('familia', String(value));
		void goto(url, { noScroll: true, keepFocus: true });
	}
	let alertVisible = $state(true);
	let infoChipVisible = $state(true);

	// Status & feedback demo state.
	let notificationVisible = $state(false);
	let notificationColor = $state<NotificationColor>('success');
	let notificationTitle = $state('Datos guardados');
	const NOTIFICATION_TYPES: { value: NotificationColor; label: string }[] = [
		{ value: 'success', label: 'Éxito' },
		{ value: 'warning', label: 'Advertencia' },
		{ value: 'info', label: 'Info' },
		{ value: 'danger', label: 'Error' },
		{ value: 'primary', label: 'Primario' }
	];

	function triggerNotification(color: NotificationColor): void {
		const match = NOTIFICATION_TYPES.find((item) => item.value === color);
		notificationColor = color;
		notificationTitle = match?.label ?? 'Notificación';
		notificationVisible = true;
	}

	// Tags & forms demo state.
	let selectedTag = $state<string>('all');
	const TAG_OPTIONS = [
		{ value: 'all', label: 'Todos', color: 'primary' as const },
		{ value: 'active', label: 'Activos', color: 'success' as const },
		{ value: 'pending', label: 'Pendientes', color: 'warning' as const },
		{ value: 'paused', label: 'Pausados', color: 'secondary' as const }
	];

	let uploadedFiles = $state<FileUploadFile[]>([]);
	let dateRangeFrom = $state('');
	let dateRangeTo = $state('');

	let workspace = $state<string | number | Record<string, unknown> | null>(null);
	let appliedRange = $state('');

	// PageSidebar layout demo (page-level, never nested in a Card).
	let filtersOpen = $state(false);
	let filterStatus = $state('all');
	let filterOwner = $state<string | number | Record<string, unknown> | null>('all');
	let filterQuery = $state('');

	const FILTER_STATUS = [
		{ value: 'all', label: 'Todos' },
		{ value: 'active', label: 'Activos' },
		{ value: 'pending', label: 'Pendientes' },
		{ value: 'paused', label: 'Pausados' }
	] as const;

	const FILTER_OWNERS = [
		{ value: 'all', label: 'Cualquiera' },
		{ value: 'ana', label: 'Ana Torres' },
		{ value: 'bruno', label: 'Bruno Díaz' },
		{ value: 'carla', label: 'Carla Ruiz' }
	];

	const WORKSPACE_ROWS = [
		{ name: 'Atlas Workspace', owner: 'Ana Torres', status: 'active' as const },
		{ name: 'Northwind Lab', owner: 'Bruno Díaz', status: 'pending' as const },
		{ name: 'Nexus Portal', owner: 'Carla Ruiz', status: 'active' as const },
		{ name: 'Orbit Studio', owner: 'Ana Torres', status: 'paused' as const }
	];

	const filteredWorkspaces = $derived(
		WORKSPACE_ROWS.filter((row) => {
			if (filterStatus !== 'all' && row.status !== filterStatus) return false;
			if (filterOwner && filterOwner !== 'all') {
				const owner = FILTER_OWNERS.find((item) => item.value === filterOwner)?.label;
				if (owner && row.owner !== owner) return false;
			}
			const q = filterQuery.trim().toLowerCase();
			if (q && !row.name.toLowerCase().includes(q) && !row.owner.toLowerCase().includes(q)) {
				return false;
			}
			return true;
		})
	);

	// Context menu demo state.
	let contextMenu = $state<Context>();
	let contextTarget = $state<string>('');

	function openWorkspaceContext(event: MouseEvent, name: string): void {
		contextTarget = name;
		if (event.type === 'click' && event.currentTarget instanceof HTMLElement) {
			const rect = event.currentTarget.getBoundingClientRect();
			contextMenu?.open(
				new MouseEvent('contextmenu', { clientX: rect.left, clientY: rect.bottom }),
				name
			);
		} else {
			contextMenu?.open(event, name);
		}
	}

	function applyFiltersAndClose(): void {
		filtersOpen = false;
	}

	function statusChipColor(
		status: 'active' | 'pending' | 'paused'
	): 'success' | 'warning' | 'secondary' {
		if (status === 'active') return 'success';
		if (status === 'pending') return 'warning';
		return 'secondary';
	}

	function statusChipLabel(status: 'active' | 'pending' | 'paused'): string {
		if (status === 'active') return 'Activo';
		if (status === 'pending') return 'Pendiente';
		return 'Pausado';
	}

	const team = [
		{ text: 'Ana Torres', alt: 'Ana Torres' },
		{ text: 'Bruno Díaz', alt: 'Bruno Díaz' },
		{ text: 'Carla Ruiz', alt: 'Carla Ruiz' },
		{ text: 'Diego Silva', alt: 'Diego Silva' },
		{ text: 'Elena Paz', alt: 'Elena Paz' }
	];

	const AVATAR_OPTIONS = [
		{ src: asset('/favicon.svg'), value: 'spark', label: 'Destello' },
		{ src: asset('/circle.svg'), value: 'circle', label: 'Círculos' },
		{ src: asset('/squares.svg'), value: 'squares', label: 'Cuadrados' }
	];
	let selectedAvatar = $state('spark');

	const STATUS_VARIANTS: Array<{
		status: 'success' | 'warning' | 'danger' | 'info' | 'primary' | 'secondary';
		label: string;
		pulse?: boolean;
	}> = [
		{ status: 'success', label: 'En línea', pulse: true },
		{ status: 'warning', label: 'Pendiente' },
		{ status: 'danger', label: 'Con error' },
		{ status: 'info', label: 'Sincronizando', pulse: true },
		{ status: 'primary', label: 'Disponible' },
		{ status: 'secondary', label: 'Auxiliar' }
	];
</script>

<div class="lumi-stack lumi-stack--xl lumi-min-width--0">
	<PageHeader
		title="Componentes"
		subtitle="Prueba las familias de componentes y copia ejemplos para tu aplicación."
		level={1}
		icon="boxes"
		size="xl"
	/>

	<p class="lumi-text--sm lumi-text--muted">
		Cada familia incluye un ejemplo de uso. Consulta <a
			href={`${docsUrl}/COMPONENTS.md`}
			class="lumi-text--primary">la referencia completa de props</a
		>
		y
		<a
			href={`${repositoryUrl}/blob/main/src/routes/components/+page.svelte`}
			class="lumi-text--primary">el código de esta página</a
		>.
	</p>

	<Tabs value={activeTab} {tabs} onchange={selectFamily} aria-label="Familias de componentes">
		<Title
			title={tabs.find((tab) => tab.value === activeTab)?.label}
			level={2}
			size="md"
			class="lumi-margin-bottom--md"
		/>
		{#if activeTab === 'actions'}
			<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
				<Card spaced>
					{#snippet header()}<Title
							title="Botones"
							subtitle="Variantes por jerarquía de acción"
							level={3}
							size="sm"
						/>{/snippet}
					<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
						<Button variant="filled" icon="plus" onclick={() => (demoAction = 'Crear')}>
							Crear</Button
						>
						<Button
							variant="filled"
							color="success"
							icon="check"
							onclick={() => (demoAction = 'Confirmar')}
						>
							Confirmar</Button
						>
						<Button variant="border" icon="edit" onclick={() => (demoAction = 'Editar')}>
							Editar</Button
						>
						<Button variant="flat" icon="refreshCw" onclick={() => (demoAction = 'Actualizar')}>
							Actualizar</Button
						>
						<Button
							variant="ghost"
							icon="trash"
							color="danger"
							onclick={() => (demoAction = 'Eliminar')}
						>
							Eliminar</Button
						>
						<Button
							color="warning"
							variant="gradient"
							icon="sparkles"
							onclick={() => (demoAction = 'Gradiente')}
						>
							Gradiente</Button
						>
						<Button variant="filled" loading>Procesando</Button>
					</div>
				</Card>

				<Card spaced>
					{#snippet header()}<Title
							title="Chips"
							subtitle="Etiquetas y estados compactos"
							level={3}
							size="sm"
						/>{/snippet}
					<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
						<Chip color="primary" icon="sparkles">Principal</Chip>
						<Chip color="secondary">Secundario</Chip>
						<Chip color="success" icon="check">Completado</Chip>
						<Chip color="warning" icon="clock">Pendiente</Chip>
						<Chip color="danger" icon="alertTriangle">Bloqueado</Chip>
						{#if infoChipVisible}
							<Chip color="info" closable onclose={() => (infoChipVisible = false)}
								>Información</Chip
							>
						{/if}
					</div>
				</Card>

				<Card spaced>
					{#snippet header()}<Title
							title="Ayuda contextual"
							subtitle="Ayuda que aparece al enfocar o señalar"
							level={3}
							size="sm"
						/>{/snippet}
					<div class="lumi-flex lumi-align-items--center lumi-flex--gap-sm">
						<Tooltip text="Puedes abrir esta ayuda con el teclado o el puntero.">
							<Button variant="border" icon="info">Mostrar ayuda</Button>
						</Tooltip>
						<Button
							variant="filled"
							icon="settings"
							aria-label="Configurar"
							onclick={() => (demoAction = 'Configurar')}
						/>
					</div>
				</Card>

				<Card spaced>
					{#snippet header()}<Title
							title="Divulgación"
							subtitle="Contenido progresivo sin lógica duplicada"
							level={3}
							size="sm"
						/>{/snippet}
					<Collapse title="¿Por qué composición?" defaultOpen color="primary">
						<p class="lumi-text--sm lumi-text--muted">
							Las primitivas pequeñas mantienen APIs claras y permiten construir interfaces
							diferentes.
						</p>
					</Collapse>
				</Card>
			</div>
		{:else if activeTab === 'forms'}
			<div class="lumi-stack lumi-stack--lg">
				<Card spaced>
					{#snippet header()}<Title
							title="TagOption"
							subtitle="Selección semántica por color"
							level={3}
							size="sm"
						/>{/snippet}
					<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
						{#each TAG_OPTIONS as tag (tag.value)}
							<TagOption
								label={tag.label}
								color={tag.color}
								active={selectedTag === tag.value}
								onclick={() => (selectedTag = tag.value)}
							/>
						{/each}
					</div>
					<p class="lumi-text--sm lumi-text--muted">
						Filtro actual: <strong>{TAG_OPTIONS.find((t) => t.value === selectedTag)?.label}</strong
						>
					</p>
				</Card>

				<Card
					title="DateRangeFilter"
					subtitle="Composición de filtros con acciones opcionales"
					spaced
				>
					<DateRangeFilter
						bind:fromValue={dateRangeFrom}
						bind:toValue={dateRangeTo}
						fromLabel="Desde"
						toLabel="Hasta"
						applyLabel="Aplicar rango"
						onapply={() =>
							(appliedRange = `${dateRangeFrom || 'Sin inicio'} → ${dateRangeTo || 'Sin fin'}`)}
					/>
					<p class="lumi-text--sm lumi-text--muted">
						Rango aplicado: {appliedRange || 'Todavía no has aplicado un rango.'}
					</p>
				</Card>

				<Card spaced>
					{#snippet header()}<Title
							title="Select con búsqueda"
							subtitle="Filtrado local, selección y limpieza"
							level={3}
							size="sm"
						/>{/snippet}
					<Select
						bind:value={workspace}
						options={WORKSPACE_ROWS.map((row) => row.name)}
						label="Espacio de trabajo"
						placeholder="Busca un espacio"
						autocomplete
						clearable
					/>
					<p class="lumi-text--sm lumi-text--muted">
						Seleccionado: {String(workspace ?? 'ninguno')}
					</p>
				</Card>

				<Card
					title="RemoteSelect en tu aplicación"
					subtitle="Integración con una API de búsqueda"
					spaced
				>
					<p class="lumi-text--sm lumi-text--muted">
						Este componente espera un servidor que filtre por <code>q</code> y respete
						<code>limit</code>. Este sitio es estático: usa el Select anterior para probar una
						búsqueda local.
					</p>
					<Collapse title="Ver integración de RemoteSelect">
						<CodeBlock code={remoteSelectExample} label="RemoteSelect y contrato de respuesta" />
					</Collapse>
				</Card>

				<Card spaced>
					{#snippet header()}<Title
							title="FileUpload"
							subtitle="Validación local sin endpoint"
							level={3}
							size="sm"
						/>{/snippet}
					<FileUpload
						bind:files={uploadedFiles}
						accept="image/*,.pdf"
						multiple
						maxSize={2_000_000}
						placeholderText="Subir archivos"
						hintText="Arrastra imágenes o PDF (máx 2MB) o haz clic para seleccionar"
					/>
					<p class="lumi-text--sm lumi-text--muted">
						Archivos seleccionados: {uploadedFiles.length}
					</p>
				</Card>
			</div>
		{:else if activeTab === 'status'}
			<div class="lumi-stack lumi-stack--lg">
				{#if alertVisible}
					<Alert color="info" title="Estado informativo" closable bind:active={alertVisible}>
						Una alerta permanece dentro del flujo hasta que deja de ser relevante.
					</Alert>
				{/if}

				<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
					<Card spaced>
						{#snippet header()}<Title
								title="Progreso"
								subtitle="Estados determinados e indeterminados"
								level={3}
								size="sm"
							/>{/snippet}
						<div class="lumi-stack lumi-stack--md">
							<Progress value={72} color="primary" showLabel />
							<Progress value={48} color="secondary" striped animated />
							<Progress indeterminate color="info" aria-label="Sincronizando" />
						</div>
					</Card>

					<Card spaced>
						{#snippet header()}<Title
								title="Mensajes vacíos"
								subtitle="Orientación cuando no existe contenido"
								level={3}
								size="sm"
							/>{/snippet}
						<EmptyState
							icon="inbox"
							iconColor="muted"
							title="Sin elementos"
							description="Los nuevos elementos aparecerán aquí cuando estén disponibles."
						/>
					</Card>

					<Card spaced>
						{#snippet header()}<Title
								title="Loading"
								subtitle="Indicadores locales de carga"
								level={3}
								size="sm"
							/>{/snippet}
						<div class="lumi-stack lumi-stack--md">
							<Loading color="primary" />
							<Loading color="secondary" size="sm" text="Cargando datos" />
							<Loading color="info" size="lg" text="Procesando agregaciones" />
						</div>
					</Card>

					<Card spaced>
						{#snippet header()}<Title
								title="Notificaciones"
								subtitle="Feedback transitorio colocado por la app"
								level={3}
								size="sm"
							/>{/snippet}
						<div class="lumi-stack lumi-stack--md">
							<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-sm">
								{#each NOTIFICATION_TYPES as type (type.value)}
									<Button
										variant="border"
										size="sm"
										onclick={() => triggerNotification(type.value)}
									>
										{type.label}
									</Button>
								{/each}
							</div>
							<p class="lumi-text--sm lumi-text--muted">
								La <code>Notification</code> se renderiza donde la app la coloca. Activa una para verla
								más abajo.
							</p>
							{#if notificationVisible}
								<Notification
									color={notificationColor}
									title={notificationTitle}
									message="Resumen local de la interacción reciente."
									closable
									duration={3500}
									bind:active={notificationVisible}
								/>
							{/if}
						</div>
					</Card>

					<Card
						title="Estados de error"
						subtitle="Recuperación visible desde la propia página"
						spaced
					>
						<div class="lumi-stack lumi-stack--md">
							<ErrorState
								status={404}
								message="Recurso de demostración no encontrado."
								homeHref={href('/')}
							/>
						</div>
					</Card>

					<Card spaced>
						{#snippet header()}<Title
								title="StatusIndicator"
								subtitle="Puntos semánticos con pulso y tooltip"
								level={3}
								size="sm"
							/>{/snippet}
						<div class="lumi-stack lumi-stack--md">
							<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-md">
								{#each STATUS_VARIANTS as variant (variant.status)}
									<Tooltip text={variant.label}>
										<div class="lumi-flex lumi-align-items--center lumi-flex--gap-sm">
											<StatusIndicator status={variant.status} pulse={variant.pulse} />
											<span class="lumi-text--sm">{variant.label}</span>
										</div>
									</Tooltip>
								{/each}
							</div>
						</div>
					</Card>
				</div>
			</div>
		{:else if activeTab === 'identity'}
			<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
				<Card spaced>
					{#snippet header()}<Title
							title="Avatares"
							subtitle="Identidad individual y equipos"
							level={3}
							size="sm"
						/>{/snippet}
					<div class="lumi-stack lumi-stack--lg">
						<div class="lumi-flex lumi-flex--wrap lumi-align-items--center lumi-flex--gap-md">
							<Avatar text="Lumi UI" size="xl" color="primary" />
							<Avatar text="Design System" size="lg" color="secondary" />
							<Avatar icon="user" size="md" color="info" />
						</div>
						<Divider text="Equipo" position="left" />
						<AvatarGroup items={team} max={4} size="md" />
					</div>
				</Card>

				<Card spaced>
					{#snippet header()}<Title
							title="Badges de icono"
							subtitle="Énfasis visual con color semántico"
							level={3}
							size="sm"
						/>{/snippet}
					<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-md">
						<IconBadge icon="shieldCheck" color="primary" size="xl" />
						<IconBadge icon="heart" color="danger" size="xl" />
						<IconBadge icon="star" color="warning" size="xl" />
						<IconBadge icon="sparkles" color="secondary" size="xl" />
					</div>
				</Card>

				<Card spaced>
					{#snippet header()}<Title
							title="Image"
							subtitle="Imagen responsiva con skeleton de carga"
							level={3}
							size="sm"
						/>{/snippet}
					<Image
						src={asset('/squares.svg')}
						class="lumi-width--full"
						alt="Composición geométrica de cuadrados"
						radius="lg"
						loading="lazy"
					/>
				</Card>

				<Card spaced>
					{#snippet header()}<Title
							title="AvatarPicker"
							subtitle="Selección única por imagen"
							level={3}
							size="sm"
						/>{/snippet}
					<AvatarPicker options={AVATAR_OPTIONS} bind:value={selectedAvatar} name="avatar" />
					<p class="lumi-text--sm lumi-text--muted">
						Avatar elegido:
						{AVATAR_OPTIONS.find((o) => o.value === selectedAvatar)?.label ?? 'ninguno'}
					</p>
				</Card>

				<Card spaced>
					{#snippet header()}<Title
							title="UserInfo"
							subtitle="Identidad compacta para listas o encabezados"
							level={3}
							size="sm"
						/>{/snippet}
					<div class="lumi-stack lumi-stack--md">
						<UserInfo
							name="Ana"
							lastName="Torres"
							description="Diseñadora de interfaces"
							avatarColor="primary"
							avatarSize="lg"
						/>
						<UserInfo
							name="Bruno Díaz"
							description="Desarrollador"
							avatarColor="secondary"
							avatarSize="md"
						/>
					</div>
				</Card>
			</div>
		{:else if activeTab === 'navigation'}
			<div class="lumi-stack lumi-stack--md lumi-min-width--0">
				<PageHeader
					title="Espacios de trabajo"
					subtitle="Una composición con filtros y resultados que se adapta a pantallas pequeñas"
					level={2}
					icon="folders"
				>
					{#snippet actions()}
						<div
							class="lumi-flex lumi-flex--gap-sm lumi-align-items--center lumi-page-sidebar__header-actions"
						>
							<Button
								variant="ghost"
								size="sm"
								icon="slidersHorizontal"
								class="lumi-page-sidebar__mobile-trigger"
								onclick={() => (filtersOpen = true)}
								aria-label="Abrir filtros"
							/>
						</div>
					{/snippet}
				</PageHeader>

				<div class="lumi-layout--two-columns lumi-page-sidebar-layout">
					<PageSidebar
						bind:mobileOpen={filtersOpen}
						mobileTitle="Filtros"
						mobileAriaLabel="Cerrar filtros"
					>
						{#snippet sidebar()}
							<div class="lumi-page-sidebar__section">
								<div
									class="lumi-filter-summary lumi-filter-summary--compact lumi-filter-summary--secondary"
								>
									<p class="lumi-filter-summary__eyebrow">Vista de listado</p>
									<h2 class="lumi-filter-summary__title">Espacios de trabajo</h2>
									<p class="lumi-filter-summary__subtitle">
										Filtra por estado, responsable y texto.
									</p>
								</div>
							</div>

							<div class="lumi-page-sidebar__section">
								<p class="lumi-page-sidebar__label">Estado</p>
								<div class="lumi-page-sidebar__radio-group">
									{#each FILTER_STATUS as option (option.value)}
										<Radio
											bind:group={filterStatus}
											value={option.value}
											label={option.label}
											name="workspace-status"
										/>
									{/each}
								</div>
							</div>

							<div class="lumi-page-sidebar__section">
								<p class="lumi-page-sidebar__label">Responsable</p>
								<Select
									bind:value={filterOwner}
									name="workspace-owner"
									label="Persona"
									options={FILTER_OWNERS}
								/>
							</div>

							<div class="lumi-page-sidebar__section">
								<Input
									bind:value={filterQuery}
									name="workspace-search"
									label="Buscar"
									placeholder="Nombre o responsable"
									icon="search"
								/>
							</div>

							<div class="lumi-page-sidebar__section lumi-stack lumi-stack--xs">
								<Button variant="border" icon="search" onclick={applyFiltersAndClose}>
									Aplicar filtros
								</Button>
							</div>
						{/snippet}
					</PageSidebar>

					<section class="lumi-layout--content-right">
						<div class="lumi-stack lumi-stack--sm">
							<Card spaced>
								<div class="lumi-stack lumi-stack--md">
									<div class="lumi-filter-summary lumi-filter-summary--secondary">
										<p class="lumi-filter-summary__eyebrow">Resultados</p>
										<h2 class="lumi-filter-summary__title">Espacios de trabajo</h2>
										<p class="lumi-filter-summary__subtitle">
											Los resultados cambian al ajustar los filtros. Todos los datos son de ejemplo.
										</p>
										<div class="lumi-filter-summary__meta">
											<Chip color="primary" size="sm">Total {filteredWorkspaces.length}</Chip>
											{#if filterStatus !== 'all'}
												<Chip color="secondary" size="sm">
													{FILTER_STATUS.find((s) => s.value === filterStatus)?.label}
												</Chip>
											{/if}
											{#if filterQuery.trim()}
												<Chip color="info" size="sm" icon="search">{filterQuery.trim()}</Chip>
											{/if}
										</div>
									</div>

									{#if filteredWorkspaces.length === 0}
										<EmptyState
											icon="slidersHorizontal"
											title="Sin resultados"
											description="Ajusta los filtros del panel izquierdo."
										/>
									{:else}
										<div class="lumi-stack lumi-stack--sm">
											{#each filteredWorkspaces as row (row.name)}
												<div
													class="lumi-flex lumi-justify--between lumi-align-items--center lumi-flex--gap-sm"
												>
													<div class="lumi-stack lumi-stack--2xs">
														<span class="lumi-font--medium">{row.name}</span>
														<span class="lumi-text--sm lumi-text--muted">{row.owner}</span>
													</div>
													<Chip color={statusChipColor(row.status)} size="sm">
														{statusChipLabel(row.status)}
													</Chip>
												</div>
											{/each}
										</div>
									{/if}
								</div>
							</Card>
						</div>
					</section>
				</div>
			</div>
		{:else if activeTab === 'overlays'}
			<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
				<Card spaced>
					{#snippet header()}<Title
							title="Dialog"
							subtitle="Foco, Escape y diálogos anidados"
							level={3}
							size="sm"
						/>{/snippet}
					<Button onclick={() => (dialogOpen = true)}>Abrir diálogo</Button>
					<Dialog bind:open={dialogOpen} title="Primer diálogo" closeLabel="Cerrar primer diálogo">
						<div class="lumi-stack lumi-stack--md">
							<p>
								El último diálogo abierto recibe el foco. Escape cierra primero el diálogo superior.
							</p>
							<Button variant="border" onclick={() => (nestedDialogOpen = true)}
								>Abrir segundo diálogo</Button
							>
						</div>
					</Dialog>
					<Dialog
						bind:open={nestedDialogOpen}
						title="Segundo diálogo"
						closeLabel="Cerrar segundo diálogo"
					>
						<p>Ciérralo para volver al primer diálogo.</p>
					</Dialog>
				</Card>
				<Card spaced>
					{#snippet header()}<Title
							title="Menú contextual"
							subtitle="Menú por puntero con datos adjuntos"
							level={3}
							size="sm"
						/>{/snippet}
					<div
						class="lumi-padding--md"
						role="group"
						aria-label="Clic derecho abrir menú"
						oncontextmenu={(event) => openWorkspaceContext(event, 'Workspace demostración')}
					>
						<p class="lumi-text--sm lumi-text--muted">
							Haz clic derecho en esta tarjeta o usa el botón para abrir el mismo menú.
						</p>
						<Button
							variant="border"
							onclick={(event) => openWorkspaceContext(event, 'Espacio de demostración')}
							>Abrir menú contextual</Button
						>
						<p class="lumi-text--sm">
							Último objetivo: <strong>{contextTarget || 'ninguno'}</strong>
						</p>
					</div>

					<Context bind:this={contextMenu} aria-label="Menú contextual de demostración">
						{#snippet children({ data })}
							<ContextItem
								icon="folder"
								title="Abrir"
								onclick={() => (contextTarget = `Abrir: ${data}`)}
							/>
							<ContextItem
								icon="share"
								title="Compartir"
								onclick={() => (contextTarget = `Compartir: ${data}`)}
							/>
							<ContextItem
								icon="settings"
								title="Configuración"
								onclick={() => (contextTarget = `Configuración: ${data}`)}
							/>
							<ContextItem
								icon="trash"
								color="danger"
								title="Eliminar"
								onclick={() => (contextTarget = `Eliminar (simulación): ${data}`)}
							/>
						{/snippet}
					</Context>
				</Card>

				<Card spaced>
					{#snippet header()}<Title
							title="Cuándo usar overlays"
							subtitle="Distinción de roles por interacción"
							level={3}
							size="sm"
						/>{/snippet}
					<div class="lumi-stack lumi-stack--sm">
						<p class="lumi-text--sm lumi-text--muted">
							<code>Dialog</code>: interrupción modal. <code>Dropdown</code>: menú anclado a un
							disparador. <code>Context</code>: menú por puntero. <code>Tooltip</code>: descripción
							suplementaria.
						</p>
						<p class="lumi-text--sm lumi-text--muted">
							Todos portales fuera de ancestros recortados y preservan foco y teclado.
						</p>
					</div>
				</Card>
			</div>
		{/if}
		{#if demoAction && activeTab === 'actions'}
			<Alert color="info" title={`Acción de ejemplo: ${demoAction}`}
				>Esta demostración no modifica datos.</Alert
			>
		{/if}
		<Collapse title="Ver ejemplo de código" class="lumi-margin-top--lg">
			<CodeBlock
				code={exampleCode}
				label={`Ejemplo: ${tabs.find((tab) => tab.value === activeTab)?.label}`}
			/>
		</Collapse>
	</Tabs>
</div>
