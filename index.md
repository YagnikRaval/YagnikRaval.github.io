---
layout: home
title: "Home"
---

<section class="intro container">
  <h1>Yagnik Raval</h1>
  <p class="subtitle">Writer • Poet • Storyteller</p>
  <p>Welcome — this is a place for poems, short essays, and writing projects. New posts appear below. Use the "Posts" page to explore or add new posts in the <code>_posts/</code> folder.</p>
</section>

<section class="posts container">
  <h2>Recent posts</h2>
  <ul class="post-list">
    {% for post in paginator.posts %}
      <li class="post-item">
        <article>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p class="meta">{{ post.date | date: "%B %d, %Y" }}{% if post.tags %} &middot; {% for tag in post.tags %}<a class="tag" href="/tag/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}{% endif %}</p>
          <p class="excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
        </article>
      </li>
    {% endfor %}
  </ul>

  {% if paginator.total_pages > 1 %}
  <nav class="pagination" role="navigation">
    {% if paginator.previous_page %}
      <a class="prev" href="{{ paginator.previous_page_path | relative_url }}">&larr; Newer</a>
    {% endif %}
    <span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
    {% if paginator.next_page %}
      <a class="next" href="{{ paginator.next_page_path | relative_url }}">Older &rarr;</a>
    {% endif %}
  </nav>
  {% endif %}
</section>
