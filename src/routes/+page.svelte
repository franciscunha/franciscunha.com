<script>
	import EmailIcon from '$lib/icons/email_icon.svelte';
	import GithubIcon from '$lib/icons/github_icon.svelte';
	import ItchioIcon from '$lib/icons/itchio_icon.svelte';
	import LinkedinIcon from '$lib/icons/linkedin_icon.svelte';
	import ProjectCard from '$lib/project_card.svelte';

	let socials = [
		{ href: 'mailto:hello@franciscunha.com', label: 'hello@franciscunha.com', icon: EmailIcon },
		{ href: 'https://github.com/franciscunha', label: 'github.com/franciscunha', icon: GithubIcon },
		{
			href: 'https://www.linkedin.com/in/francunha/',
			label: 'linkedin.com/in/francunha',
			icon: LinkedinIcon
		},
		{ href: 'https://moonsheep.itch.io/', label: 'moonsheep.itch.io', icon: ItchioIcon }
	];

	let highlighted_projects = [
		'https://img.itch.zone/aW1nLzE5MTY1MjQ1LnBuZw==/315x250%23c/YfVUJ%2F.png',
		'https://img.itch.zone/aW1nLzEyNzI3OTQxLnBuZw==/315x250%23c/dXkSG1.png',
		'https://img.itch.zone/aW1nLzE5MTY1MjQ1LnBuZw==/315x250%23c/YfVUJ%2F.png',
		'https://img.itch.zone/aW1nLzEyNzI3OTQxLnBuZw==/315x250%23c/dXkSG1.png'
	];

	let project_index = $state(0);
</script>

<div class="flex w-full place-items-center gap-24 max-md:flex-col-reverse md:flex-row">
	<div>
		<img src="images/me.png" alt="Francisco Cunha" class="object-contain max-md:h-1/3" />
		<h1 class="text-bold mb-2 mt-8">Find me at</h1>
		<div class="flex flex-col items-start gap-2">
			{#each socials as social}
				<a href={social.href} class="flex flex-row items-center gap-2"
					><social.icon size={2} />{social.label}</a
				>
			{/each}
		</div>
	</div>
	<div>
		<div>
			<h1>Hi! My name is Francisco Cunha</h1>
			<p>
				Voluptatibus distinctio officiis autem velit consequatur nihil explicabo provident. Laborum
				sit ut aut sapiente fugiat odit. Tempora ipsum eum quis qui voluptatibus temporibus
				blanditiis. Inventore ipsam officiis enim dolorem corporis dolores expedita. Pariatur
				explicabo commodi earum ut id.
			</p>
			<p>
				Et autem vel voluptatem et magnam. Omnis nihil et eligendi alias tempore dolore omnis aut.
				Ad error dolores aliquid at nulla ipsam. Consequatur labore dolorem non aut nihil qui ab ut.
				Atque reiciendis et quisquam ex in voluptatem nihil eius. Qui ipsa omnis aperiam dolorum.
			</p>
		</div>

		<h2 class="my-8 text-2xl">
			<span class="font-semibold">Highlighted projects</span> |
			<a href="/portfolio">All projects</a>
		</h2>

		<div class="w-max">
			<ProjectCard src={highlighted_projects[project_index]} />
			<div class="flex w-full flex-row justify-center gap-2">
				{#each highlighted_projects as _, i}
					<button onclick={() => (project_index = i)}>
						{#if project_index === i}
							⬤
						{:else}
							〇
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		@apply text-2xl;
		@apply font-semibold;
	}

	p {
		@apply mt-4;
		@apply text-lg;
	}
</style>
