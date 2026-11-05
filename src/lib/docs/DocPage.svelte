<script lang="ts">
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Check from '@lucide/svelte/icons/check';
	import X from '@lucide/svelte/icons/x';
	import { Button, Card, Icon, PageHeader, Title } from '@lumi-ui/svelte';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import { currentLang, link, sitePath } from '$lib/i18n';
	import { NAV_ITEMS, navItemFor } from '$lib/navigation';
	import type { LoadedDemo } from './load';
	import PageIndex from './PageIndex.svelte';
	import PropsTable from './PropsTable.svelte';
	import type { Doc } from './types';

	const { doc, demos }: { doc: Doc; demos: (LoadedDemo | undefined)[] } = $props();

	const COPY = {
		en: {
			importLabel: 'Import',
			use: 'Use it for',
			avoid: 'Use something else for',
			props: 'Props',
			next: 'Next'
		},
		es: {
			importLabel: 'Importar',
			use: 'Úsalo para',
			avoid: 'Usa otra cosa para',
			props: 'Props',
			next: 'Siguiente'
		}
	} as const;

	const lang = $derived(currentLang());
	const t = $derived(COPY[lang]);
	const item = $derived(navItemFor(sitePath()));
	const position = $derived(NAV_ITEMS.indexOf(item));
	const previous = $derived(NAV_ITEMS[position - 1]);
	const next = $derived(NAV_ITEMS[position + 1]);
	const index = $derived([
		...doc.sections.map(({ id, title }) => ({ id, title: title[lang] })),
		...(doc.props ? [{ id: 'props', title: t.props }] : [])
	]);
</script>

<div class="doc">
	<article class="lumi-stack lumi-stack--xl lumi-min-width--0">
		<PageHeader
			title={item.label[lang]}
			subtitle={item.description[lang]}
			icon={item.icon}
			size="xl"
		/>

		{#if doc.importLine}
			<CodeBlock code={doc.importLine} label={t.importLabel} />
		{/if}

		{#if doc.use && doc.avoid}
			<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-md">
				<Card title={t.use} spaced>
					<ul class="guidance lumi-stack lumi-stack--xs">
						{#each doc.use[lang] as entry (entry)}
							<li class="lumi-flex lumi-flex--gap-xs">
								<span class="lumi-text--success"><Icon icon={Check} size="sm" /></span>
								<span>{entry}</span>
							</li>
						{/each}
					</ul>
				</Card>
				<Card title={t.avoid} spaced>
					<ul class="guidance lumi-stack lumi-stack--xs">
						{#each doc.avoid[lang] as entry (entry)}
							<li class="lumi-flex lumi-flex--gap-xs">
								<span class="lumi-text--muted"><Icon icon={X} size="sm" /></span>
								<span>{entry}</span>
							</li>
						{/each}
					</ul>
				</Card>
			</div>
		{/if}

		{#each doc.sections as section, index (section.id)}
			{@const demo = demos[index]}
			<section id={section.id} class="lumi-stack lumi-stack--md lumi-min-width--0">
				<div class="lumi-stack lumi-stack--xs">
					<Title title={section.title[lang]} level={2} size="md" />
					<p class="lumi-text--muted lumi-margin--none">{section.text[lang]}</p>
				</div>
				{#if demo}
					<div class="preview lumi-min-width--0"><demo.component /></div>
					{#if section.showCode !== false}
						<CodeBlock code={demo.code} label={`${section.demo}.svelte`} />
					{/if}
				{/if}
				{#if section.snippet}
					<CodeBlock code={section.snippet.code} label={section.snippet.label} />
				{/if}
			</section>
		{/each}

		{#if doc.props}
			<section id="props" class="lumi-stack lumi-stack--md lumi-min-width--0">
				<div class="lumi-stack lumi-stack--xs">
					<Title title={t.props} level={2} size="md" />
					{#if doc.propsNote}
						<p class="lumi-text--muted lumi-margin--none">{doc.propsNote[lang]}</p>
					{/if}
				</div>
				<PropsTable props={doc.props} />
				{#each doc.moreProps ?? [] as group (group.title)}
					<Title title={group.title} level={3} size="sm" />
					<PropsTable props={group.props} />
				{/each}
			</section>
		{/if}

		<nav class="lumi-flex lumi-justify--between lumi-flex--gap-sm" aria-label={t.next}>
			{#if previous}
				<Button variant="border" icon={ArrowLeft} href={link(previous.path)}>
					{previous.label[lang]}
				</Button>
			{/if}
			{#if next}
				<Button variant="border" icon={ArrowRight} iconAfter href={link(next.path)}>
					{next.label[lang]}
				</Button>
			{/if}
		</nav>
	</article>
	<PageIndex entries={index} />
</div>

<style>
	/* El índice ocupa una columna solo cuando el contenido tiene ancho de sobra. */
	.doc {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--lumi-space-xl);
	}

	@media (min-width: 90rem) {
		.doc {
			grid-template-columns: minmax(0, 1fr) 13rem;
		}
	}

	section {
		scroll-margin-block-start: var(--lumi-space-5xl);
	}

	/* La biblioteca no ofrece un marco de demostración: composición propia con tokens públicos. */
	.preview {
		padding: var(--lumi-space-lg);
		border: var(--lumi-border-width-thin) solid var(--lumi-color-border-glass);
		border-radius: var(--lumi-radius-panel);
		background: var(--lumi-color-surface-card);
	}

	.guidance {
		margin: 0;
		padding: 0;
		list-style: none;
	}
</style>
