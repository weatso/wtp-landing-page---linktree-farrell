---
description: How to deploy the WTP Company Profile project to Vercel
---

# Deployment Guide to Vercel

Follow these steps to deploy your project to Vercel correctly.

## 1. Preparation (Local)
Before deploying, ensure all your latest changes (including the route rename `/links` → `/link`) are pushed to your GitHub repository.

```bash
git add .
git commit -m "Final polish and route rename"
git push origin main
```

## 2. Vercel Project Setup
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** and select **"Project"**.
3. Import your repository: `weatso/wtp-landing-page---linktree-farrell`.

## 3. Configure Build Settings
- **Framework Preset**: Select `Next.js`.
- **Root Directory**: Biarkan `./`.
- **Build Command**: Biarkan default (Vercel will use `npm run build`).

## 4. Environment Variables (CRITICAL)
You must add these variables so your site can connect to Sanity:

| Key | Value |
| :--- | :--- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `j8mqxj28` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |

## 5. Deploy
1. Click the **"Deploy"** button.
2. Wait for the build process to complete (usually 1-3 minutes).
3. Once finished, Vercel will provide a production URL (e.g., `wtp-landing-page.vercel.app`).

## 6. Post-Deployment Verification
- Visit your new URL.
- Check the bio-link route at `/link`.
- Ensure all images are loading correctly.
