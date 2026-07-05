# Keeper Website

Static marketing site for Keeper Construction Bookkeeping, live at
[www.keepercom.com](https://www.keepercom.com). Plain HTML/CSS with a single
small JS file — no build step, no frameworks.

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Landing page: hero, service tiers, why Keeper, 4-step overview, contact |
| `process.html` | "How We Work" — monthly rhythm, onboarding path, construction specifics, FAQ |
| `portal.html` | Client portal explainer (personal dashboard link arrives via the monthly report email) |
| `privacy.html` | Privacy policy (PIPEDA) |
| `api-terms.html` | QuickBooks Online API authorization agreement |

Shared assets: `css/style.css` (single stylesheet for all pages),
`js/main.js` (mobile nav toggle, hero job-card rotation, Formspree Ajax submit —
loaded as `main.js?v=2` on every page), `img/keeper-logo.svg` (logo + favicon).
`robots.txt` and `sitemap.xml` cover all five pages.

## Live integrations

- **Contact form:** Formspree form `mqeneqro` (`index.html`), submitted via
  fetch with inline success/error status.
- **Booking:** Calendly inline widget + CTA links →
  `https://calendly.com/kneilson-keepercom/30min`.
- **Client intake:** external link to `https://intake.keepercom.com`.

## Deployment

Deployed with GitHub Pages from the `main` branch, root folder. The custom
domain is set by the `CNAME` file (`www.keepercom.com`); pushing to `main`
publishes automatically. Keep the `?v=` query on `main.js` in sync across
pages when the script changes, so cached copies roll over together.

## Conventions

- One stylesheet; new sections reuse existing patterns (`.section`, `.cards`,
  `.pillars`, `.steps`, `.legal-hero`, `.cta-band`). No new fonts, frameworks,
  or JS dependencies.
- Colors and contrast are documented in comments in `css/style.css` — keep
  WCAG AA when adding anything.
- Copy voice: Keeper is a systemized, disciplined bookkeeping process
  (cadence, checklists, reviews). Never describe the service in terms of
  AI or automation anywhere on the site.

## Local preview

Open `index.html` directly, or:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
