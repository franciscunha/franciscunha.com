<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';

	let { children } = $props();

	let navigation_items = [
		{ route: '/', label: 'About' },
		{ route: '/projects', label: 'Portfolio' },
		{ route: '/cv', label: 'CV' }
	];
</script>

<!-- Header -->
<div
	class="fixed top-0 z-50 flex h-28 w-full items-center justify-between border-b px-4 backdrop-blur-md md:px-32"
>
	<!-- Title -->
	<div>
		<h1 class="text-4xl">Francisco Cunha</h1>
		<h2 class="text-2xl">Developer, or some other title</h2>
	</div>

	<!-- Navigation -->
	<div class="text-2xl">
		{#each navigation_items as item, i}
			<a
				href={item.route}
				class={{ 'font-semibold': page.url.pathname === item.route }}
				aria-current={page.url.pathname === item.route}
			>
				{item.label}
			</a>
			{#if i + 1 != navigation_items.length}
				<!-- on large screens: pipe character followed by a space -->
				<span class="max-md:hidden">|&nbsp;</span>
				<!-- on small screens: new line -->
				<span class="md:hidden"><br /></span>
			{/if}
		{/each}
	</div>
</div>

<!-- Contents -->
<div class="mx-4 my-32 md:mx-32">
	{@render children()}
</div>
