import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n';

@Component({
  selector: 'app-children',
  imports: [],
  templateUrl: './children.html',
  styleUrl: './children.scss'
})
export class ChildrenComponent {
  constructor(public i18n: I18nService) {}
}
