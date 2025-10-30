# Netlify Forms Testing Checklist

## Pre-Deployment Testing

### Local Development Testing

#### Form Structure Verification
- [ ] Contact form component exists at `src/components/ContactForm.astro`
- [ ] Form has `data-netlify="true"` attribute
- [ ] Form has `name="contact"` attribute
- [ ] Form has `method="POST"`
- [ ] Form has `data-netlify-honeypot="bot-field"`
- [ ] Hidden input with `name="form-name"` value="contact" exists
- [ ] Honeypot field is hidden with class `hidden` and `aria-hidden="true"`
- [ ] All form fields have proper `name` attributes:
  - [ ] `name="name"`
  - [ ] `name="phone"`
  - [ ] `name="email"`
  - [ ] `name="project"`
  - [ ] `name="bot-field"` (honeypot)

#### Form Field Validation
- [ ] Name field has `required` attribute
- [ ] Phone field has `required` attribute and `type="tel"`
- [ ] Email field has `required` attribute and `type="email"`
- [ ] Project textarea has `required` attribute
- [ ] All required fields have aria attributes for accessibility
- [ ] Error messages have proper IDs for aria-describedby
- [ ] Required field indicators visible (red asterisk)

#### Accessibility Testing
- [ ] Form is keyboard navigable (Tab through all fields)
- [ ] Focus indicators visible on all form fields
- [ ] Error messages linked to fields with aria-describedby
- [ ] Honeypot field marked with aria-hidden="true"
- [ ] Form has proper label elements with for attributes
- [ ] Success message has role="alert"
- [ ] Button is accessible with proper aria labels

#### Build Verification
```bash
cd C:\Users\Fearn\ab1\arron-bennett-astro
npm run build
```

- [ ] Build completes without errors
- [ ] No console warnings related to form
- [ ] dist/ folder created
- [ ] dist/contact-us/index.html contains form HTML
- [ ] dist/thank-you/index.html exists
- [ ] HTML form structure intact in dist files

---

## Post-Deployment Testing

### Netlify Admin Verification

#### Site Access
- [ ] Site accessible at Netlify domain (https://[sitename].netlify.app)
- [ ] Custom domain (if set) redirects properly
- [ ] HTTPS/SSL certificate valid (green lock in browser)
- [ ] No mixed content warnings

#### Forms Configuration
- [ ] Forms section in Netlify shows "contact" form
- [ ] Form detection shows "Active"
- [ ] Spam protection enabled (honeypot)
- [ ] Email notification configured
- [ ] Notification email address correct

### Form Submission Testing

#### Test 1: Valid Submission
1. Navigate to contact page
2. Fill form with valid data:
   - Name: "Test User"
   - Phone: "07773 463383"
   - Email: "test@example.com"
   - Project: "Test building project description"
3. Submit form

**Verify:**
- [ ] Form submits without errors
- [ ] Page redirects to `/thank-you`
- [ ] Thank you page displays with success message
- [ ] URL changes to `/thank-you`
- [ ] No console errors

#### Test 2: Email Notification
1. Wait 1-2 minutes after form submission
2. Check configured notification email inbox

**Verify:**
- [ ] Email received from Netlify Forms
- [ ] Email contains all form fields
- [ ] Email shows correct values submitted
- [ ] Email includes submission timestamp
- [ ] Email includes user IP address

#### Test 3: Honeypot Spam Protection
1. Open browser DevTools (F12)
2. In Console, run:
```javascript
document.querySelector('input[name="bot-field"]').hidden
```

**Verify:**
- [ ] Returns `true` (field is hidden)
- [ ] Field is not visible on page
- [ ] aria-hidden="true" present on parent element
- [ ] CSS has display: none or visibility: hidden

#### Test 4: Submission Appears in Dashboard
1. Log into Netlify dashboard
2. Go to your site
3. Click Forms → contact form → Submissions

**Verify:**
- [ ] New submission appears in list
- [ ] Timestamp matches submission time
- [ ] All fields display correctly
- [ ] Spam score shows 0 (legitimate)
- [ ] IP address visible
- [ ] Device info visible

#### Test 5: Required Field Validation
1. Try submitting form without entering name
2. Observe error message

**Verify:**
- [ ] Browser shows native validation error
- [ ] Cannot submit without name
- [ ] Error message appears below name field
- [ ] Field highlighted or focused

Repeat for each required field:
- [ ] Phone field required
- [ ] Email field required
- [ ] Project field required

#### Test 6: Email Validation
1. Enter invalid email (e.g., "notanemail")
2. Try to submit

**Verify:**
- [ ] Browser shows email validation error
- [ ] Cannot submit with invalid email
- [ ] Error message clear and helpful
- [ ] Valid email formats accepted

#### Test 7: Phone Validation
1. Enter phone number in various formats:
   - "07773 463383" (spaces)
   - "07773463383" (no spaces)
   - "+447773463383" (with country code)
2. Verify all are accepted

**Verify:**
- [ ] Various phone formats accepted
- [ ] Field type="tel" provides phone keyboard on mobile
- [ ] At least one format accepted for submission

#### Test 8: Special Characters in Text Fields
1. Submit form with special characters:
   - Name: "O'Brien"
   - Project: "Extension & renovation (£50k budget)"
2. Check email notification

**Verify:**
- [ ] Special characters submitted correctly
- [ ] Characters display correctly in email
- [ ] No encoding issues
- [ ] Quotes and apostrophes work

#### Test 9: Long Text Submission
1. Enter long text in project field (500+ characters)
2. Submit form

**Verify:**
- [ ] Form accepts long text
- [ ] All text submitted correctly
- [ ] Text displays correctly in email notification
- [ ] No character limit issues

### Mobile Testing

#### Responsive Design
- [ ] Form displays properly on mobile (375px width)
- [ ] All fields visible without horizontal scroll
- [ ] Labels and inputs properly stacked
- [ ] Button full width and tappable (44px+ height)
- [ ] Thank you page responsive

#### Mobile Input Experience
- [ ] Phone field shows numeric keyboard on iOS/Android
- [ ] Email field shows @ symbol on keyboard
- [ ] Text field keyboard appropriate for input type
- [ ] Form fields have adequate spacing for touch
- [ ] No zoom required to see or interact with form

#### Mobile Form Submission
1. Test full form submission on mobile device/browser
2. Verify submission works and thank you page displays

**Verify:**
- [ ] Form submits successfully
- [ ] Email notification received
- [ ] Thank you page responsive on mobile
- [ ] All buttons clickable on mobile

### Browser Compatibility Testing

Test in multiple browsers:

#### Google Chrome
- [ ] Form displays correctly
- [ ] Form submits successfully
- [ ] Thank you page displays
- [ ] Email notification received

#### Firefox
- [ ] Form displays correctly
- [ ] Form submits successfully
- [ ] Thank you page displays
- [ ] Email notification received

#### Safari (macOS)
- [ ] Form displays correctly
- [ ] Form submits successfully
- [ ] Thank you page displays
- [ ] Email notification received

#### Safari (iOS)
- [ ] Form displays correctly
- [ ] Mobile keyboard appears
- [ ] Form submits successfully
- [ ] Thank you page displays

#### Edge
- [ ] Form displays correctly
- [ ] Form submits successfully
- [ ] Thank you page displays
- [ ] Email notification received

### Performance Testing

#### Page Load Performance
1. Visit contact page
2. Open DevTools → Performance tab
3. Measure metrics:

**Verify:**
- [ ] Page load time < 3 seconds
- [ ] Largest Contentful Paint (LCP) < 2.5 seconds
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] First Input Delay (FID) < 100ms

#### Form Submission Performance
1. Submit form
2. Monitor Network tab for submission request

**Verify:**
- [ ] Form submission request < 2 seconds
- [ ] No long-running scripts
- [ ] No layout shifts during submission
- [ ] Redirect to thank you page is instant

#### Lighthouse Score
1. Run Lighthouse audit on contact page
2. Check score in Netlify Analytics

**Verify:**
- [ ] Performance score 90+
- [ ] Accessibility score 95+
- [ ] Best Practices score 90+
- [ ] SEO score 95+

### Security Testing

#### HTTPS/SSL Verification
- [ ] Green lock icon visible
- [ ] No "Not Secure" warning
- [ ] Certificate valid
- [ ] No mixed content (HTTP resources on HTTPS page)

#### Header Security
1. Open DevTools → Network tab
2. Check response headers for contact page

**Verify:**
- [ ] X-Content-Type-Options: nosniff
- [ ] X-Frame-Options: SAMEORIGIN
- [ ] X-XSS-Protection: 1; mode=block
- [ ] Referrer-Policy: strict-origin-when-cross-origin

#### Form Security
- [ ] Form uses HTTPS POST method
- [ ] No form data in URL
- [ ] No sensitive data in browser cache
- [ ] honeypot field prevents bot submissions

#### CORS Testing
1. Open DevTools Console
2. Check for any CORS errors

**Verify:**
- [ ] No CORS errors
- [ ] Form submission allowed
- [ ] No cross-origin issues

### Spam Testing

#### Honeypot Field Testing
1. Using browser DevTools, make honeypot field visible:
```javascript
document.querySelector('input[name="bot-field"]').style.display = 'block'
```
2. Fill the honeypot field with text
3. Submit form normally
4. Wait for email notification

**Verify:**
- [ ] Netlify filters honeypot submissions
- [ ] Email notification NOT received (if using spam filtering)
- [ ] Submission still appears in Netlify with high spam score
- [ ] Real submissions with empty honeypot work fine

### Analytics & Conversion Tracking

#### Form Submission Tracking
1. Submit form on live site
2. Log into Google Analytics 4 (if configured)
3. Check Events section

**Verify:**
- [ ] Form submission event tracked (if configured)
- [ ] Conversion goal marked (if configured)
- [ ] Thank you page views counted
- [ ] Conversion rate calculated correctly

### Error Handling

#### Network Error Simulation
1. Open DevTools Network tab
2. Set throttling to "Offline"
3. Try to submit form

**Verify:**
- [ ] Form shows error message
- [ ] No infinite loading
- [ ] User can retry submission
- [ ] Error message is helpful

#### Server Error Simulation
(Note: This requires backend testing)

**Verify:**
- [ ] 500 error handled gracefully
- [ ] User feedback clear
- [ ] Form not lost after error
- [ ] Can retry submission

### Accessibility Deep Dive

#### Screen Reader Testing
(Use NVDA on Windows, JAWS, or VoiceOver on Mac/iOS)

1. Navigate to contact form
2. Navigate through form with screen reader

**Verify:**
- [ ] Form identifies as form to screen reader
- [ ] Each input announced with label
- [ ] Required fields announced as required
- [ ] Error messages announced to screen reader
- [ ] Success message announced
- [ ] Form structure logical in reading order

#### Keyboard Navigation
1. Click on form
2. Use only Tab/Shift+Tab to navigate
3. Use Space/Enter to interact

**Verify:**
- [ ] All form fields focusable
- [ ] Focus visible (blue outline)
- [ ] Can submit with keyboard
- [ ] No keyboard traps
- [ ] Logical tab order (top to bottom)

#### Color Contrast Testing
Use browser DevTools or WebAIM contrast checker

**Verify:**
- [ ] Label text contrast > 4.5:1
- [ ] Input field text contrast > 4.5:1
- [ ] Button text contrast > 4.5:1
- [ ] Error message contrast > 4.5:1
- [ ] Help text contrast > 4.5:1

### SEO Testing

#### Meta Tags
1. View page source (Ctrl+U / Cmd+U)
2. Check for meta tags

**Verify:**
- [ ] Page has title tag
- [ ] Page has meta description
- [ ] Page has og:title (Open Graph)
- [ ] Page has og:description
- [ ] Page has canonical URL

#### Schema Markup
1. Visit https://schema.org/validator
2. Paste contact page URL
3. Check structured data

**Verify:**
- [ ] Schema markup validates
- [ ] Organization schema present
- [ ] Contact info schema correct
- [ ] Success page has conversion schema

#### Sitemap
1. Visit `/sitemap-index.xml` on your site

**Verify:**
- [ ] Sitemap generates without errors
- [ ] contact-us page listed
- [ ] thank-you page listed (optional but good)
- [ ] Valid XML format

---

## Regression Testing

### After Form Changes

Whenever you update the contact form:

1. Re-run all tests in "Form Submission Testing" section
2. Re-run "Mobile Testing" section
3. Re-run "Accessibility Deep Dive" section
4. Check Netlify build logs for errors
5. Verify email notifications still work

### Automated Testing (Optional)

If you want to automate testing:

```bash
# Install test dependencies
npm install -D playwright @playwright/test

# Create tests in tests/contact-form.spec.ts
# Run: npx playwright test
```

---

## Sign-Off Checklist

When all tests pass, mark this checklist complete:

### Local Development
- [ ] All structure verified
- [ ] Build completes without errors
- [ ] HTML generated correctly

### Post-Deployment
- [ ] Site accessible on Netlify
- [ ] Form submits successfully
- [ ] Email notifications received
- [ ] Thank you page displays
- [ ] Mobile view works
- [ ] All browsers work
- [ ] Performance score 90+
- [ ] Security headers present
- [ ] Honeypot working
- [ ] Accessibility score 95+

### Production Ready
- [ ] All tests passed
- [ ] Submitted to client
- [ ] Client approved
- [ ] Ready for launch

---

## Test Results Summary

| Category | Status | Notes |
|----------|--------|-------|
| Form Structure | ✓/✗ | |
| Form Validation | ✓/✗ | |
| Submission | ✓/✗ | |
| Email Notifications | ✓/✗ | |
| Mobile | ✓/✗ | |
| Browser Compatibility | ✓/✗ | |
| Performance | ✓/✗ | |
| Security | ✓/✗ | |
| Accessibility | ✓/✗ | |
| SEO | ✓/✗ | |

---

## Issues Found & Resolution

### Issue 1
- **Description:** [Issue description]
- **Severity:** High/Medium/Low
- **Resolution:** [How it was fixed]
- **Status:** ✓ Resolved / ⏳ Pending

---

**Test Date:** _________
**Tester Name:** _________
**Overall Status:** ✓ PASS / ✗ FAIL

---

**Document Created:** 2025-10-30
**Status:** Ready for Testing
**Version:** 1.0
