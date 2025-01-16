<script lang="ts">
	import EmailIcon from '$lib/icons/email_icon.svelte';
	import GithubIcon from '$lib/icons/github_icon.svelte';
	import ItchioIcon from '$lib/icons/itchio_icon.svelte';
	import LinkedinIcon from '$lib/icons/linkedin_icon.svelte';

	let socials = [
		{ href: 'mailto:hello@franciscunha.com', label: 'hello@franciscunha.com', icon: EmailIcon },
		{ href: 'https://github.com/franciscunha', label: 'franciscunha', icon: GithubIcon },
		{
			href: 'https://www.linkedin.com/in/francunha/',
			label: '/in/francunha',
			icon: LinkedinIcon
		},
		{ href: 'https://moonsheep.itch.io/', label: 'moonsheep.itch.io', icon: ItchioIcon }
	];

	let { horizontal }: { horizontal: boolean } = $props();
</script>

<div
	class={[
		'flex max-sm:flex-col max-sm:items-start max-sm:gap-2',
		!horizontal && 'sm:flex-col sm:items-start sm:gap-2',
		horizontal && 'sm:w-full sm:flex-row sm:justify-center sm:gap-12'
	]}
>
	{#each socials as social}
		<a href={social.href} class="flex flex-row items-center gap-2"
			><social.icon size={2} />{social.label}</a
		>
	{/each}
</div>
