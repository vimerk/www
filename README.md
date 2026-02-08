# Vimerk.com Static Homepage

A minimal, bilingual (EN/SV) static homepage for Vimerk - a modern product studio building small, low-maintenance digital products.

## Overview

This is a single-page static site deployed on Cloudflare Pages, showcasing Vimerk's portfolio, principles, and providing a contact mechanism. The site requires zero backend infrastructure and minimal ongoing maintenance.

## Technical Stack

- **Pure HTML/CSS/JS** - No build process required
- **Pico.css** - Lightweight CSS framework (~10KB) for semantic, minimal styling
- **Web3Forms** - Contact form service with unlimited free submissions
- **Cloudflare Pages** - Static hosting with unlimited bandwidth (free tier)
- **localStorage** - Language preference persistence
- **Dark theme** - Modern, technical aesthetic with blue-purple gradient accents

## Design Decisions

### 1. Lightweight CSS Framework (Pico.css)
**Why:** While we could go with pure custom CSS, using Pico.css demonstrates:
- Ability to integrate modern tooling thoughtfully
- Faster responsive development
- Semantic HTML-first approach
- Still maintains minimalism (classless framework)
- Easy to override/customize for brand identity

### 2. Dark Theme with Gradient Accents
- Primary: Dark background (#0f172a slate-900)
- Accents: Blue-purple gradient (#667eea → #764ba2)
- Typography: System font stack for zero latency
- Accessibility: WCAG AA contrast ratios maintained

### 3. Bilingual Implementation
- **Default language:** Browser detection (Swedish if `navigator.language` starts with 'sv', else English)
- **Persistence:** localStorage key `vimerk_lang`
- **i18n approach:** Dictionary-based replacement using `data-i18n` attributes
- **SEO:** Updates `<html lang>`, `<title>`, and meta description dynamically

### 4. Content Strategy
**Brand positioning:** "B with A elements" - Modern product studio feel with technical minimalism

**Project portfolio:**
- Nomacore (TBA)
- Stradion (TBA, with minimal financial disclaimer)
- TinyFutures (TBA, framed as "playful family photo tool")
- Futhark Foundry (Nordic/Viking initiative, TBA)
- Antares Astrologica (Astrology initiative, TBA)
- More planned (apps, websites, social media content)

**Key messaging:**
- Primary: APIs, applied ML tools, pragmatic AI services
- Secondary: Apps, websites, social media content tooling also planned
- No founder name/personal identity
- Professional but not salesy (especially in Swedish)

## File Structure

```
/workspace/vimerk/www/
├── index.html              # Main single-page site
├── thanks.html             # Form submission thank-you page
├── _headers                # Cloudflare Pages headers config
├── _redirects              # Cloudflare Pages redirects config
├── static/
│   ├── css/
│   │   └── styles.css      # Custom styles (overrides/brand)
│   ├── js/
│   │   └── script.js       # Language toggle + i18n logic
│   ├── img/
│   │   ├── logo.svg        # Geometric brand mark
│   │   ├── favicon.svg     # Matching favicon
│   │   └── og.png          # Open Graph placeholder
├── DEPLOYMENT.md           # Complete deployment guide
├── PROMPT.md               # Original requirements
└── README.md               # This file
```

## Sections

1. **Hero** - One-liner + value prop + 2 CTAs
2. **Projects** - Grid of 6 project cards (all TBA/coming soon)
3. **Principles** - 4 core design principles
4. **Follow Updates** - Social media placeholder (no URLs yet)
5. **Contact** - Web3Forms contact form + direct email option
6. **Footer** - Minimal, no analytics statement

## Features

### Language Toggle
- Dropdown in header: English / Svenska
- Persists selection across sessions
- Updates all text, HTML lang attribute, and meta tags
- Graceful fallback if localStorage unavailable

### Contact Form (Web3Forms)
- Fields: Name, Email, Topic (dropdown), Message
- Honeypot spam protection (botcheck)
- Client-side HTML5 validation
- Redirects to `/thanks.html` on success
- Email notifications sent to www@vimerk.com
- Unlimited free submissions (no paid tier needed)

### Accessibility
- Semantic HTML5 structure
- Skip-to-content link
- Proper ARIA labels on form fields
- Keyboard navigation support
- High contrast ratios (WCAG AA)
- Responsive: mobile-first, works 320px+

### Performance
- No external JS dependencies
- System fonts (zero font loading)
- Minimal CSS via Pico.css CDN (~10KB gzipped)
- Lazy-loaded images where applicable
- Works offline after first load (static assets)

## Deployment

**See [DEPLOYMENT.md](DEPLOYMENT.md) for complete step-by-step instructions.**

### Quick Start

1. **Set up Web3Forms:** Get free access key at https://web3forms.com
2. **Update form:** Replace `YOUR_ACCESS_KEY_HERE` in `index.html` (line 214)
3. **Deploy to Cloudflare Pages:** Connect GitHub repo via Cloudflare dashboard
4. **Add custom domain:** Configure `vimerk.com` in Cloudflare Pages settings

### Key Facts
- **Build command:** None (pure static files)
- **Output directory:** `/` (root)
- **Node.js:** Not required
- **Cost:** $0/month (unlimited bandwidth + unlimited form submissions)
- **Commercial use:** ✅ Allowed on free tier

## Local Development

Test the site locally:

```bash
# Option 1: Direct file open (quick view, form won't work)
open index.html

# Option 2: Simple HTTP server (recommended)
python3 -m http.server 8000
# Then visit: http://localhost:8000

# Option 3: Using Wrangler (Cloudflare's CLI)
npx wrangler pages dev .
```

**Note:** Web3Forms requires internet connection. Form will work from localhost:8000, but you'll receive actual emails.

## Content Management

All content is in two places:

1. **HTML structure:** `index.html`
2. **Translations:** `static/js/script.js` (see `translations` object)

To update content:
- Edit English text directly in HTML
- Add corresponding Swedish translation in the `sv` object in `script.js`
- Ensure elements have matching `data-i18n="key"` attributes

## Brand Assets

### Logo
- **Type:** Geometric hexagon/angular mark
- **Format:** SVG (scalable, small file size)
- **Colors:** Gradient compatible (purple-blue accent)
- **Usage:** Header branding, favicon, potential future expanded use

### Color Palette
```css
--primary-dark: #0f172a;    /* Slate 900 - backgrounds */
--accent-start: #667eea;    /* Blue-purple gradient start */
--accent-end: #764ba2;      /* Blue-purple gradient end */
--text-primary: #f8fafc;    /* Slate 50 - primary text */
--text-secondary: #cbd5e1;  /* Slate 300 - secondary text */
```

## Non-Goals (Explicitly Out of Scope)

- ❌ No backend/server-side code
- ❌ No CMS or admin panel
- ❌ No analytics/tracking by default
- ❌ No user authentication
- ❌ No dynamic content/database
- ❌ No framework builds (React/Vue/etc.)
- ❌ No founder personal information
- ❌ No pricing tables
- ❌ No links to non-existent subpages

## Future Considerations

- Individual project pages (e.g., `/stradion/`) when ready
- Social media links when accounts are live
- Newsletter signup (if needed)
- Blog/updates section (if needed)
- Light mode toggle (if requested)

## License & Privacy

- **Analytics:** None by default (stated in footer)
- **Cookies:** Only localStorage for language preference
- **Forms:** Data processed by Web3Forms, emailed to www@vimerk.com
- **Code:** Proprietary (Vimerk internal)

## Maintenance

Expected maintenance: **Very low**
- Static files, no dependencies to update
- Pico.css via CDN (pinned version for stability)
- Content updates via direct HTML/JS editing
- No security patches needed (no server code)

## Contact

For questions about this site: www@vimerk.com
