import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I18nService } from '../../services/i18n';
import { EmailService, EmailData } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  submitError = false;
  errorMessage = '';

  constructor(
    public i18n: I18nService,
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitError = false;
      this.errorMessage = '';

      try {
        const formData = this.contactForm.value;
        
        // Prepare email data
        const emailData: EmailData = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'johnpole555@gmail.com',
          subject: 'New Fellowship Inquiry from APG Website'
        };

        // Send email using EmailJS
        const result = await this.emailService.sendEmail(emailData);
        
        if (result.success) {
          this.isSubmitted = true;
          this.contactForm.reset();
        } else {
          this.submitError = true;
          this.errorMessage = result.message;
        }

      } catch (error) {
        console.error('Form submission error:', error);
        this.submitError = true;
        this.errorMessage = 'An unexpected error occurred. Please try again.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  resetForm(): void {
    this.isSubmitted = false;
    this.submitError = false;
    this.errorMessage = '';
    this.contactForm.reset();
  }

  // Helper methods for template
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} is too short`;
    }
    return '';
  }
}
