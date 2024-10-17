import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Ensure the correct path
import { appConfig } from './app/app.config'; // Import your appConfig

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
