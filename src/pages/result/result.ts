import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
    private stations: any;
    private name: String;
    private city: String;
    private department: String;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
      this.stations = navParams.get('stations');
      console.log("Results: stations = " + this.stations[0].properties.commune);
      this.name = this.stations[0].properties.libelle_gare;
      this.city = this.stations[0].properties.commune;
      this.department = this.stations[0].properties.departement;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  ionViewDidLeave() {
      this.stations = [];
      this.navCtrl.pop();
  }

  openDetails(station) {
      console.log("Details of : " + station.properties.libelle_gare);
      let modal = this.modalCtrl.create(StationDetailsContentPage, {station: station});
      modal.present();
  }
}

@Component({templateUrl: './station-details.html'})
export class StationDetailsContentPage {
    station: any;

    constructor(public viewCtrl: ViewController, public navParams: NavParams) {
        console.log("I'm in details page constructor");
        this.station = this.navParams.get('station');
        console.log("This is station: ");
        console.log(this.station);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
