# Domain Setup Summary
## arronbennettbuilding.co.uk on Netlify

---

## What You Need to Know

Your Netlify site is currently live at **https://arronbennett.netlify.app** and you want to use your custom domain **arronbennettbuilding.co.uk** instead.

This guide tells you exactly what to do, step by step.

---

## Quick Start (Do These 5 Things)

### 1. Add Domain in Netlify (5 minutes)
- Go to: https://app.netlify.com/projects/arronbennett
- Click "Domain management"
- Add domain: `arronbennettbuilding.co.uk`
- Add alias: `www.arronbennettbuilding.co.uk`

### 2. Configure DNS in Ionos (10 minutes)
- Login to: https://www.ionos.co.uk/
- Go to: Domains → arronbennettbuilding.co.uk → DNS
- Add these two records:

**Record 1:**
```
Type:       A
Host:       @
Points to:  75.2.60.5
TTL:        3600
```

**Record 2:**
```
Type:       CNAME
Host:       www
Points to:  arronbennett.netlify.app
TTL:        3600
```

### 3. Wait for DNS (1-4 hours)
- DNS changes take time to spread worldwide
- Check progress at: https://www.whatsmydns.net/
- Enter your domain and select "A" or "CNAME"

### 4. Netlify Verifies DNS (Automatic)
- Once DNS spreads, Netlify detects it
- Domain status changes to "Verified"
- SSL certificate automatically provisioned

### 5. Test Your Site (5 minutes)
- Visit: http://arronbennettbuilding.co.uk
- Visit: https://arronbennettbuilding.co.uk
- Visit: http://www.arronbennettbuilding.co.uk
- Visit: https://www.arronbennettbuilding.co.uk
- All should work and redirect to HTTPS

---

## Current Configuration

```
Site Name:           arronbennett
Site ID:             bfd6ff64-30b9-4892-8f88-2423810b5ea5
Current URL:         https://arronbennett.netlify.app
Custom Domain:       (to be added) arronbennettbuilding.co.uk
DNS Provider:        Ionos
Site Status:         Active ✓
Deploy Status:       Current ✓
```

---

## What DNS Records Do

Think of DNS like a phone book for the internet:

**A Record (Apex Domain)**
- Someone types: arronbennettbuilding.co.uk
- DNS says: "That's at IP address 75.2.60.5"
- Browser connects to Netlify server at that IP
- Netlify serves your site

**CNAME Record (WWW)**
- Someone types: www.arronbennettbuilding.co.uk
- DNS says: "That's an alias for arronbennett.netlify.app"
- DNS then looks up arronbennett.netlify.app
- Gets the IP and connects to Netlify
- Netlify serves your site

---

## The Complete Setup Flow

```
You                          Ionos                    Netlify
│                             │                         │
│  1. Add domain in Netlify   │                         │
│────────────────────────────────────────────────────→ │
│                             │                         │
│  ← Netlify shows DNS instructions ──────────────────┤
│                             │                         │
│                             │                         │
│  2. Configure DNS at Ionos  │                         │
│──────────────────────────→ │                         │
│                             │                         │
│                      ← Saves records ───────┐         │
│                             │                │         │
│                             │                │         │
│                             │  3. DNS Propagates      │
│                             │  (1-4 hours)   │         │
│                             │                │         │
│                             │                │         │
│                             │ ← Checks DNS ─────────→ │
│                             │                          │
│                                        4. Netlify verifies DNS
│                             │                          │
│                                        5. Issues SSL certificate
│                             │                          │
│  6. Site live on custom domain!                       │
│ ←──────────────────────────────────────────────────── │
│                             │                          │
│  Visit: arronbennettbuilding.co.uk                    │
│────────────────────────────────────────────────────→ │
│                             │                          │
│ ← Site loads with HTTPS ────────────────────────────┤
```

---

## Documentation Files

I've created several guides for you:

1. **DOMAIN_SETUP_INSTRUCTIONS.md** (Main Guide)
   - Complete step-by-step instructions
   - Detailed explanation of each step
   - Verification checklist
   - Support resources

2. **DNS_QUICK_REFERENCE.txt** (Quick Reference)
   - Essential DNS records in simple format
   - Copy/paste ready
   - No explanations, just facts

3. **DOMAIN_SETUP_WORKFLOW.md** (Visual Guide)
   - Flowcharts and diagrams
   - Visual representation of setup
   - Timeline expectations
   - Monitoring checklist

4. **TROUBLESHOOTING_GUIDE.md** (Problem Solving)
   - Common issues and solutions
   - Diagnostic commands
   - Emergency rollback plan
   - When to contact support

5. **DOMAIN_SETUP_SUMMARY.md** (This File)
   - Overview of all documentation
   - Quick start guide
   - Key concepts explained

---

## Important Details

### DNS Records You're Adding

**A Record - Points apex domain to Netlify**
- Host: @ (means the domain itself, no subdomain)
- Value: 75.2.60.5 (Netlify's load balancer IP)
- This makes arronbennettbuilding.co.uk work

**CNAME Record - Points www to Netlify**
- Host: www (the www subdomain)
- Value: arronbennett.netlify.app (your Netlify URL)
- This makes www.arronbennettbuilding.co.uk work

### SSL Certificate

- **Automatic**: Netlify handles everything
- **Provider**: Let's Encrypt (free, trusted)
- **Covers**: Both apex and www versions
- **Renewal**: Automatic every 90 days
- **Provisioning Time**: 1-5 minutes after DNS verified

### Primary Domain

After setup, choose which URL is primary:

**Option A: Use apex as primary**
- Primary: arronbennettbuilding.co.uk
- www.arronbennettbuilding.co.uk redirects to apex

**Option B: Use www as primary (Recommended)**
- Primary: www.arronbennettbuilding.co.uk
- arronbennettbuilding.co.uk redirects to www

Both work the same to users. WWW is technically more flexible.

---

## Timeline

| What Happens | When | Duration |
|--------------|------|----------|
| Add domain in Netlify | Now | 5 minutes |
| Configure DNS in Ionos | After Netlify | 10 minutes |
| DNS starts propagating | Immediately | Ongoing |
| DNS visible in some regions | 30 min - 1 hour | - |
| DNS fully propagated | 1-4 hours | Typical |
| Netlify verifies DNS | After DNS propagates | Automatic |
| SSL certificate issued | After DNS verified | 1-5 minutes |
| Site fully live | - | 2-5 hours total |

**Total Time**: Usually 2-5 hours from start to finish, mostly waiting for DNS.

---

## After Setup is Complete

### Immediate Tasks
1. Test all domain variations (http/https, with/without www)
2. Verify SSL certificate is working (padlock in browser)
3. Check site loads correctly on mobile and desktop
4. Test any contact forms or interactive features

### Within First Week
1. Update social media profiles with new domain
2. Update Google My Business listing
3. Update email signatures
4. Update business cards if they show website
5. Set up Google Analytics with new domain
6. Add domain to Google Search Console
7. Monitor site uptime and performance

### Ongoing Maintenance
1. SSL certificate renews automatically (check quarterly)
2. Monitor DNS records stay correct (check monthly)
3. Keep Netlify build process working (test after updates)
4. Review site performance (monthly)
5. Keep this documentation for future reference

---

## Common Questions

**Q: Will my site go down during setup?**
A: No. Your Netlify URL (arronbennett.netlify.app) keeps working until DNS fully propagates.

**Q: How long does DNS propagation take?**
A: Usually 1-4 hours. Can take up to 48 hours in rare cases.

**Q: Do I need to do anything for SSL?**
A: No. Netlify automatically provisions and renews SSL certificates.

**Q: Can I use just the apex or just www?**
A: Add both. You choose which is primary and the other redirects automatically.

**Q: What if something goes wrong?**
A: Your site still works at arronbennett.netlify.app. See TROUBLESHOOTING_GUIDE.md.

**Q: Do I need to update my code?**
A: No. Netlify handles the domain routing automatically.

**Q: Will this affect my email?**
A: No. Email uses different DNS records (MX records) which you're not changing.

**Q: Can I change DNS providers later?**
A: Yes. You'd just need to recreate these same DNS records at the new provider.

**Q: How much does this cost?**
A: SSL certificate is free. Domain costs whatever you pay Ionos annually.

**Q: What if I want to remove the custom domain?**
A: Just remove it from Netlify and delete the DNS records. Site reverts to Netlify URL.

---

## Need Help?

### Quick Help
1. Check: **TROUBLESHOOTING_GUIDE.md** for common issues
2. Check: https://www.netlifystatus.com/ for platform issues
3. Test DNS: https://www.whatsmydns.net/

### Support Contacts

**For Netlify Issues:**
- Support: https://app.netlify.com/support
- Forum: https://answers.netlify.com/
- Docs: https://docs.netlify.com/

**For Ionos/DNS Issues:**
- Ionos Support: Available in your Ionos control panel
- Ionos Help: https://www.ionos.co.uk/help/

### Developer Support
```bash
# Check site status
cd C:\Users\Fearn\ab1\arron-bennett-astro
netlify status

# Open Netlify admin
netlify open:admin

# Open live site
netlify open:site
```

---

## Verification Commands

Copy and paste these to check your setup:

```bash
# Check A record
nslookup arronbennettbuilding.co.uk

# Check CNAME record
nslookup www.arronbennettbuilding.co.uk

# Test HTTP (should redirect to HTTPS)
curl -I http://arronbennettbuilding.co.uk

# Test HTTPS (should return 200 OK)
curl -I https://arronbennettbuilding.co.uk
```

Expected results:
- A record shows: 75.2.60.5
- CNAME shows: arronbennett.netlify.app
- HTTP returns: 301 redirect to HTTPS
- HTTPS returns: 200 OK

---

## File Locations

All documentation is in:
```
C:\Users\Fearn\ab1\arron-bennett-astro\
├── DOMAIN_SETUP_SUMMARY.md          (This file - start here)
├── DOMAIN_SETUP_INSTRUCTIONS.md     (Complete guide)
├── DNS_QUICK_REFERENCE.txt          (Quick reference)
├── DOMAIN_SETUP_WORKFLOW.md         (Visual guide)
└── TROUBLESHOOTING_GUIDE.md         (Problem solving)
```

---

## What You'll See at Each Step

### In Netlify After Adding Domain
```
Domain management
├── Primary domain
│   └── arronbennettbuilding.co.uk [Waiting for DNS] ⏳
└── Domain aliases
    └── www.arronbennettbuilding.co.uk [Waiting for DNS] ⏳
```

### In Netlify After DNS Propagates
```
Domain management
├── Primary domain
│   └── arronbennettbuilding.co.uk [Verified] ✓
│       SSL: Certificate issued ✓
└── Domain aliases
    └── www.arronbennettbuilding.co.uk [Verified] ✓
        SSL: Certificate issued ✓
```

### In Your Browser
```
Address bar: arronbennettbuilding.co.uk
             ↓
Auto-redirects to: https://arronbennettbuilding.co.uk
                   🔒 Secure | Site loads correctly ✓
```

---

## Ready to Start?

1. **Read**: DNS_QUICK_REFERENCE.txt (5 minutes)
2. **Follow**: DOMAIN_SETUP_INSTRUCTIONS.md (Step by step)
3. **Refer to**: DOMAIN_SETUP_WORKFLOW.md (Visual guide)
4. **If problems**: TROUBLESHOOTING_GUIDE.md (Solutions)

Start with step 1: Add the domain in Netlify

Go to: https://app.netlify.com/projects/arronbennett

Good luck! Your site will be live on your custom domain soon.

---

**Created**: 2025-11-04
**For**: Arron Bennett Building Website
**Site**: arronbennett (bfd6ff64-30b9-4892-8f88-2423810b5ea5)
**Domain**: arronbennettbuilding.co.uk
**DNS**: Ionos
