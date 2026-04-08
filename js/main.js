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

  // Contact form: Ajax submission via Formspree
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn    = form.querySelector('[type="submit"]');
      const status = form.querySelector('.form-status');

      btn.textContent = 'Sending…';
      btn.disabled    = true;
      status.hidden   = true;

      fetch(form.action, {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(form),
      })
        .then(function (res) {
          if (res.ok) {
            status.textContent = 'Message sent — we\'ll be in touch soon!';
            status.className   = 'form-status form-status--success';
            form.reset();
          } else {
            return res.json().then(function (data) {
              throw new Error(data.errors ? data.errors.map(function (err) { return err.message; }).join(', ') : 'Submission failed.');
            });
          }
        })
        .catch(function (err) {
          status.textContent = err.message || 'Something went wrong. Please try again or email us directly.';
          status.className   = 'form-status form-status--error';
          btn.textContent    = 'Send Message';
          btn.disabled       = false;
        })
        .finally(function () {
          status.hidden = false;
          if (!btn.disabled) return;
          btn.textContent = 'Send Message';
          btn.disabled    = false;
        });
    });
  }

})();
