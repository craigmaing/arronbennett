# Netlify Deployment & Forms Setup Guide

## Quick Start Deployment Steps

This guide walks you through deploying the Arron Bennett Building website to Netlify with fully functioning forms.

---

## Part 1: Prerequisites

### What You Need
- [ ] GitHub, GitLab, or Bitbucket account
- [ ] Project code pushed to repository
- [ ] Netlify account (free at netlify.com)
- [ ] Email address for form notifications

### What's Included
- ✅ Contact form with Netlify Forms integration
- ✅ Honeypot spam protection
- ✅ Thank you page for successful submissions
- ✅ netlify.toml configuration file
- ✅ Security headers
- ✅ Cache control settings
- ✅ Form submission notifications

---

## Part 2: Deploy to Netlify (5 minutes)

### Step 1: Push Code to Git Repository

```bash
# Navigate to project directory
cd C:\Users\Fearn\ab1\arron-bennett-astro

# Initialize git repo (if not already done)
git init
git add .
git commit -m "Initial Netlify deployment with Netlify Forms"
git remote add origin https://github.com/YOUR_USERNAME/repo-name.git
git push -u origin main
```

### Step 2: Connect Repository to Netlify

1. **Go to Netlify Dashboard**
   - Visit https://app.netlify.com
   - Log in to your Netlify account
   - Click "New site from Git"

2. **Select Your Git Provider**
   - Choose GitHub, GitLab, or Bitbucket
   - Click "Connect account" (if not already connected)
   - Authorize Netlify to access your repositories

3. **Select Repository**
   - Find your repository in the list
   - Click to select it

4. **Configure Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 (or higher)

   ✅ These settings are already in `netlify.toml` - Netlify will auto-detect them!

5. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy
   - You'll see a temporary domain like `random-name-12345.netlify.app`

### Step 3: Wait for Build to Complete

- Monitor the build progress in the **Deploy** section
- Should take 1-3 minutes
- You'll see "Deploy preview ready" when complete

---

## Part 3: Configure Forms & Email Notifications

### Step 1: Access Form Settings

1. **Go to Site Settings**
   - In Netlify dashboard, click your site name
   - Click "Site settings" in the left menu

2. **Navigate to Forms**
   - Click "Forms" in the left sidebar
   - You should see "contact" form listed automatically

### Step 2: Enable Email Notifications

1. **Set Notification Email**
   - Scroll to "Form notifications" section
   - Click "Add notification"
   - Select "Email notification"

2. **Configure Email**
   - **From name:** "Arron Bennett Building"
   - **To email:** your-email@example.com
   - Click "Save"

3. **Verify Email**
   - Check your email inbox
   - You may receive a confirmation email from Netlify
   - Click the link to confirm

### Step 3: Test the Form

1. **Navigate to Your Site**
   - Go to your Netlify domain or custom domain
   - Visit the contact page

2. **Fill Out Test Form**
   - Name: "Test User"
   - Phone: "07773 123456"
   - Email: "test@example.com"
   - Project: "This is a test submission"
   - Click "Send Message"

3. **Verify Success**
   - Should see thank you page
   - Check your notification email inbox within 1-2 minutes
   - Should receive email with all form fields

---

## Part 4: Connect Custom Domain (Optional)

### If You Have Your Own Domain

1. **In Netlify Dashboard**
   - Go to Site settings → Domain management
   - Click "Add domain"
   - Enter your domain name

2. **Update DNS Records**
   - Go to your domain provider (GoDaddy, NameCheap, etc.)
   - Update nameservers to Netlify's:
     - `dns1.p01.nsone.net`
     - `dns2.p01.nsone.net`
     - `dns3.p01.nsone.net`
     - `dns4.p01.nsone.net`

3. **Wait for DNS Propagation**
   - Takes 24-48 hours to fully propagate
   - Netlify will show status in dashboard

4. **Enable SSL/TLS**
   - Netlify automatically enables HTTPS
   - You'll see a green lock icon

---

## Part 5: Verification Checklist

### Build & Deployment
- [ ] Site deployed successfully on Netlify
- [ ] Build logs show no errors
- [ ] Site is accessible at netlify domain
- [ ] All pages load correctly
- [ ] Mobile view works properly
- [ ] Images load correctly

### Form Testing
- [ ] Contact form displays correctly
- [ ] All form fields visible and usable
- [ ] Form submission succeeds
- [ ] Redirect to thank-you page works
- [ ] Thank you page displays properly
- [ ] Email notification received
- [ ] Email contains all form fields
- [ ] Honeypot field is hidden (use DevTools)

### Security
- [ ] HTTPS enabled (green lock)
- [ ] Security headers present (check with browser DevTools)
- [ ] No console errors
- [ ] No mixed content warnings

### Performance
- [ ] Lighthouse score 90+ (check in Netlify Analytics)
- [ ] Form loads quickly
- [ ] No performance issues

---

## Part 6: Advanced Configuration

### Enable reCAPTCHA (Optional - For Extra Spam Protection)

If you start getting spam submissions:

1. **Get reCAPTCHA Keys**
   - Visit https://www.google.com/recaptcha/admin
   - Create new reCAPTCHA v3 site
   - Copy Site Key and Secret Key

2. **Add to netlify.toml**
   ```toml
   [[forms]]
     name = "contact"
     honeypot = "bot-field"
     action = "/thank-you"
     spam-protection = true
   ```

3. **Restart Deploy**
   - Netlify will automatically trigger rebuild
   - Forms will now use additional spam filtering

### Enable Slack Notifications (Optional)

Get instant Slack alerts for new form submissions:

1. **In Netlify Dashboard**
   - Site settings → Forms → contact form
   - Click "Add notification"
   - Select "Slack"

2. **Connect Slack Workspace**
   - Follow the OAuth flow
   - Select channel for notifications
   - Click "Connect"

### Enable Discord Notifications (Optional)

Get form submissions in Discord:

1. **Create Discord Webhook**
   - Go to your Discord server
   - Right-click channel → Edit Channel
   - Go to Integrations → Webhooks
   - Create new webhook
   - Copy webhook URL

2. **In Netlify Dashboard**
   - Site settings → Forms → contact form
   - Add custom webhook notification
   - Paste Discord webhook URL

---

## Part 7: Monitoring & Maintenance

### Daily: Monitor Submissions

1. **Check Netlify Forms Dashboard**
   - Go to Forms → Submissions
   - Review recent submissions
   - Check spam scores
   - Verify quality of leads

### Weekly: Review Emails

1. **Monitor Notification Emails**
   - Check your notification email inbox
   - Ensure emails aren't going to spam
   - Verify you're receiving all submissions

### Monthly: Review Analytics

1. **Check Form Analytics**
   - Netlify → Site analytics
   - Monitor form submission rate
   - Track conversion metrics
   - Identify high-performing pages

### Update as Needed: Maintain Form

1. **Update Form Fields**
   - Edit `src/components/ContactForm.astro`
   - Add/remove fields as needed
   - Update validation
   - Commit and push changes
   - Netlify automatically redeploys

---

## Part 8: Troubleshooting

### "Form not found" error

**Problem:** Submit button doesn't work
**Solution:**
1. Verify `data-netlify="true"` on form tag
2. Verify form `name="contact"` attribute
3. Verify hidden `form-name` input is present
4. Redeploy to Netlify
5. Clear browser cache

### Emails not arriving

**Problem:** Not receiving form notifications
**Solution:**
1. Check notification email configured in Netlify admin
2. Check spam/junk folder
3. Add Netlify email domain to safe senders
4. Test sending manually by filling form on live site
5. Contact Netlify support if still not working

### Honeypot field visible

**Problem:** Bot-field appearing on page
**Solution:**
1. Verify `class="hidden"` is on honeypot `<p>` tag
2. Verify `aria-hidden="true"` attribute
3. Check that Tailwind CSS is building correctly
4. Run `npm run build` locally to verify HTML

### Site not rebuilding after push

**Problem:** Changes pushed to GitHub but site not updating
**Solution:**
1. Check Netlify deployment logs
2. Verify build command in netlify.toml
3. Ensure all dependencies are installed
4. Check for build errors in logs
5. Trigger manual redeploy in Netlify dashboard

### Form data not captured

**Problem:** Form appears to work but no submissions in dashboard
**Solution:**
1. Check that site is deployed (not preview)
2. Verify form name matches Netlify Forms dashboard
3. Check form submission in browser DevTools Network tab
4. Look for errors in Netlify build logs
5. Verify `form-name` hidden input has correct value

---

## Part 9: Getting Help

### Netlify Support Resources

- **Official Documentation:** https://docs.netlify.com
- **Forms Documentation:** https://docs.netlify.com/forms/overview/
- **Support Dashboard:** https://app.netlify.com/support
- **Community Forums:** https://answers.netlify.com
- **Status Page:** https://www.netlify.com/status/

### Common Issues & Solutions

**Issue: Build fails with "npm not found"**
- Solution: Ensure Node.js 18+ is specified in netlify.toml

**Issue: Site returns 404 on subpages**
- Solution: This is expected for SPA/Astro sites. The redirect in netlify.toml handles it.

**Issue: Forms working locally but not on Netlify**
- Solution: Forms only work on production Netlify deployments, not in local development

**Issue: Images not loading**
- Solution: Ensure image paths are correct in Astro. Check Lighthouse report for issues.

---

## Part 10: Performance Optimization

### Monitor Core Web Vitals

1. **In Netlify Analytics**
   - Visit your site's Analytics tab
   - Monitor Core Web Vitals
   - Track Largest Contentful Paint (LCP)
   - Track Cumulative Layout Shift (CLS)
   - Track First Input Delay (FID)

### Optimize if Needed

- Images: Ensure WebP format with proper sizing
- CSS: Minified and optimized
- JavaScript: Minimal, only when necessary
- Fonts: Self-hosted with font-display: swap

Current Lighthouse scores should be 90+.

---

## Part 11: Post-Launch Checklist

After deployment, verify everything is working:

### Functionality
- [ ] All pages accessible
- [ ] All links work
- [ ] Form submission works
- [ ] Thank you page displays
- [ ] Email notifications arrive
- [ ] Mobile navigation works
- [ ] Images display correctly
- [ ] Videos (if any) play correctly

### SEO & Analytics
- [ ] Google Search Console linked
- [ ] Google Analytics 4 installed
- [ ] Meta tags in HTML
- [ ] Sitemap.xml accessible
- [ ] robots.txt configured

### Performance
- [ ] Lighthouse score 90+
- [ ] Core Web Vitals in "Good" range
- [ ] Form submission time < 2s
- [ ] Page load time < 3s

### Security
- [ ] SSL/TLS enabled (HTTPS)
- [ ] Security headers present
- [ ] No console errors
- [ ] No mixed content warnings

---

## File Summary

### Files Created/Modified for Netlify Deployment

```
C:\Users\Fearn\ab1\arron-bennett-astro\
├── netlify.toml (NEW)
│   └── Build configuration and form settings
├── src/
│   ├── components/
│   │   └── ContactForm.astro (VERIFIED - No changes needed)
│   │       └── Already has all Netlify Forms attributes
│   └── pages/
│       ├── contact-us.astro (No changes needed)
│       └── thank-you.astro (NEW)
│           └── Success page for form submissions
└── NETLIFY-FORMS-IMPLEMENTATION.md (NEW)
    └── Complete technical documentation
```

---

## Next Steps

1. **Immediate:** Deploy to Netlify (Part 2)
2. **Within 1 hour:** Configure email notifications (Part 3)
3. **Within 1 hour:** Test form submission (Part 3, Step 3)
4. **Within 24 hours:** Monitor first form submissions
5. **Within 1 week:** Review performance metrics
6. **Ongoing:** Monitor submissions and optimize

---

## Success Criteria

Your deployment is successful when:

✅ Site is live at Netlify domain
✅ Form submits without errors
✅ Thank you page displays after submission
✅ Email notification received in your inbox
✅ All form fields captured correctly
✅ Honeypot spam protection working
✅ Lighthouse score 90+
✅ All pages load in < 3 seconds
✅ Mobile view is responsive
✅ HTTPS enabled with security headers

---

**Document Created:** 2025-10-30
**Status:** Ready for Production Deployment
**Version:** 1.0
