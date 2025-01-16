<script>
	import ProjectCard from '$lib/project_card.svelte';
	import Socials from '$lib/socials.svelte';
	import AboutMe from './about_me.md';

	import { get_highlighted } from '$lib/load_project';
	import { fly } from 'svelte/transition';

	let highlighted_projects = get_highlighted();

	let project_index = $state(0);
	let prev_p_index = $state(0);
	let project_id = $derived(highlighted_projects[project_index]);
</script>

<div
	class="flex w-full place-items-center gap-24 max-lg:flex-col-reverse lg:flex-row lg:justify-center"
>
	<div class="max-md:flex max-md:flex-col-reverse">
		<img
			src="images/me.png"
			alt="Francisco Cunha's face"
			class="max-h-[50vh] object-contain max-md:h-1/3"
		/>
		<div class="max-md:-mt-32 max-md:mb-8 md:mt-8">
			<h1 class="text-bold mb-2">Find me at</h1>
			<Socials horizontal={false} />
		</div>
	</div>
	<div class="max-w-2xl max-md:flex max-md:flex-col">
		<div>
			<h1>About me</h1>
			<AboutMe />
		</div>

		<h2 class="my-8 mt-14">
			<span class="font-semibold">Highlighted projects</span> |
			<a href="/portfolio" class="underline max-sm:text-base">All projects</a>
		</h2>

		<div class="w-max max-md:self-center">
			{#key project_id}
				<div in:fly={{ x: prev_p_index < project_index ? 100 : -100, duration: 250 }}>
					<ProjectCard id={project_id} />
				</div>
			{/key}
			<div class="flex w-full flex-row justify-center gap-2">
				{#each highlighted_projects as _, i}
					<button
						onclick={() => {
							prev_p_index = project_index;
							project_index = i;
						}}
					>
						{#if project_index === i}
							⬤
						{:else}
							〇
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-2xl;
		@apply font-semibold;
	}

	h2 {
		@apply text-2xl;
	}
</style>
