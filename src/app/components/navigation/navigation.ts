import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';
import { Subscription } from 'rxjs';

export interface NavSection {
  id: string;
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, LanguageSwitcherComponent],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() sections: NavSection[] = [];
  @Output() sectionSelected = new EventEmitter<string>();
  
  private subscription: Subscription = new Subscription();
  messagesLoaded = false;

  constructor(public i18n: I18nService) {}

  ngOnInit() {
    // Subscribe to messages loaded status
    this.subscription.add(
      this.i18n.messagesLoaded$.subscribe(loaded => {
        this.messagesLoaded = loaded;
        if (loaded) {
          this.updateSectionLabels();
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updateSectionLabels(): void {
    this.sections.forEach(section => {
      switch (section.id) {
        case 'home':
          section.label = this.i18n.get('Apg.navigation.home');
          break;
        case 'about':
          section.label = this.i18n.get('Apg.navigation.aboutUs');
          break;
        case 'prayer':
          section.label = this.i18n.get('Apg.navigation.prayer');
          break;
        case 'children':
          section.label = this.i18n.get('Apg.navigation.childrenMinistry');
          break;
        case 'testimonies':
          section.label = this.i18n.get('Apg.navigation.testimonies');
          break;
        case 'calendar':
          section.label = this.i18n.get('Apg.navigation.calendar');
          break;
        case 'contact':
          section.label = this.i18n.get('Apg.navigation.contactUs');
          break;
      }
    });
  }

  onSectionClick(sectionId: string): void {
    this.sectionSelected.emit(sectionId);
  }
}
