/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement, EventEmitter, Component} from '@angular/core';

import { HeaderComponent } from './header.component';
import {ContextService} from "../context.service";
import {Observable} from "rxjs";
import { RouterTestingModule } from '@angular/router/testing';
import "rxjs-compat/add/observable/of";
import {appConfig} from 'appConfig';
import { YoutubeComponent } from '../../youtube/youtube.component';

@Component({
  selector: 'test-ngmodel',
  template: `<div class="dropdown col-md-7">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">Please select a country 
  <span class="caret"></span></button>
  <ul class="dropdown-menu scrollable-menu">
    <li><a (click)="search(country)" *ngFor="let country of countryList">{{country.name}}</a></li>
  </ul>
  </div>`
})
class TestDropdownComponent {
  public countryList: string [] = [];
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let context: ContextService;
  let optionDebugElement: DebugElement;
  let dropdown: DebugElement;
  let countryList;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent , YoutubeComponent],
      providers: [ContextService],
      imports: [
        RouterTestingModule.withRoutes([{path: '', component: HeaderComponent}, {path: 'youtube', component: YoutubeComponent}])
      ]
    })
    .compileComponents();
    context = TestBed.get(ContextService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    optionDebugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // fixture.detectChanges();
    // console.log(<HeaderComponent>optionDebugElement);
    // let element = optionDebugElement.query(By.css('button')).componentInstance;
    // expect(element.open).toBe(false);
  });

  // describe('# Scrolling', () => {

  //   let fixture: ComponentFixture<TestDropdownComponent>;
  //   let debugElement: DebugElement;
  //   let component: TestDropdownComponent;

  //   beforeEach(() => {
  //       TestBed.configureTestingModule({
  //           imports: [RouterTestingModule.withRoutes([{path: '', component: HeaderComponent}, {path: 'youtube', component: YoutubeComponent}])],
  //           declarations: [TestDropdownComponent]
  //       });

  //       fixture = TestBed.createComponent(TestDropdownComponent);
  //       component = fixture.componentInstance;
  //       debugElement = fixture.debugElement;
  //   });

  //   it('should maximize option list size above 15 items', () => {
  //      fixture.detectChanges();
  //     // console.log(<HeaderComponent>optionDebugElement);
  //     let element = optionDebugElement.query(By.css('button')).componentInstance;
  //     expect(element.open).toBe(false);
  //   });

  // });

});
