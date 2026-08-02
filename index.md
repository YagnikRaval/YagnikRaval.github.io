---
layout: home
title: "Home"
---

<section class="intro container">
  <h1>{{ site.title }}</h1>
  <p class="subtitle">{{ site.description }}</p>
  <p>Welcome — this is a place for poems, short essays, and writing projects. New posts appear below. Add new posts in the <code>_posts/</code> folder using the filename format <code>YYYY-MM-DD-your-title.md</code>.</p>
</section>

<section class="posts container">
  <h2>Recent posts</h2>
  <ul class="post-list">
    {% for post in site.posts %}
      <li class="post-item">
        <article>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p class="meta">{{ post.date | date: "%B %d, %Y" }}{% if post.tags %} &middot; {% for tag in post.tags %}<a class="tag" href="/tag/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}{% endif %}</p>
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
        </article>
      </li>
    {% endfor %}
  </ul>
</section>
