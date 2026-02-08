(function() {
  'use strict';

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('is-open');
    });
  }

  // TOC toggle
  var tocToggle = document.getElementById('toc-toggle');
  var toc = document.getElementById('toc');
  if (tocToggle && toc) {
    tocToggle.addEventListener('click', function() {
      toc.classList.toggle('is-open');
    });
  }

  // Back to top
  var btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '&uarr;';
  document.body.appendChild(btn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }, { passive: true });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
