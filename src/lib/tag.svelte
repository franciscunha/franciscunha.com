<script>
	let { children } = $props();
</script>

<div
	class="h-[1.75rem] truncate rounded-xl border border-bordercolor bg-tagcolor px-2 align-middle"
>
	{@render children()}
</div>
