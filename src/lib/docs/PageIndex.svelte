<script lang="ts">
	import { currentLang } from '$lib/i18n';

	const { entries }: { entries: { id: string; title: string }[] } = $props();

	const LABEL = { en: 'On this page', es: 'En esta página' };

	let active = $state('');

	// La franja superior de la pantalla decide qué sección se está leyendo.
	$effect(() => {
		const observer = new IntersectionObserver(
			(records) => {
				for (const record of records) if (record.isIntersecting) active = record.target.id;
			},
			{ rootMargin: '-15% 0px -75% 0px' }
		);
		for (const { id } of entries) {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		}
		return () => observer.disconnect();
	});
</script>

<nav class="index" aria-label={LABEL[currentLang()]}>
	<p class="lumi-text--sm lumi-font--semibold lumi-margin--none">{LABEL[currentLang()]}</p>
	<ul class="lumi-stack lumi-stack--2xs">
		{#each entries as { id, title } (id)}
			<li>
				<a href={`#${id}`} class="lumi-text--sm" class:active={id === active}>{title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.index {
		display: none;
	}

	/* Mismo umbral que la columna que le reserva `DocPage`. */
	@media (min-width: 90rem) {
		.index {
			position: sticky;
			inset-block-start: var(--lumi-space-lg);
			display: grid;
			align-self: start;
			gap: var(--lumi-space-sm);
		}
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		display: block;
		padding-inline-start: var(--lumi-space-sm);
		color: var(--lumi-color-text-muted);
		text-decoration: none;
		border-inline-start: var(--lumi-border-width-thick) solid transparent;
		transition: var(--lumi-transition-control);
	}

	a:hover {
		color: var(--lumi-color-text);
	}

	a.active {
		color: var(--lumi-color-primary);
		border-inline-start-color: var(--lumi-color-primary);
	}

	a:focus-visible {
		outline: var(--lumi-focus-outline);
		outline-offset: var(--lumi-focus-outline-offset);
	}
</style>
