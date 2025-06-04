import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../environments/emailjs-config';

export interface EmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  message: string;
  to_email: string;
  subject: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // EmailJS Configuration from external config file
  private readonly EMAIL_CONFIG = emailjsConfig;

  constructor() {
    // Initialize EmailJS with your user ID
    emailjs.init(this.EMAIL_CONFIG.userID);
  }

  async sendEmail(emailData: EmailData): Promise<{ success: boolean; message: string }> {
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: emailData.from_name,
        from_email: emailData.from_email,
        phone: emailData.phone || 'Not provided',
        message: emailData.message,
        to_email: emailData.to_email,
        subject: emailData.subject,
        reply_to: emailData.from_email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        this.EMAIL_CONFIG.serviceID,
        this.EMAIL_CONFIG.templateID,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Email sent successfully!'
        };
      } else {
        throw new Error(`EmailJS responded with status: ${response.status}`);
      }

    } catch (error: any) {
      console.error('Email sending failed:', error);
      
      // Handle specific EmailJS errors
      if (error.text) {
        return {
          success: false,
          message: `Email failed: ${error.text}`
        };
      } else if (error.status === 400) {
        return {
          success: false,
          message: 'Invalid email configuration. Please check EmailJS setup.'
        };
      } else if (error.status === 402) {
        return {
          success: false,
          message: 'EmailJS monthly limit exceeded.'
        };
      } else {
        return {
          success: false,
          message: 'Failed to send email. Please try again later.'
        };
      }
    }
  }

  // Method to test email configuration
  async testConfiguration(): Promise<boolean> {
    try {
      const testParams = {
        from_name: 'Test User',
        from_email: 'test@example.com',
        message: 'This is a test message from APG website',
        to_email: 'johnpole555@gmail.com'
      };

      await emailjs.send(
        this.EMAIL_CONFIG.serviceID,
        this.EMAIL_CONFIG.templateID,
        testParams
      );

      return true;
    } catch (error) {
      console.error('EmailJS configuration test failed:', error);
      return false;
    }
  }
} 