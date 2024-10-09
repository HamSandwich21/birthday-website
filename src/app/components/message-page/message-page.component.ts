import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-message-page',
  standalone: true,
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css'], // Corrected the property name to styleUrls
})
export class MessagePageComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    // Initialization logic goes here (if needed)
  }

  ngOnDestroy() {
    // Cleanup logic goes here (if needed)
  }
}
