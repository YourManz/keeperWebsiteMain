/* =============================================
   KEEPER — Main JS
   Minimal: mobile nav toggle, smooth anchor scroll
   ============================================= */

(function () {
  'use strict';

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form: basic submission feedback
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const btn = form.querySelector('[type="submit"]');
      // Formspree handles the POST; just update button state
      btn.textContent = 'Sending…';
      btn.disabled = true;
      // Re-enable after 5s in case of network error
      setTimeout(function () {
        btn.textContent = 'Send Message';
        btn.disabled = false;
      }, 5000);
    });
  }

})();
