# Domain Setup Workflow - Visual Guide

## Current Status
```
Current Site:    arronbennett.netlify.app
Target Domain:   arronbennettbuilding.co.uk
DNS Provider:    Ionos
Site Status:     Active (lifecycle_state: active)
Deploy Status:   Current
SSL URL:         https://arronbennett.netlify.app
```

## Setup Workflow

```
┌─────────────────────────────────────────────────────────────────────┐
│                          PHASE 1: NETLIFY                           │
│                         (Do This First)                             │
└─────────────────────────────────────────────────────────────────────┘

    1. Go to Netlify Admin Panel
       → https://app.netlify.com/projects/arronbennett

    2. Click "Domain Management"

    3. Add Custom Domain
       ┌────────────────────────────────────────┐
       │ Add domain: arronbennettbuilding.co.uk │
       │ [Verify] [Add Domain]                  │
       └────────────────────────────────────────┘

    4. Add Domain Alias
       ┌────────────────────────────────────────────┐
       │ Add alias: www.arronbennettbuilding.co.uk  │
       │ [Add Alias]                                │
       └────────────────────────────────────────────┘

    5. Note the DNS Instructions
       Netlify will show you what DNS records to create

                            ↓

┌─────────────────────────────────────────────────────────────────────┐
│                          PHASE 2: IONOS DNS                         │
│                    (Configure DNS Records)                          │
└─────────────────────────────────────────────────────────────────────┘

    1. Login to Ionos
       → https://www.ionos.co.uk/

    2. Navigate to DNS Settings
       → Domains → arronbennettbuilding.co.uk → DNS

    3. Add A Record (Apex Domain)
       ┌─────────────────────────────────────┐
       │ Type:      A                        │
       │ Host:      @                        │
       │ Points to: 75.2.60.5               │
       │ TTL:       3600                     │
       └─────────────────────────────────────┘

    4. Add CNAME Record (WWW)
       ┌─────────────────────────────────────┐
       │ Type:      CNAME                    │
       │ Host:      www                      │
       │ Points to: arronbennett.netlify.app│
       │ TTL:       3600                     │
       └─────────────────────────────────────┘

    5. Remove Old Records
       → Delete any conflicting A or CNAME records

    6. Save Changes

                            ↓

┌─────────────────────────────────────────────────────────────────────┐
│                      PHASE 3: DNS PROPAGATION                       │
│                         (Wait 1-4 hours)                            │
└─────────────────────────────────────────────────────────────────────┘

    Check DNS Propagation:
    → https://www.whatsmydns.net/

    ┌────────────────────────────────────────────┐
    │ Enter: arronbennettbuilding.co.uk          │
    │ Type:  A                                   │
    │                                            │
    │ Should show: 75.2.60.5 globally           │
    └────────────────────────────────────────────┘

    ┌────────────────────────────────────────────┐
    │ Enter: www.arronbennettbuilding.co.uk      │
    │ Type:  CNAME                               │
    │                                            │
    │ Should show: arronbennett.netlify.app     │
    └────────────────────────────────────────────┘

                            ↓

┌─────────────────────────────────────────────────────────────────────┐
│                   PHASE 4: NETLIFY VERIFICATION                     │
│                    (Automatic After DNS)                            │
└─────────────────────────────────────────────────────────────────────┘

    1. Return to Netlify Domain Settings

    2. Domain Status Updates Automatically
       ┌────────────────────────────────────────┐
       │ arronbennettbuilding.co.uk             │
       │ Status: Waiting for DNS → Verified ✓   │
       └────────────────────────────────────────┘

       ┌────────────────────────────────────────┐
       │ www.arronbennettbuilding.co.uk         │
       │ Status: Waiting for DNS → Verified ✓   │
       └────────────────────────────────────────┘

    3. SSL Certificate Provisioning (Automatic)
       ┌────────────────────────────────────────┐
       │ Certificate: Provisioning...           │
       │              ↓                         │
       │ Certificate: Issued ✓                  │
       │ Type: Let's Encrypt                    │
       └────────────────────────────────────────┘

                            ↓

┌─────────────────────────────────────────────────────────────────────┐
│                      PHASE 5: CONFIGURATION                         │
│                       (Final Settings)                              │
└─────────────────────────────────────────────────────────────────────┘

    1. Set Primary Domain
       Choose one as primary:

       Option A: Apex Primary
       ┌────────────────────────────────────────┐
       │ Primary: arronbennettbuilding.co.uk    │
       │ www → redirects to apex                │
       └────────────────────────────────────────┘

       Option B: WWW Primary (Recommended)
       ┌────────────────────────────────────────┐
       │ Primary: www.arronbennettbuilding.co.uk│
       │ apex → redirects to www                │
       └────────────────────────────────────────┘

    2. Enable HTTPS Redirect (Automatic)
       ┌────────────────────────────────────────┐
       │ Force HTTPS: Enabled ✓                 │
       │ HTTP → HTTPS redirect active           │
       └────────────────────────────────────────┘

                            ↓

┌─────────────────────────────────────────────────────────────────────┐
│                        PHASE 6: TESTING                             │
│                    (Verify Everything)                              │
└─────────────────────────────────────────────────────────────────────┘

    Test All URLs:

    ✓ http://arronbennettbuilding.co.uk
      → Should redirect to HTTPS

    ✓ https://arronbennettbuilding.co.uk
      → Should load with SSL certificate

    ✓ http://www.arronbennettbuilding.co.uk
      → Should redirect to HTTPS

    ✓ https://www.arronbennettbuilding.co.uk
      → Should load with SSL certificate

    One should redirect to the other (based on primary domain)

                            ↓

┌─────────────────────────────────────────────────────────────────────┐
│                            ✓ COMPLETE                               │
│                    Domain Setup Successful!                         │
└─────────────────────────────────────────────────────────────────────┘
```

## Traffic Flow After Setup

```
User Enters:                                    Final Destination:
─────────────────────────────────────────────────────────────────────

arronbennettbuilding.co.uk
    │
    ├─→ DNS Lookup (Ionos)
    │   ├─→ A Record: 75.2.60.5
    │   └─→ Netlify Load Balancer
    │
    ├─→ HTTP Request
    │   └─→ Netlify Redirects to HTTPS
    │
    └─→ HTTPS Request                          https://arronbennettbuilding.co.uk
        └─→ SSL Certificate Verified           (or www variant if primary)
            └─→ Netlify Serves Site
                └─→ Site Loads ✓


www.arronbennettbuilding.co.uk
    │
    ├─→ DNS Lookup (Ionos)
    │   ├─→ CNAME Record: arronbennett.netlify.app
    │   └─→ Resolves to Netlify
    │
    ├─→ HTTP Request
    │   └─→ Netlify Redirects to HTTPS
    │
    └─→ HTTPS Request                          https://www.arronbennettbuilding.co.uk
        └─→ SSL Certificate Verified           (or apex if primary)
            └─→ Netlify Serves Site
                └─→ Site Loads ✓
```

## DNS Record Structure

```
Domain: arronbennettbuilding.co.uk
DNS Provider: Ionos
Nameservers: Ionos Nameservers

┌──────────────────────────────────────────────────────────────┐
│                     DNS ZONE FILE                            │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  @ (apex)          A        75.2.60.5                       │
│  │                                                           │
│  │  Points to Netlify Load Balancer                        │
│  │  IP Address: 75.2.60.5                                  │
│  │                                                           │
│  └─→ [Netlify] → Site: arronbennett                        │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  www                CNAME   arronbennett.netlify.app        │
│  │                                                           │
│  │  Alias to Netlify subdomain                             │
│  │  Target: arronbennett.netlify.app                       │
│  │                                                           │
│  └─→ [Netlify] → Site: arronbennett                        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## SSL Certificate Chain

```
┌────────────────────────────────────────────────────────────────┐
│                    SSL/TLS CERTIFICATE                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Certificate Authority: Let's Encrypt                          │
│  Type: Domain Validated (DV)                                   │
│  Auto-Renewal: Every 90 days                                   │
│                                                                │
│  Covers:                                                       │
│    • arronbennettbuilding.co.uk                               │
│    • www.arronbennettbuilding.co.uk                           │
│                                                                │
│  Issued by: Let's Encrypt (via Netlify)                       │
│  Provisioned: Automatically after DNS verification             │
│  Status: Active ✓                                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘

Browser → Checks Certificate → Validates Chain → Secure Connection ✓
```

## Timeline Visualization

```
Time:  0 min    30 min   1 hour   2 hours   4 hours   24 hours
       │        │        │        │         │         │
       │        │        │        │         │         │
START  ▼        │        │        │        │         │
Add Domain      │        │        │        │         │
in Netlify      │        │        │        │         │
       │        │        │        │        │         │
Configure       ▼        │        │        │         │
DNS in Ionos    │        │        │        │         │
       │        │        │        │        │         │
       │        │        ▼        │        │         │
       │        │   DNS Starts    │        │         │
       │        │   Propagating   │        │         │
       │        │        │        │        │         │
       │        │        │        ▼        │         │
       │        │        │   DNS Fully     │         │
       │        │        │   Propagated    │         │
       │        │        │   (Typical)     │         │
       │        │        │        │        │         │
       │        │        │        ▼        │         │
       │        │        │   Netlify       │         │
       │        │        │   Verifies DNS  │         │
       │        │        │        │        │         │
       │        │        │        ▼        │         │
       │        │        │   SSL Cert      │         │
       │        │        │   Provisioned   │         │
       │        │        │        │        │         │
       │        │        │        ▼        │         │
       │        │        │   SITE LIVE ✓   │         │
       │        │        │        │        │         │
       │        │        │        │        ▼         │
       │        │        │        │   Worldwide      │
       │        │        │        │   DNS Fully      │
       │        │        │        │   Propagated     │
       │        │        │        │        │         │
       │        │        │        │        │         ▼
       │        │        │        │        │    All regions
       │        │        │        │        │    can access
       │        │        │        │        │    site ✓
```

## Monitoring Checklist

### During Setup (First 4 Hours)
- [ ] Check DNS propagation every 30 minutes
- [ ] Monitor Netlify domain status
- [ ] Wait for SSL certificate to be issued
- [ ] Test site access from multiple browsers

### After Setup (First Week)
- [ ] Monitor site uptime
- [ ] Check SSL certificate status
- [ ] Review DNS records stability
- [ ] Test site from different networks
- [ ] Monitor Netlify deploy logs

### Ongoing (Monthly)
- [ ] Check SSL certificate auto-renewal
- [ ] Review Netlify analytics
- [ ] Monitor site performance
- [ ] Check for any DNS issues

---

**Created**: 2025-11-04
**Site**: arronbennett (bfd6ff64-30b9-4892-8f88-2423810b5ea5)
**Project**: Arron Bennett Building Website
