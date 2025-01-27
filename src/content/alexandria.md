---
name: Alexandria
cover: /images/alexandria/cover.png
highlight: true
summary: An open-source collaborative platform dedicated to publishing, discussing and developing scientific research. Made for researchers and inspired by Wikipedia and GitHub, with a built-in discussion and peer review system. Developed for the Multimedia Computing Group of TU Delft.
order: 12
year: 2024
tags:
  - Web
  - React
  - NextJS
sidebar:
  - /images/alexandria/homepage.png
  - /images/alexandria/post-page.png
  - /images/alexandria/filetree.png
  - /images/alexandria/file-contents.png
  - /images/alexandria/version-list.png
  - /images/alexandria/branch-page-compare.png
  - /images/alexandria/add-peer-review.png
  - /images/alexandria/peer-review-section.png
---

![Alexandria's logo](/images/alexandria/logo.png)

[You can find the project’s source on GitHub](https://github.com/Alexandria-TEMP/Alexandria-Client) and <a href="/attachments/alexandria/Alexandria_Report.pdf">read its report here</a>.

# The platform

Alexandria is a collaborative open-source platform dedicated to publishing, discussing and developing scientific research. It is designed to be community-oriented and intersectional, merging the functionality of version control with an intuitive interface. Any user can post their reflections, ask questions or publish research. Any work published on the platform becomes property of the community – anyone can make additions to it. Community members with the relevant expertise are able to peer review the proposed additions, approving or rejecting the changes. In this way, the community controls how a post evolves.

Posts are repositories of Quarto files, rendered by the platform into a human-readable format. This allows users to share the code behind their work, merging the gap between the process and the final result of research. Quarto is easier to use than LaTex, as it is a form of Markdown, and allows for the incorporation of complex figures using the four most common scientific programming languages: Python, R, Julia, and Observable.

# The project

Alexandria was developed for the course [Software Project CSE2000 at the Delft University of Technology](https://sp.pages.ewi.tudelft.nl/site/). As the [university describes it](https://sp.pages.ewi.tudelft.nl/site/), “as part of the project, \[we had] to conduct requirements engineering, write a project plan, implement and test an appropriate solution, and present results” for an external client with some real world need.

To that end, my team (Jannes Kelso, Maxime Caux, Miruna Cosmina Negoitescu, Eve Smura, and myself) decided to implement a **proof-of-concept** for Alexandria, based on the high-level vision devised by Andrew Demetriou and Cynthia Liem of the Multimedia Processing Group TU Delft.

We opted for a broad scope, to present the possibilities of Alexandria, and identified the core functionalities that could be developed within the time frame of the project (10 weeks). In this time, we developed a web application in which users can create publications using the Quarto format, which contain more data than a traditional PDF; suggest modifications to publications, which can be incorporated after being peer reviewed; review publications and proposed changes, accepting or rejecting them; participate in detailed yet informal scientific discussions about a project; browse through all the publications; and see the publication that was rendered from a Quarto project, as well as the source files that underlie it.

## My contributions

We chose to split our team into two groups: me and Miruna Negoitescu worked on the [platform’s frontend](https://github.com/Alexandria-TEMP/Alexandria-Client), while the rest of the team worked on the [backend](https://github.com/Alexandria-TEMP/Alexandria-Server). Besides that, I contributed to architecture and design decisions on both parts of the system.

My contributions focused mainly on the **system-to-user** information flow, rather than user-to-system. Some of the most interesting aspects I implemented were:

- Embedding rendered Quarto projects within a ‘post page’, which itself includes several other UI elements;
- Allowing the user to navigate through the Quarto project’s source files and read their raw contents, similar to how GitHub projects are displayed;
- Displaying a side-by-side comparison of Quarto projects, showing proposed changes to users alongside user-contributed reviews to those changes.

You can find more details about the implementation by [reading the project’s source code on GitHub](https://github.com/Alexandria-TEMP/Alexandria-Client) or <a href="/attachments/alexandria/Alexandria_Report.pdf">reading its report</a>.
