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
      this.name = navParams.get('name');
      this.city = navParams.get('city');
      this.department = navParams.get('department');
      this.region = navParams.get('region');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
