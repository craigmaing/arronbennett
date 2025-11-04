# Domain Setup Checklist
## arronbennettbuilding.co.uk

Print this page or keep it open while you work through the setup.

---

## Before You Start

- [ ] Read: **DOMAIN_SETUP_SUMMARY.md** (5 minutes)
- [ ] Have Ionos login credentials ready
- [ ] Have Netlify account access
- [ ] Site is deployed and working at: https://arronbennett.netlify.app

---

## Phase 1: Netlify Configuration

### Add Domain in Netlify
- [ ] Go to: https://app.netlify.com/projects/arronbennett
- [ ] Click "Domain management" or "Set up a custom domain"
- [ ] Click "Add custom domain" or "Add domain"
- [ ] Enter: `arronbennettbuilding.co.uk`
- [ ] Click "Verify" or "Add domain"
- [ ] Netlify shows DNS instructions (keep page open)

### Add WWW Alias
- [ ] Click "Add domain alias" or similar option
- [ ] Enter: `www.arronbennettbuilding.co.uk`
- [ ] Click "Add" or "Save"
- [ ] Take screenshot of Netlify DNS instructions
- [ ] Note: Both domains show "Waiting for DNS" status

**Time Spent**: _____ minutes
**Any Issues**: _________________________________

---

## Phase 2: DNS Configuration at Ionos

### Login to Ionos
- [ ] Go to: https://www.ionos.co.uk/
- [ ] Login to your account
- [ ] Navigate to: Domains
- [ ] Select: arronbennettbuilding.co.uk
- [ ] Click: DNS or DNS Settings

### Remove Old Records (If Any)
- [ ] Check for existing A record for @ or apex
- [ ] Delete old A record (if exists)
- [ ] Check for existing CNAME for www
- [ ] Delete old CNAME (if exists)
- [ ] Check for AAAA records (IPv6)
- [ ] Delete AAAA records if they exist

### Add A Record for Apex Domain
- [ ] Click "Add Record" or similar
- [ ] Select Type: **A**
- [ ] Host/Name: **@** (or leave blank, or full domain)
- [ ] Value/Points to: **75.2.60.5**
- [ ] TTL: **3600** (or leave default)
- [ ] Click "Save" or "Add"
- [ ] Verify record appears in list

### Add CNAME Record for WWW
- [ ] Click "Add Record" or similar
- [ ] Select Type: **CNAME**
- [ ] Host/Name: **www**
- [ ] Value/Points to: **arronbennett.netlify.app**
  - [ ] NO "https://" prefix
  - [ ] NO "http://" prefix
  - [ ] Just the hostname
- [ ] TTL: **3600** (or leave default)
- [ ] Click "Save" or "Add"
- [ ] Verify record appears in list

### Verify and Save
- [ ] Both records visible in DNS list
- [ ] No typos in any values
- [ ] Click final "Save Changes" if required
- [ ] Take screenshot of DNS records
- [ ] Note time DNS changes were saved: _______

**Time Spent**: _____ minutes
**Any Issues**: _________________________________

---

## Phase 3: DNS Propagation (Wait Time)

### Initial Check (After 5 Minutes)
- [ ] Go to: https://www.whatsmydns.net/
- [ ] Enter: `arronbennettbuilding.co.uk`
- [ ] Select: A
- [ ] Should start showing: 75.2.60.5 in some locations
- [ ] Not all locations yet - this is normal

### Secondary Check (After 30 Minutes)
- [ ] Go to: https://www.whatsmydns.net/
- [ ] Enter: `arronbennettbuilding.co.uk`
- [ ] Select: A
- [ ] More locations showing: 75.2.60.5
- [ ] Check CNAME:
  - [ ] Enter: `www.arronbennettbuilding.co.uk`
  - [ ] Select: CNAME
  - [ ] Should show: arronbennett.netlify.app

### Final Check (After 1-2 Hours)
- [ ] Most/all locations showing correct DNS
- [ ] A record: 75.2.60.5
- [ ] CNAME: arronbennett.netlify.app
- [ ] Ready for next phase

**DNS Propagation Completed**: _____ hours after saving

**Note**: If DNS not propagating after 4 hours, see TROUBLESHOOTING_GUIDE.md

---

## Phase 4: Netlify Verification

### Check Domain Status
- [ ] Return to: https://app.netlify.com/projects/arronbennett/configuration/domain
- [ ] Check status of arronbennettbuilding.co.uk
  - [ ] Status changed from "Waiting for DNS" to "Verified"
  - [ ] If still waiting, click "Verify DNS configuration"
  - [ ] Wait 2-3 minutes and refresh

### Check WWW Status
- [ ] Check status of www.arronbennettbuilding.co.uk
  - [ ] Status changed to "Verified"
  - [ ] If still waiting, click "Verify DNS configuration"

### SSL Certificate Provisioning
- [ ] Go to: Domain settings → HTTPS
- [ ] Certificate status for arronbennettbuilding.co.uk:
  - [ ] Shows "Provisioning" or "Certificate issued"
  - [ ] Wait 1-5 minutes if provisioning
  - [ ] Should change to "Certificate issued" with green checkmark
- [ ] Certificate status for www.arronbennettbuilding.co.uk:
  - [ ] Shows "Certificate issued"

**Time Spent**: _____ minutes
**Any Issues**: _________________________________

---

## Phase 5: Configuration Settings

### Set Primary Domain
- [ ] In Netlify Domain Management
- [ ] Find "Primary domain" or "Default subdomain" section
- [ ] Choose your preference:
  - [ ] Option A: arronbennettbuilding.co.uk (apex as primary)
  - [ ] Option B: www.arronbennettbuilding.co.uk (www as primary - recommended)
- [ ] Click "Set as primary" or "Save"
- [ ] Other domain will automatically redirect to primary

### Force HTTPS (Should be Automatic)
- [ ] Go to: Domain settings → HTTPS
- [ ] Verify "Force HTTPS" is enabled
- [ ] If not enabled, enable it
- [ ] All HTTP requests will redirect to HTTPS

**Time Spent**: _____ minutes
**Primary Domain**: _________________________________

---

## Phase 6: Testing

### Test Apex Domain - HTTP
- [ ] Open browser
- [ ] Clear cache (Ctrl+Shift+Delete)
- [ ] Visit: `http://arronbennettbuilding.co.uk`
- [ ] Should redirect to: `https://arronbennettbuilding.co.uk`
- [ ] Site loads correctly
- [ ] Padlock icon shows in address bar

### Test Apex Domain - HTTPS
- [ ] Visit: `https://arronbennettbuilding.co.uk`
- [ ] Site loads immediately (no redirect)
- [ ] Padlock icon shows in address bar
- [ ] Click padlock: Certificate is valid
- [ ] Certificate issued by: Let's Encrypt

### Test WWW - HTTP
- [ ] Visit: `http://www.arronbennettbuilding.co.uk`
- [ ] Should redirect to: `https://www.arronbennettbuilding.co.uk`
- [ ] Site loads correctly
- [ ] Padlock icon shows

### Test WWW - HTTPS
- [ ] Visit: `https://www.arronbennettbuilding.co.uk`
- [ ] Site loads correctly
- [ ] Padlock icon shows
- [ ] Certificate is valid

### Test Primary Domain Redirect
- [ ] Visit both apex and www versions
- [ ] Non-primary should redirect to primary
- [ ] URL in address bar changes to primary domain
- [ ] Content loads correctly

### Test Mobile
- [ ] Open on mobile device
- [ ] Visit: arronbennettbuilding.co.uk
- [ ] Site loads correctly
- [ ] Responsive design works
- [ ] HTTPS active

### Test Incognito/Private
- [ ] Open incognito/private browser window
- [ ] Visit: arronbennettbuilding.co.uk
- [ ] Site loads correctly (confirms not cached)

### Browser Console Check
- [ ] Press F12 (Developer Tools)
- [ ] Go to Console tab
- [ ] Visit: https://arronbennettbuilding.co.uk
- [ ] No errors showing
- [ ] No mixed content warnings
- [ ] No certificate warnings

**Testing Completed**: All tests passed ✓
**Any Issues**: _________________________________

---

## Phase 7: Additional Verification

### SSL Certificate Details
- [ ] Visit: https://www.ssllabs.com/ssltest/
- [ ] Enter: `arronbennettbuilding.co.uk`
- [ ] Click "Submit"
- [ ] Wait for test (2-3 minutes)
- [ ] Grade: A or higher
- [ ] Certificate chain: Valid
- [ ] No warnings

### DNS Final Check
- [ ] Use command line:
  ```bash
  nslookup arronbennettbuilding.co.uk
  nslookup www.arronbennettbuilding.co.uk
  ```
- [ ] A record returns: 75.2.60.5
- [ ] CNAME returns: arronbennett.netlify.app

### Netlify Deploy Check
- [ ] Run in terminal:
  ```bash
  cd C:\Users\Fearn\ab1\arron-bennett-astro
  netlify status
  ```
- [ ] Shows custom domain correctly
- [ ] No errors displayed

**Verification Completed**: _________________________________

---

## Phase 8: Post-Setup Tasks

### Documentation
- [ ] Save screenshots of:
  - [ ] Netlify domain settings
  - [ ] Ionos DNS records
  - [ ] Working site with custom domain
  - [ ] SSL certificate details
- [ ] File these for future reference

### Update External Services
- [ ] Update Google My Business (if applicable)
- [ ] Update social media profiles:
  - [ ] Facebook
  - [ ] Instagram
  - [ ] LinkedIn
  - [ ] Twitter
  - [ ] Other: _________________
- [ ] Update email signature
- [ ] Update business cards (if printed with URL)
- [ ] Update printed marketing materials

### Analytics Setup
- [ ] Set up Google Analytics with new domain
- [ ] Set up Google Search Console
  - [ ] Add property for arronbennettbuilding.co.uk
  - [ ] Add property for www.arronbennettbuilding.co.uk
  - [ ] Verify ownership
  - [ ] Submit sitemap
- [ ] Set up Netlify Analytics (optional)

### Monitoring
- [ ] Set calendar reminder: Check SSL renewal (in 60 days)
- [ ] Set calendar reminder: Check DNS records (in 30 days)
- [ ] Set up uptime monitoring (optional)
  - [ ] UptimeRobot: https://uptimerobot.com/
  - [ ] Pingdom: https://www.pingdom.com/
  - [ ] StatusCake: https://www.statuscake.com/

**Post-Setup Completed**: _________________________________

---

## Troubleshooting Quick Reference

If any step fails, check:

1. **Domain not verifying in Netlify**
   - Check DNS records in Ionos are correct
   - Wait 30 more minutes for propagation
   - Click "Verify DNS configuration" in Netlify

2. **SSL certificate not provisioning**
   - Ensure DNS is verified first
   - Wait up to 1 hour
   - Check CAA records don't block Let's Encrypt
   - Try "Renew certificate" in Netlify

3. **Site shows 404 error**
   - Check site is deployed in Netlify
   - Trigger new deploy if needed
   - Check netlify.toml redirect rules

4. **Mixed content warnings**
   - Check browser console for HTTP resources
   - Update any HTTP URLs to HTTPS
   - Enable "Force HTTPS" in Netlify

**For detailed troubleshooting**: See TROUBLESHOOTING_GUIDE.md

---

## Completion Confirmation

### Final Checklist
- [ ] Both domains added in Netlify
- [ ] DNS records configured in Ionos
- [ ] DNS fully propagated
- [ ] Domains verified in Netlify
- [ ] SSL certificates issued
- [ ] Primary domain set
- [ ] All URL variations tested
- [ ] No errors in browser console
- [ ] Mobile testing completed
- [ ] SSL grade A or higher
- [ ] Documentation saved
- [ ] External services updated
- [ ] Monitoring set up

### Sign Off
- Setup started: _______________
- Setup completed: _______________
- Total time: _______________
- Completed by: _______________
- Notes: _________________________________
  _________________________________
  _________________________________

---

## Next Steps

1. **Monitor site for 24 hours**
   - Check occasionally that site loads
   - Verify no errors appear
   - Test from different devices/networks

2. **Week 1 tasks**
   - Update all marketing materials
   - Inform customers of new domain
   - Monitor analytics for traffic patterns
   - Check search engine indexing

3. **Month 1 tasks**
   - Review DNS record stability
   - Check SSL certificate status
   - Review site performance metrics
   - Optimize based on analytics

4. **Ongoing maintenance**
   - SSL auto-renews (check quarterly)
   - Keep site deployed and updated
   - Monitor uptime and performance
   - Keep documentation updated

---

## Support Contacts

**If you need help:**

1. Check: TROUBLESHOOTING_GUIDE.md
2. Check: https://www.netlifystatus.com/
3. Contact Ionos for DNS issues
4. Contact Netlify for platform issues

**Emergency**: If site is completely down, it still works at https://arronbennett.netlify.app

---

## Files Reference

All documentation files are in: `C:\Users\Fearn\ab1\arron-bennett-astro\`

- **DOMAIN_SETUP_SUMMARY.md** - Overview and quick start
- **DOMAIN_SETUP_INSTRUCTIONS.md** - Detailed instructions
- **DNS_QUICK_REFERENCE.txt** - Quick DNS record reference
- **DOMAIN_SETUP_WORKFLOW.md** - Visual workflow guide
- **TROUBLESHOOTING_GUIDE.md** - Problem solving
- **SETUP_CHECKLIST.md** - This file

---

**Checklist Version**: 1.0
**Created**: 2025-11-04
**Site**: arronbennett (bfd6ff64-30b9-4892-8f88-2423810b5ea5)
**Domain**: arronbennettbuilding.co.uk

---

## 🎉 Congratulations!

If you've completed all checkboxes, your custom domain is now live!

Your site is accessible at:
- https://arronbennettbuilding.co.uk
- https://www.arronbennettbuilding.co.uk

Keep this checklist for future reference.
