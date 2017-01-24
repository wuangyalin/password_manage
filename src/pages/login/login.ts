import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFire } from 'angularfire2';
import { HomePage } from '../home/home';
import { DataService } from '../../providers/data-service';
import { AuthService } from '../../providers/auth-service';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [
    //For the logo
    trigger('logoState', [
      state('logoIn', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,1500px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),
    trigger('buttonState', [
      state('buttonIn', style({
         opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ]),
  ]
})
export class LoginPage {
  
  constructor(private _data: DataService,public af: AngularFire,public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,private _auth: AuthService) {
      this._data.checkLogin().then((result) => {
        if(result){
          this.navCtrl.setRoot(HomePage);
        }else{
          this.af.auth.subscribe(user =>{
            if(user){
              this._data.saveLogin(user.uid);
              this.navCtrl.setRoot(HomePage);
            }      
          });
        }
      });
  }

  createAccount(){
    this.navCtrl.push(RegisterPage,{});
  }
  signInWithGoogle(){
    this._auth.signInWithGoogle()
      .then(() => this.onSignInSuccess("Google"));
  }
  signInWithFacebook(): void{
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess("Facebook"));
  }

  private onSignInSuccess(name): void {

    console.log("Display name ",this._auth.displayName(name));
  }
  signInWithTwitter(){
    //todo
    this.doAlert('Twitter');
  }
  signInWithEmail(){
    //todo
    this.doAlert('Email');
  }

 doAlert(value: string) {
    let alert = this.alertCtrl.create({
      title: 'Hey',
      message: 'write your own method to login with '+value,
      buttons: ['Ok']
    });
    alert.present();
  }

}
