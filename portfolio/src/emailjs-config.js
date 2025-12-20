// EmailJS Configuration
// Replace these values with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xvcwuk2', // Get from EmailJS dashboard -> Email Services
  TEMPLATE_ID: 'template_6j7gjhj', // Get from EmailJS dashboard -> Email Templates
  PUBLIC_KEY: 'GJDekvo_xzEDNJQsl' // Get from EmailJS dashboard -> Account -> General
};

// Instructions:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}}
//    - {{from_email}}
//    - {{message}}
//    - {{to_name}}
// 4. Copy the Service ID, Template ID, and Public Key here
// 5. Update the Contact.jsx component to import and use these values