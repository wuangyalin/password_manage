import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import { DataService } from './data-service';
import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from 'ionic-native';


/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(private af: AngularFire, public auth$: FirebaseAuth, private _date: DataService,private platform: Platform) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState | FacebookLoginResponse> {
    if (this.platform.is('cordova')) {
      return Facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      });
    } else {
      return this.af.auth.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup
      });
    }
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }
  signOut(): void {
    this.auth$.logout();
    this._date.clearLogin();
  }

  displayName(name): string {
    if (this.authState != null) {
      if(name=="Google"){
        return this.authState.google.displayName;
      }else if(name=="Facebook"){
        return this.authState.facebook.displayName;        
      }
    } else {
      return '';
    }
  }

}
