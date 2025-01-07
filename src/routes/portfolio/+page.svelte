<script lang="ts">
	import { get_all_metadata, get_all_tags } from '$lib/load_project';

	import ProjectCard from '$lib/project_card.svelte';
	import Tag from '$lib/tag.svelte';
	import FilterIcon from '../../lib/icons/filter_icon.svelte';

	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';

	// sorted by year
	let projects = Object.entries(get_all_metadata())
		.map(([id, meta]) => ({ id, ...meta })) // flatten {id: meta} to {id, ...meta}[]
		.sort((a, b) => b.year - a.year); // sort {id, ...meta}[] by year

	let tags = get_all_tags();

	let selected_tags = $state(tags);
	let unselected_tags: string[] = $state([]);

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200)
	});

	function select_tag(tag: string) {
		const index = selected_tags.indexOf(tag);

		if (index !== -1) {
			selected_tags.splice(index, 1);
			unselected_tags.push(tag);
		} else {
			selected_tags.push(tag);
			unselected_tags.splice(unselected_tags.indexOf(tag), 1);
		}
	}

	function reset_filter() {
		selected_tags = tags;
		unselected_tags = [];
	}

	$inspect(selected_tags);
</script>

<!-- Tag filters -->
<div class="flex h-[2rem] flex-row flex-wrap items-center gap-2">
	<!-- Selected tags -->
	<button onclick={reset_filter}>
		<FilterIcon size="1.5" />
	</button>
	{#each selected_tags as tag (tag)}
		<button
			onclick={() => select_tag(tag)}
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
			onclick={() => select_tag(tag)}
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
