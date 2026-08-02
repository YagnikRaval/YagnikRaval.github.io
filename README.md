# Yagnik Raval — GitHub Pages site

This repository contains a complete Jekyll-based website ready to be hosted with GitHub Pages. It is optimized for a writer/poet and includes layouts, styles, a sample post, and a simple client-side posts index for searching.

Quick start

1. Replace the email in `_config.yml` with your email.
2. Edit `index.md`, `about.md`, and `contact.md` as needed.
3. Add posts by creating files in the `_posts/` folder named like `2026-08-02-my-poem.md` with YAML front matter. See the sample post.
4. Enable GitHub Pages for this repository (Settings → Pages) if not already enabled; the default branch will be published.

Adding a new post

Create a file in `_posts/` with the following minimal structure:

```
---
layout: post
title: "My new poem"
date: 2026-08-02 12:00:00 +0000
tags: [poem, reflection]
---

Your post content here in Markdown.
```

Contact form

GitHub Pages cannot handle server-side forms. Use Formspree (https://formspree.io/) or Netlify Forms for an easy contact form.

Custom domain

If you want a custom domain, add a `CNAME` file with your domain and configure DNS according to GitHub's docs.

Search

A small JSON of posts is generated at `/assets/posts.json` so the client-side search can work. When you add posts, GitHub Pages will rebuild that file automatically.
