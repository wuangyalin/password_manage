import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {DataService} from '../providers/data-service';
import {AuthService} from '../providers/auth-service';

// Import the AF2 Module
import { AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyDQLUD8ptNntNYJTU7T8C51u-Suxislhz8",
    authDomain: "testionic-firebase.firebaseapp.com",
    databaseURL: "https://testionic-firebase.firebaseio.com",
    storageBucket: "testionic-firebase.appspot.com",
    messagingSenderId: "242891507029"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{mode: 'ios'}),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage,DataService,AuthService]
})
export class AppModule {}
