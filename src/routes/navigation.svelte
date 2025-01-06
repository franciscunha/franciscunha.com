<script>
	import { page } from '$app/state';

	let navigation_items = [
		{ route: '/', label: 'About' },
		{ route: '/portfolio', label: 'Portfolio' }
		// TODO: CV page
		// { route: '/cv', label: 'CV' }
	];
</script>

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
