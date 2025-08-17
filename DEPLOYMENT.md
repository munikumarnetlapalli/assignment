# Deployment Guide

This guide covers deploying your React Component Library to various platforms.

## 🚀 Vercel Deployment (Recommended)

### Automatic Deployment Setup

1. **Connect to Vercel**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project" and import your GitHub repository

2. **Automatic Configuration**
   - Vercel will automatically detect the `vercel.json` configuration
   - Build Command: `npx storybook build`
   - Output Directory: `storybook-static`
   - Install Command: `npm install`

3. **Environment Variables** (if needed)
   ```
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Deploy" - Vercel will build and deploy automatically
   - Every push to main branch will trigger automatic redeployment

### Manual Vercel Deployment

If you prefer CLI deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## 📦 Other Deployment Platforms

### Netlify

1. **Create `netlify.toml`**:
```toml
[build]
  command = "npx storybook build"
  publish = "storybook-static"

[build.environment]
  NODE_VERSION = "18"
```

2. **Deploy**:
   - Connect your GitHub repository to Netlify
   - Set build command: `npx storybook build`
   - Set publish directory: `storybook-static`

### GitHub Pages

1. **Add GitHub Actions** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy Storybook to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npx storybook build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./storybook-static
```

2. **Enable GitHub Pages**:
   - Go to repository settings
   - Enable Pages from `gh-pages` branch

### AWS S3 + CloudFront

1. **Build Storybook**:
```bash
npx storybook build
```

2. **Upload to S3**:
```bash
aws s3 sync storybook-static/ s3://your-bucket-name --delete
```

3. **Invalidate CloudFront**:
```bash
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 🔧 Build Optimization

### Environment-Specific Builds

For production builds, ensure optimal performance:

```bash
# Production build with optimizations
NODE_ENV=production npx storybook build

# Check build size
du -sh storybook-static/
```

### Build Performance Tips

1. **Enable Build Cache**:
   - Vercel automatically caches node_modules
   - For other platforms, cache `node_modules` between builds

2. **Optimize Assets**:
   - Images are automatically optimized by Storybook
   - Consider using CDN for large assets

3. **Minimize Bundle Size**:
   - Only import used components
   - Use tree shaking for optimal bundle sizes

## 🔍 Post-Deployment Checklist

After deployment, verify:

- [ ] All components render correctly
- [ ] Theme switching works (light/dark mode)
- [ ] All Storybook controls function properly
- [ ] Mobile responsiveness is maintained
- [ ] Documentation pages load correctly
- [ ] No console errors in browser
- [ ] Performance is acceptable (< 3s load time)

## 🐛 Troubleshooting

### Common Issues

**Build Fails**
- Check Node.js version (requires 18+)
- Clear cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

**Missing Dependencies**
- Ensure all dependencies are in `package.json`
- Check for peer dependency warnings

**Routing Issues**
- Ensure `vercel.json` has proper rewrites
- For other platforms, configure SPA routing

**Performance Issues**
- Enable gzip compression
- Use CDN for static assets
- Optimize images

## 📊 Monitoring

### Analytics Setup

Add analytics to track component usage:

1. **Google Analytics** (in `.storybook/preview.ts`):
```javascript
// Add GA tracking code
```

2. **Vercel Analytics** (automatic with Vercel Pro)

### Performance Monitoring

Monitor your deployed Storybook:

- **Lighthouse**: Regular performance audits
- **Vercel Speed Insights**: Automatic with Vercel
- **Custom Monitoring**: Add your preferred solution

---

Ready to deploy? Follow the Vercel setup above for the fastest deployment experience! 🚀