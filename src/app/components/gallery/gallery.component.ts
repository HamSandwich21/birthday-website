import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'], // Corrected the property name to styleUrls
})
export class GalleryComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    // Initialization logic goes here (if needed)
  }

  ngOnDestroy() {
    // Cleanup logic goes here (if needed)
  }
}
