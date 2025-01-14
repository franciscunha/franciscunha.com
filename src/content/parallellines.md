---
name: parallellines
cover: /images/parallellines/head.png
highlight: true
summary: GPU software rasterizer implemented from scratch to replicate OpenGL's basic functionality.
order: 11
year: 2024
tags:
  - Graphics
  - C++
  - CUDA
  - Personal project
sidebar:
  - /images/parallellines/head.png
  - /images/parallellines/boggie_body.png
  - /images/parallellines/head_wireframe.png
---

[You can find the project on GitHub at github.com/franciscunha/parallellines.](https://github.com/franciscunha/parallellines)

GPU software rasterizer made by following [ssloy’s _tinyrenderer_ course](https://github.com/ssloy/tinyrenderer) and then porting the CPU-only rasterizer code to the GPU with CUDA. The rasterizer can handle rendering a single model with a diffuse and specular texture and a normal map, through user-defined vertex and fragment shaders.

I still find it incredible how just a collection of numbers – after having a whole lot of math done to them – can create all the beautiful visuals we see in video games and animation!

# What I learned

My goal was to improve on my knowledge of graphics programming by understanding some of the details of how it works at a low level.

Although I already had [partly implemented the rendering pipeline for an Intro to CG course at UFPB](https://github.com/franciscunha/introduction_to_computer_graphics), that was done using Three.js, so I felt the details were still abstracted away, specially with regards to how such a program runs on the GPU.

## Results

The project furthered my skills in C++, teaching me about advanced techniques such using pointers to create compact and manageable data structures; as well as specific language features such as class templates, pure virtual functions, or inline functions.

Applying in practice concepts I’d learned only in theory reinforced my knowledge of them. I now have a stronger understanding of concepts like the rendering pipeline, matrix operations and transformations, rendering lines and triangles and the implementation of basic shaders.

Prior to this project I had no experience with CUDA. It taught me the basics of how it works and its API, and how tricky it can be to manage host and device memory, specially when dealing with complex data structures like the ones needed for CG applications. I now feel equipped to leverage the GPU for any system that might make use of its parallellization capabilities.

## Resources used

- [https://github.com/ssloy/tinyrenderer](https://github.com/ssloy/tinyrenderer)
- [https://jtsorlinis.github.io/rendering-tutorial/](https://jtsorlinis.github.io/rendering-tutorial/)
- [https://www.songho.ca/opengl/gl_camera.html](https://www.songho.ca/opengl/gl_camera.html)
- [https://developer.nvidia.com/blog/even-easier-introduction-cuda/](https://developer.nvidia.com/blog/even-easier-introduction-cuda/)
- \+ many posts in Stack Overflow and Nvidia developer forums
