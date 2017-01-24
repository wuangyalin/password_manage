import { Component } from '@angular/core';

import { NavController, AlertController,ActionSheetController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/data-service';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  records: FirebaseListObservable<any>;

  constructor(private _data: DataService,public navCtrl: NavController, public alertCtrl: AlertController, 
  public af: AngularFire,public actionSheetCtrl: ActionSheetController,private _auth: AuthService) {
    //this.records = af.database.list('/records');
  }
  ionViewWillEnter(){
    this._data.checkLogin().then((result) => {
        if(result){
          this.records = this.af.database.list('/'+result+'/records');
        }else{
          console.log("no user.uid");
        }
    });
  }
  addRecord(){
    let prompt = this.alertCtrl.create({
      title: 'Name',
      message: "Enter the type of this record will be using (website name, bank card or others)",
      inputs: [
        {
          name: 'name',
          placeholder: 'name of the website, card or others'
        },
        {
          name: 'username',
          placeholder: 'username'
        },
        {
          name: 'password',
          placeholder: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.records.push({
              name: data.name,
              username: data.username,
              password: data.password,
            });
          }
        }
      ]
    });
    prompt.present();
  }
  showOptions(recordId, recordName, recordUser,recordPass) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Delete record',
          role: 'destructive',
          handler: () => {
            this.removeRecord(recordId);
          }
        },{
          text: 'Update record',
          handler: () => {
            this.updateRecord(recordId, recordName, recordUser,recordPass);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  removeRecord(recordId: string){
    this.records.remove(recordId);
  }
  updateRecord(recordId, recordName, recordUser,recordPass){
    let prompt = this.alertCtrl.create({
      title: 'Record update',
      message: "Update information for this record",
      inputs: [
        {
          name: 'name',
          value: recordName
        },
        {
          name: 'username',
          value: recordUser
        },
        {
          name: 'password',
          value: recordPass
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.records.update(recordId, {
              name: data.name,
              username: data.username,
              password: data.password,
            });
          }
        }
      ]
    });
    prompt.present();
  }

  signOut(){
    this._auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }
}
