<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex h-[50vh] w-full flex-col items-center justify-center gap-8">
	<h1 class="text-2xl">
		<span class="font-semibold">{page.status}</span>
		{page.error?.message || ''}
	</h1>
	<div class="rounded-lg border-2 p-2">
		<a class="text-lg" href="/">Back to homepage</a>
	</div>
</div>
