import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  Tabs: Array<{
    title: string;
    icon: string;
    root: string;
  }>;

  constructor() {
    this.Tabs = [
      {
        title: 'Home',
        icon: 'home',
        root: 'HomePage'
      },
      {
        title: 'Teacher',
        icon: 'person',
        root: 'TeacherPage'
      }
    ];
  }

}
