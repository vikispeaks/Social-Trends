import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class ContextService {
  public country: string;
  public countryChanged: EventEmitter<string> = new EventEmitter<string>();

  public setCountry(country) {
    this.country = country;
    this.countryChanged.emit(this.country);
  }

  public getCountry() {
    return this.country;
  }
}
