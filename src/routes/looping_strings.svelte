<script lang="ts">
	import { fly } from 'svelte/transition';

	let { strings }: { strings: string[] } = $props();

	let i = $state(-1);

	$effect(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= strings.length;
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{#key i}
	<h2 class="text-2xl" in:fly={{ x: 20 }}>{strings[i] || ''}</h2>
{/key}
