import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  pageList: Array<{
    title: string;
    root: string;
  }>

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
    this.pageList = [
      {
        title: 'Missed Visit',
        root: 'MissedVisitPage'
      },
      {
        title: 'Pending Visit',
        root: 'PendingVisitPage'
      },
      {
        title: 'Pending Fees',
        root: null
      },
      {
        title: 'Today\'s Visit',
        root: 'TodayVisitPage'
      },
      {
        title: 'Schedule a Visit',
        root: null
      }
    ];
  }

  openPage(page) {
    if (page.root == null) {
      let errorToast = this.toastCtrl.create({
        message: `Sorry I couldn't find documentation for ${page.title} Page! Pardon me :(`,
        duration: 3000,
        showCloseButton: true,
        closeButtonText: "Okay fine"
      });
      errorToast.present();
      return;
    }
    this.navCtrl.push(page.root);
  }

}