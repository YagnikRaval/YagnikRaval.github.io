// Minimal JS for header interactions, search, and progressive enhancement
document.addEventListener('DOMContentLoaded', function(){
  // Client-side search and tag filtering using the generated posts.json
  const searchInput = document.getElementById('site-search');
  const postsContainer = document.querySelector('.post-list');
  let posts = [];

  function renderPosts(list){
    if(!postsContainer) return;
    if(list.length === 0){
      postsContainer.innerHTML = '<li class="post-item">No posts found.</li>';
      return;
    }
    postsContainer.innerHTML = list.map(p => `\n      <li class="post-item">\n        <article>\n          <h3><a href="${p.url}">${p.title}</a></h3>\n          <p class="meta">${p.date} ${p.tags && p.tags.length ? ' · ' + p.tags.map(t => `<a class="tag" href="/tag/${t.replace(/\s+/g,'-').toLowerCase()}/">${t}</a>`).join(', ') : ''}</p>\n          <p class="excerpt">${p.excerpt}</p>\n        </article>\n      </li>`).join('');
  }

  function normalize(str){
    return (str || '').toLowerCase();
  }

  function applyFilter(){
    const q = normalize(searchInput && searchInput.value);
    if(!q){ renderPosts(posts); return; }
    const filtered = posts.filter(p => {
      return normalize(p.title).includes(q) || normalize(p.excerpt).includes(q) || (p.tags || []).some(t => normalize(t).includes(q));
    });
    renderPosts(filtered);
  }

  // Load posts.json
  fetch('/assets/posts.json')
    .then(res => res.json())
    .then(data => {
      posts = data;
      renderPosts(posts);
    })
    .catch(()=>{
      // fallback: do nothing — server-rendered posts remain
    });

  if(searchInput){
    searchInput.addEventListener('input', applyFilter);
  }
});
