# 🚀 Deployment Guide - Sweet Slider

## Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `GaneshMandakapu/sweet-slider`
   - Click "Import"

3. **Configure Build Settings**
   Vercel should auto-detect Vite, but verify these settings:
   
   - **Framework Preset**: Vite
   - **Root Directory**: `vite-project`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live! 🎉

5. **Get Your URL**
   - You'll receive a URL like: `https://sweet-slider-xyz.vercel.app`
   - Add a custom domain if you want!

---

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd /Users/ganesh/Desktop/Projects/sweet-slider
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **sweet-slider**
   - In which directory is your code? **./vite-project**
   - Want to override settings? **N**

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

### Option 3: Automatic Deployment (Recommended for Continuous Deployment)

Once deployed via Option 1 or 2:

- Every time you push to `main` branch, Vercel will automatically deploy
- Pull requests will get preview deployments
- No manual intervention needed!

---

## Deploy to Netlify (Alternative)

1. **Go to Netlify**
   - Visit: https://netlify.com
   - Sign in with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select `GaneshMandakapu/sweet-slider`

3. **Configure Build Settings**
   - **Base directory**: `vite-project`
   - **Build command**: `npm run build`
   - **Publish directory**: `vite-project/dist`

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live!

---

## Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   cd vite-project
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add to scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.js**
   Add base URL:
   ```javascript
   export default defineConfig({
     base: '/sweet-slider/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repo settings
   - Pages → Source → gh-pages branch
   - Save

---

## Environment Variables (If Needed Later)

For Vercel/Netlify, add these in the dashboard:

- `VITE_API_URL` - Your backend API URL (when you add one)
- `VITE_CONTACT_EMAIL` - Email for contact form
- Any other API keys you need

---

## Custom Domain (Optional)

### On Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### On Netlify:
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS

---

## Performance Tips

Your site is already optimized, but here are some extras:

1. **Enable Compression** (Auto on Vercel/Netlify)
2. **CDN** (Auto on Vercel/Netlify)
3. **HTTPS** (Auto on Vercel/Netlify)
4. **Image Optimization** (Already using lazy loading)

---

## Monitoring

After deployment, monitor your site:

- **Vercel Analytics** - Built-in, free
- **Google Analytics** - Add tracking code if needed
- **Vercel Speed Insights** - Performance monitoring

---

## Troubleshooting

### Build Fails?
- Check that all dependencies are in `package.json`
- Ensure `vite-project` is the correct root directory
- Check build logs in Vercel dashboard

### Images Not Loading?
- Verify images are in `/public/images/`
- Check image paths start with `/`

### 404 Errors?
- For SPAs, add redirects (Vercel handles this automatically for Vite)

---

## Quick Start - Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
cd /Users/ganesh/Desktop/Projects/sweet-slider
vercel

# Follow prompts, then deploy to production
vercel --prod
```

---

## 🎉 That's It!

Your Sweet Slider will be live in minutes! Share your URL with the world! 🍰✨

---

**Need help?** Check:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev/guide/
