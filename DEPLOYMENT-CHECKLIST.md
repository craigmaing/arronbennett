# DEPLOYMENT CHECKLIST
## Arron Bennett Building Contractors

**Production Launch Guide**
Version 1.0.0 | Last Updated: 2025-11-04

> **Current Status:** Site scored 89/100 on production readiness. All critical issues resolved. Ready for deployment.

---

## Pre-Deployment Phase
**Estimated Time: 2-3 hours**

### 1. Final Code Review ⏱️ 30 minutes
- [ ] Review all recent changes in Git history
- [ ] Verify all audit fixes are committed
- [ ] Search and remove any `console.log` statements
- [ ] Ensure no TODO comments remain in production code
- [ ] Check for any hardcoded test data or API keys

**Commands to run:**
```bash
git log --oneline -20
git status
grep -r "console.log" src/
grep -r "TODO" src/
```

### 2. Local Testing ⏱️ 45 minutes
- [ ] Run `npm install` to ensure dependencies are current
- [ ] Run `npm run build` successfully
- [ ] Test preview build with `npm run preview`
- [ ] Test all pages load correctly (see checklist below)
- [ ] Test contact form submission with real email
- [ ] Test mobile responsiveness in DevTools
- [ ] Test in multiple browsers

**Commands to run:**
```bash
npm install
npm run build
npm run preview
```

**Pages to test:**
- [ ] Homepage (/)
- [ ] About Us (/about-us)
- [ ] Services (/services)
- [ ] Extensions (/services/extensions)
- [ ] Renovations (/services/renovations)
- [ ] New Builds (/services/new-builds)
- [ ] Kitchens & Bathrooms (/services/kitchens-bathrooms)
- [ ] Loft Conversions (/services/loft-conversions)
- [ ] Contact (/contact)

**Browser testing:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if available)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 3. Environment Configuration ⏱️ 15 minutes
- [ ] Verify Resend API key is set in Netlify environment variables
- [ ] Check all environment variables are configured
- [ ] Verify Node version is set to 18.x in netlify.toml
- [ ] Review netlify.toml configuration for accuracy
- [ ] Verify build command is `npm run build`
- [ ] Verify publish directory is `dist`

**Environment variables needed:**
- `RESEND_API_KEY` - For contact form emails
- `PUBLIC_SITE_URL` - Production domain URL

**Netlify configuration check:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

### 4. Content Verification ⏱️ 30 minutes
- [ ] Check all images load correctly (test each service page)
- [ ] Verify all service pages have complete content
- [ ] Check contact information is correct
- [ ] Verify phone numbers format correctly
- [ ] Verify email address is correct
- [ ] Check business hours are accurate
- [ ] Verify service areas (Buckinghamshire, Northamptonshire, Bedfordshire)
- [ ] Review testimonials are displayed correctly
- [ ] Check call-to-action buttons work

**Contact details to verify:**
- Phone: 01296 234 567
- Email: info@arronbennett.co.uk
- Service areas are listed correctly

### 5. SEO Verification ⏱️ 20 minutes
- [ ] Verify meta descriptions on all pages (check source code)
- [ ] Check OpenGraph images are set for social sharing
- [ ] Verify sitemap.xml generates correctly at /sitemap-index.xml
- [ ] Check robots.txt is accessible at /robots.txt
- [ ] Verify structured data (schema.org) for LocalBusiness
- [ ] Check canonical URLs are set correctly
- [ ] Verify page titles are unique and descriptive

**Commands to run:**
```bash
# After build, check these files exist:
ls dist/sitemap-index.xml
ls dist/robots.txt
```

**Test URLs after deployment:**
- https://yourdomain.co.uk/sitemap-index.xml
- https://yourdomain.co.uk/robots.txt

---

## Deployment Phase
**Estimated Time: 1-2 hours**

### 1. Git Repository ⏱️ 10 minutes
- [ ] Commit all final changes with descriptive message
- [ ] Push to main branch
- [ ] Tag release as v1.0.0
- [ ] Verify all changes are on GitHub/remote

**Commands to run:**
```bash
git add .
git commit -m "Production release v1.0.0 - Ready for deployment"
git push origin main
git tag -a v1.0.0 -m "Production release v1.0.0"
git push origin v1.0.0
```

### 2. Netlify Deployment ⏱️ 30 minutes
- [ ] Connect repository to Netlify (if not already done)
- [ ] Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Node version: `18`
- [ ] Set environment variables in Netlify dashboard
- [ ] Enable form notifications (Forms → Form notifications)
- [ ] Configure custom domain in Domain settings
- [ ] Enable HTTPS (should auto-enable)
- [ ] Set up redirects (already in netlify.toml)
- [ ] Trigger first deployment

**Netlify Dashboard Steps:**
1. Site settings → Build & deploy → Build settings
2. Site settings → Environment variables → Add variables
3. Site settings → Domain management → Add custom domain
4. Site settings → Forms → Enable form notifications

**Form notification setup:**
- Enable email notifications for contact form
- Set notification email address
- Test form submission notification

### 3. DNS Configuration ⏱️ 5 minutes + propagation time
- [ ] Point domain to Netlify nameservers or A record
- [ ] Wait for DNS propagation (can take up to 48 hours, usually faster)
- [ ] Verify domain resolves correctly using DNS checker

**Netlify DNS settings:**
Option 1: Use Netlify DNS (recommended)
- Point nameservers to Netlify's DNS

Option 2: Use external DNS
- Add A record: 75.2.60.5
- Add CNAME for www: your-site.netlify.app

**Check DNS propagation:**
- Use https://dnschecker.org
- Test from multiple locations

---

## Post-Deployment Phase
**Estimated Time: 1-2 hours**

### 1. Smoke Testing ⏱️ 30 minutes
- [ ] Visit homepage at production URL
- [ ] Test all navigation links (header and footer)
- [ ] Submit test contact form with real email
- [ ] Check mobile view on real device (phone/tablet)
- [ ] Test in Chrome, Firefox, Safari
- [ ] Verify HTTPS works (look for padlock icon)
- [ ] Test all service page links
- [ ] Verify images load correctly
- [ ] Check no broken links (use browser console)

**Critical test:**
Submit contact form and verify:
- Form submission succeeds
- Thank you message displays
- Email received via Resend
- No JavaScript errors in console

### 2. Performance Verification ⏱️ 15 minutes
- [ ] Run Google PageSpeed Insights for desktop and mobile
- [ ] Check Core Web Vitals scores:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
- [ ] Verify images load in AVIF format (check Network tab)
- [ ] Check load times on mobile (aim for < 3 seconds)

**Performance testing URLs:**
- https://pagespeed.web.dev/
- https://www.webpagetest.org/

**Target scores:**
- Desktop: 90+ (should achieve this)
- Mobile: 80+ (current score: 89)

### 3. SEO Verification ⏱️ 20 minutes
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Test structured data with Google Rich Results Test
- [ ] Check meta tags in search preview
- [ ] Verify OpenGraph tags with Facebook Sharing Debugger
- [ ] Check Twitter Card preview

**Tools to use:**
- Google Search Console: https://search.google.com/search-console
- Rich Results Test: https://search.google.com/test/rich-results
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

### 4. Security Verification ⏱️ 10 minutes
- [ ] Test HTTPS certificate (should show valid)
- [ ] Verify security headers at securityheaders.com
- [ ] Check for mixed content warnings (browser console)
- [ ] Test form spam protection (Netlify built-in)
- [ ] Verify no sensitive data exposed in source code

**Security testing URLs:**
- https://securityheaders.com/
- https://www.ssllabs.com/ssltest/

**Expected security headers:**
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block

### 5. Monitoring Setup ⏱️ 15 minutes
- [ ] Set up Google Analytics (if using)
- [ ] Configure Google Search Console
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom, or Netlify Analytics)
- [ ] Enable Netlify email notifications for deploy failures
- [ ] Set up form submission notifications

**Recommended monitoring:**
- Google Search Console (free, essential for SEO)
- UptimeRobot (free tier available)
- Netlify Analytics (paid, but comprehensive)

---

## Week 1 Post-Launch
**Estimated Time: 2-3 hours**

### Priority Optimizations
- [ ] Monitor contact form submissions daily
- [ ] Review PageSpeed scores on all pages
- [ ] Check browser console for any errors
- [ ] Review Google Search Console for indexing issues
- [ ] Implement remaining HIGH priority fixes from master audit:
  - Optimize large CSS bundle on about-us page (33.3 KB)
  - Consider code splitting for better performance
- [ ] Monitor Netlify analytics for traffic patterns
- [ ] Check for any user-reported issues

**Daily checks (first week):**
- Form submissions working
- No JavaScript errors
- Site loading properly
- Email notifications received

---

## Month 1 Post-Launch
**Estimated Time: 4-6 hours**

### Ongoing Optimizations
- [ ] Implement MEDIUM priority fixes from audit report:
  - Add lazy loading for below-fold images
  - Optimize remaining image formats
  - Review and optimize bundle sizes
- [ ] Review Google Search Console data:
  - Pages indexed
  - Search queries
  - Click-through rates
- [ ] Check for 404 errors in Search Console
- [ ] Review and respond to user feedback
- [ ] Consider A/B testing for call-to-action buttons
- [ ] Analyze form conversion rates
- [ ] Review Core Web Vitals in real-world data

**Analytics to review:**
- Traffic sources
- Popular pages
- Bounce rates
- Form conversion rates
- Mobile vs desktop usage

---

## Emergency Rollback Plan

**If critical issues are discovered post-deployment:**

### Immediate Actions (within 5 minutes)
1. [ ] Navigate to Netlify dashboard
2. [ ] Go to Deploys tab
3. [ ] Find previous successful deployment
4. [ ] Click "Publish deploy" to rollback
5. [ ] Verify site is working with previous version

### Investigation (within 30 minutes)
1. [ ] Check Netlify deploy logs for errors
2. [ ] Review browser console for JavaScript errors
3. [ ] Test locally to reproduce issue
4. [ ] Check environment variables are set correctly
5. [ ] Review recent Git commits for breaking changes

### Resolution
1. [ ] Fix issue in local environment
2. [ ] Test thoroughly locally
3. [ ] Commit fix with clear description
4. [ ] Push to main branch
5. [ ] Monitor new deployment
6. [ ] Verify fix is working in production

**Common issues and solutions:**
- **Form not working:** Check RESEND_API_KEY environment variable
- **Images not loading:** Check image paths and dist folder
- **404 errors:** Check Astro routing and netlify.toml redirects
- **Slow performance:** Check bundle sizes and image optimization
- **JavaScript errors:** Check browser console and build logs

---

## Success Criteria

**The launch is successful when all of the following are true:**

### Performance
- [ ] Site loads within 3 seconds on mobile networks
- [ ] PageSpeed score is 80+ on mobile, 90+ on desktop
- [ ] Core Web Vitals are in "Good" range
- [ ] Images load in modern formats (AVIF/WebP)

### Functionality
- [ ] Contact form works and sends emails reliably
- [ ] All navigation links work correctly
- [ ] No JavaScript errors in browser console
- [ ] Site works in all major browsers
- [ ] Mobile experience is smooth and responsive

### SEO
- [ ] All pages are indexed by Google (check within 1 week)
- [ ] Sitemap is submitted and processing
- [ ] Structured data validates correctly
- [ ] Meta descriptions are present on all pages

### Security
- [ ] HTTPS is working correctly with valid certificate
- [ ] No security warnings in browsers
- [ ] Security headers are properly configured
- [ ] No sensitive data exposed

### Business Goals
- [ ] Contact information is accurate and visible
- [ ] Service pages clearly describe offerings
- [ ] Call-to-action buttons are prominent
- [ ] Professional appearance maintained across devices

---

## Troubleshooting Guide

### Build Failures
**Problem:** Netlify build fails
**Solution:**
1. Check Netlify build logs for specific error
2. Verify package.json dependencies are correct
3. Test `npm run build` locally
4. Check Node version matches netlify.toml
5. Clear Netlify cache and rebuild

### Form Not Working
**Problem:** Contact form doesn't send emails
**Solution:**
1. Verify RESEND_API_KEY is set in Netlify
2. Check Resend API dashboard for errors
3. Test form locally with API key
4. Check email address is valid
5. Review form submission in Netlify dashboard

### Slow Performance
**Problem:** Site loads slowly
**Solution:**
1. Run PageSpeed Insights to identify issues
2. Check image sizes and formats
3. Review bundle sizes in build output
4. Consider implementing lazy loading
5. Check Netlify CDN is serving assets

### DNS Issues
**Problem:** Domain doesn't resolve
**Solution:**
1. Check DNS propagation at dnschecker.org
2. Verify DNS records are correct
3. Wait up to 48 hours for full propagation
4. Clear browser DNS cache
5. Try accessing from different network

### SEO Not Working
**Problem:** Pages not appearing in Google
**Solution:**
1. Verify sitemap is submitted to Search Console
2. Check robots.txt isn't blocking pages
3. Wait 1-2 weeks for initial indexing
4. Request indexing via Search Console
5. Ensure meta tags are present

---

## Post-Launch Checklist Summary

### Day 1
- [ ] Verify site is live and accessible
- [ ] Test contact form
- [ ] Monitor for errors
- [ ] Submit to Google Search Console

### Week 1
- [ ] Review form submissions
- [ ] Check performance scores
- [ ] Monitor uptime
- [ ] Address any HIGH priority issues

### Month 1
- [ ] Review analytics data
- [ ] Implement MEDIUM priority optimizations
- [ ] Check SEO rankings
- [ ] Gather user feedback

---

## Resources & Links

### Documentation
- Astro Documentation: https://docs.astro.build
- Netlify Documentation: https://docs.netlify.com
- Resend Documentation: https://resend.com/docs

### Testing Tools
- PageSpeed Insights: https://pagespeed.web.dev/
- Google Search Console: https://search.google.com/search-console
- Security Headers: https://securityheaders.com/
- DNS Checker: https://dnschecker.org

### Master Audit Report
- Reference: `master-audit-report.md` in project root
- Current score: 89/100
- All critical issues resolved

---

## Final Notes

**You're ready to launch!** This site has been thoroughly audited and optimized. The current production readiness score of 89/100 is excellent.

**Remember:**
- Take your time with each step
- Test thoroughly before marking items complete
- Keep the emergency rollback plan handy
- Monitor closely in the first week
- Celebrate the successful launch!

**Questions or issues?**
- Review the master audit report for technical details
- Check Netlify documentation for platform-specific issues
- Consult Astro documentation for framework questions

---

**Good luck with the launch! 🚀**

*Last updated: 2025-11-04*
*Production Readiness Score: 89/100*
*Status: READY FOR DEPLOYMENT*
