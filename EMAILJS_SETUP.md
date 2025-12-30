# EmailJS Contact Form Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to make it work:

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail is easiest):
   - Select **Gmail**
   - Click **Connect Account**
   - Sign in with your Gmail account (rithiksharon.a@gmail.com)
   - Allow EmailJS to send emails on your behalf
4. Copy the **Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Template variables to use:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Rithik Sharon A)

5. Set the "To Email" field to: `rithiksharon.a@gmail.com`
6. Click **Save** and copy the **Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **General** in the dashboard
2. Find and copy your **Public Key** (looks like a long string)

### Step 5: Update Your Code
Open `src/Contact.jsx` and replace these placeholders (around line 27-29):

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';       // Replace with your Public Key
```

### Step 6: Test It!
1. Run your development server: `npm run dev`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email (rithiksharon.a@gmail.com) - you should receive the message!

## 🎨 Optional Improvements

### Add reCAPTCHA (Prevent Spam)
EmailJS supports Google reCAPTCHA to prevent spam submissions. See their docs: https://www.emailjs.com/docs/user-guide/adding-recaptcha/

### Email Limit
- **Free Plan**: 200 emails/month
- If you need more, consider upgrading or using a backend solution

### Auto-Reply to Users
You can create a second template to automatically send a confirmation email to users when they submit the form.

## 🔒 Security Note

Your EmailJS credentials are safe to expose in the frontend because:
1. EmailJS Public Key is designed to be public
2. The service is restricted to your domain (configure this in EmailJS dashboard)
3. You can enable reCAPTCHA for additional protection

## 📧 Alternative: Using Environment Variables (Recommended for Production)

For better security, use environment variables:

1. Create a `.env` file in your project root:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `src/Contact.jsx`:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Add `.env` to your `.gitignore` file

4. For deployment (Vercel/Netlify), add these as environment variables in your hosting dashboard

## 🆘 Troubleshooting

**Form shows "Failed to send message":**
- Check that all 3 credentials are correct
- Verify your EmailJS account is verified
- Check browser console for detailed error messages
- Make sure your Gmail account is connected in EmailJS

**Not receiving emails:**
- Check spam/junk folder
- Verify the "To Email" in your EmailJS template
- Test by sending an email from EmailJS dashboard first

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Dashboard: https://dashboard.emailjs.com/

---

## ✅ Quick Checklist
- [ ] Created EmailJS account
- [ ] Connected Gmail service
- [ ] Created email template
- [ ] Copied Service ID, Template ID, and Public Key
- [ ] Updated Contact.jsx with credentials
- [ ] Tested the form
- [ ] Received test email successfully

Once complete, your contact form will be fully functional! 🎉




