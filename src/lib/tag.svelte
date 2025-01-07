<script>
	let { children } = $props();
</script>

<div
	class="bg-tagcolor h-[1.75rem] truncate rounded-xl border border-bordercolor px-2 align-middle"
>
	{@render children()}
</div>
