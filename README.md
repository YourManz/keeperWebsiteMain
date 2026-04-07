# Keeper Website

Static site for Keeper Construction Bookkeeping. Built to host on GitHub Pages.

## Placeholders to replace before going live

| Placeholder | File | What to put |
|-------------|------|-------------|
| `CALENDLY_URL` | `index.html` (×2) | Your Calendly scheduling link |
| `FORMSPREE_ID` | `index.html` | Your Formspree form ID (sign up at formspree.io) |
| `CONTACT_EMAIL` | `index.html` (×2) | Your business email address |

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `keeper-website`)
2. Push this folder to the `main` branch
3. Go to repo Settings → Pages → Source: Deploy from branch → Branch: `main`, folder: `/ (root)`
4. GitHub will publish at `https://<your-username>.github.io/keeper-website/`
5. To use a custom domain: add a `CNAME` file with your domain and configure DNS per GitHub's docs

## Swapping the Calendly placeholder

When your Calendly account is ready, replace the `<div class="calendly-placeholder">` block in `index.html` with the Calendly inline embed:

```html
<!-- Calendly inline widget -->
<div class="calendly-inline-widget" data-url="YOUR_CALENDLY_URL" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

## Contact form (Formspree)

1. Sign up at [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Create a new form, copy the form ID
3. Replace `FORMSPREE_ID` in `index.html` with your ID
4. No server required — form submissions are emailed to you directly

## Local preview

Open `index.html` directly in a browser, or run a simple server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
