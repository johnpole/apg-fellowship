import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n';

@Component({
  selector: 'app-prayer',
  imports: [],
  templateUrl: './prayer.html',
  styleUrl: './prayer.scss'
})
export class PrayerComponent {
  constructor(public i18n: I18nService) {}
}
