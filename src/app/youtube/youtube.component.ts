import {Component, OnInit} from '@angular/core';

import {YoutubeService} from './service/youtube.service';
import {ContextService} from '../shared/context.service';

import * as moment from 'moment';

@Component({
  selector: 'app-youtube-component',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})

export class YoutubeComponent implements OnInit {

  public loader: any;
  public trendingVideos: any[] = [];

  constructor(private youtubeService: YoutubeService,
              public appContext: ContextService) {
  }

  public ngOnInit() {
    this.loadVideos();
  }

  loadVideos(): void {
    this.loader = true;
    this.youtubeService.getTrendingVideos().subscribe((result: any) => {
      for (let i = 0; i < result.items.length; i++) {
        this.trendingVideos[i] = {
          id: result.items[i].id,
          title: result.items[i].snippet.title,
          thumbnail: result.items[i].snippet.thumbnails.high.url,
          publishedAt: moment(result.items[i].snippet.publishedAt).fromNow()
        };
        this.getVideoStats(i, result.items[i].id);
      }
      this.loader = false;
    });
  }

  getVideoStats(videoIndex: number, id: any): void {
    this.youtubeService.getVideoDetails(id).subscribe((result) => {
      this.trendingVideos[videoIndex].viewCount = result['items'][0].statistics.viewCount;
      this.trendingVideos[videoIndex].likeCount = result['items'][0].statistics.likeCount;
    });
  }
}
