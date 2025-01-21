---
name: Sortify
cover: https://raw.githubusercontent.com/franciscunha/sortify/main/screenshot.png
highlight: false
summary: A command line application to organize Spotify playlists.
order: 12
year: 2024
tags:
  - Rust
  - Misc
sidebar:
---

[You can find the project on GitHub at github.com/franciscunha/sortify.](https://github.com/franciscunha/sortify)

Using Sortify, you can choose a playlist as the _source playlist_, and then have the option to _sort_ each track in it. When sorting, you choose _destination playlists_ to add that track to. When sorted, tracks are added to the other playlists, removed from the source, and added to your liked songs.

I wrote this simple application in under a week to learn the basics of Rust. The borrow checker does take quite a bit of getting used to, and it is more well-suited to lower-level applications rather than something like Sortify, but I still quite liked a lot of what it offers, and will likely choose to build something else with it if I get the chance.

![Screenshot of Sortify sorting the song Barely Legal by The Strokes](https://raw.githubusercontent.com/franciscunha/sortify/main/screenshot.png)
