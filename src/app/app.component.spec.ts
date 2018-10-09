import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: '',
})
class HeaderComponent {
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
