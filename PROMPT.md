## Prompt for Coding Agent: Build Static vimerk.com Homepage (EN/SV toggle, Netlify form)

### Context

Build a **minimal, public-facing homepage** for **vimerk.com**. Purpose is a general “what do you do?” presence (including for Swedish authorities), not a full product marketing site yet. The company is a solo operation; **do not include the founder’s private name anywhere**.

The site must be **100% static** and deployed on **Netlify**. No server-side components, no CMS, no frameworks required. Keep maintenance very low.

### High-level goals

1. Provide a credible, minimal public presence explaining what Vimerk does.
2. Present a portfolio summary (projects) with “coming soon / TBA” messaging (no real project URLs yet).
3. Provide a “follow updates” section (social only; currently no social URLs available—show placeholders).
4. Provide a working contact form via Netlify, sending notifications to **[www@vimerk.com](mailto:www@vimerk.com)**.
5. Support **English + Swedish** via a **dropdown language toggle at top**; default should be sensible (e.g., based on browser language), and persist user choice (localStorage is fine).

### Non-negotiable requirements

* **Static only**: HTML/CSS/JS; no backend.
* **Deployable on Netlify**: include proper Netlify form markup.
* **No private name**: do not mention founder or personal identity.
* **Single scrolling page**: one-page site (anchors are fine).
* **Brand tone**: “B with A elements” → modern product studio feel with technical minimalism.
* **Primary content**: general presence; mention that apps/websites/social media content are planned.
* **Project list must include**:

  * Nomacore
  * Talaria
  * TinyFutures (aging pictures of babies) framed safely as “playful family photo” tool
  * Futhark Foundry (Nordic/Viking initiative; TBA)
  * Antares Astrologica (astrology initiative; TBA)
  * “More planned” (apps, websites, social media content generation; productized/low-support)
* **Talaria disclaimer**: only minimal disclaimer on homepage: “informational only; not financial advice.” Robust disclaimer will be on Talaria’s future page.

### Deliverables (files/folder structure)

Provide a ready-to-deploy folder, e.g.:

```
/vimerk-site
  index.html
  thanks.html                # thank-you page for form submit
  /static
    styles.css
    script.js
    logo.svg                 # simple geometric logo you design
    favicon.svg              # matching favicon
    (optional) og.png placeholder reference is ok
  netlify.toml               # optional but recommended
  README.md                  # short deploy instructions + how to set email notifications
```

### Visual/UX requirements

* Clean, modern, minimal.
* Sticky header with brand + nav anchors + language dropdown.
* Sections:

  1. Hero/intro with one-liner + short paragraph
  2. Projects grid/cards
  3. Principles (4 bullets)
  4. Follow updates (social-only placeholder)
  5. Contact form
  6. Footer
* Two CTAs near top:

  * “Explore projects” (anchor to projects)
  * “Follow updates” (anchor to updates)
* Make it mobile-friendly (responsive).
* Accessibility: skip link, proper labels, readable contrast, semantic tags.
* No analytics by default (state this in footer).
* Keep JS minimal.

### Copy requirements (English + Swedish)

Create full bilingual copy. Swedish tone should be **neutral professional** (“myndighetsvänlig”), not salesy.

#### One-liner (must align with user preference)

User said: “Option A or C, but remind that apps/websites/social media content is also planned.”
Implement as:

* Primary line like **Option A** (“Vimerk builds small, low-maintenance digital products: APIs, applied ML tools, and pragmatic AI services.”)
* Immediately follow with a short sentence: “Apps, websites, and social media content tooling are also planned.”

Do the same meaning in Swedish.

#### Projects copy (safe framing)

* TinyFutures must be described as:
  “A playful photo tool for imagining ‘older’ versions of personal family photos.”
  Swedish equivalent: neutral, safe.

#### Follow updates

* Social only. Since there are no URLs yet, show “No social links published yet.” and a button linking to contact form: “Notify me when updates are published.” (This is still static—just guides the user to contact.)

### Language toggle behavior

* Dropdown at top: English / Svenska
* Default: if browser language starts with “sv”, set Swedish; else English.
* Persist selection: localStorage key (e.g., `vimerk_lang`).
* Implement i18n by replacing text in elements marked with `data-i18n="key"` (dictionary in JS).
* Also update `<html lang="...">` and optionally `<title>` + meta description for selected language.

### Netlify contact form requirements

* Form name: `contact`
* Use Netlify attributes: `data-netlify="true"` plus hidden `form-name`.
* Add honeypot field via `netlify-honeypot="bot-field"`.
* Fields: name, email, topic dropdown, message textarea.
* Form action goes to `/thanks.html`.
* Mention in copy: “Prefer email? You can also write to [www@vimerk.com](mailto:www@vimerk.com).”
* Do NOT hardcode email sending; instead, document in README that Netlify form notifications should be configured to send to **[www@vimerk.com](mailto:www@vimerk.com)**.

### SEO/meta requirements

* Set title + meta description (EN + update for SV via JS if implementing dynamic).
* OpenGraph tags with placeholder og image reference (`/static/og.png`) is acceptable.
* Canonical URL: `https://vimerk.com/`.
* Add basic structured organization schema (optional) but keep static and minimal.

### Logo + favicon requirements

* Create a **simple geometric mark** that can serve as favicon and brand icon.
* Keep it minimal and professional (no mascot).
* Provide SVGs.
* Choose a restrained palette consistent with dark background and subtle gradient accents.

### Content sections (exact requirements)

1. **Hero**: one-liner + short paragraph; 2 CTAs; small “minimal presence” note.
2. **Projects**: cards for Nomacore, Talaria (with minimal disclaimer), TinyFutures, Futhark Foundry (TBA), Antares Astrologica (TBA), More planned. All labeled “coming soon” or “TBA” tags; no external URLs.
3. **Principles**:

   * Small scope, clear boundaries
   * Low maintenance by design
   * Pragmatic AI usage
   * Portfolio resilience
4. **Follow updates**: social-only placeholder; no URLs yet; button leads to contact.
5. **Contact**: Netlify form; mention [www@vimerk.com](mailto:www@vimerk.com).
6. **Footer**: “Static site. No analytics by default. Project pages will be added progressively.” (and Swedish equivalent)

### Constraints / disallowed

* No frameworks required (React/Vue/etc.).
* No tracking scripts (Google Analytics, etc.).
* No personal name or biography.
* No price tables.
* No links to nonexistent subpages (avoid /talaria 404 etc.). Use anchors only.

### Acceptance criteria (must pass)

* Works as a static site opened from disk and when deployed to Netlify.
* Language toggle switches all text (EN/SV) and persists between reloads.
* Netlify form is correctly detected (hidden field, attributes) and goes to thanks page.
* Mobile layout clean and readable.
* No personal identity appears anywhere.
* Projects list matches exactly: Nomacore, Talaria, TinyFutures, Futhark Foundry, Antares Astrologica, More planned.
* “Follow updates” is social-only placeholder (no social URLs yet).
* Homepage communicates future plans: apps, websites, social media content tooling.

### Output format

Return:

* The complete folder content (all files) as text or a zip, plus brief deployment notes (Netlify publish dir, no build command).

