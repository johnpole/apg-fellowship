import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  messagesLoaded = false;

  constructor(public i18n: I18nService) {}

  ngOnInit() {
    // Subscribe to messages loaded status
    this.subscription.add(
      this.i18n.messagesLoaded$.subscribe(loaded => {
        this.messagesLoaded = loaded;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
