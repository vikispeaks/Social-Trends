import {Component, OnInit, OnDestroy} from '@angular/core';

import {YoutubeService} from './service/youtube.service';
import {ContextService} from '../shared/context.service';

import * as moment from 'moment';
import { forEach } from '@angular/router/src/utils/collection';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-youtube-component',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})

export class YoutubeComponent implements OnInit, OnDestroy {

  public loader = false;
  public trendingVideos: any[] = [];
  private navigationSubscription;

  constructor(private youtubeService: YoutubeService, public appContext: ContextService, private router: Router) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.assignCountry();
      }
    });
  }

  public ngOnInit() {
    this.assignCountry();
  }

  private assignCountry() {
    // Set default values and re-fetch any data you need.
    const country = this.appContext.getCountry();
    (country) ? this.loadVideos(country) : this.loadVideos('US');
  }

  loadVideos(country): void {
    this.loader = true;
    this.youtubeService.getTrendingVideos(country).subscribe((result: any) => {
      result.items.forEach((item, i) => {
        this.trendingVideos[i] = {
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: moment(item.snippet.publishedAt).fromNow()
        };
        this.getVideoStats(i, item.id);
      });
    });
    this.loader = false;
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
  }

  getVideoStats(videoIndex: number, id: any): void {
    this.youtubeService.getVideoDetails(id).subscribe((result) => {
      const stats = result['items'][0].statistics;
      const trends = this.trendingVideos[videoIndex];
      trends.viewCount = stats.viewCount;
      trends.likeCount = stats.likeCount;
    });
  }
}
