import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NearestStationProvider {

private http: Http;
private station: any;

  constructor(public _http: Http) {
    this.http = _http;
    console.log('Hello NearestStationProvider Provider');
  }

  getNearestStation(url) {
      if (this.station) {
      return Promise.resolve(this.station);
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.station = data;
          console.log("tada!");
          console.log(data.city);
          resolve(this.station);
        });
    });
  }
}
