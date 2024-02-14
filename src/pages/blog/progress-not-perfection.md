---
layout: post.njk
tags: post

meta:
  title: Progress, Not Perfection
  date: February 14, 2024
  description: My approach to building this website adheres to the adage of "add it when necessary, not a moment sooner." What does that mean as I add a new blog to a static, one-page website?
  keywords: web development, build process, 11ty, technical strategy
---

My approach to building this website has always adhered to the adage of "add it when necessary, not a moment sooner." It's one of the only ways I manage to make any progress on this website at all. If I didn't try to keep things as simple as possible I would easily become overwhelmed with decision paralysis and the need to make things _perfect_. I'm a serial perfectionist and it usually keeps good ideas from getting off the ground. I've wanted to start a blog for some time now so I had to dig deep and really stick to my productive philosophy.

## How this blog was built

The first step to adding a blog was to add a static site generator to the build process. I needed to separate the page into a base layout and components that I could drop content into. I decided to go with [11ty](https://www.11ty.dev/) and it was [suspiciously simple](https://github.com/kaseybon/kaseybon/pull/34/commits/b458b01eb1caef43c3ae4a0a04fd1c802bad269e) to integrate into my existing project. I love it!

Once 11ty was compiling my pages I separated the homepage layout from the content so I could reuse the layout for other page types. At this point, I had to resist the urge to over-refactor the site and further break the layout into components. Deep down I know I'll do this someday but at this moment I needed to stay focused on the goal&#45;build a blog as simply as possible.

At this point, my site was ready to start generating blog posts! 11ty makes it as simple as creating a `blog` directory and adding markdown files for individual blog posts. The build system does the rest. Before adding the first post I did [some work](https://github.com/kaseybon/kaseybon/pull/34) to make the posts easier to navigate:
- Loop through the articles tagged with "post" to make a list of links on the homepage
- Links back to the homepage were added in the header and breadcrumb navigation on blog pages
- CSS was modified to support the new content without changing existing content
- Added a sitemap and 404 page

You might notice that this work didn't include actually writing a blog post. To keep the scope of work as simple as possible I only focused on making a blog possible. Visually, the only thing most people will notice is that I removed links to external articles on the homepage. I plan on filling that list up soon.

## What about the rest of the blog?

There are a lot of elements that are still missing from the blog. I don’t have a listing pages, a system for tagging topics, pagination, or search. Adding new posts requires that I create a pull request and commit files every time. Some content, such as the date, needs to be hardcoded in the page and I can’t schedule posts. I’m ok with all of this…for now. I have ideas for how this website will grow but for now, I’m going to let each of those changes happen when they need to happen. 

> My add-it-when-necessary mindset came from reading the book _[Getting Real](https://basecamp.com/books/getting-real)_ by the folks at [Basecamp](https://basecamp.com/). It’s a quick but inspiring read that I highly recommend to anyone who builds software.
