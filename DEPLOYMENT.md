# Vimerk.com Deployment Guide

## Quick Start - Deploy to Cloudflare Pages

### Prerequisites
- GitHub account with your code pushed
- Cloudflare account (free tier works perfectly)

---

## Step 1: Set Up Web3Forms (Contact Form)

### Get Your Free Access Key

1. Go to **https://web3forms.com**
2. Click **"Create Access Key"**
3. Enter your email: **www@vimerk.com**
4. Click **"Create Access Key"**
5. **Copy the access key** (looks like: `a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6`)
6. Check your email and verify it

### Update the Form

1. Open `index.html`
2. Find this line (around line 214):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

**IMPORTANT:** Also update the redirect URL on line 217 to match your final domain:
```html
<input type="hidden" name="redirect" value="https://vimerk.com/thanks.html">
```
(Use your actual domain once you set it up)

---

## Step 2: Deploy to Cloudflare Pages

### Option A: Via Cloudflare Dashboard (Recommended)

1. **Login to Cloudflare**
   - Go to https://dash.cloudflare.com
   - Login or create free account

2. **Connect Your Repository**
   - Click **"Workers & Pages"** in left sidebar
   - Click **"Create application"**
   - Click **"Pages"** tab
   - Click **"Connect to Git"**
   - Authorize Cloudflare to access your GitHub
   - Select your repository (works with GitHub Organizations on free tier!)

3. **Configure Build Settings**
   - **Project name:** `vimerk` (or your choice)
   - **Production branch:** `main`
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (root)
   - Click **"Save and Deploy"**

4. **Wait for Deployment**
   - First deploy takes ~1-2 minutes
   - You'll get a URL like: `vimerk.pages.dev`

### Option B: Via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
cd /workspace/vimerk/www
wrangler pages deploy . --project-name=vimerk
```

---

## Step 3: Set Up Custom Domain

### Add vimerk.com to Cloudflare Pages

1. **In Cloudflare Dashboard:**
   - Go to **Workers & Pages** → Your site
   - Click **"Custom domains"** tab
   - Click **"Set up a custom domain"**
   - Enter: `vimerk.com`
   - Click **"Continue"**

2. **DNS Configuration:**

   **If domain is already on Cloudflare:**
   - DNS records will be added automatically
   - Done! ✅

   **If domain is NOT on Cloudflare:**
   - Option A: Transfer DNS to Cloudflare (recommended)
     - Follow prompts to change nameservers at your registrar
   - Option B: Add CNAME record at your current DNS provider
     - Add CNAME: `vimerk.com` → `vimerk.pages.dev`
     - May need to flatten/ALIAS record for root domain

3. **SSL Certificate**
   - Auto-provisioned by Cloudflare (usually < 1 minute)
   - No action needed

4. **Add www subdomain (optional):**
   - Click **"Set up a custom domain"** again
   - Enter: `www.vimerk.com`
   - Cloudflare will auto-redirect www → non-www

---

## Step 4: Verify Everything Works

### Test Checklist

- [ ] Site loads at your custom domain (`https://vimerk.com`)
- [ ] SSL certificate is active (https://)
- [ ] Language toggle works (English ↔ Svenska)
- [ ] Language preference persists after reload
- [ ] All sections visible and styled correctly
- [ ] Mobile responsive (test on phone or resize browser)
- [ ] **Contact form test:**
  - [ ] Fill out form and submit
  - [ ] Should redirect to `/thanks.html`
  - [ ] Check email at www@vimerk.com for submission
  - [ ] Verify spam folder if not in inbox
- [ ] Favicon displays correctly
- [ ] Logo appears in header
- [ ] All project cards display properly

### Quick Form Test

```bash
# Test form submission (replace with your domain)
curl -X POST https://vimerk.com \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "access_key=YOUR_ACCESS_KEY&name=Test&email=test@example.com&topic=general&message=Test"
```

---

## Web3Forms Dashboard (Optional)

### View Form Submissions

1. Go to https://web3forms.com/dashboard
2. Login with www@vimerk.com
3. View all submissions, download CSV, etc.

**Note:** Free tier is **unlimited submissions** - no upgrade needed!

---

## Content Updates

### Updating the Site

1. Make changes to files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
3. Cloudflare auto-deploys within 30 seconds!

### Update Text Content

**English text:**
- Edit `index.html` directly in HTML
- Edit `static/js/script.js` - update `en` object

**Swedish text:**
- Edit `static/js/script.js` - update `sv` object

### Add New Translatable Content

1. Add `data-i18n="unique.key"` to HTML element
2. Add translations to `script.js`:
   ```javascript
   en: {
     'unique.key': 'English text',
     // ...
   },
   sv: {
     'unique.key': 'Swedish text',
     // ...
   }
   ```

---

## Troubleshooting

### Form Not Working

**Problem:** Form submits but no email received

**Solutions:**
1. Verify access key in `index.html` is correct
2. Check spam folder at www@vimerk.com
3. Verify email address at https://web3forms.com
4. Check Web3Forms dashboard for submission
5. Test with a different email address

**Problem:** Form doesn't redirect to thank you page

**Solutions:**
1. Update redirect URL in `index.html` line 217 to match your domain:
   ```html
   <input type="hidden" name="redirect" value="https://vimerk.com/thanks.html">
   ```
2. Ensure `thanks.html` exists and is deployed

### Deployment Issues

**Problem:** Build fails on Cloudflare

**Solutions:**
- Build command should be empty (it's a static site)
- Output directory should be `/` (root)
- Check deploy logs in Cloudflare dashboard

**Problem:** Custom domain not working

**Solutions:**
- Wait 5-10 minutes for DNS propagation
- Verify DNS records in Cloudflare dashboard
- Clear browser cache
- Try incognito/private browsing mode

### Language Toggle Not Working

**Problem:** Toggle doesn't change language

**Solutions:**
- Check browser console for JavaScript errors
- Verify `static/js/script.js` is loading
- Clear browser cache and localStorage
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Styling Issues

**Problem:** Styles not applying

**Solutions:**
- Check that Pico.css CDN is loading:
  ```
  https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css
  ```
- Verify `static/css/styles.css` is loading
- Check browser console for 404 errors
- Update CSP in `_headers` if blocking resources

---

## Performance & Monitoring

### Cloudflare Pages Analytics

**Free tier includes:**
- Unlimited bandwidth
- Unlimited requests
- Web Analytics (privacy-friendly, no cookies)

**Enable Web Analytics:**
1. Go to Workers & Pages → Your site
2. Click **"Analytics"** tab
3. Enable **"Web Analytics"**
4. No code changes needed!

### Cache Behavior

Caching is configured in `_headers`:
- **Static assets** (`/static/*`, `*.svg`): 1 year cache
- **HTML files**: 1 hour cache
- Cloudflare CDN caches globally automatically

### Force Cache Clear

If you need to purge cache:
1. Cloudflare Dashboard → Your site
2. Click **"Deployments"**
3. Click **"..."** on latest deployment
4. Click **"Retry deployment"**

---

## Security

### Security Headers

Configured in `_headers`:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Content-Security-Policy` (strict)
- `Permissions-Policy` (restrictive)

### Update CSP

If you need to allow additional domains:
1. Edit `_headers` file
2. Update `Content-Security-Policy` line
3. Commit and push

Example - allow Google Fonts:
```
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' cdn.jsdelivr.net fonts.googleapis.com; font-src 'self' fonts.gstatic.com;
```

---

## Cost Breakdown

### Current Setup (FREE)

| Service | Plan | Cost | Usage Limits |
|---------|------|------|--------------|
| **Cloudflare Pages** | Free | $0 | Unlimited bandwidth, unlimited requests, 500 builds/month |
| **Web3Forms** | Free | $0 | Unlimited submissions |
| **Cloudflare DNS** | Free | $0 | Included with Pages |
| **SSL Certificate** | Free | $0 | Auto-provisioned |
| **Web Analytics** | Free | $0 | Privacy-friendly, cookieless |
| **Total** | | **$0/month** | |

**Commercial use:** ✅ Allowed on free tier

### What if you exceed limits?

**Cloudflare Pages Free Tier:**
- 500 builds/month (you'll use ~30-50 for a commercial site)
- If exceeded: $5/month for unlimited builds

**Web3Forms Free Tier:**
- Truly unlimited (no submission cap)
- No paid tier needed

---

## Rollback / Version Control

### Rollback to Previous Version

**Via Cloudflare Dashboard:**
1. Go to **Deployments**
2. Find previous working deployment
3. Click **"..."** → **"Rollback to this deployment"**
4. Instant rollback!

**Via Git:**
```bash
# View commit history
git log --oneline

# Rollback to specific commit
git revert <commit-hash>
git push

# Cloudflare auto-deploys
```

---

## Adding Features (Future)

### Add Newsletter Signup
- **Recommended:** Buttondown (free tier: 100 subscribers)
- **Alternative:** EmailOctopus, Mailchimp

### Add Analytics (Privacy-Friendly)
- **Built-in:** Cloudflare Web Analytics (already available!)
- **Alternative:** Plausible, Fathom, Simple Analytics

### Add Blog/CMS
- **Cloudflare Pages supports:**
  - Hugo (static site generator)
  - Next.js (static export)
  - Astro (static builds)
- Update build settings in Cloudflare dashboard

---

## Support Resources

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages
- **Web3Forms Docs:** https://docs.web3forms.com
- **Cloudflare Community:** https://community.cloudflare.com
- **Pico.css Docs:** https://picocss.com/docs

---

## Quick Reference Commands

```bash
# View deployment URL
# In Cloudflare dashboard or:
wrangler pages deployment list --project-name=vimerk

# Deploy manually (if needed)
wrangler pages deploy . --project-name=vimerk

# View build logs
# In Cloudflare dashboard: Workers & Pages → Your site → Deployments → View logs

# Test site locally
python3 -m http.server 8000
# Visit: http://localhost:8000
```

---

## Contact

For questions about this setup:
**www@vimerk.com**
