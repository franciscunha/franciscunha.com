<script lang="ts">
	import '../app.css';
	import LoopingStrings from './looping_strings.svelte';
	import Navigation from './navigation.svelte';

	let { children } = $props();
</script>

<!-- Header -->
<div
	class="fixed top-0 z-50 flex h-28 w-full justify-center border-b bg-white/50 px-4 backdrop-blur"
>
	<div class="flex h-full w-full items-center justify-between md:w-3/4">
		<!-- Title -->
		<div>
			<h1 class="text-4xl">Francisco Cunha</h1>
			<LoopingStrings strings={['Game developer', 'Graphics programmer', 'Web developer']} />
		</div>

		<Navigation />
	</div>
</div>

<!-- Contents -->
<div class="mx-4 my-40 flex justify-center">
	<div class="w-full md:w-3/4">
		{@render children()}
	</div>
</div>
