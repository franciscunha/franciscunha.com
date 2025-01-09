---
name: Personal Website
cover: /images/personal_website/cover.png
highlight: true
summary: 
  The website you're on right now! A home for all my projects, and my personal little corner of the internet. Check out its code on GitHub.
order: 10
year: 2025
tags:
  - Web
  - Svelte
  - Personal project
sidebar:
---

The website you’re on right now! You can check out its code [on GitHub](https://github.com/franciscunha/franciscunha.com).

With my graduation approaching, I needed a place to showcase all the projects I’ve worked on over the years to potential employers – and what better way than creating my own little corner of the internet?

The first step was creating a low-fidelity prototype using **Figma**, to capture and help with the conceptualization stage and then to nail down a layout and overall structure. After which, it was time to code.

![Screenshot of initial wireframes for this website.](/images/personal_website/wireframe.png)

I decided to use the opportunity to learn a JavaScript framework I had heard some buzz about, **Svelte**. My needs for the website were simple, but I still managed to use some features from Svelte and SvelteKit past their basic syntax, like reactivity, dynamic routing and transition animations. 

Overall I quite enjoyed using the framework – its similarity to plain HTML makes for a more streamlined coding experience, and I found its features simpler to use than what I’ve experienced with React. In the end I even managed to leverage [mdsvex](https://mdsvex.pngwn.io/docs) to get the contents of [project pages](https://github.com/franciscunha/franciscunha.com/blob/main/src/routes/project/%5Bslug%5D/%2Bpage.svelte) from plain markdown files.

Finally, I used GitHub Pages to deploy it. As a simple frontend-only application, the website could be built to static HTML, making the deployment process a little easier.

I hope you enjoy browsing it :)