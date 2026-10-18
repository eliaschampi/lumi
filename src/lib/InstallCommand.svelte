<script lang="ts">
	import { SegmentedControl } from '@lumi-ui/svelte';
	import CodeBlock from '$lib/CodeBlock.svelte';

	/** Paquetes a instalar; Lucide es opcional, solo para importar iconos por componente. */
	const { packages = ['@lumi-ui/svelte'] }: { packages?: readonly string[] } = $props();

	const MANAGERS = [
		{ value: 'pnpm', label: 'pnpm' },
		{ value: 'npm', label: 'npm' },
		{ value: 'yarn', label: 'Yarn' }
	];

	let manager = $state<string | number>('pnpm');
	const command = $derived(
		`${manager === 'npm' ? 'npm install' : `${manager} add`} ${packages.join(' ')}`
	);
</script>

<div class="lumi-stack lumi-stack--sm lumi-min-width--0">
	<SegmentedControl bind:value={manager} options={MANAGERS} aria-label="Gestor de paquetes" />
	<CodeBlock code={command} label="Terminal" />
</div>
