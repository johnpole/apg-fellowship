import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

// Import all components
import { NavigationComponent } from './components/navigation/navigation';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { PrayerComponent } from './components/prayer/prayer';
import { ChildrenComponent } from './components/children/children';
import { TestimoniesComponent } from './components/testimonies/testimonies';
import { CalendarComponent } from './components/calendar/calendar';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { I18nService } from './services/i18n';
import { EmailService } from './services/email.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule,
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    PrayerComponent,
    ChildrenComponent,
    TestimoniesComponent,
    CalendarComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  protected title = 'Albany Prayer Group - Telugu Christian Fellowship';
  
  constructor(public i18nService: I18nService, private emailService: EmailService) {}

  ngOnInit() {
    // Additional initialization logic if needed
  }

  ngAfterViewInit() {
    // Additional logic after view initialization if needed
  }

  // Helper method for template to count messages
  getMessageCount(): number {
    return Object.keys(this.i18nService.getAllMessages()).length;
  }

  // Navigate to section
  navigateToSection(sectionId: string): void {
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Get current year for footer
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
