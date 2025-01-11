<script>
	import Tag from '$lib/tag.svelte';

	let { data } = $props();
	let has_sidebar = data.meta.sidebar && data.meta.sidebar.length > 0;
</script>

<div class={'border-bordercolor md:rounded-lg md:border-2 md:p-8'}>
	<div class="mb-12 flex justify-between max-md:flex-col md:flex-row">
		<h1 class="mr-8 font-bold">{data.meta.name}</h1>
		<div class="flex flex-row flex-wrap gap-2 max-md:mt-4 md:justify-end">
			{#each data.meta.tags as tag}
				<Tag>{tag}</Tag>
			{/each}
			<p class="ml-4 text-lg font-semibold">{data.meta.year}</p>
		</div>
	</div>

	<div class="flex gap-8 max-lg:flex-col lg:flex-row">
		<div class={['project-wrapper flex flex-col gap-4', has_sidebar && 'md:w-2/3']}>
			<data.content class="project-wrapper" />
		</div>

		{#if has_sidebar}
			<div class="flex flex-col gap-8 md:w-1/3">
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
		@apply max-md:w-full;
	}

	.project-wrapper :global(iframe.video) {
		@apply aspect-video;
		@apply h-auto;
		@apply md:w-4/5;
		@apply max-md:w-full;
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

	/* Code blocks */
	.project-wrapper :global(pre) {
		@apply rounded-lg;
		@apply bg-bordercolor;
		@apply p-4;
	}

	.project-wrapper :global(pre > code) {
		@apply text-wrap;
	}
</style>
