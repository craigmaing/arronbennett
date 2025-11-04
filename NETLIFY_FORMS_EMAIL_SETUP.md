# Netlify Forms Email Notification Setup Guide

This guide explains how to configure email notifications for your Netlify contact form to receive submissions at enquiries@arronbennettbuilding.co.uk.

## Site Information

- **Site Name**: arronbennett
- **Site URL**: https://app.netlify.com/projects/arronbennett
- **Site ID**: bfd6ff64-30b9-4892-8f88-2423810b5ea5
- **Form Name**: contact
- **Notification Email**: enquiries@arronbennettbuilding.co.uk

## Prerequisites

Your contact form is already properly configured with `data-netlify="true"` attribute. The form must be:
1. Deployed to Netlify
2. Receive at least one submission before it appears in the Forms dashboard

## Step-by-Step Setup Instructions

### Step 1: Deploy Your Site

Before form notifications can be configured, your site must be deployed to Netlify.

1. Ensure all changes are committed to your repository
2. Push to your connected branch (usually `main` or `master`)
3. Wait for Netlify to complete the deployment
4. Verify your site is live

**Expected Outcome**: Your site is successfully deployed and accessible via your Netlify URL.

---

### Step 2: Submit a Test Form (Required)

Netlify only displays forms in the dashboard after they receive their first submission.

1. Navigate to your live site
2. Go to the contact page
3. Fill out the form with test data (you can use your own email)
4. Submit the form
5. You should see a success message or be redirected to a thank-you page

**Expected Outcome**: Form submits successfully. This first submission creates the form entry in Netlify's dashboard.

**Note**: The first submission might take 1-2 minutes to appear in the dashboard. Be patient.

---

### Step 3: Access Netlify Forms Dashboard

1. Log in to your Netlify account at https://app.netlify.com
2. Select your **arronbennett** site from your sites list
3. In the top navigation menu, click on **Forms**
4. You should now see your **contact** form listed with the number of submissions

**Expected Outcome**: You can see your contact form in the Forms section with at least one submission (your test).

**Screenshot Description**: The Forms page shows a list of all forms detected on your site. Each form displays its name, number of submissions, and verification status.

---

### Step 4: Access Form Settings

1. From the Forms page, click on your **contact** form name
2. This opens the form submissions view showing all entries
3. Click on the **Settings and usage** button (usually in the top-right area)
4. Or navigate directly to: Site Settings > Forms

**Expected Outcome**: You're now viewing the Forms settings page for your site.

---

### Step 5: Configure Email Notifications

1. In the Forms settings, find the **Form notifications** section
2. Click **Add notification**
3. Select **Email notification** from the notification type options
4. A configuration panel will appear

**Screenshot Description**: The notification configuration panel has fields for email address, notification event trigger, and format options.

---

### Step 6: Set Up Email Notification Details

Configure the email notification with these settings:

1. **Event to listen for**: Select "New form submission"
2. **Form to notify for**: Select "contact" (your form name)
3. **Email to notify**: Enter `enquiries@arronbennettbuilding.co.uk`
4. **Notification format**: Choose your preference:
   - **Summary**: Brief notification with submission details
   - **Full**: Complete form data in the email body

**Recommended**: Start with "Full" format to see all submission details.

5. Click **Save** to enable the notification

**Expected Outcome**: Email notification is now active. You'll see it listed under "Active notifications" in the Forms settings.

---

### Step 7: Add Additional Email Recipients (Optional)

If you need form notifications sent to multiple email addresses:

1. Click **Add notification** again
2. Repeat Step 6 with a different email address
3. You can create as many email notifications as needed

**Expected Outcome**: Multiple email addresses will receive notifications for each form submission.

---

## What to Expect

### When a Form Submission Occurs

1. **Immediate**: User sees confirmation message on your site
2. **Within 1-5 minutes**: You receive an email notification at enquiries@arronbennettbuilding.co.uk
3. **Email Subject**: Usually "New form submission from [your-site-name]"
4. **Email Content**: Contains all form field data (name, email, message, etc.)

### Email Notification Format

The notification email will include:
- Form name (contact)
- Submission timestamp
- All form field names and values
- Link to view the submission in Netlify dashboard
- Sender's IP address (for spam verification)

---

## Testing Your Setup

### Test Procedure

1. Go to your live contact form on the deployed site
2. Fill out the form with real test data:
   - Use a real email address (preferably yours for testing)
   - Enter a test message clearly marked as "TEST SUBMISSION"
   - Complete all required fields
3. Submit the form
4. Wait 5 minutes
5. Check enquiries@arronbennettbuilding.co.uk inbox
6. Also check the spam/junk folder

**Expected Outcome**: You receive an email notification with your test submission details within 5 minutes.

---

## Spam Protection

Your form already has spam protection enabled via honeypot field. Additional features:

### Built-in Spam Filtering

- Netlify automatically filters obvious spam submissions
- Submissions marked as spam still appear in the dashboard but under "Spam" tab
- Spam submissions do NOT trigger email notifications by default

### First Submission Considerations

- The very first submission to a new form might be flagged as spam
- Check your spam folder if you don't receive the first test notification
- Add notifications@netlify.com to your contacts/safe senders list

---

## Troubleshooting

### Problem: Form Doesn't Appear in Dashboard

**Solutions**:
1. Verify form has `data-netlify="true"` attribute in the HTML
2. Ensure site is fully deployed (check deployment status)
3. Submit the form at least once
4. Wait 2-3 minutes and refresh the Netlify dashboard
5. Check that the form name matches what you expect

---

### Problem: Email Notifications Not Arriving

**Solutions**:

1. **Check spam folder**: First submissions often go to spam
   - Mark as "Not Spam" if found there
   - Add notifications@netlify.com to safe senders

2. **Verify notification settings**:
   - Go to Site Settings > Forms > Form notifications
   - Confirm email address is correct (enquiries@arronbennettbuilding.co.uk)
   - Check that notification is "Active" (not disabled)
   - Verify correct form is selected

3. **Test email address**:
   - Send a test email to enquiries@arronbennettbuilding.co.uk from another account
   - Confirm the email address is working and accessible
   - Check email server isn't blocking external notifications

4. **Check Netlify status**:
   - Visit https://www.netlifystatus.com
   - Verify all systems operational
   - Check for any reported issues with Forms service

5. **Review form submissions in dashboard**:
   - Go to Forms > contact
   - Check if submissions are appearing there
   - If submissions appear but no emails arrive, it's an email delivery issue

6. **Wait period**:
   - Email notifications can take 1-5 minutes
   - During high traffic, may take up to 10 minutes

---

### Problem: Receiving Too Many Spam Submissions

**Solutions**:

1. **Enable reCAPTCHA** (optional additional protection):
   - Go to Site Settings > Forms
   - Enable reCAPTCHA integration
   - Add reCAPTCHA keys from Google

2. **Review and delete spam**:
   - Forms dashboard has a "Spam" tab
   - Review and delete obvious spam entries
   - Netlify learns from your spam management

3. **Adjust form accessibility**:
   - Consider adding a simple question field
   - Add custom validation to required fields

---

### Problem: Missing Form Fields in Notifications

**Solutions**:

1. **Check form HTML structure**:
   - All input fields must have `name` attributes
   - Field names must match what you expect
   - Ensure no JavaScript errors preventing form submission

2. **Review in dashboard first**:
   - Check Forms > contact > Submissions
   - See if all fields appear in dashboard view
   - If missing there, it's a form configuration issue

3. **Clear cache and retest**:
   - Clear browser cache
   - Redeploy site if form structure changed
   - Submit new test after deployment completes

---

## Additional Configuration Options

### Custom Success Message

You can customize what users see after submission:

1. Add a custom success page by creating a redirect
2. Or use the default Netlify success message
3. Configure in Site Settings > Forms > Form settings

### Form Submission Webhook (Advanced)

For custom integrations:

1. Add webhook notification instead of email
2. Useful for integrating with Slack, Discord, or custom APIs
3. Configure in Form notifications > Add notification > Webhook

### Download Submissions

You can export all form submissions:

1. Go to Forms > contact
2. Click "Export" button
3. Download as CSV file for record keeping

---

## Best Practices

1. **Test regularly**: Submit a test form monthly to ensure notifications working
2. **Monitor spam folder**: Check occasionally for false positives
3. **Keep records**: Download submission exports quarterly for backup
4. **Update email**: If changing notification email, test immediately after updating
5. **Respond promptly**: Aim to respond to genuine inquiries within 24 hours

---

## Support Resources

If you continue experiencing issues:

- **Netlify Support Docs**: https://docs.netlify.com/forms/setup/
- **Netlify Community Forum**: https://answers.netlify.com
- **Netlify Support**: Available through dashboard (Support > Contact support)

---

## Summary Checklist

Use this checklist to verify your setup is complete:

- [ ] Site deployed to Netlify
- [ ] Form includes `data-netlify="true"` attribute
- [ ] Test submission sent successfully
- [ ] Form appears in Netlify Forms dashboard
- [ ] Email notification configured for contact form
- [ ] Notification email set to enquiries@arronbennettbuilding.co.uk
- [ ] Notification format selected (Summary or Full)
- [ ] Test email received successfully
- [ ] Spam folder checked if needed
- [ ] notifications@netlify.com added to safe senders

---

**Setup Complete!** Your contact form is now configured to send email notifications to enquiries@arronbennettbuilding.co.uk for every submission received.
