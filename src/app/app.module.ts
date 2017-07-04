import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ResultPage} from '../pages/result/result';
import {StationDetailsContentPage} from "../pages/result/result";
import { NearestStationProvider } from '../providers/nearest-station/nearest-station';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultPage,
    StationDetailsContentPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultPage,
    StationDetailsContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NearestStationProvider
  ]
})
export class AppModule {}
