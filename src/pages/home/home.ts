import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {NearestStationProvider} from "../../providers/nearest-station/nearest-station";
import {ResultPage} from "../result/result";

/*interface Station {
    department: String,
    longitude: number,
    latitude: number,
    city: String,
    postalCode: number,
    region: String,
    name: String,
    howbig: String
}*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NearestStationProvider]
})

export class HomePage {
    private addressForm: FormGroup;
    private station: any;
    private resultHTML: String;
    private resultPage = ResultPage;

  constructor(public nearestStationProvider: NearestStationProvider, private formBuilder: FormBuilder, public navCtrl: NavController) {
      this.addressForm = this.formBuilder.group({
     addressInputText: ['', Validators.required]
   });
      this.resultHTML="";
  }

ionViewDidLeave() {
    this.addressForm.reset();
}

  sendAddress() {
      var address = this.addressForm.value.addressInputText;
      var correct_address = address.split(" ").join("%20");
      var url =  "https://api-garelaplusproche.herokuapp.com/nearest-station?address=" + correct_address
      console.log("Steph: " + url);
      this.nearestStationProvider.getNearestStation(url)
      .then(station => {
          console.log(station);
          this.station = station;
          this.navCtrl.push(this.resultPage, station);
         /* this.resultHTML = "Résultat: <br/>" +
          "Nom: " + this.station.name + "<br/>" +
          "Ville: " + this.station.city + "<br/>" +
          "Code postal: " + this.station.postalCode + " <br/>" +
          "Département: " + this.station.department + "<br/>" +
          "Région: " + this.station.region;*/
      });
  }
}
