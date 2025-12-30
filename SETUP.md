# Setup Instructions - What You Need to Do

## 🚀 Quick 3-Step Setup

### Step 1: Get Your Web3Forms Access Key (2 minutes)

1. Go to **https://web3forms.com**
2. Click **"Create Access Key"**
3. Enter email: **www@vimerk.com**
4. Click **"Create Access Key"**
5. **Copy the access key** (it looks like: `a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6`)
6. Check your email and verify

### Step 2: Update Your Form (1 minute)

1. Open `index.html` in your editor
2. Find line 214 (or search for `YOUR_ACCESS_KEY_HERE`):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file
5. Commit and push:
   ```bash
   git add index.html
   git commit -m "Configure Web3Forms access key"
   git push
   ```

### Step 3: Deploy to Cloudflare Pages (5 minutes)

1. **Login to Cloudflare**
   - Go to https://dash.cloudflare.com
   - Login or create free account (if you don't have one)

2. **Connect Your Repository**
   - Click **"Workers & Pages"** in left sidebar
   - Click **"Create application"**
   - Click **"Pages"** tab
   - Click **"Connect to Git"**
   - Authorize Cloudflare to access your GitHub
   - Select your repository

3. **Configure Build Settings**
   - **Project name:** `vimerk` (or whatever you want)
   - **Production branch:** `main`
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (just a forward slash)
   - Click **"Save and Deploy"**

4. **Wait**
   - Deployment takes ~1-2 minutes
   - You'll get a URL like: `vimerk.pages.dev`

### Step 4: Add Your Custom Domain (3 minutes)

1. In Cloudflare Dashboard (while still on your Pages site):
   - Click **"Custom domains"** tab
   - Click **"Set up a custom domain"**
   - Enter: `vimerk.com`
   - Follow DNS setup instructions

2. **If your domain is NOT on Cloudflare yet:**
   - You'll need to update nameservers at your domain registrar
   - OR add a CNAME record pointing to your `.pages.dev` URL

3. SSL certificate will auto-provision (usually < 1 minute)

---

## ✅ That's It!

Your site should now be live at `https://vimerk.com`

---

## 🧪 Test Your Form

1. Visit your site
2. Fill out the contact form
3. Submit it
4. You should be redirected to the "Thank you" page
5. Check your email at **www@vimerk.com** (including spam folder)

---

## 📝 Need More Help?

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for:
- Detailed troubleshooting
- Custom configurations
- Performance optimization
- Security headers
- And more...

---

## 🆘 Common Issues

### Issue: Form doesn't send emails

**Solution:**
- Make sure you replaced `YOUR_ACCESS_KEY_HERE` with your actual key
- Check spam folder
- Verify your email at web3forms.com

### Issue: Cloudflare build fails

**Solution:**
- Build command should be **empty** (blank)
- Output directory should be `/` (just a forward slash)

### Issue: Custom domain not working

**Solution:**
- Wait 5-10 minutes for DNS propagation
- Make sure you updated nameservers or CNAME correctly
- Clear browser cache

---

## 💰 Cost

**Everything is free:**
- Cloudflare Pages: $0 (unlimited bandwidth)
- Web3Forms: $0 (unlimited submissions)
- SSL: $0 (auto-included)
- Commercial use: ✅ Allowed

**Total: $0/month**

---

## 🔄 Making Changes

After initial setup, just:

1. Edit files locally
2. Commit and push to GitHub
3. Cloudflare auto-deploys in ~30 seconds

No manual deployment needed!

---

## Questions?

Email: **www@vimerk.com**
