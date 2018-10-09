import { Routes } from '@angular/router';
import { YoutubeComponent } from './youtube/youtube.component';
import { PlayerComponent } from './youtube/player/player.component';
import { TrendComponent } from './trend/trend.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'trend', pathMatch: 'full'},
  {path: 'trend', component: TrendComponent, children: [
    {
      path: '',
      component: YoutubeComponent
    },
    {
      path: 'youtube',
      component: YoutubeComponent
    },
    {
      path: 'youtube/:videoId', 
      component: PlayerComponent
    }
  ]},
  {path: '**', redirectTo: ''}
];
