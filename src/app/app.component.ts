import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'birthday-website';
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isBirthday: boolean = false;
  showCountdown: boolean = false;
  loading: boolean = true; // New loading state variable
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
    const countDownDate = new Date('October 10, 2024 00:37:00').getTime();

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
        this.showCountdown = true; // Show countdown
      } else {
        clearInterval(this.countdownInterval);
        this.isBirthday = true;
      }

      this.loading = false; // Set loading to false once the countdown is updated
    }, 1000);
  }
}
