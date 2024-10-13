import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-message-page',
  standalone: true,
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css'],
})
export class MessagePageComponent implements OnInit, OnDestroy {
  private audio: HTMLAudioElement;
  isMuted: boolean = false;

  constructor() {
    this.audio = new Audio('assets/message-background-music.mp3'); // Add the path to your music file
    this.audio.loop = true; // Ensure the audio loops
  }

  ngOnInit() {
    this.playMusic();
  }

  ngOnDestroy() {
    this.audio.pause();
    this.audio.currentTime = 0; // Reset audio position
  }

  playMusic() {
    if (!this.isMuted) {
      this.audio.play().catch((error) => {
        console.log('Failed to play music:', error);
      });
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.audio.pause(); // Pause music
    } else {
      this.playMusic(); // Play music
    }
  }
}
