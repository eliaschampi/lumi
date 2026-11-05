/**
 * Datos ficticios compartidos por las demostraciones del sitio. Una sola fuente
 * evita listas divergentes entre páginas; ningún dato sale del navegador.
 */
import type { ChartSeriesPoint, LumiColor } from '@lumi-ui/svelte';
import type { Lang, Text } from '$lib/i18n';

export type WorkspaceStatus = 'active' | 'pending' | 'paused';

export interface Workspace {
	id: number;
	name: string;
	owner: string;
	status: WorkspaceStatus;
	value: number;
}

/** Estado de dominio → semántica de Lumi (GUIDE §7: la app mapea su dominio). */
export const WORKSPACE_STATUS: Record<WorkspaceStatus, { label: Text; color: LumiColor }> = {
	active: { label: { en: 'Active', es: 'Activo' }, color: 'success' },
	pending: { label: { en: 'Pending', es: 'Pendiente' }, color: 'warning' },
	paused: { label: { en: 'Paused', es: 'Pausado' }, color: 'secondary' }
};

export const WORKSPACE_STATUSES = Object.keys(WORKSPACE_STATUS) as WorkspaceStatus[];

export const WORKSPACES: readonly Workspace[] = [
	{ id: 1, name: 'Atlas Workspace', owner: 'Ana Torres', status: 'active', value: 12400 },
	{ id: 2, name: 'Northwind Lab', owner: 'Bruno Díaz', status: 'pending', value: 8900 },
	{ id: 3, name: 'Nexus Portal', owner: 'Carla Ruiz', status: 'active', value: 17250 },
	{ id: 4, name: 'Orbit Studio', owner: 'Diego Silva', status: 'paused', value: 6300 },
	{ id: 5, name: 'Vertex Cloud', owner: 'Elena Paz', status: 'active', value: 21100 },
	{ id: 6, name: 'Pulse Center', owner: 'Fabio León', status: 'pending', value: 9800 }
];

/** Responsables únicos, en el orden de la lista. */
export const OWNERS = [...new Set(WORKSPACES.map((workspace) => workspace.owner))];

const MONTHS: readonly { key: string; label: Text; value: number }[] = [
	{ key: 'jan', label: { en: 'Jan', es: 'Ene' }, value: 18 },
	{ key: 'feb', label: { en: 'Feb', es: 'Feb' }, value: 25 },
	{ key: 'mar', label: { en: 'Mar', es: 'Mar' }, value: 23 },
	{ key: 'apr', label: { en: 'Apr', es: 'Abr' }, value: 31 },
	{ key: 'may', label: { en: 'May', es: 'May' }, value: 38 },
	{ key: 'jun', label: { en: 'Jun', es: 'Jun' }, value: 44 }
];

/** Ingresos mensuales, en miles. */
export const monthlyRevenue = (lang: Lang): ChartSeriesPoint[] =>
	MONTHS.map(({ key, label, value }) => ({ key, label: label[lang], value }));

/** Diferencia del periodo anterior frente al actual, en miles. */
export const PREVIOUS_PERIOD_GAP = 7;

/** Latencia simulada de las demostraciones que «cargan» o «responden». */
export const SIMULATED_LATENCY_MS = 900;

/** Límite de las subidas de la demostración de FileUpload. */
export const MAX_UPLOAD_BYTES = 2_000_000;
