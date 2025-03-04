import { Component, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  typingText: string = ''; 
  fullText: string = 'Olá! Seja bem-vindo!';
  typingSpeed: number = 100;
  deleteSpeed: number = 50;
  resetDelay: number = 8000;
  profile?: Profile;

  constructor(@Inject(PLATFORM_ID) private platformId: object, 
  private profileService: ProfileService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.typeWriter(), 500);
    }
  }

  typeWriter(): void {
    if (this.typingText.length < this.fullText.length) {
      this.typingText += this.fullText[this.typingText.length];
      setTimeout(() => this.typeWriter(), this.typingSpeed);
    } else {
      setTimeout(() => this.deleteText(), this.resetDelay);
    }
  }

  deleteText(): void {
    if (this.typingText.length > 0) {
      this.typingText = this.typingText.slice(0, -1);
      setTimeout(() => this.deleteText(), this.deleteSpeed);
    } else {
      setTimeout(() => this.typeWriter(), 1000);
    }
  }

  ngOnDestroy(): void {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}
