import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';

export interface Messages {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLanguage = 'en';
  private messages: Messages = {};
  private messagesLoaded = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.loadMessages();
  }

  private async loadMessages(): Promise<void> {
    try {
      console.log(`Loading messages for language: ${this.currentLanguage}`);
      
      // Load from the single file location in public folder
      const messages = await firstValueFrom(this.http.get<Messages>(`/${this.currentLanguage}.json`));
      
      if (messages && Object.keys(messages).length > 0) {
        this.messages = messages;
        console.log('Messages loaded successfully:', this.messages);
        this.messagesLoaded.next(true);
      } else {
        throw new Error('Empty translation file');
      }
      
    } catch (error) {
      console.error('Error loading messages:', error);
      // Provide some fallback default messages
      this.messages = {
        Apg: {
          navigation: {
            brandTitle: "Albany Prayer Group",
            brandSubtitle: "Telugu Christian Fellowship"
          }
        }
      };
      console.log('Using fallback messages:', this.messages);
      this.messagesLoaded.next(true);
    }
  }

  // Get translated text by key path (e.g., 'Apg.navigation.brandTitle')
  get(key: string): string {
    if (!this.messagesLoaded.value) {
      console.warn(`Messages not loaded yet for key: ${key}`);
      return key;
    }

    const keys = key.split('.');
    let value: any = this.messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`, 'Available top-level keys:', Object.keys(this.messages || {}));
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  }

  // Observable to know when messages are loaded
  get messagesLoaded$(): Observable<boolean> {
    return this.messagesLoaded.asObservable();
  }

  // Check if messages are loaded
  get isLoaded(): boolean {
    return this.messagesLoaded.value;
  }

  // Change language (for future use)
  async setLanguage(language: string): Promise<void> {
    this.currentLanguage = language;
    this.messagesLoaded.next(false);
    await this.loadMessages();
  }

  // Get current language
  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  // Get all messages for debugging
  getAllMessages(): Messages {
    return this.messages;
  }
}
