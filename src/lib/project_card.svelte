<script>
	import { load_metadata } from './load_project';
	import Tag from './tag.svelte';

	let { id } = $props();
	let data = $state(load_metadata(id));
</script>

<a href={'/project/' + id}>
	<div
		class="border-bordercolor flex h-[30rem] w-[26rem] gap-4 rounded-lg border-2 max-md:flex-col max-md:pb-2 md:h-[16rem] md:w-[36rem] md:pr-4 lg:w-[34vw]"
	>
		{#await data}
			<div class="flex h-full w-full items-center justify-center">
				<p>Loading project info...</p>
			</div>
		{:then data}
			<!-- Left side: Image -->
			<img
				alt={'Image showcasing ' + data.name}
				src={data.cover}
				class="overflow-hidden object-cover max-md:h-1/2 max-md:w-full max-md:self-center max-md:rounded-t-md md:w-3/5 md:rounded-l-md"
			/>
			<!-- Right side: Details -->
			<div
				class="flex flex-col justify-between gap-2 py-2 max-md:h-1/2 max-md:px-4 md:h-full md:w-2/5"
			>
				<!-- Title -->
				<h2 class="text-xl font-semibold">{data.name}</h2>
				<!-- Description -->
				<p
					class={'from-fontcolor flex-grow truncate text-balance bg-gradient-to-b from-70% bg-clip-text text-sm text-transparent'}
				>
					{data.summary}
				</p>
				<!-- Tags -->
				<div class="flex flex-row flex-wrap gap-2">
					{#each data.tags as tag}
						<Tag>{tag}</Tag>
					{/each}
				</div>
			</div>
		{/await}
	</div>
</a>
