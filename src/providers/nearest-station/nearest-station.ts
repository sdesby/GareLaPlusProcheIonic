import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NearestStationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NearestStationProvider {

private http: Http;
private station;

  constructor(public _http: Http) {
    this.http = _http;
    console.log('Hello NearestStationProvider Provider');
  }

  getNearestStation(url){
      this.http.get(url)
      .map(res => res.json())
     .subscribe(data => {
         this.station = data;
     });
      console.log(this.station);
  }

}
