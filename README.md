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

**Contact Page Setup**

- **Where to look:** The contact form is in `contact.html` and currently posts to Formspree (`action="https://formspree.io/f/mpzbybow"`). That means no server code is required — Formspree will forward messages to the email address you configure in your Formspree dashboard.
- **Quick Formspree setup (recommended, no server):**
	1. Create a free Formspree account and add a new form. Formspree will give you an endpoint like `https://formspree.io/f/xxxxxxx`.
	2. Replace the `action` value in `contact.html` with your endpoint (keep `method="post"`).
	3. Optionally add a hidden input to set a subject or metadata:

```html
<input type="hidden" name="_subject" value="Website contact form" />
```

	4. Test by submitting the form in your browser; Formspree will email the submission to you.

- **If you prefer a server-side handler:**
	- Uncomment or implement a server script. There’s an example contact form in the file comments (PHP). A simple PHP handler might look like:

```php
<?php
	// contact.php (very small example - adapt and secure for production)
	$name = $_POST['name'] ?? '';
	$email = $_POST['email'] ?? '';
	$message = $_POST['query'] ?? '';

	$to = 'you@yourdomain.com';
	$subject = 'Website contact from ' . $name;
	$body = "From: $name\nEmail: $email\n\n$message";
	mail($to, $subject, $body);
	header('Location: /contact.html?sent=1');
	exit;
?>
```

	- Update `form action="contact.php" method="post"` in `contact.html` and deploy to a host that supports PHP (or adapt the handler to your backend platform: Node/Express, Python/Flask, etc.).

- **Spam & validation:**
	- Add client-side validation (HTML `required`, pattern attributes) already present for basic fields.
	- Add server-side validation and a spam protection layer (reCAPTCHA v2/v3 or honeypot fields) if you expect high traffic.

- **Local testing tips:**
	- If you use a server-side handler, run a local dev server (e.g., PHP built-in server `php -S localhost:8000`) and test with the form.
	- For Formspree you can test directly in the static preview after replacing the `action` endpoint.

**Application / "Apply Now" Setup**

- **Where to look:** The application form lives in `application.html`. It currently contains a simple HTML form without an `action`, so it does not submit anywhere by default.
- **Options for handling applications:**
	1. **External form service (quick, no server):** Use Formspree (same as contact), Google Forms, Typeform, or similar services. Replace the `form` markup `action` with the service endpoint.
	2. **Receive applications via email (Formspree):** If you want applications emailed to you, set the `action` to your Formspree endpoint and include helpful hidden fields (e.g., `_subject` or `_replyto`).
	3. **Server-side processing (recommended for attachments / structured data):** Implement a backend that accepts POST requests, validates input, saves records to a database, and stores uploaded files. For example, with Node/Express + `multer` you can accept file uploads and store them on disk or S3.

- **Suggested application fields:**
	- Full name, email, phone
	- Property reference (which listing they apply for)
	- Desired move-in date
	- Short message or cover letter
	- File upload (ID, proof of income) — requires server support

- **UX tips:**
	- Confirm submission with a thank-you page or a success message on the same page (query param or inline response).
	- Add `aria` attributes and clear labels for accessibility.
	- If you expect to screen many applicants, add an automated PDF export or a small admin interface.

- **Quick Formspree example for `application.html`:**

```html
<form action="https://formspree.io/f/yourid" method="post">
	<input type="text" name="name" placeholder="Full name" required />
	<input type="email" name="email" placeholder="Email" required />
	<textarea name="message" placeholder="Brief message"></textarea>
	<input type="submit" value="Apply" />
</form>
```

	Note: Formspree doesn't support file uploads on free tiers; use a server or an alternate service if you need attachments.

- **Where to put changes**
- To switch to Formspree, edit `contact.html` and/or `application.html` and set the `action` attribute(s) to the endpoint(s) from your service of choice.
- To implement server-side handling, place server scripts (PHP, Node, etc.) on the server and point the `action` to the script path (e.g., `/contact.php` or `/api/apply`).

If you'd like, I can add a short example Node/Express handler and a sample `package.json` for local testing and deployment.