import { building } from '$app/environment';
import { json } from '@sveltejs/kit';

export const prerender = true;

interface WorkspaceItem {
	id: number;
	name: string;
}

const WORKSPACES: WorkspaceItem[] = [
	{ id: 1, name: 'Atlas Workspace' },
	{ id: 2, name: 'Northwind Lab' },
	{ id: 3, name: 'Nexus Portal' },
	{ id: 4, name: 'Orbit Studio' },
	{ id: 5, name: 'Vertex Cloud' },
	{ id: 6, name: 'Pulse Center' },
	{ id: 7, name: 'Lumi Workspace' },
	{ id: 8, name: 'Cobalt Studio' },
	{ id: 9, name: 'Aurora Project' },
	{ id: 10, name: 'Helix Lab' }
];

export function GET({ url }: { url: URL }): Response {
	// El prerender no tiene queries: publica el catálogo completo como
	// snapshot estático. En dev y serverless la búsqueda filtra normal.
	const query = building ? '' : (url.searchParams.get('q') ?? '').trim().toLowerCase();
	const limit = building
		? WORKSPACES.length
		: Math.max(1, Number(url.searchParams.get('limit') ?? '10') || 10);
	const filtered =
		query.length === 0
			? WORKSPACES
			: WORKSPACES.filter((item) => item.name.toLowerCase().includes(query));
	return json({ items: filtered.slice(0, limit) });
}
