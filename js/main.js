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

  // Hero job-cost card — random job on each load
  var jobs = [
    {
      name: 'Wilkinson Industrial Build',
      revenue: '$284,500', costs: '$198,200', holdback: '$28,450',
      profit: '$86,300', margin: '30.3%'
    },
    {
      name: 'McKenzie Road Subdivision — Ph. 2',
      revenue: '$412,000', costs: '$298,400', holdback: '$41,200',
      profit: '$113,600', margin: '27.6%'
    },
    {
      name: 'Westshore Medical Centre Reno',
      revenue: '$186,750', costs: '$124,200', holdback: '$18,675',
      profit: '$62,550', margin: '33.5%'
    },
    {
      name: 'Cariboo Logging Road Extension',
      revenue: '$634,000', costs: '$498,800', holdback: '$63,400',
      profit: '$135,200', margin: '21.3%'
    },
    {
      name: 'Burnaby Townhome Complex — Unit 4',
      revenue: '$328,900', costs: '$241,200', holdback: '$32,890',
      profit: '$87,700', margin: '26.7%'
    }
  ];

  var card = document.querySelector('.hero-card');
  if (card) {
    var job = jobs[Math.floor(Math.random() * jobs.length)];
    var rows = card.querySelectorAll('.hero-card-row span:last-child');
    card.querySelector('.hero-card-job').textContent = job.name;
    if (rows[0]) rows[0].textContent = job.revenue;
    if (rows[1]) rows[1].textContent = job.costs;
    if (rows[2]) rows[2].textContent = job.holdback;
    if (rows[3]) rows[3].textContent = job.profit;
    card.querySelector('.hero-card-pct').textContent = job.margin;
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
