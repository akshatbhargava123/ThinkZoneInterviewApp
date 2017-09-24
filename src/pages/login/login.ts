import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';

import { LoginAuthenticatorProvider } from './../../providers/login-authenticator/login-authenticator';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private email: string = '';
  private password: string = '';

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private loginAuth: LoginAuthenticatorProvider) {
  }
  
  login() {

    let errorToast = this.toastCtrl.create({
      duration: 4000,
      showCloseButton: true,
      dismissOnPageChange: true,
      closeButtonText: 'Ok'
    });

    if (!this.isValid(this.email)) {
      errorToast.setMessage('Okay I agree this is mock app and you can enter any random email here but please atleast provide something in format of an email.');
      errorToast.present();
      return;
    }

    if (this.password.length < 8 || this.password.length > 16) {
      errorToast.present();
      errorToast.setMessage('Let it look real, enter any password my lord but 8 to 16 characters please...');
      return;
    }

    let loader = this.loadingCtrl.create({
      content: 'Please wait... (I am doing a fake login check)',
      duration: 3000,
      dismissOnPageChange: true
    });
    loader.present();
    this.loginAuth.login(this.email, this.password).then(() => {
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: `Welcome ${this.email}`,
        duration: 3000,
        dismissOnPageChange: false
      });
      toast.present();
      this.navCtrl.setRoot('TabsPage');
    });
  }

  isValid(email) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
  }

  register() {
    let funnyToast = this.toastCtrl.create({
      message: "Did you saw the toast in case of Forgot Password? No? Try it! :P",
      duration: 3000,
      dismissOnPageChange: true,
    });
    funnyToast.present();
  }

  forgotPassword() {
    let funnyToast = this.toastCtrl.create({
      message: "They doesn't work yet but we can do a deal on them! :D",
      duration: 3000,
      dismissOnPageChange: true,
    });
    funnyToast.present();
  }

}