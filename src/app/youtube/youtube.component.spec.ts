/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { EventEmitter} from '@angular/core';

import {YoutubeComponent} from './youtube.component';
import {YoutubeService} from './service/youtube.service';
import {ContextService} from '../shared/context.service';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';

describe('YoutubeComponent', () => {
  let component: YoutubeComponent;
  let fixture: ComponentFixture<YoutubeComponent>;
  const service = {
    getTrendingVideos(country: string) {
      return Observable.of([]);
    }
  };
  const context = {
    country: '',
    countryChanged: new EventEmitter<string>()
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeComponent],
      imports: [RouterTestingModule],
      providers: [
        {provide: YoutubeService, useValue: service},
        {provide: ContextService, useValue: context}
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
