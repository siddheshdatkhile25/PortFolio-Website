# EmailJS Setup Instructions

To enable email sending functionality in your portfolio contact form, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## 2. Set up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and grant permissions
5. Copy the **Service ID**

## 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   - **To Email**: Your email address (where you want to receive messages)
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `New Contact Form Message from {{from_name}}`
   - **Message/Body**:
     ```
     Hello {{to_name}},

     You have received a new message from your portfolio contact form:

     Name: {{from_name}}
     Email: {{from_email}}

     Message:
     {{message}}

     Best regards,
     Portfolio Contact Form
     ```
4. Save the template and copy the **Template ID**

## 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

## 5. Update Configuration
1. Open `src/emailjs-config.js`
2. Replace the placeholder values:
   ```javascript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'your_actual_service_id',
     TEMPLATE_ID: 'your_actual_template_id',
     PUBLIC_KEY: 'your_actual_public_key'
   };
   ```

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting
- Make sure all IDs and keys are correct
- Check the browser console for any errors
- Verify your email service is properly connected
- Free EmailJS accounts have a monthly limit (200 emails)

## Security Note
Never commit your EmailJS credentials to version control. Consider using environment variables for production.