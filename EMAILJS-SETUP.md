# EmailJS Setup Guide for APG Website

This guide will help you set up EmailJS to enable real email sending from your static website contact form.

## Step 1: Create EmailJS Account

1. Go to [https://emailjs.com](https://emailjs.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup wizard:
   - **For Gmail**: Allow EmailJS to access your Gmail account
   - **Service Name**: "APG Contact Form" (or any name you prefer)
5. Note down the **Service ID** (something like `service_xyz123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Name
`APG Contact Form Template`

### Subject
```
New Fellowship Inquiry from APG Website
```

### Content (HTML or Plain Text)
```
New contact form submission from Albany Prayer Group website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the APG website contact form.
You can reply directly to this email to respond to {{from_name}}.

Sent to: {{to_email}}
Reply-To: {{from_email}}
```

4. Click **Save** and note down the **Template ID** (something like `template_abc456`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (something like `user_def789`)
3. This is also called your "User ID"

## Step 5: Update Configuration

1. Open `src/environments/emailjs-config.ts`
2. Replace the placeholder values with your actual IDs:

```typescript
export const emailjsConfig = {
  serviceID: 'service_xyz123',      // Your Service ID from Step 2
  templateID: 'template_abc456',    // Your Template ID from Step 3
  userID: 'user_def789'             // Your Public Key from Step 4
};
```

## Step 6: Test the Setup

1. Save all files and restart your development server:
   ```bash
   npm start
   ```

2. Open your website at `http://localhost:4200`
3. Navigate to the Contact section
4. Fill out and submit the contact form
5. Check your email (`johnpole555@gmail.com`) for the message

## Troubleshooting

### Common Issues:

1. **"EmailJS configuration error"**
   - Double-check your Service ID, Template ID, and User ID
   - Make sure you copied them correctly from EmailJS dashboard

2. **"Invalid template ID"**
   - Verify the template ID matches exactly
   - Ensure the template is published (not in draft)

3. **"Unauthorized"**
   - Check your Public Key/User ID
   - Make sure your EmailJS account is verified

4. **"Service not found"**
   - Verify your Service ID
   - Ensure the email service is properly configured

### Free Tier Limits:
- **200 emails per month**
- **50 requests per hour**
- **10 template variables**

These limits should be more than enough for your website contact form.

## Example Working Configuration

Here's what your config should look like when properly set up:

```typescript
export const emailjsConfig = {
  serviceID: 'service_1a2b3c4',
  templateID: 'template_5d6e7f8',
  userID: 'user_9g0h1i2'
};
```

## Support

If you need help:
1. Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Verify your configuration in the EmailJS dashboard
3. Test with the EmailJS playground first

Once set up correctly, your contact form will send real emails to `johnpole555@gmail.com` while keeping your website completely static! 