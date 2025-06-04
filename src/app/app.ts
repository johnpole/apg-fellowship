import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import all components
import { NavigationComponent, NavSection } from './components/navigation/navigation';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { PrayerComponent } from './components/prayer/prayer';
import { ChildrenComponent } from './components/children/children';
import { TestimoniesComponent } from './components/testimonies/testimonies';
import { CalendarComponent } from './components/calendar/calendar';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { I18nService } from './services/i18n';

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
export class App {
  protected title = 'Albany Prayer Group - Telugu Christian Fellowship';
  
  // Navigation sections for single page app
  protected sections: NavSection[] = [
    { id: 'home', label: 'Home', active: true },
    { id: 'about', label: 'About Us', active: false },
    { id: 'prayer', label: 'Prayer', active: false },
    { id: 'children', label: 'Children Ministry', active: false },
    { id: 'testimonies', label: 'Testimonies', active: false },
    { id: 'calendar', label: 'Calendar', active: false },
    { id: 'contact', label: 'Contact Us', active: false }
  ];

  // Current active section
  protected activeSection = 'home';

  constructor(public i18nService: I18nService) {}

  // Helper method for template to count messages
  getMessageCount(): number {
    return Object.keys(this.i18nService.getAllMessages()).length;
  }

  // Navigate to section
  navigateToSection(sectionId: string): void {
    this.activeSection = sectionId;
    this.sections.forEach(section => {
      section.active = section.id === sectionId;
    });
    
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
