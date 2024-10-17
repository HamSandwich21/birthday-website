import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app/app.routes';
import { APP_BASE_HREF } from '@angular/common';

platformBrowserDynamic()
  .bootstrapModule(AppRoutingModule, {
    providers: [{ provide: APP_BASE_HREF, useValue: '/birthday-website/' }],
  })
  .catch((err) => console.error(err));
