<script>
	import Tag from './tag.svelte';

	// TODO get data programatically

	let title = 'Cloud Hopper';
	let description =
		"Jump amongst the clouds in a cute sky archipelago in this short (~20 min) 3D platformer. Find keys to progress and the optional jewels for an extra challenge. Can you reach the island at the top? Cloud Hopper was developed as a course assignment within the Game Studies minor at Leiden University. It's my very first 3D game and my first real effort in level design, but mainly it was a lot of fun to make! Hope you also have fun playing :)";
	let tags = ['Tag 1', 'Tag 2'];
</script>

<div
	class="flex h-[30rem] w-[26rem] gap-4 rounded-lg border-2 max-md:flex-col max-md:px-4 max-md:py-2 md:h-[16rem] md:w-[36rem] md:pr-4"
>
	<!-- Left side: Image -->
	<img
		alt={'Image showcasing ' + title}
		src="https://img.itch.zone/aW1nLzE5MTY1MjQ1LnBuZw==/315x250%23c/YfVUJ%2F.png"
		class="max-md:h-1/2 max-md:w-4/5 max-md:self-center"
	/>
	<!-- Right side: Details -->
	<div class="flex flex-col justify-between gap-2 py-2 max-md:h-1/2 md:h-full">
		<!-- Title -->
		<h2 class="text-xl font-semibold">{title}</h2>
		<!-- Description -->
		<p
			class="flex-grow truncate text-balance bg-gradient-to-b from-neutral-900 from-70% bg-clip-text text-sm text-transparent"
		>
			{description}
		</p>
		<!-- Tags -->
		<div class="flex flex-row flex-wrap gap-2">
			{#each tags as tag}
				<Tag>{tag}</Tag>
			{/each}
		</div>
	</div>
</div>
