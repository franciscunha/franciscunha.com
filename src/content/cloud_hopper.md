---
name: Cloud Hopper
cover: /images/cloud_hopper/cover.png
highlight: true
summary: Jump amongst the clouds of a cute sky archipelago in this 3D platformer. Can you reach the island at the top?
order: 10
year: 2024
tags: 
  - Game
  - Godot
  - University project
sidebar:
  - /images/cloud_hopper/screenshot_1.png
  - /images/cloud_hopper/screenshot_2.png
  - /images/cloud_hopper/screenshot_3.png
  - /images/cloud_hopper/screenshot_4.png
---

<iframe class="video" src="https://www.youtube.com/embed/5Em5iiFEpm4" title="Cloud Hopper - Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Jump amongst the clouds of a cute sky archipelago in this short (~20 min) 3D platformer. Find keys to progress and the optional jewels for an extra challenge. Can you reach the island at the top?

Cloud Hopper was developed as a course assignment within the Game Studies minor at Leiden University. It’s a game of a few firsts for me: my first non-toy project in Godot, my first 3D game, and my first foray in level design. 

<iframe frameborder="0" src="https://itch.io/embed/3209353?linkback=true&amp;bg_color=f4f8ff&amp;fg_color=222222&amp;link_color=0484d1&amp;border_color=94c5d0" width="552" height="167" title="Cloud Hopper - itch.io"><a href="https://moonsheep.itch.io/cloud-hopper">Cloud Hopper by Francisco Cunha</a></iframe>

# Implementation highlights

## Level building blocks

From the start, I knew I wanted to have two “building blocks” – special elements of the level that introduce some gameplay mechanic that I could center challenges around. Since they’re so fundamental, their implementation was the second thing I tasked myself with doing (right after character movement). By leveraging Godot’s built in physics and movement systems, I managed to make them quite simple.

### Tether

The tether is a spherical area that, on player input, immediately pulls the player to its center, keeping them there as long as the input is held.

![Tether](/images/cloud_hopper/tether.png)

When the tether input is pressed inside a tether’s area, the character’s velocity gets overridden: instead of movement input, it just considers the direction to the tether. Then when that input is released, the velocity is once again determined by player input, then I make the character jump, and allow for extra jumps and a spin if the player had already used them, which greatly helps with game feel. And that’s it!

### Sticky wall

The sticky wall is a large surface that, if touched by the player, holds them in their vertical position while still allowing horizontal movement.

![Sticky wall](/images/cloud_hopper/sticky_wall.png)

All it does is set a value once the player character is touching it: its `up_direction` gets set to the wall’s normal vector. This “tricks” the engine into thinking the wall is actually a floor, keeping the engine variable `is_grounded` true for the character while touching it – which then prevents gravity from doing its thing in the character controller code.

For an improvement to game feel, I also ignore input that is too close to the `up_direction` – this makes no difference when that direction is the “global” up, but helps with the character not coming loose from the wall too easily.

```GDScript
# if input is pushing a little away from the up direction but not directly away, 
# remove the influence of that direction from the input.
# ensures player sticks to the sticky wall unless pushing directly away from it.
if input.dot(up_direction) > 0 and input.angle_to(up_direction) > deg_to_rad(15):
	input = input - up_direction
```

## Avoiding view obstruction

An usual problem of 3D platformer are objects getting in between the camera and the player character, obstructing the player’s view. In keeping with the philosophy of the building blocks implementation, I tried to solve this as simply as I could, leveraging Godot features for that purpose.

![Unobstructed view](/images/cloud_hopper/unobstructed_view.png)

My solution was to use `GeometryInstance3D.transparency` to make any objects between the camera and the player character partially transparent. They are kept that way until the path between the camera and the player is free – at which point they all go back to opaque. The resulting effect is very unobtrusive, ensuring the player always has a clear view to their character while not losing sight of any level geometry.

## Procedural decorations

At some point I felt the levels were a bit barren, so I implemented a neat small thing for improved visuals: procedural decorations. This is simply a scene that defines an area, then randomly instantiates select models in that area according to a density parameter. All the flowers, mushrooms, grass and such that you see in the game were put there by the procedural decoration scenes.

# Game design

## Gameplay design

The main design touchstone for this level was **aerial movement**. This came from analysing what I enjoy most about platformers, and coming up with: player expression through movement options that are uncommon in other games, and the tension that builds up as you go through a tough platforming challenge until reaching the next safe point. Aerial movement marries these two elements, providing tension by removing solid ground for the player to rely on and giving opportunities to express themselves in how they manoeuvre in the air.

To prevent the game from feeling too punishing, there is no health system. Falling just means you immediately go back to the last checkpoint touched, and they are placed very frequently throughout the level. For players that find the base challenges too easy, there are a few of an extra collectible (jewels) hidden behind extra challenging sections.

I also wanted to give the player extra tools to make overall gameplay more engaging, allowing for more ways to express themselves and to stay in the air. To that end I added a movement option: the air spin. It can only be done while airborne and halts downwards gravity while still allowing sideways and forwards-backwards movement – the intention with it is allowing more precision while in the air and extending airtime.

## Level building blocks

As mentioned before, I wanted to have two “building blocks” – special elements of the level that introduce some gameplay mechanic that I could center challenges around. Here I outline the thoughts behind their design.

The sticky wall is a large surface that, if touched by the player, holds them in their vertical position while still allowing horizontal movement. It serves as semi-rest point that allows player a moment to access their surroundings without grounding them, reinforcing the aerial movement theme. Placing them in a section ups the tension, as the player doesn’t get the full relief of being grounded, but can also make the challenge easier, as to trigger it the player simply has to “smash against it”, without the precision required for a ground landing. Touching it also resets the player’s ability to (double) jump and spin, which they can usually only do once after going up in the air, so they allow the player to cover greater distances before touching the ground.

The tether is a spherical area that, on player input, immediately pulls the player to its center, keeping them there as long as the input is held. It’s an additional ungrounded movement option, and can make player cover even more distance both vertically and horizontally without touching the ground. It also acts as a “safety net” – if the player is within its area, holding their input will bring them to safety (but not fully release tension). Additionally, they allow more air movement in two ways: first is that when releasing their input they give the player an upwards thrust that acts as an additional jump, and second is that by pulling themselves to one the player also resets their (double) jump and spin, allowing double the air movement.

## Level design

Inspired both by the available assets in Kenney’s kits and the design theme, the level is aesthetically a cluster of floating islands in the middle of the sky, among the clouds. The theming is light-hearted and playful, with nature props and clouds spread throughout. Both props and coins were placed in attempts to guide the player’s attention to the intended path, giving hints of where they should go next.

![Level structure diagram](/images/cloud_hopper/level_structure.png)

The level follows a hub-and-spoke structure. The intent was to introduce each of the game’s building blocks in isolation before combining them all in a gauntlet of advanced challenges the player goes through before finishing the game.

The player starts in a small tutorial section that teaches base mechanics, then is lead to the hub where they can choose which spoke to tackle first. The spokes loop around back to the hub and at the end of each is a key. The final section of the level is gated behind a door with two locks, indicating to the player they need to find two keys to progress through there – these are the keys found at the spokes
