import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n';

@Component({
  selector: 'app-calendar',
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss'
})
export class CalendarComponent {
  constructor(public i18n: I18nService) {}
}
