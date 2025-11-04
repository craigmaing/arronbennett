# Security Quick Fixes - Implementation Guide

**Project:** Arron Bennett Building Website
**Priority:** High Priority Items (Implement This Week)
**Time Required:** ~30 minutes

---

## Fix 1: Add HTTPS Enforcement (10 minutes)

### File: `netlify.toml`

**Location:** `/c/Users/Fearn/ab1/arron-bennett-astro/netlify.toml`

**Add these redirect rules at the bottom of the file:**

```toml
# ============================================
# HTTPS REDIRECT RULES
# ============================================

# Redirect HTTP to HTTPS (non-www)
[[redirects]]
  from = "http://arronbennettbuilding.co.uk/*"
  to = "https://arronbennettbuilding.co.uk/:splat"
  status = 301
  force = true

# Redirect HTTP to HTTPS (www)
[[redirects]]
  from = "http://www.arronbennettbuilding.co.uk/*"
  to = "https://arronbennettbuilding.co.uk/:splat"
  status = 301
  force = true

# Redirect www to non-www (optional)
[[redirects]]
  from = "https://www.arronbennettbuilding.co.uk/*"
  to = "https://arronbennettbuilding.co.uk/:splat"
  status = 301
  force = true
```

**Test after deployment:**
```bash
curl -I http://arronbennettbuilding.co.uk
# Should return 301 redirect to https://
```

---

## Fix 2: Add HSTS Header (5 minutes)

### File: `netlify.toml`

**Location:** `/c/Users/Fearn/ab1/arron-bennett-astro/netlify.toml`

**Find the existing headers section:**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

**Add this line to the headers:**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"  # ADD THIS LINE
```

**Test after deployment:**
```bash
curl -I https://arronbennettbuilding.co.uk | grep "Strict-Transport"
# Should return: Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

## Fix 3: Remove Development Tool (2 minutes)

### File: `public/og-image-generator.html`

**Command:**
```bash
cd /c/Users/Fearn/ab1/arron-bennett-astro
mkdir -p tools
mv public/og-image-generator.html tools/
```

**Verification:**
```bash
ls -la public/ | grep og-image-generator
# Should return nothing (file moved)
```

---

## Fix 4: Set Image Processing Limits (5 minutes)

### File: `astro.config.mjs`

**Location:** `/c/Users/Fearn/ab1/arron-bennett-astro/astro.config.mjs`

**Find this section:**
```javascript
image: {
  service: {
    entrypoint: 'astro/assets/services/sharp',
    config: {
      limitInputPixels: false  // CHANGE THIS
    }
  }
}
```

**Change to:**
```javascript
image: {
  service: {
    entrypoint: 'astro/assets/services/sharp',
    config: {
      limitInputPixels: 268402689  // 16384 x 16384 pixels (reasonable max)
    }
  }
}
```

**Test:**
```bash
npm run build
# Build should complete successfully
```

---

## Fix 5: Clean Up Dependencies (2 minutes)

**Command:**
```bash
cd /c/Users/Fearn/ab1/arron-bennett-astro
npm uninstall @emnapi/runtime
```

**Verification:**
```bash
npm list --depth=0 | grep emnapi
# Should return nothing
```

---

## Fix 6: Add Content Security Policy (Optional - 15 minutes)

### File: `netlify.toml`

**Add to the headers section:**

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://arronbennettbuilding.co.uk; frame-src 'none'; object-src 'none'"
```

**Note:** This includes `'unsafe-inline'` for scripts and styles due to current implementation. For stricter CSP, refactor inline code.

**Test after deployment:**
```bash
curl -I https://arronbennettbuilding.co.uk | grep "Content-Security"
# Should return CSP header
```

---

## Deployment Steps

1. **Make all changes locally**
2. **Test build:**
   ```bash
   npm run build
   ```
3. **Commit changes:**
   ```bash
   git add netlify.toml astro.config.mjs
   git commit -m "Security improvements: Add HTTPS enforcement, HSTS, CSP, and image limits"
   ```
4. **Deploy to Netlify:**
   ```bash
   git push origin main
   ```

---

## Post-Deployment Verification

### Test Security Headers
```bash
curl -I https://arronbennettbuilding.co.uk
```

**Expected output should include:**
```
HTTP/2 200
strict-transport-security: max-age=31536000; includeSubDomains; preload
content-security-policy: default-src 'self'; ...
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
referrer-policy: strict-origin-when-cross-origin
```

### Test HTTPS Redirect
```bash
curl -I http://arronbennettbuilding.co.uk
```

**Expected output:**
```
HTTP/1.1 301 Moved Permanently
Location: https://arronbennettbuilding.co.uk/
```

### Test with Online Tools

1. **SecurityHeaders.com**
   - Visit: https://securityheaders.com
   - Enter: https://arronbennettbuilding.co.uk
   - Target: A- rating or higher

2. **SSL Labs**
   - Visit: https://www.ssllabs.com/ssltest/
   - Enter: arronbennettbuilding.co.uk
   - Target: A rating

---

## Rollback Plan (If Issues Occur)

If you encounter issues after deployment:

1. **Revert netlify.toml changes:**
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Or manually remove added sections** from netlify.toml and redeploy

3. **Test locally first** if unsure:
   ```bash
   netlify dev
   ```

---

## Troubleshooting

### Issue: Site not redirecting to HTTPS
**Solution:** Check Netlify deployment logs for errors. Ensure redirects are properly formatted.

### Issue: CSP blocking resources
**Solution:** Check browser console for CSP violations. Add necessary domains to CSP policy.

### Issue: Build failing after image limits
**Solution:** Check for images larger than 16384x16384 pixels. Resize or compress them.

---

## Complete netlify.toml Security Section

**Here's the complete security section for your `netlify.toml`:**

```toml
# ============================================
# SECURITY HEADERS CONFIGURATION
# ============================================

# Global security headers for all pages
[[headers]]
  for = "/*"
  [headers.values]
    # Prevent MIME type sniffing
    X-Content-Type-Options = "nosniff"

    # Prevent clickjacking
    X-Frame-Options = "SAMEORIGIN"

    # HTTP Strict Transport Security (HSTS)
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"

    # Content Security Policy (CSP)
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://arronbennettbuilding.co.uk; frame-src 'none'; object-src 'none'"

    # Referrer policy for privacy
    Referrer-Policy = "strict-origin-when-cross-origin"

    # Permissions policy (feature restrictions)
    Permissions-Policy = "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"

# ============================================
# HTTPS REDIRECT RULES
# ============================================

# Redirect HTTP to HTTPS (non-www)
[[redirects]]
  from = "http://arronbennettbuilding.co.uk/*"
  to = "https://arronbennettbuilding.co.uk/:splat"
  status = 301
  force = true

# Redirect HTTP to HTTPS (www)
[[redirects]]
  from = "http://www.arronbennettbuilding.co.uk/*"
  to = "https://arronbennettbuilding.co.uk/:splat"
  status = 301
  force = true

# Redirect www to non-www
[[redirects]]
  from = "https://www.arronbennettbuilding.co.uk/*"
  to = "https://arronbennettbuilding.co.uk/:splat"
  status = 301
  force = true

# Keep existing cache control headers and other configurations below...
```

---

## Estimated Time Investment

| Task | Time | Priority |
|------|------|----------|
| HTTPS Redirects | 10 min | High |
| HSTS Header | 5 min | High |
| Remove Dev Tool | 2 min | High |
| Image Limits | 5 min | Medium |
| Clean Dependencies | 2 min | Low |
| CSP (optional) | 15 min | Medium |
| **Total** | **~30-45 min** | |

---

## Success Criteria

After implementing all fixes:

- ✅ HTTP automatically redirects to HTTPS
- ✅ HSTS header present (curl test passes)
- ✅ No development tools in public folder
- ✅ Image processing has reasonable limits
- ✅ No extraneous dependencies
- ✅ SecurityHeaders.com rating: A- or higher
- ✅ SSL Labs rating: A

---

**Questions or Issues?**

Refer to the comprehensive audit report at:
`/c/Users/Fearn/ab1/arron-bennett-astro/AUDIT-REPORT-7-SECURITY.md`

---

*Quick Fixes Guide - Team 7 Security Audit*
*November 4, 2025*
