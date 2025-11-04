# Custom Domain Setup Documentation
## Complete Guide for arronbennettbuilding.co.uk on Netlify

---

## 📋 Overview

This documentation package contains everything you need to set up your custom domain **arronbennettbuilding.co.uk** on Netlify. Your site is currently live at **https://arronbennett.netlify.app** and will remain accessible while you configure your custom domain.

**Total Setup Time**: 2-5 hours (mostly waiting for DNS propagation)
**Skill Level Required**: Beginner-friendly, step-by-step instructions
**Prerequisites**: Access to Netlify account and Ionos DNS management

---

## 📚 Documentation Files

### 🚀 Start Here
**[DOMAIN_SETUP_SUMMARY.md](./DOMAIN_SETUP_SUMMARY.md)**
- Quick overview of the entire process
- Key concepts explained in simple terms
- 5-step quick start guide
- Common questions answered
- **Read this first** (5-10 minutes)

### ✅ Main Guide
**[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)**
- Complete step-by-step checklist
- Print and check off as you go
- Includes all phases of setup
- Testing procedures
- Post-setup tasks
- **Follow this during setup**

### 📖 Detailed Instructions
**[DOMAIN_SETUP_INSTRUCTIONS.md](./DOMAIN_SETUP_INSTRUCTIONS.md)**
- Comprehensive guide with full explanations
- Detailed verification steps
- Timeline expectations
- Support resources
- Next steps after domain is live
- **Refer to for detailed explanations**

### 🔍 Quick Reference
**[DNS_QUICK_REFERENCE.txt](./DNS_QUICK_REFERENCE.txt)**
- Essential DNS records in simple format
- Copy/paste ready values
- No explanations, just facts
- **Keep this open while configuring DNS**

### 🎨 Visual Guide
**[DOMAIN_SETUP_WORKFLOW.md](./DOMAIN_SETUP_WORKFLOW.md)**
- Visual flowcharts and diagrams
- ASCII art workflow representations
- Timeline visualization
- Traffic flow diagrams
- Monitoring checklist
- **Great for visual learners**

### 🔧 Troubleshooting
**[TROUBLESHOOTING_GUIDE.md](./TROUBLESHOOTING_GUIDE.md)**
- Common issues and solutions
- Diagnostic commands
- Emergency rollback plan
- When to contact support
- **Reference when problems occur**

---

## 🎯 Quick Start (5 Steps)

### 1. Add Domain in Netlify
Go to: https://app.netlify.com/projects/arronbennett
- Add domain: `arronbennettbuilding.co.uk`
- Add alias: `www.arronbennettbuilding.co.uk`

### 2. Configure DNS in Ionos
Add these two records at https://www.ionos.co.uk/:

**A Record:**
```
Type:       A
Host:       @
Points to:  75.2.60.5
TTL:        3600
```

**CNAME Record:**
```
Type:       CNAME
Host:       www
Points to:  arronbennett.netlify.app
TTL:        3600
```

### 3. Wait for DNS (1-4 hours)
Check progress at: https://www.whatsmydns.net/

### 4. Verify in Netlify (Automatic)
Domain status changes to "Verified"
SSL certificate automatically issued

### 5. Test Your Site
Visit all variations:
- http://arronbennettbuilding.co.uk
- https://arronbennettbuilding.co.uk
- http://www.arronbennettbuilding.co.uk
- https://www.arronbennettbuilding.co.uk

All should work and redirect to HTTPS ✓

---

## 📁 File Structure

```
C:\Users\Fearn\ab1\arron-bennett-astro\
│
├── DOMAIN_SETUP_README.md           ← You are here (start)
├── DOMAIN_SETUP_SUMMARY.md          ← Overview (read first)
├── SETUP_CHECKLIST.md               ← Follow during setup
├── DOMAIN_SETUP_INSTRUCTIONS.md     ← Detailed guide
├── DNS_QUICK_REFERENCE.txt          ← DNS records
├── DOMAIN_SETUP_WORKFLOW.md         ← Visual guide
└── TROUBLESHOOTING_GUIDE.md         ← Problem solving
```

---

## 🗺️ Recommended Reading Order

1. **Before Starting**
   - Read: `DOMAIN_SETUP_SUMMARY.md` (5-10 minutes)
   - Understand the process and what you'll need

2. **During Setup**
   - Open: `SETUP_CHECKLIST.md` (print or keep on screen)
   - Have open: `DNS_QUICK_REFERENCE.txt`
   - Follow checklist step by step

3. **If Confused**
   - Reference: `DOMAIN_SETUP_INSTRUCTIONS.md`
   - Look at: `DOMAIN_SETUP_WORKFLOW.md` for visuals

4. **If Problems**
   - Check: `TROUBLESHOOTING_GUIDE.md`
   - Find your specific issue and solution

---

## 🔑 Key Information

### Current Configuration
```
Site Name:      arronbennett
Site ID:        bfd6ff64-30b9-4892-8f88-2423810b5ea5
Current URL:    https://arronbennett.netlify.app
Custom Domain:  arronbennettbuilding.co.uk (to be added)
DNS Provider:   Ionos
```

### DNS Records to Add
```
A Record:       @ → 75.2.60.5
CNAME Record:   www → arronbennett.netlify.app
```

### Important URLs
```
Netlify Admin:  https://app.netlify.com/projects/arronbennett
Ionos Login:    https://www.ionos.co.uk/
DNS Checker:    https://www.whatsmydns.net/
SSL Checker:    https://www.ssllabs.com/ssltest/
```

---

## ⏱️ Timeline

| Phase | Duration | What Happens |
|-------|----------|--------------|
| Setup in Netlify | 5 min | Add custom domain |
| Configure DNS | 10 min | Add records in Ionos |
| DNS Propagation | 1-4 hours | DNS spreads worldwide |
| Netlify Verification | Automatic | DNS verified |
| SSL Provisioning | 1-5 min | Certificate issued |
| Testing | 10 min | Verify everything works |
| **Total** | **2-5 hours** | **Mostly waiting** |

---

## ✅ Success Criteria

Your setup is complete when:

- [ ] Both domains show "Verified" in Netlify
- [ ] SSL certificate shows "Issued" for both domains
- [ ] http://arronbennettbuilding.co.uk redirects to HTTPS
- [ ] https://arronbennettbuilding.co.uk loads with padlock icon
- [ ] www version works and redirects appropriately
- [ ] Site loads correctly on mobile and desktop
- [ ] No console errors in browser
- [ ] SSL test shows grade A

---

## 🆘 Getting Help

### Self-Help Resources
1. Check **TROUBLESHOOTING_GUIDE.md** for your specific issue
2. Visit https://www.netlifystatus.com/ for platform status
3. Use https://www.whatsmydns.net/ to check DNS propagation

### Support Contacts

**Netlify Support**
- Dashboard: https://app.netlify.com/support
- Forum: https://answers.netlify.com/
- Documentation: https://docs.netlify.com/

**Ionos Support**
- Control Panel: Login and click Support
- Help Center: https://www.ionos.co.uk/help/

---

## 🎓 Understanding the Process

### What You're Doing
You're telling the internet that when someone types your domain name, they should be sent to your Netlify-hosted website.

### How It Works
1. **You add domain in Netlify** → Netlify prepares to accept traffic for your domain
2. **You configure DNS** → You create a "phone book entry" pointing domain to Netlify
3. **DNS propagates** → This "phone book" gets copied worldwide
4. **Netlify verifies** → Netlify confirms it can receive traffic
5. **SSL activates** → Secure connection (HTTPS) is set up
6. **Site is live** → Users can access via your custom domain

### Why It Takes Time
DNS is a distributed system copied to thousands of servers worldwide. Changes take 1-4 hours to spread (occasionally up to 48 hours).

### Safety Note
Your site stays live at arronbennett.netlify.app during the entire process. Users can access it there if needed.

---

## 📊 What Gets Configured Where

### In Netlify (Web Interface)
- Add custom domain: arronbennettbuilding.co.uk
- Add domain alias: www.arronbennettbuilding.co.uk
- Choose primary domain
- Enable Force HTTPS (automatic)
- SSL certificate (automatic)

### In Ionos (DNS Management)
- A record: Points apex domain to Netlify IP
- CNAME record: Points www to Netlify hostname
- Remove old/conflicting records

### Automatic (No Action Needed)
- DNS propagation
- Netlify DNS verification
- SSL certificate provisioning
- SSL certificate renewal (every 90 days)
- HTTPS redirects

---

## 🔒 Security Features

### SSL/TLS Certificate
- **Provider**: Let's Encrypt (free, trusted)
- **Type**: Domain Validated (DV)
- **Coverage**: Both apex and www domains
- **Renewal**: Automatic every 90 days
- **Strength**: Industry-standard encryption

### HTTPS Enforcement
- All HTTP traffic automatically redirects to HTTPS
- Secure connection for all visitors
- Improves SEO ranking
- Required for modern web features

### Headers (Already Configured)
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: Enabled
- Referrer-Policy: strict-origin-when-cross-origin

See `netlify.toml` for full security header configuration.

---

## 🎯 Post-Setup Tasks

### Immediate (Day 1)
- [ ] Test site from multiple browsers
- [ ] Test on mobile devices
- [ ] Verify SSL certificate
- [ ] Check browser console for errors

### Week 1
- [ ] Update social media profiles
- [ ] Update Google My Business
- [ ] Set up Google Analytics
- [ ] Add to Google Search Console
- [ ] Update email signatures
- [ ] Inform customers of new URL

### Month 1
- [ ] Monitor DNS stability
- [ ] Check SSL certificate status
- [ ] Review site analytics
- [ ] Monitor uptime
- [ ] Check search engine indexing

### Ongoing
- [ ] Quarterly SSL check (auto-renews)
- [ ] Monthly DNS verification
- [ ] Regular performance monitoring
- [ ] Keep site deployed and updated

---

## 🔄 Maintenance

### Automatic (No Action Needed)
- SSL certificate renewal every 90 days
- Netlify deploys on git push (if configured)
- HTTPS redirects
- CDN caching

### Manual (Periodic)
- Review DNS records (monthly)
- Check site performance (monthly)
- Monitor analytics (weekly)
- Update content as needed

### Monitoring
Set calendar reminders for:
- 30 days: Check DNS records still correct
- 60 days: Verify SSL certificate renewed
- 90 days: Review overall site health

---

## 📞 Emergency Contacts

### If Site Goes Down

1. **Check Netlify status**: https://www.netlifystatus.com/
2. **Verify site at**: https://arronbennett.netlify.app
3. **Check DNS**: https://www.whatsmydns.net/
4. **Review troubleshooting guide**

### Emergency Rollback

If you need to revert changes:
1. Site still works at arronbennett.netlify.app
2. Remove custom domain from Netlify (instant)
3. Delete DNS records from Ionos
4. Site reverts to Netlify subdomain

No data is lost during domain configuration.

---

## 💡 Pro Tips

### During Setup
- Print `SETUP_CHECKLIST.md` and check off items
- Keep `DNS_QUICK_REFERENCE.txt` visible
- Take screenshots at each step
- Note the time when you save DNS changes
- Use incognito mode for testing (no cache)

### DNS Configuration
- Double-check for typos in DNS values
- Remove trailing dots from DNS values
- Don't include "https://" in CNAME records
- Set TTL to 3600 (1 hour)
- Wait at least 1 hour before troubleshooting

### Testing
- Test from multiple devices
- Test from different networks
- Use browser developer tools (F12)
- Check for mixed content warnings
- Verify SSL certificate details

---

## 📈 Success Metrics

### Technical Success
✅ DNS resolves correctly
✅ SSL certificate valid
✅ HTTPS enforced
✅ All redirects working
✅ No console errors
✅ Fast page loads

### Business Success
✅ Professional custom domain
✅ Better SEO with HTTPS
✅ Improved brand credibility
✅ Easier to remember URL
✅ Consistent branding

---

## 🎓 Learn More

### Understanding DNS
- DNS explained: https://www.cloudflare.com/learning/dns/what-is-dns/
- How DNS works: Visual guide in DOMAIN_SETUP_WORKFLOW.md

### Understanding SSL/TLS
- What is HTTPS: https://www.cloudflare.com/learning/ssl/what-is-https/
- Let's Encrypt: https://letsencrypt.org/how-it-works/

### Netlify Documentation
- Custom domains: https://docs.netlify.com/domains-https/custom-domains/
- DNS configuration: https://docs.netlify.com/domains-https/netlify-dns/
- HTTPS and SSL: https://docs.netlify.com/domains-https/https-ssl/

---

## ✨ Final Notes

### You're Almost There!
This documentation package gives you everything you need for a successful domain setup. The process is straightforward when you follow the steps in order.

### Remember
- **Your site stays live** during the entire process
- **DNS takes time** (1-4 hours is normal)
- **SSL is automatic** (Netlify handles it)
- **Help is available** (check troubleshooting guide)

### Start Your Setup
1. Open: `DOMAIN_SETUP_SUMMARY.md`
2. Read it through (5-10 minutes)
3. Open: `SETUP_CHECKLIST.md`
4. Begin setup following the checklist

### Questions?
Everything you need is in these documentation files. Start with the summary, use the checklist, and reference the troubleshooting guide if needed.

---

## 📝 Document Information

**Created**: 2025-11-04
**Version**: 1.0
**For**: Arron Bennett Building Website
**Site**: arronbennett (ID: bfd6ff64-30b9-4892-8f88-2423810b5ea5)
**Domain**: arronbennettbuilding.co.uk
**DNS Provider**: Ionos
**Location**: C:\Users\Fearn\ab1\arron-bennett-astro\

---

## 🚀 Ready to Begin?

**Next Step**: Open and read `DOMAIN_SETUP_SUMMARY.md`

Good luck with your custom domain setup! 🎉
