// EmailJS Configuration Template
// Copy this file to emailjs-config.ts and replace with your actual EmailJS credentials

export const emailjsConfig = {
  serviceID: 'YOUR_SERVICE_ID',     // From EmailJS Dashboard > Email Services
  templateID: 'YOUR_TEMPLATE_ID',   // From EmailJS Dashboard > Email Templates  
  userID: 'YOUR_USER_ID'            // From EmailJS Dashboard > Account > API Keys (Public Key)
};

/*
SETUP INSTRUCTIONS:

1. Copy this file to emailjs-config.ts:
   cp emailjs-config.example.ts emailjs-config.ts

2. Replace the placeholder values with your actual EmailJS credentials from:
   https://emailjs.com

3. NEVER commit emailjs-config.ts to Git - it's already in .gitignore

4. Follow the setup guide in EMAILJS-SETUP.md for detailed instructions

Example real configuration (DO NOT COMMIT):
export const emailjsConfig = {
  serviceID: 'service_abc123',
  templateID: 'template_def456', 
  userID: 'xyz789_user_id'
};
*/ 