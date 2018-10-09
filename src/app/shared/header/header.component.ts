import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {appConfig} from 'appConfig';
import {ContextService} from '../context.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public selectedCountry = 'Please select a country';
  public countryList: any[] = appConfig.countryList;

  // Todo: implement search
  search = (country) => {
    this.selectedCountry = country.name;
    this.selectCountry(country);
    this.router.navigateByUrl('/trend/youtube');
  };

  constructor(public appContext: ContextService, private router: Router) {
  }

  public selectCountry(country) {
    if (typeof country === 'object') {
      this.appContext.setCountry(country.code);
    }
  }
}
