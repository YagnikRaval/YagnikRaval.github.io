// scripts: dark mode, share buttons, mobile nav, misc
(function(){
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  // Default to light theme unless user previously chose dark
  function applyTheme(theme){
    if(theme==='dark'){
      document.documentElement.setAttribute('data-theme','dark');
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content','#0b0b10');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content','#ffffff');
    }
  }
  applyTheme(stored || 'light');
  window.toggleTheme = function(){
    const current = document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light';
    const next = current==='dark'?'light':'dark';
    applyTheme(next);
    localStorage.setItem('theme',next);
  }

  // Mobile nav toggle
  window.toggleNav = function(){
    document.body.classList.toggle('nav-open');
  }

  // Sharing helper
  window.shareTo = function(platform, opts){
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(opts?.text || document.title);
    let shareUrl = '';
    switch(platform){
      case 'twitter': shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`; break;
      case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`; break;
      case 'linkedin': shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`; break;
      case 'whatsapp': shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`; break;
      default: return;
    }
    window.open(shareUrl,'share','width=640,height=480,noopener');
  }

  // enhance share buttons with attribute data-share
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('[data-share]').forEach(btn=>{
      btn.addEventListener('click', function(e){
        const platform = btn.getAttribute('data-share');
        const text = btn.getAttribute('data-text') || document.title;
        shareTo(platform,{text});
      });
    });

    // nav toggle button hookup
    const navToggle = document.querySelector('[data-nav-toggle]');
    if(navToggle){navToggle.addEventListener('click', toggleNav)}
  });
})();
