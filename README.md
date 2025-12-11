# Open Realty — Static HTML Template

A lightweight, free-to-use static website template for listing rental properties. It's intentionally simple, mobile-friendly, and built with vanilla HTML/CSS/JS so anyone can fork, adapt, and host it (for example on GitHub Pages).

This repository contains a ready-to-deploy site. This project is released under the MIT License and includes a short disclaimer.

**Why use this template**
- Minimal and focused: no build step required.
- Mobile-friendly layout with a small JS utility bundle.
- Easy to customize images, text, and navigation.
- Friendly defaults for quick GitHub Pages deployment.

**Quick Start**
- Clone the repo:

```bash
git clone https://github.com/lancesir/lancesir.github.io.git
cd lancesir.github.io
```

- Preview locally (Python simple server):

```bash
python3 -m http.server 8000
# Open http://localhost:8000/
```

<!-- Buy Me a Coffee instructions removed to keep the template neutral for reuse. -->

**Customization**
- Images: edit or replace files in the `images/` directory.
- Styles: edit `sass/main.scss` (or `css/main.css` directly for quick changes).
- JS behavior: `js/main.js` contains site scripts.

**Deploying to GitHub Pages**
1. Push to a repository named `your-username.github.io` for a user site, or to any repo's `gh-pages` branch for a project site.
2. Enable Pages in repository settings if needed.

**License & Reuse**
This template is offered to the community to fork, reuse, and adapt. Use it for personal or commercial projects.

I added an `LICENSE` (MIT) and a `DISCLAIMER.md` file to this repository. The MIT license includes a standard warranty and liability disclaimer; the `DISCLAIMER.md` restates that the maintainer(s) are not responsible for how third parties use or adapt this template. This is not legal advice — consult a lawyer if you need stronger legal protection.

**Contributing**
Contributions are welcome! If you improve the template (bug fixes, accessibility improvements, extra features), please open a PR.

---

If you want, I can:
- Add an explicit `LICENSE` file (MIT, Apache-2.0, or CC0).
- Tweak styles, accessibility, or add deployment automation (GitHub Actions).

Which of the above would you like me to do next?

**Developer Notes (optional support links)**

- Location: the small site-side support integration lives in `js/main.js` and is triggered by a meta tag named `buymeacoffee` in the HTML `<head>`.
- To enable support links (site visitors will see a floating button and a footer link): add or set the meta in any page's `<head>`:

```html
<meta name="buymeacoffee" content="your-slug-here" />
```

- To disable site-side support links for all pages, either remove those meta tags from each HTML file, or remove/comment the injector block at the top of `js/main.js` (search for `buymeacoffee`).
- Quick sitewide replace (macOS / zsh) to set a slug across all HTML files in this repo:

```bash
# Replace 'your-slug-here' with your Buy Me a Coffee slug
perl -pi -e 's/(<meta name="buymeacoffee" content=")[^"]*(" ?\/>|">)/$1your-slug-here$2/' *.html
```

- Notes: This section is intentionally non-promotional and is aimed at developers who fork or maintain the template. The public-facing `README` no longer advertises support links.