# Domain Setup Troubleshooting Guide
## arronbennettbuilding.co.uk on Netlify

---

## Common Issues and Solutions

### Issue 1: "Domain Not Verified" in Netlify

**Symptoms:**
- Domain shows as "Waiting for DNS" in Netlify
- Red warning icon next to domain
- Message: "DNS configuration needed"

**Causes:**
- DNS records not properly configured
- DNS hasn't propagated yet
- Incorrect DNS values

**Solutions:**

1. **Verify DNS Records in Ionos**
   ```
   ✓ Check A record for @ = 75.2.60.5
   ✓ Check CNAME for www = arronbennett.netlify.app
   ✓ Ensure no conflicting records
   ✓ Verify records are saved (not just edited)
   ```

2. **Check DNS Propagation**
   - Go to: https://www.whatsmydns.net/
   - Enter: arronbennettbuilding.co.uk
   - Select: A record
   - Expected: 75.2.60.5 showing in multiple locations
   - If not showing: Wait 30 more minutes and recheck

3. **Force Netlify to Recheck DNS**
   - Go to Netlify Domain Management
   - Click "Options" or "..." menu
   - Select "Verify DNS configuration"
   - Wait 2-3 minutes for status update

4. **Common Mistakes to Check:**
   - A record has trailing dot: Remove it
   - CNAME has https://: Remove protocol, use only hostname
   - Host field has full domain instead of @: Use @ or blank
   - Old records still present: Delete them

---

### Issue 2: SSL Certificate Not Provisioning

**Symptoms:**
- "Certificate provisioning" stuck for hours
- "Certificate failed" error
- Site shows "Not Secure" warning
- Can't access site via HTTPS

**Causes:**
- DNS not fully verified
- CAA records blocking Let's Encrypt
- Previous certificate conflicts
- DNS proxy/CDN enabled on Ionos

**Solutions:**

1. **Verify DNS First**
   - SSL won't provision until DNS is verified
   - Follow "Issue 1" solutions above
   - Wait for domain to show "Verified" status

2. **Check CAA Records**
   - In Ionos DNS, look for CAA records
   - If present, ensure they allow Let's Encrypt:
   ```
   CAA 0 issue "letsencrypt.org"
   ```
   - If blocking Let's Encrypt, remove or modify CAA record

3. **Retry Certificate Provisioning**
   - Go to: Domain Management → HTTPS
   - Click "Renew certificate" or "Provision certificate"
   - If fails, click "Options" → "Provision with different CA"

4. **Check Ionos CDN/Proxy Settings**
   - Ionos may have CDN or proxy enabled
   - This interferes with Netlify SSL
   - In Ionos, disable any CDN/proxy features
   - Use Ionos only for DNS, not content delivery

5. **Clear and Restart**
   - Remove domain from Netlify
   - Wait 5 minutes
   - Re-add domain
   - Wait for DNS verification
   - SSL should provision automatically

---

### Issue 3: DNS Not Propagating

**Symptoms:**
- Hours passed, DNS still not updating
- whatsmydns.net shows old or no records
- Some locations show correct, others don't
- nslookup returns wrong IP

**Causes:**
- High TTL on old records
- Local DNS cache
- ISP DNS cache
- Ionos propagation delay

**Solutions:**

1. **Clear Local DNS Cache**

   **Windows:**
   ```bash
   ipconfig /flushdns
   ipconfig /release
   ipconfig /renew
   ```

   **Mac:**
   ```bash
   sudo dscacheutil -flushcache
   sudo killall -HUP mDNSResponder
   ```

   **Linux:**
   ```bash
   sudo systemd-resolve --flush-caches
   sudo systemctl restart systemd-resolved
   ```

2. **Use Different DNS Servers**
   - Test with Google DNS: 8.8.8.8
   - Test with Cloudflare DNS: 1.1.1.1
   ```bash
   nslookup arronbennettbuilding.co.uk 8.8.8.8
   ```

3. **Check Ionos Propagation**
   - Ionos typically propagates in 15-30 minutes
   - Check Ionos DNS status page
   - Contact Ionos support if over 4 hours

4. **Verify Records are Active**
   - Log back into Ionos
   - Confirm records show "Active" status
   - Re-save if needed

5. **Wait and Monitor**
   - DNS can take up to 48 hours (rare)
   - Check every 2 hours
   - Use different devices/networks to test

---

### Issue 4: Site Shows "404 - Page Not Found"

**Symptoms:**
- Domain loads but shows 404 error
- DNS is verified
- SSL is working
- Old Netlify URL works fine

**Causes:**
- Site not deployed
- Build failed
- Domain not fully linked internally
- Routing configuration issue

**Solutions:**

1. **Check Deploy Status**
   ```bash
   cd C:\Users\Fearn\ab1\arron-bennett-astro
   netlify status
   ```

2. **Trigger New Deploy**
   ```bash
   netlify deploy --prod
   ```

3. **Check Build Logs**
   - Go to: https://app.netlify.com/projects/arronbennett/deploys
   - Click latest deploy
   - Review build log for errors
   - Fix any build errors and redeploy

4. **Verify Publish Directory**
   - Check netlify.toml: `publish = "dist"`
   - Ensure build creates dist folder
   - Check if files are in correct location

5. **Check Redirect Rules**
   - Review netlify.toml redirects section
   - Ensure not accidentally blocking all traffic
   - Test with simple redirect rule:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

---

### Issue 5: WWW Not Working (But Apex Works)

**Symptoms:**
- https://arronbennettbuilding.co.uk works
- https://www.arronbennettbuilding.co.uk doesn't work
- Shows DNS error or times out

**Causes:**
- CNAME record missing or incorrect
- CNAME not propagated
- Conflicting DNS records

**Solutions:**

1. **Verify CNAME Record**
   ```
   Type:      CNAME
   Host:      www
   Points to: arronbennett.netlify.app
   TTL:       3600
   ```

2. **Check CNAME Propagation**
   ```bash
   nslookup www.arronbennettbuilding.co.uk
   ```
   Should show: CNAME alias to arronbennett.netlify.app

3. **Remove Conflicting Records**
   - Check for A record on www: Remove it
   - Check for AAAA record on www: Remove it
   - Only CNAME should exist for www

4. **Test CNAME Resolution**
   - Use: https://www.whatsmydns.net/
   - Enter: www.arronbennettbuilding.co.uk
   - Type: CNAME
   - Should show: arronbennett.netlify.app

---

### Issue 6: Apex Works But Redirects to Netlify Subdomain

**Symptoms:**
- Visit arronbennettbuilding.co.uk
- URL changes to arronbennett.netlify.app
- Content loads but wrong URL shown

**Causes:**
- Primary domain not set correctly
- Domain not added as alias in Netlify
- Browser cached old redirect

**Solutions:**

1. **Set Primary Domain in Netlify**
   - Go to: Domain Management
   - Find: "Primary domain" or "Default subdomain"
   - Select: arronbennettbuilding.co.uk (or www variant)
   - Save changes

2. **Verify Domain Configuration**
   - Ensure both domains added:
     - arronbennettbuilding.co.uk
     - www.arronbennettbuilding.co.uk
   - Both should show "Verified" status

3. **Clear Browser Cache**
   - Press Ctrl+Shift+Delete (Windows)
   - Clear browsing data
   - Select "Cached images and files"
   - Try incognito/private window

4. **Update Netlify Configuration**
   ```bash
   netlify api updateSite --data='{"site_id":"bfd6ff64-30b9-4892-8f88-2423810b5ea5","body":{"force_ssl":true}}'
   ```

---

### Issue 7: Mixed Content Warnings

**Symptoms:**
- Site loads but shows "Not Secure"
- Browser console shows mixed content errors
- Some resources fail to load
- SSL certificate is valid but warnings appear

**Causes:**
- HTTP resources loaded on HTTPS page
- Hardcoded HTTP URLs in code
- External resources not using HTTPS

**Solutions:**

1. **Check Browser Console**
   - Open Developer Tools (F12)
   - Look for "Mixed Content" warnings
   - Note which resources are HTTP

2. **Update Resource URLs**
   - Change hardcoded HTTP to HTTPS
   - Or use protocol-relative URLs: //example.com
   - Search codebase for "http://"

3. **Enable Force SSL in Netlify**
   - Go to: Domain Management → HTTPS
   - Enable "Force HTTPS"
   - All HTTP requests will redirect to HTTPS

4. **Update netlify.toml**
   ```toml
   [[headers]]
     for = "/*"
     [headers.values]
       Content-Security-Policy = "upgrade-insecure-requests"
   ```

---

### Issue 8: Ionos-Specific Problems

**Symptoms:**
- Can't save DNS records in Ionos
- Records disappear after saving
- Ionos shows "Invalid" error

**Causes:**
- Ionos interface quirks
- Record format not accepted
- Ionos-specific requirements

**Solutions:**

1. **A Record Format in Ionos**
   - Host field: Try each of these (Ionos varies)
     - Option 1: @ symbol
     - Option 2: Leave blank
     - Option 3: Full domain: arronbennettbuilding.co.uk
   - Value: 75.2.60.5 (no spaces, no protocol)
   - No trailing dots

2. **CNAME Format in Ionos**
   - Host field: www (just the subdomain)
   - Value: arronbennett.netlify.app
   - NO "https://" prefix
   - NO trailing dot (unless Ionos requires it)
   - NO @ symbol for CNAME

3. **Common Ionos Mistakes**
   - Using HTTP:// in CNAME: Remove it
   - Leaving TTL blank: Set to 3600
   - Not clicking "Save" after "Add": Click both
   - Adding record to wrong zone: Verify domain selected

4. **Ionos Support**
   - If issues persist after 2 hours
   - Contact Ionos chat support
   - Provide them these exact values:
     ```
     Need to add:
     A record: @ → 75.2.60.5
     CNAME: www → arronbennett.netlify.app
     ```

---

## Diagnostic Commands

### Check DNS from Command Line

```bash
# Check A record
nslookup arronbennettbuilding.co.uk

# Expected output:
# Name: arronbennettbuilding.co.uk
# Address: 75.2.60.5

# Check CNAME record
nslookup www.arronbennettbuilding.co.uk

# Expected output:
# www.arronbennettbuilding.co.uk canonical name = arronbennett.netlify.app

# Detailed DNS query
nslookup -type=A arronbennettbuilding.co.uk 8.8.8.8
nslookup -type=CNAME www.arronbennettbuilding.co.uk 8.8.8.8

# Check specific nameserver
nslookup arronbennettbuilding.co.uk ns1.ionos.com
```

### Check SSL Certificate

```bash
# Using OpenSSL
echo | openssl s_client -connect arronbennettbuilding.co.uk:443 -servername arronbennettbuilding.co.uk 2>/dev/null | openssl x509 -noout -dates

# Expected output:
# notBefore=<date>
# notAfter=<date in future>

# Check certificate details
curl -vI https://arronbennettbuilding.co.uk 2>&1 | grep -A 10 "Server certificate"
```

### Test Site Connectivity

```bash
# Basic connectivity
ping arronbennettbuilding.co.uk

# HTTP headers
curl -I http://arronbennettbuilding.co.uk

# HTTPS headers
curl -I https://arronbennettbuilding.co.uk

# Follow redirects
curl -L -I http://arronbennettbuilding.co.uk

# Test WWW
curl -I https://www.arronbennettbuilding.co.uk
```

### Check Netlify Status

```bash
cd C:\Users\Fearn\ab1\arron-bennett-astro

# Site status
netlify status

# List all domains
netlify api getSite --data='{"site_id":"bfd6ff64-30b9-4892-8f88-2423810b5ea5"}' | grep -E "(custom_domain|domain_aliases|url)"

# Check SSL certificate status
netlify api showSiteTLSCertificate --data='{"site_id":"bfd6ff64-30b9-4892-8f88-2423810b5ea5"}'

# Open admin panel
netlify open:admin

# Open live site
netlify open:site
```

---

## Emergency Rollback Plan

If something goes catastrophically wrong and site is completely down:

1. **Keep Old Domain Working**
   - Site still accessible at: https://arronbennett.netlify.app
   - This won't be affected by DNS changes
   - Users can access via this URL

2. **Remove Custom Domain**
   - Go to Netlify Domain Management
   - Click "Remove" next to custom domains
   - Site reverts to Netlify subdomain
   - Takes effect immediately

3. **Reset DNS in Ionos**
   - Remove the A and CNAME records you added
   - Point domain back to old host (if applicable)
   - Or leave empty until you're ready to retry

4. **Investigate Issue**
   - Use this guide to diagnose problem
   - Fix the root cause
   - Retry setup when ready

---

## When to Contact Support

### Contact Ionos Support If:
- Can't save DNS records after multiple attempts
- Records disappear after saving
- DNS not propagating after 6 hours
- Ionos interface not working as expected

**Ionos Support:**
- Phone: Check Ionos website for UK number
- Chat: Available in Ionos control panel
- Email: support@ionos.co.uk

### Contact Netlify Support If:
- Domain verified but SSL won't provision after 24 hours
- Site returns 404 despite successful deploy
- Platform errors in Netlify admin
- Build process failing with unclear errors

**Netlify Support:**
- Support ticket: https://app.netlify.com/support
- Community forum: https://answers.netlify.com/
- Status page: https://www.netlifystatus.com/

---

## Prevention Checklist

Before making DNS changes in the future:

- [ ] Document current DNS records
- [ ] Take screenshots of DNS configuration
- [ ] Test changes in staging first (if possible)
- [ ] Notify users of potential downtime
- [ ] Have rollback plan ready
- [ ] Set calendar reminder to check SSL renewal
- [ ] Keep this guide handy

---

## Additional Resources

- **DNS Propagation Checker**: https://www.whatsmydns.net/
- **SSL Checker**: https://www.ssllabs.com/ssltest/
- **Netlify Docs**: https://docs.netlify.com/domains-https/custom-domains/
- **Ionos Help**: https://www.ionos.co.uk/help/
- **Let's Encrypt CAA**: https://letsencrypt.org/docs/caa/

---

**Last Updated**: 2025-11-04
**Site ID**: bfd6ff64-30b9-4892-8f88-2423810b5ea5
**Project**: Arron Bennett Building Website
