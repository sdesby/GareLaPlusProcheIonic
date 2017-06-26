import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    private name: String;
    private city: String;
    private department: String;
    private region: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.name = navParams.get('properties.libelle_gare');
      this.city = navParams.get('properties.commune');
      this.department = navParams.get('properties.departement');
      this.region = navParams.get('properties.region');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
