import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit, OnDestroy {
  private audio: HTMLAudioElement;
  public image1: string;
  public image2: string;
  public image3: string;
  public image4: string;
  public image5: string;
  public image6: string;
  public image7: string;
  public image8: string;
  isMuted: boolean = false;

  constructor() {
    this.audio = new Audio('assets/gallery-background-music.mp3');
    this.audio.loop = false;
    this.image1 = `${environment.baseUrl}/assets/Image 1.jpg`;
    this.image2 = `${environment.baseUrl}/assets/Image 2.jpg`;
    this.image3 = `${environment.baseUrl}/assets/Image 3.jpg`;
    this.image4 = `${environment.baseUrl}/assets/Image 4.jpg`;
    this.image5 = `${environment.baseUrl}/assets/Image 5.jpg`;
    this.image6 = `${environment.baseUrl}/assets/Image 6.jpg`;
    this.image7 = `${environment.baseUrl}/assets/Image 7.jpg`;
    this.image8 = `${environment.baseUrl}/assets/Image 8.jpg`;
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
