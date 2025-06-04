import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n';

@Component({
  selector: 'app-testimonies',
  imports: [],
  templateUrl: './testimonies.html',
  styleUrl: './testimonies.scss'
})
export class TestimoniesComponent {
  constructor(public i18n: I18nService) {}
}
