import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit, OnDestroy {
  private audio: HTMLAudioElement;
  isMuted: boolean = false;

  constructor() {
    this.audio = new Audio('assets/gallery-background-music.mp3');
    this.audio.loop = true;
  }

  ngOnInit() {
    this.playMusic();
  }

  ngOnDestroy() {
    this.audio.pause();
    this.audio.currentTime = 0;
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
      this.audio.pause();
    } else {
      this.playMusic();
    }
  }
}
