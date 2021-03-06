webpackJsonp([0],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(_data, navCtrl, alertCtrl, af, actionSheetCtrl, _auth) {
        this._data = _data;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.actionSheetCtrl = actionSheetCtrl;
        this._auth = _auth;
        //this.records = af.database.list('/records');
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._data.checkLogin().then(function (result) {
            if (result) {
                _this.records = _this.af.database.list('/' + result + '/records');
            }
            else {
                console.log("no user.uid");
            }
        });
    };
    HomePage.prototype.addRecord = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.records.push({
                            name: data.name,
                            username: data.username,
                            password: data.password,
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.showOptions = function (recordId, recordName, recordUser, recordPass) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'Delete record',
                    role: 'destructive',
                    handler: function () {
                        _this.removeRecord(recordId);
                    }
                }, {
                    text: 'Update record',
                    handler: function () {
                        _this.updateRecord(recordId, recordName, recordUser, recordPass);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.removeRecord = function (recordId) {
        this.records.remove(recordId);
    };
    HomePage.prototype.updateRecord = function (recordId, recordName, recordUser, recordPass) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.records.update(recordId, {
                            name: data.name,
                            username: data.username,
                            password: data.password,
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.signOut = function () {
        this._auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/luke/Documents/GitHub/password_manage/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Password Manage\n    </ion-title>\n    <ion-buttons begin>\n      <button ion-button icon-only (click)="addRecord()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="signOut()">\n        logout\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let record of records | async" (click)="showOptions(record.$key, record.name,record.username,record.password)">\n      <ion-avatar item-left>\n        <i class="icon iconfont icon-yinxingqiaguanli"></i>\n      </ion-avatar>\n      <h2><strong>{{record.name}}</strong></h2>\n      <h3><strong>Username:   </strong>{{record.username}}</h3>\n      <h3><strong>Password:   </strong>{{record.password}}</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/luke/Documents/GitHub/password_manage/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = (function () {
    function LoginPage(_data, af, navCtrl, navParams, alertCtrl, _auth) {
        var _this = this;
        this._data = _data;
        this.af = af;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._auth = _auth;
        this._data.checkLogin().then(function (result) {
            if (result) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
            else {
                _this.af.auth.subscribe(function (user) {
                    if (user) {
                        _this._data.saveLogin(user.uid);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                });
            }
        });
    }
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], {});
    };
    LoginPage.prototype.signInWithGoogle = function () {
        var _this = this;
        this._auth.signInWithGoogle()
            .then(function () { return _this.onSignInSuccess("Google"); });
    };
    LoginPage.prototype.signInWithFacebook = function () {
        var _this = this;
        this._auth.signInWithFacebook()
            .then(function () { return _this.onSignInSuccess("Facebook"); });
    };
    LoginPage.prototype.onSignInSuccess = function (name) {
        console.log("Display name ", this._auth.displayName(name));
    };
    LoginPage.prototype.signInWithTwitter = function () {
        //todo
        this.doAlert('Twitter');
    };
    LoginPage.prototype.signInWithEmail = function () {
        //todo
        this.doAlert('Email');
    };
    LoginPage.prototype.doAlert = function (value) {
        var alert = this.alertCtrl.create({
            title: 'Hey',
            message: 'write your own method to login with ' + value,
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/luke/Documents/GitHub/password_manage/src/pages/login/login.html"*/'<ion-content>\n  <div [@logoState]="logoIn" class="logo">\n    <span>Logo Here</span>\n  </div> \n\n  <div [@buttonState]="buttonIn" class="social_buttons">\n    <ion-row>\n      <button (click)="signInWithGoogle()" class="google_button">\n        <ion-icon name="logo-googleplus"></ion-icon>\n        Login With Google+\n      </button>\n    </ion-row>\n    <ion-row>\n      <button (click)="signInWithFacebook()" class="facebook_button">\n        <ion-icon name="logo-facebook"></ion-icon>\n        Login With FaceBook\n      </button>\n    </ion-row>\n    <ion-row>\n      <span class="text">Do not have account?</span>\n    </ion-row>\n    <ion-row>\n<!--       <button ion-button (click)="login()" class="login_button" color="dark" clear>Log In</button>\n -->      <button ion-button class="signin_button" color="dark" (click)="createAccount()" clear>Sign In</button>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/luke/Documents/GitHub/password_manage/src/pages/login/login.html"*/,
            animations: [
                //For the logo
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('logoState', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('logoIn', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                        transform: 'translate3d(0,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,1500px,0' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('2000ms ease-in-out')
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('buttonState', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('buttonIn', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('1000ms 2000ms ease-in')
                    ])
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_5__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_native__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AuthService = (function () {
    function AuthService(af, auth$, _date, platform) {
        var _this = this;
        this.af = af;
        this.auth$ = auth$;
        this._date = _date;
        this.platform = platform;
        this.authState = auth$.getAuth();
        auth$.subscribe(function (state) {
            _this.authState = state;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signInWithFacebook = function () {
        if (this.platform.is('cordova')) {
            return __WEBPACK_IMPORTED_MODULE_4_ionic_native__["a" /* Facebook */].login(['email', 'public_profile']).then(function (res) {
                var facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                return firebase.auth().signInWithCredential(facebookCredential);
            });
        }
        else {
            return this.af.auth.login({
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthProviders */].Facebook,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup
            });
        }
    };
    AuthService.prototype.signInWithGoogle = function () {
        if (this.platform.is('cordova')) {
            console.log("enter cordova");
            __WEBPACK_IMPORTED_MODULE_4_ionic_native__["b" /* GooglePlus */].login({
                'webClientId': '241491334119-13v0dhgmisnuglcktkajhoams3tbdaof.apps.googleusercontent.com'
            }).then(function (res) {
                var googlePlusCredential = firebase.auth.GoogleAuthProvider.credential(res.authResponse.accessToken);
                return firebase.auth().signInWithCredential(googlePlusCredential);
            });
        }
        else {
            return this.auth$.login({
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthProviders */].Google,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup
            });
        }
    };
    AuthService.prototype.signOut = function () {
        this.auth$.logout();
        this._date.clearLogin();
    };
    AuthService.prototype.displayName = function (name) {
        if (this.authState != null) {
            if (name == "Google") {
                return this.authState.google.displayName;
            }
            else if (name == "Facebook") {
                return this.authState.facebook.displayName;
            }
        }
        else {
            return '';
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* FirebaseAuth */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 246;

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = (function () {
    function RegisterPage(data, alertCtrl, formBuilder, navCtrl, navParams) {
        this.data = data;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            userName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
    };
    RegisterPage.prototype.logForm = function (form) {
        console.log(form.value.email);
        this.data.saveLogin(form.value.email);
        this.doAlert();
    };
    RegisterPage.prototype.doAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Congulations',
            subTitle: 'You have successfully created your account!!',
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                }]
        });
        alert.present(alert);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/luke/Documents/GitHub/password_manage/src/pages/register/register.html"*/'<!--\n  Generated template for the Register page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <form [formGroup]="form" (ngSubmit)="logForm(form)">\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input formControlName="email" type="text"></ion-input>\n        </ion-item>\n \n        <ion-item>\n            <ion-label floating>UserName</ion-label>\n            <ion-input formControlName="userName" type="text"></ion-input>\n        </ion-item>\n \n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <ion-item>\n          <button ion-button type="submit" [disabled]="!form.valid">Submit</button>\n        </ion-item>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/luke/Documents/GitHub/password_manage/src/pages/register/register.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(585);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyDQLUD8ptNntNYJTU7T8C51u-Suxislhz8",
    authDomain: "testionic-firebase.firebaseapp.com",
    databaseURL: "https://testionic-firebase.firebaseio.com",
    storageBucket: "testionic-firebase.appspot.com",
    messagingSenderId: "242891507029"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { mode: 'ios' }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["b" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__["a" /* AuthService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, data) {
        var _this = this;
        data.checkLogin().then(function (result) {
            if (result) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        });
        platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["d" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* Splashscreen */].hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"/Users/luke/Documents/GitHub/password_manage/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/luke/Documents/GitHub/password_manage/src/app/app.html"*/,
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_data_service__["a" /* DataService */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(storage) {
        this.storage = storage;
    }
    //check whether user has been logged in 
    DataService.prototype.checkLogin = function () {
        return this.storage.get('login');
    };
    //when user logged in, save the value in local device
    DataService.prototype.saveLogin = function (value) {
        this.storage.set('login', value);
    };
    DataService.prototype.clearLogin = function () {
        this.storage.clear();
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */]])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=data-service.js.map

/***/ })

},[488]);
//# sourceMappingURL=main.js.map