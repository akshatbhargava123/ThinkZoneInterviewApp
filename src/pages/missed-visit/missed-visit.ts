import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-missed-visit',
  templateUrl: 'missed-visit.html',
})
export class MissedVisitPage {

  teachersList: Array<{
    name: string;
    date: string;
    contactNumber: number;
    missedVisit: boolean;
  }>;

  constructor(public navCtrl: NavController) {
    // Will receive data from api here but for now hardcoding
    this.teachersList = [
      {
        name: "teacher1Name",
        date: "21-Sep-17",
        contactNumber: 1234567891,
        missedVisit: true
      },
      {
        name: "teacher2Name",
        date: "23-Aug-17",
        contactNumber: 1591591597,
        missedVisit: false
      },
      {
        name: "teacher3Name",
        date: "26-Sep-17",
        contactNumber: 9984759628,
        missedVisit: true
      },
      {
        name: "teacher4Name",
        date: "21-Sep-19",
        contactNumber: 1236547892,
        missedVisit: true
      }
    ];
  }

}
