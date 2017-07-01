import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NearestStationProvider } from "../../providers/nearest-station/nearest-station";
import { ResultPage } from "../result/result";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [NearestStationProvider]
})

export class HomePage {
    private addressForm: FormGroup;
    private station: any;
    private resultPage = ResultPage;
    private error: string;

    constructor(public nearestStationProvider: NearestStationProvider, private formBuilder: FormBuilder, public navCtrl: NavController) {
        this.addressForm = this.formBuilder.group({
            addressInputText: ['', Validators.required],
            maxdistance: []
        });
    }

    ionViewDidLeave() {
        this.addressForm.reset();
        this.error= "";
    }

    sendAddress() {
        this.error = "";
        var address = this.addressForm.value.addressInputText;
        var maxdistance = this.addressForm.value.maxdistance;
        if (maxdistance == null) {
            this.error = "Veuillez entrer un rayon de recherche";
            return;
        }
        var correct_address = address.split(" ").join("%20");
        var url = "https://api-garelaplusproche.herokuapp.com/nearest-station?address=" + correct_address + "&maxdistance=" + maxdistance;
        this.nearestStationProvider.getNearestStation(url)
            .then(station => {
                console.log("Station::");
                console.log(station);
                if(station.length == 0) {
                    this.error = "Aucun résultat trouvé avec ces critères de recherche"
                    return;
                }
                this.station = station;
                this.navCtrl.push(this.resultPage, { stations: this.station });
            })
            .catch(err => {
                console.log("Hola! You're entering in error treatment");
                if (err.statusText == "") {
                    console.log("StatusText is empty");
                    this.error = "Unexpected error. Make sure WiFi is on.";
                    //When the device is not connected on the internet the response error is -1 (or any number) and the statusText is empty. So we caching that one as-well.
                }
                else {
                    console.log("Status is :: " + err.status);
                    if (err.status === "404") {
                        this.error = "ERREUR: Aucun résultat pour cette adresse"
                    }
                    else if (err.status === "400") {
                        this.error = "ERREUR: Aucun résultat pour cette adresse"
                    }
                    else if (err.status === "500") {
                        this.error = "ERREUR: Impossible d'effectuer la recherche pour le moment, veuillez réessayer plus tard."
                    }
                    else {
                        this.error = "Error - " + err.status + " (" + err.statusText + ")";
                        //else we display the error along with the status, for example error 500 Internal Server error.
                    }
                }
            });
        }
}
