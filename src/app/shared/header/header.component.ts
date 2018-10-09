import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {appConfig} from 'appConfig';
import {ContextService} from '../context.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public selectedCountry: any;
  public countryList: any[] = appConfig.countryList;

  // Todo: implement search
  search = () => {

  };

  constructor(public appContext: ContextService) {
  }

  public selectCountry(country) {
    if (typeof country === 'object') {
      this.appContext.setCountry(country.code);
    }
  }
}
