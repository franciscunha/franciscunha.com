<script>
	import Tag from '$lib/tag.svelte';
	import './prism-darcula.css';

	let { data } = $props();
	let has_sidebar = data.meta.sidebar && data.meta.sidebar.length > 0;
</script>

<div class={'border-bordercolor lg:rounded-lg lg:border-2 lg:p-8'}>
	<div class="mb-12 flex justify-between max-lg:flex-col lg:flex-row">
		<h1 class="mr-8 font-bold">{data.meta.name}</h1>
		<div class="flex flex-row flex-wrap gap-2 max-lg:mt-4 lg:justify-end">
			{#each data.meta.tags as tag}
				<a href={'/portfolio/' + tag}>
					<Tag>{tag}</Tag>
				</a>
			{/each}
			<p class="ml-4 text-lg font-semibold">{data.meta.year}</p>
		</div>
	</div>

	<div class="flex gap-8 max-lg:flex-col lg:flex-row">
		<div class={['project-wrapper flex flex-col gap-4', has_sidebar && 'lg:w-2/3']}>
			<data.content class="project-wrapper" />
		</div>

		{#if has_sidebar}
			<div class="flex flex-col gap-8 lg:w-1/3">
				{#each data.meta.sidebar as src, i}
					<img {src} alt={'Showcase of ' + data.meta.name + ' #' + i} />
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.project-wrapper :global(a) {
		@apply underline;
	}

	.project-wrapper :global(iframe) {
		@apply self-center;
		@apply max-lg:w-full;
	}

	.project-wrapper :global(iframe.video) {
		@apply aspect-video;
		@apply h-auto;
		@apply lg:w-4/5;
	}

	.project-wrapper :global(img) {
		@apply max-md:w-full;
		@apply md:max-w-xl;
		@apply lg:max-w-2xl;
		@apply object-contain;
	}

	/* Images will always have a parent <p>, so this are styles for the image wrapper */
	.project-wrapper :global(p:has(img)) {
		@apply self-center;
	}
</style>
