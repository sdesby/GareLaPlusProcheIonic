import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NearestStationProvider {

    private http: Http;
    private station: any;
    private previousUrl: String;

    constructor(public _http: Http) {
        this.http = _http;
    }

    getNearestStation(url) {
        if (this.previousUrl === url && this.station) {
            return Promise.resolve(this.station);
        }

        // Dont have the data yet
        return new Promise((resolve, reject) => {
            this.previousUrl = url;
            this.http.get(url)
                .map(res => res.json())
                .subscribe(data => {
                    this.station = data;
                    console.log("NearestStationProvider: data fetched");
                    resolve(this.station);
                },
                err => {
                    reject(err);
                }
            );
        })
    }
}
