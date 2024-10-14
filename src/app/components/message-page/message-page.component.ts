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
  currentPage: number = 0; // To track the current page index

  // Array of messages to display
  messages: Array<{ title: string; content: string }> = [
    {
      title: 'To my wonderful wife',
      content: `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo.`,
    },
    {
      title: 'Happy Birthday!',
      content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    {
      title: 'You are the best!',
      content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.`,
    },
    // Add more messages as needed
  ];

  constructor() {
    this.audio = new Audio('assets/message-background-music.mp3');
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

  // Navigate to the next page
  nextPage() {
    if (this.currentPage < this.messages.length - 1) {
      this.currentPage++;
    }
  }

  // Navigate to the previous page
  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
