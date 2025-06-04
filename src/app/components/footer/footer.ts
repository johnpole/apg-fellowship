import { Component, EventEmitter, Output } from '@angular/core';
import { I18nService } from '../../services/i18n';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  constructor(public i18n: I18nService) {}

  onSectionClick(sectionId: string): void {
    this.sectionSelected.emit(sectionId);
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
