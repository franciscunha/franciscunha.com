<script lang="ts">
	import ProjectCard from '$lib/project_card.svelte';
	import Tag from '$lib/tag.svelte';
	import FilterIcon from '$lib/icons/filter_icon.svelte';

	import { get_all_tags, get_sorted_projects } from '$lib/load_project';
	import { reset_filter, select_element } from './filtering';

	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';
	import FilterResetIcon from '$lib/icons/filter_reset_icon.svelte';

	let projects = get_sorted_projects();

	let selected_tags = $state(get_all_tags());
	let unselected_tags: string[] = $state([]);

	const filter_icon_onclick = () =>
		([selected_tags, unselected_tags] = reset_filter(selected_tags, unselected_tags));
	const tag_onclick = (tag: string) =>
		([selected_tags, unselected_tags] = select_element(tag, selected_tags, unselected_tags));

	let { data } = $props();
	data.filters.forEach(tag_onclick);

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200)
	});

	$inspect(selected_tags);
</script>

<!-- Tag filters -->
<div class="flex h-[2rem] flex-row flex-wrap items-center gap-2">
	<!-- Selected tags -->
	<button onclick={filter_icon_onclick}>
		{#if unselected_tags.length === 0}
			<FilterIcon size={1.5} />
		{:else}
			<FilterResetIcon size={1.5} />
		{/if}
	</button>
	{#each selected_tags as tag (tag)}
		<button
			onclick={() => tag_onclick(tag)}
			in:receive={{ key: tag }}
			out:send={{ key: tag }}
			animate:flip
		>
			<Tag>{tag}</Tag>
		</button>
	{/each}
</div>
<div class="mb-8 flex h-[2rem] flex-row flex-wrap items-center gap-2">
	<!-- Unselected tags -->
	<div class="w-[1.5rem]"></div>
	{#each unselected_tags as tag (tag)}
		<button
			onclick={() => tag_onclick(tag)}
			class="opacity-50"
			in:receive={{ key: tag }}
			out:send={{ key: tag }}
			animate:flip={{ duration: 20 }}
		>
			<Tag>{tag}</Tag>
		</button>
	{/each}
</div>

<!-- Project cards -->
<div class="flex flex-row flex-wrap gap-12 max-md:justify-center md:justify-between">
	{#each projects as project}
		{#if selected_tags.some((tag) => project.tags.includes(tag))}
			<ProjectCard id={project.id} />
		{/if}
	{/each}
</div>
