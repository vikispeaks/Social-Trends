import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {appConfig} from 'appConfig';

import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';


@Injectable()
export class YoutubeService {

  constructor(private http: HttpClient) {
  }

  public getTrendingVideos(countryCode) {
    let params = new HttpParams();
    params = params.append('part', 'snippet');
    params = params.append('chart', 'mostPopular');
    params = params.append('regionCode', countryCode); // should be replaced with country code from countryList
    params = params.append('maxResults', '24');
    params = params.append('key', appConfig.youtubeApiKey);

    return this.http.get(appConfig.youtubeEndPoint, {params})
      .pipe(
        catchError(this.handleError('getTrendingVideos', []))
      );
  }

  public getVideoDetails(videoId: string) {
    let params = new HttpParams();
    params = params.append('part', 'statistics');
    params = params.append('id', videoId);
    params = params.append('key', appConfig.youtubeApiKey);

    return this.http.get(appConfig.youtubeEndPoint, {params})
      .pipe(
        catchError(this.handleError('getVideoDetails', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
