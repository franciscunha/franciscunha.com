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
	class="fixed top-0 z-50 flex h-28 w-full justify-center border-b bg-white/50 px-4 backdrop-blur"
>
	<div class="flex h-full w-full items-center justify-between md:w-3/4">
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
					<!-- on large screens: pipe character -->
					<span class="max-md:hidden">|</span>
					<!-- on small screens: new line -->
					<span class="md:hidden"><br /></span>
				{/if}
			{/each}
		</div>
	</div>
</div>

<!-- Contents -->
<div class="mx-4 my-40 flex justify-center">
	<div class="w-full md:w-3/4">
		{@render children()}
	</div>
</div>
