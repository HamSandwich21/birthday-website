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
  loading: boolean = true;
  private countdownInterval: any;

  constructor() {}

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private startCountdown() {
    const countDownDate = new Date('October 10, 2024 13:20:00').getTime();

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
      }

      this.loading = false;
    }, 1000);
  }
}
