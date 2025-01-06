<script>
	let { children } = $props();
</script>

<div class="h-[1.75rem] truncate rounded-xl border bg-slate-300 px-2 align-middle">
	{@render children()}
</div>
