# Custom Domain Setup Instructions for arronbennettbuilding.co.uk

## Current Site Configuration
- **Site Name**: arronbennett
- **Site ID**: bfd6ff64-30b9-4892-8f88-2423810b5ea5
- **Current URL**: https://arronbennett.netlify.app
- **Custom Domain**: arronbennettbuilding.co.uk (to be configured)
- **DNS Provider**: Ionos
- **Admin Panel**: https://app.netlify.com/projects/arronbennett

---

## Step-by-Step Setup Guide

### Phase 1: Add Custom Domain in Netlify (5 minutes)

1. **Access Domain Settings**
   - Go to: https://app.netlify.com/projects/arronbennett
   - Click on "Domain management" or "Set up a custom domain"
   - You may need to navigate to: Site configuration → Domain management

2. **Add the Apex Domain**
   - Click "Add custom domain" or "Add domain"
   - Enter: `arronbennettbuilding.co.uk`
   - Click "Verify" or "Add domain"
   - Netlify will check if you own the domain (you'll configure DNS to prove ownership)

3. **Add the WWW Subdomain**
   - After adding the apex domain, click "Add domain alias" or similar
   - Enter: `www.arronbennettbuilding.co.uk`
   - Click "Add" or "Save"

4. **Note the DNS Instructions**
   - Netlify will show you a modal or page with DNS configuration details
   - Keep this page open or take a screenshot
   - The instructions will include the specific records you need to add

### Phase 2: Configure DNS at Ionos (10-15 minutes)

#### Log into Ionos DNS Management
1. Go to your Ionos account: https://www.ionos.co.uk/
2. Navigate to: Domains → Select "arronbennettbuilding.co.uk" → DNS

#### Add DNS Records

**Record 1: A Record for Apex Domain**
- **Type**: A
- **Host/Name**: @ (or leave blank, or enter "arronbennettbuilding.co.uk")
- **Value/Points to**: `75.2.60.5`
- **TTL**: 3600 (or leave default)

**Record 2: CNAME for WWW Subdomain**
- **Type**: CNAME
- **Host/Name**: www
- **Value/Points to**: `arronbennett.netlify.app` (or the specific subdomain Netlify provides)
- **TTL**: 3600 (or leave default)

**Important Notes:**
- Delete any existing A or CNAME records for @ and www that point elsewhere
- If Ionos doesn't allow "@" for the A record, try leaving it blank or entering the full domain
- Make sure there are no AAAA records (IPv6) conflicting with the A record
- Save all changes

#### DNS Propagation
- DNS changes can take 5 minutes to 48 hours to propagate worldwide
- Typically takes 1-4 hours for most users to see changes
- You can check propagation status at: https://www.whatsmydns.net/

### Phase 3: Verify Domain in Netlify (After DNS Propagation)

1. **Return to Netlify Domain Settings**
   - Go back to: https://app.netlify.com/projects/arronbennett/configuration/domain
   - You should see your domains listed with status indicators

2. **Check Domain Status**
   - Netlify will automatically verify DNS records
   - Status should change from "Waiting for DNS" to "Netlify DNS" or "Verified"
   - If status doesn't update after a few hours, click "Verify DNS configuration"

3. **HTTPS/SSL Certificate**
   - Once DNS is verified, Netlify will automatically provision a Let's Encrypt SSL certificate
   - This usually takes 1-5 minutes after DNS verification
   - You'll see a status like "Certificate provisioning" → "Certificate issued"
   - Your site will be automatically redirected from HTTP to HTTPS

### Phase 4: Configure Domain Redirects (Optional but Recommended)

**In Netlify Settings:**
1. Go to: Domain management → Domain settings
2. Enable "Force HTTPS" (should be automatic)
3. Set primary domain:
   - Choose between `arronbennettbuilding.co.uk` or `www.arronbennettbuilding.co.uk`
   - The other will automatically redirect to your chosen primary domain
   - **Recommendation**: Use `www.arronbennettbuilding.co.uk` as primary (more flexible)

---

## Verification Checklist

### DNS Configuration (Do This at Ionos)
- [ ] A record for @ pointing to 75.2.60.5
- [ ] CNAME record for www pointing to arronbennett.netlify.app
- [ ] Old/conflicting records removed
- [ ] Changes saved in Ionos

### Netlify Configuration (Do This in Netlify)
- [ ] Apex domain (arronbennettbuilding.co.uk) added
- [ ] WWW subdomain (www.arronbennettbuilding.co.uk) added
- [ ] DNS verification complete
- [ ] SSL certificate issued
- [ ] Primary domain selected
- [ ] HTTPS redirect enabled

### Testing (After Everything is Set Up)
- [ ] Visit http://arronbennettbuilding.co.uk (should redirect to HTTPS)
- [ ] Visit https://arronbennettbuilding.co.uk (should work)
- [ ] Visit http://www.arronbennettbuilding.co.uk (should redirect to HTTPS)
- [ ] Visit https://www.arronbennettbuilding.co.uk (should work)
- [ ] Check that one redirects to the other (based on your primary domain choice)
- [ ] Verify SSL certificate is valid (look for padlock in browser)

---

## Troubleshooting

### DNS Not Propagating
- Use https://www.whatsmydns.net/ to check DNS status globally
- Enter your domain and select "A" or "CNAME" record type
- If not showing correctly after 4 hours, verify records in Ionos
- Clear your local DNS cache:
  - Windows: `ipconfig /flushdns` in Command Prompt
  - Mac: `sudo dscacheutil -flushcache`

### SSL Certificate Not Provisioning
- Ensure DNS is fully propagated first (Netlify can't issue cert without verified DNS)
- Check that CAA records (if any) allow Let's Encrypt
- In Netlify, go to Domain settings → HTTPS → "Verify DNS configuration"
- If stuck, try: "Renew certificate" or "Provision certificate"

### Domain Shows "Not Verified" in Netlify
- Double-check DNS records in Ionos match exactly
- Wait 30-60 minutes after DNS changes
- Click "Verify DNS configuration" in Netlify
- Check if Ionos has DNS proxy/CDN enabled (should be disabled for Netlify)

### Site Not Loading
1. Check DNS propagation status
2. Verify A and CNAME records are correct
3. Check Netlify deploy status (site must be deployed)
4. Look for errors in browser console
5. Check Netlify function logs if using serverless functions

---

## Quick Command Reference

### Check DNS from Command Line
```bash
# Check A record
nslookup arronbennettbuilding.co.uk

# Check CNAME record
nslookup www.arronbennettbuilding.co.uk

# Detailed DNS query
dig arronbennettbuilding.co.uk
dig www.arronbennettbuilding.co.uk
```

### Check Netlify Site Status
```bash
cd C:\Users\Fearn\ab1\arron-bennett-astro
netlify status
netlify open:admin  # Opens Netlify admin panel
netlify open:site   # Opens your live site
```

---

## Important Information

### Netlify Load Balancer IP
- **Standard Network**: 75.2.60.5
- **High-Performance Edge**: Check your specific Netlify dashboard for the IP

### SSL Certificate Details
- **Provider**: Let's Encrypt (automatic, free)
- **Renewal**: Automatic (every 90 days)
- **Provisioning Time**: 1-5 minutes after DNS verification
- **Coverage**: Both apex and www domains

### DNS TTL (Time To Live)
- **Recommended**: 3600 seconds (1 hour)
- **During Migration**: Set to 300 seconds (5 minutes) for faster changes
- **After Stable**: Can increase to 86400 seconds (24 hours) for better caching

---

## Timeline Expectations

| Task | Expected Time |
|------|---------------|
| Add domain in Netlify | 2-5 minutes |
| Configure DNS in Ionos | 5-10 minutes |
| DNS propagation | 1-4 hours (up to 48 hours) |
| SSL certificate provisioning | 1-5 minutes after DNS verified |
| Total setup time | 1-5 hours typically |

---

## Support Resources

- **Netlify Docs**: https://docs.netlify.com/domains-https/custom-domains/
- **Netlify Status**: https://www.netlifystatus.com/
- **Ionos Support**: https://www.ionos.co.uk/help/
- **DNS Propagation Checker**: https://www.whatsmydns.net/
- **SSL Checker**: https://www.ssllabs.com/ssltest/

---

## Next Steps After Domain is Live

1. **Update Social Media Links**
   - Update website links on Facebook, Instagram, etc.
   - Update Google My Business listing

2. **Update Marketing Materials**
   - Business cards
   - Email signatures
   - Printed materials

3. **Set Up Analytics**
   - Google Analytics with new domain
   - Google Search Console
   - Netlify Analytics (if needed)

4. **Monitor Performance**
   - Check site loading speed
   - Monitor SSL certificate status
   - Set up uptime monitoring

5. **Backup Configuration**
   - Document DNS settings
   - Export Netlify configuration
   - Save this guide for future reference

---

## Contact Information

If you encounter issues:
1. Check the Troubleshooting section above
2. Review Netlify documentation
3. Contact Ionos support for DNS-specific issues
4. Contact Netlify support for platform-specific issues

---

**Document Created**: 2025-11-04
**Site ID**: bfd6ff64-30b9-4892-8f88-2423810b5ea5
**Project**: Arron Bennett Building Website
