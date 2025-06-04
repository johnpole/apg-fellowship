import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class NavigationComponent {
  isMobileMenuOpen = false;

  constructor(public i18n: I18nService) {}

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    this.closeMobileMenu(); // Close menu when navigating
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
