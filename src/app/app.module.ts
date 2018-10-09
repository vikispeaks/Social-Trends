import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {
  NgbTypeaheadConfig,
  NgbTypeaheadModule,
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {MomentModule} from 'angular2-moment';

import { ROUTES } from './app.routes';
import {AppComponent} from './app.component';
import {ContextService} from './shared/context.service';
import {HeaderComponent} from './shared/header/header.component';
import {YoutubeComponent} from './youtube/youtube.component';
import {YoutubeService} from './youtube/service/youtube.service';
import {PlayerComponent} from './youtube/player/player.component';
import {TrendComponent} from './trend/trend.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YoutubeComponent,
    PlayerComponent,
    TrendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload'
    }),
    NgbTypeaheadModule,
    NgbModule
  ],
  providers: [NgbTypeaheadConfig, ContextService, YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
