import {Component, OnInit} from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public embedUrl: SafeResourceUrl;
  public videoLoader = false;

  constructor(private sanitizer: DomSanitizer) {
  }

  public ngOnInit() {
    const id = window.location.href
      .replace(/^.*\//g, '')
      .replace(/^.*\..*/g, '');

    if (!id.length) {
      return;
    }

    this.videoLoader = true;
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id + '?autoplay=1');
  }

  /* On video ready hide loader */
  public loadVideo(): void {
    this.videoLoader = false;
  }

}
