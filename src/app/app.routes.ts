import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MessagePageComponent } from './components/message-page/message-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'message', component: MessagePageComponent },
  { path: 'gallery', component: GalleryComponent },
];
