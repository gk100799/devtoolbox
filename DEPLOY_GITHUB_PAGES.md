# DevToolbox - GitHub Pages Deployment Guide

## Overview

This Next.js app is configured for **static export** and automatic deployment to GitHub Pages via GitHub Actions.

## Prerequisites

1. **GitHub Account** - Create a free account at [github.com](https://github.com)
2. **Repository** - Push this code to a GitHub repository

## Setup Instructions

### 1. Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and desired repo name.

### 2. Enable GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This enables automatic deployment from the workflow

### 3. Configure Repository Name (if not at root domain)

If deploying to a **subdomain** like `username.github.io/custom-project`:

Update `next.config.ts`:
```typescript
basePath: "/custom-project",  // Match your repo name
```

If deploying to a **user/org site** at `username.github.io`, leave `basePath` empty (default).

### 4. Deploy

Just push to `main` branch:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

The GitHub Actions workflow will:
- Install dependencies
- Build & export static files to `./out`
- Deploy to GitHub Pages

Your site will be live at:
- **User/Org site**: `https://username.github.io`
- **Project site**: `https://username.github.io/your-repo-name`

## AdSense Configuration

The AdSense publisher ID is already set. Once your GitHub Pages site goes live:

1. Verify domain in [Google AdSense](https://www.google.com/adsense/start/)
2. AdSense will crawl your site and enable ads automatically
3. Monitor earnings in AdSense dashboard

## Updating the Site

Edit files locally, commit, and push to `main`. GitHub Actions will redeploy automatically within 1-2 minutes.

## Adding More Tools

1. Add tool to `src/lib/tools.ts`
2. Create component in `src/tools/YourTool.tsx`
3. Add mapping to `src/app/tools/[slug]/page.tsx`
4. Commit and push

That's it! The site auto-deploys.

## Troubleshooting

**Site not showing up?**
- Wait 2-3 minutes for Actions to complete
- Check "Actions" tab in GitHub for build status
- Verify "Source" is set to "GitHub Actions" in Pages settings

**Ads not showing?**
- Ensure domain is verified in AdSense
- AdSense may take 24-48 hours to activate
- Check browser console for ad-related warnings

**Build fails?**
- Check Actions tab for error logs
- Ensure Node.js dependencies are compatible
- Try running `npm run build` locally to debug
