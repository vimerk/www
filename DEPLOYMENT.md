# Vimerk.com Deployment Guide

## Quick Start - Deploy to Netlify

### Option 1: Netlify CLI (Fastest)

```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from the /workspace/vimerk/www directory
cd /workspace/vimerk/www
netlify deploy --prod

# Follow prompts:
# - Create & configure new site? Yes
# - Publish directory: . (current directory)
```

### Option 2: Netlify Dashboard (Drag & Drop)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag the entire `/workspace/vimerk/www` folder into the upload area
4. Wait for deployment to complete

### Option 3: Git Integration (Recommended for ongoing updates)

1. Initialize git repository:
   ```bash
   cd /workspace/vimerk/www
   git init
   git add .
   git commit -m "Initial commit: Vimerk homepage"
   ```

2. Push to GitHub/GitLab:
   ```bash
   # Create a repo on GitHub first, then:
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. Connect to Netlify:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider and repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Deploy site

## Post-Deployment Configuration

### 1. Configure Form Notifications

**CRITICAL:** Set up email notifications for contact form submissions:

1. Go to: **Site Settings → Forms → Form notifications**
2. Click **"Add notification"**
3. Select **"Email notification"**
4. Enter email: **www@vimerk.com**
5. Select form: **contact**
6. Save

Without this, form submissions won't be sent anywhere!

### 2. Configure Custom Domain

1. Go to: **Site Settings → Domain management**
2. Click **"Add custom domain"**
3. Enter: **vimerk.com**
4. Follow DNS configuration instructions:
   - If using Netlify DNS (recommended):
     - Update your domain registrar nameservers to Netlify's
   - If using external DNS:
     - Add A record pointing to Netlify's load balancer
     - Add CNAME for www subdomain

5. SSL certificate will be auto-provisioned (usually takes <1 minute)

### 3. Verify Deployment

After deployment, test these items:

- [ ] Site loads at your Netlify URL (e.g., `yoursite.netlify.app`)
- [ ] Language toggle works (English ↔ Svenska)
- [ ] Language preference persists after reload
- [ ] All sections visible and styled correctly
- [ ] Mobile responsive (test on phone or resize browser)
- [ ] Contact form submits successfully
- [ ] Form redirects to `/thanks.html` after submission
- [ ] Thank you page displays in selected language
- [ ] Form submission appears in: Site → Forms (in Netlify dashboard)
- [ ] Email notification received at www@vimerk.com
- [ ] Favicon displays correctly
- [ ] Logo appears in header

### 4. Test Checklist

```bash
# Test all pages return 200 OK
curl -I https://your-domain.com/
curl -I https://your-domain.com/thanks.html

# Test static assets
curl -I https://your-domain.com/static/css/styles.css
curl -I https://your-domain.com/static/js/script.js
curl -I https://your-domain.com/static/img/logo.svg
curl -I https://your-domain.com/static/img/favicon.svg
```

## Content Updates

### Update English Text

1. Edit `index.html` - change the text directly in the HTML
2. Edit `static/js/script.js` - update the `en` object in `translations`

### Update Swedish Text

1. Edit `static/js/script.js` - update the `sv` object in `translations`

### Add New Translatable Content

1. Add `data-i18n="unique.key"` to your HTML element
2. Add the key to both `en` and `sv` objects in `script.js`:
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

## Troubleshooting

### Form Not Working

**Problem:** Form submits but doesn't appear in Netlify dashboard

**Solutions:**
- Verify `data-netlify="true"` attribute exists on `<form>` tag
- Verify hidden `form-name` input exists
- Redeploy the site (Netlify parses forms during build)
- Check Netlify deploy log for form detection message

**Problem:** Form notifications not received

**Solutions:**
- Go to Site Settings → Forms → Form notifications
- Verify www@vimerk.com is configured
- Check spam folder
- Submit a test form and check Netlify dashboard under Forms

### Language Toggle Not Working

**Problem:** Toggle doesn't change language

**Solutions:**
- Check browser console for JavaScript errors
- Verify `static/js/script.js` is loading (check Network tab)
- Clear browser cache and localStorage
- Verify translations dictionary is complete

### Styling Issues

**Problem:** Styles not applying

**Solutions:**
- Check that Pico.css CDN is loading:
  ```
  https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css
  ```
- Verify `static/css/styles.css` is loading
- Clear browser cache
- Check browser console for 404 errors

### SEO & Meta Tags Not Updating

**Problem:** Language changes but meta tags stay in English

**Solutions:**
- Meta tags update is handled by JavaScript
- Verify `data-i18n-content` attributes exist
- Check browser console for errors
- Note: Search engines may still index English as primary (use hreflang tags for proper multilingual SEO if needed later)

## Performance Optimization (Optional)

Current setup is already optimized, but for future improvements:

1. **Add hreflang tags** for proper multilingual SEO
2. **Create separate HTML files** (`index.html` and `sv/index.html`) for better SEO
3. **Add service worker** for offline functionality
4. **Optimize images** (current SVGs are already optimized)
5. **Add preconnect** to Pico.css CDN:
   ```html
   <link rel="preconnect" href="https://cdn.jsdelivr.net">
   ```

## Security

Current security headers are configured in `netlify.toml`:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Content-Security-Policy
- Permissions-Policy

To update CSP or other headers, edit `netlify.toml` and redeploy.

## Analytics (Future)

Currently no analytics per requirements. To add in future:

1. **Privacy-friendly options:**
   - Plausible Analytics
   - Fathom Analytics
   - Simple Analytics

2. **Implementation:**
   - Add script tag before `</body>`
   - Update privacy notice in footer
   - Update CSP in `netlify.toml` to allow analytics domain

## Monitoring

Netlify provides built-in monitoring:
- **Forms:** Dashboard → Forms (see all submissions)
- **Analytics:** Dashboard → Analytics (bandwidth, visits if enabled)
- **Functions:** N/A (no serverless functions in this project)
- **Deploy logs:** Dashboard → Deploys (see build/deploy history)

## Backup & Version Control

**Recommended:** Use Git for version control

```bash
# After making changes
git add .
git commit -m "Update: description of changes"
git push

# Netlify will auto-deploy if Git integration is set up
```

**Manual backup:** Download production deployment

```bash
netlify sites:list
netlify sites:download --site-id=<your-site-id>
```

## Support

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://support.netlify.com
- **Pico.css Docs:** https://picocss.com/docs

## Contact

For questions about this implementation:
**www@vimerk.com**
