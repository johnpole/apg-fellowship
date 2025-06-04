import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  @Output() sectionSelected = new EventEmitter<string>();
  
  private subscription: Subscription = new Subscription();
  messagesLoaded = false;

  // Verse slideshow properties
  verseImages = [
    '/Verse1.png',
    '/Verse2.png',
    '/Verse3.png'
  ];
  currentSlide = 0;
  slideInterval = 5000; // 5 seconds per slide

  constructor(public i18n: I18nService) {}

  ngOnInit() {
    // Subscribe to messages loaded status
    this.subscription.add(
      this.i18n.messagesLoaded$.subscribe(loaded => {
        this.messagesLoaded = loaded;
      })
    );

    // Start the verse slideshow
    this.startSlideshow();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSectionClick(sectionId: string): void {
    this.sectionSelected.emit(sectionId);
  }

  private startSlideshow(): void {
    this.subscription.add(
      interval(this.slideInterval).subscribe(() => {
        this.nextSlide();
      })
    );
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.verseImages.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.verseImages.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
