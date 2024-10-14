import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isBirthday: boolean = false;
  showCountdown: boolean = false;
  isMuted: boolean = false;
  private countdownInterval: any;
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio('assets/main-background-music.mp3');
    this.audio.loop = false;
  }

  ngOnInit() {
    this.startCountdown();
    this.audio.play().catch((error) => {
      console.log('Autoplay was prevented:', error);
    });
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  playMusic() {
    this.audio.play().catch((error) => {
      console.log('Failed to play music:', error);
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.audio.pause();
    } else {
      this.playMusic();
    }
  }

  private startCountdown() {
    const countDownDate = new Date('October 14, 2024 22:39:00').getTime();

    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance >= 0) {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.showCountdown = true;
      } else {
        clearInterval(this.countdownInterval);
        this.isBirthday = true;
        this.playMusic();
      }
    }, 1000);
  }
}
