import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {NearestStationProvider} from "../../providers/nearest-station/nearest-station";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NearestStationProvider]
})
export class HomePage {
    private addressForm: FormGroup;
    private station: any;

  constructor(public nearestStationProvider: NearestStationProvider, private formBuilder: FormBuilder, public navCtrl: NavController) {
      this.addressForm = this.formBuilder.group({
     addressInputText: ['', Validators.required]
   });

  }

  sendAddress() {
      var address = this.addressForm.value.addressInputText;
      var correct_address = address.split(" ").join("%20");
      var url =  "https://api-garelaplusproche.herokuapp.com/nearest-station?address=" + correct_address
      console.log("Steph: " + url);
      this.nearestStationProvider.getNearestStation(url)
      .then(station => {
          this.station = station.city;
      });
  }
}
