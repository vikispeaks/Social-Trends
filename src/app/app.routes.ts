import { Routes } from '@angular/router';
import { YoutubeComponent } from './youtube/youtube.component';
import { PlayerComponent } from './youtube/player/player.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'youtube', pathMatch: 'full'},
  {path: 'youtube', component: YoutubeComponent},
  {path: 'youtube/:videoId', component: PlayerComponent},
  {path: '**', redirectTo: ''}
];
