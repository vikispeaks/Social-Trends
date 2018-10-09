import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public embedUrl: string;
  public videoLoader: boolean;

  constructor() {
  }

  public ngOnInit() {
    const id = window.location.href
      .replace(/^.*\//g, '')
      .replace(/^.*\..*/g, '');

    if (!id.length) {
      return;
    }

    this.videoLoader = true;
    this.embedUrl = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
  }

  /* On video ready hide loader */
  public loadVideo(): void {
    this.videoLoader = false;
  }

}
