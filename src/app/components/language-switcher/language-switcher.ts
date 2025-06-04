import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcherComponent {
  availableLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' }
    // Note: Telugu support can be added later
    // { code: 'te', name: 'తెలుగు', flag: '🇮🇳' }
  ];

  constructor(public i18n: I18nService) {}

  async changeLanguage(languageCode: string): Promise<void> {
    await this.i18n.setLanguage(languageCode);
  }

  onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      this.changeLanguage(target.value);
    }
  }

  get currentLanguage(): string {
    return this.i18n.getCurrentLanguage();
  }
}
