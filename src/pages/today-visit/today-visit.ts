import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-today-visit',
  templateUrl: 'today-visit.html',
})
export class TodayVisitPage {

  teachersList: Array<{
    name: string;
    date: string;
    contactNumber: number;
    isTodayVisit: boolean;
  }>;

  constructor(public navCtrl: NavController) {
    // Will receive data from api here but for now hardcoding
    this.teachersList = [
      {
        name: "teacher1Name",
        date: "25-Sep-17",
        contactNumber: 1234567891,
        isTodayVisit: false
      },
      {
        name: "teacher2Name",
        date: "21-Aug-17",
        contactNumber: 1591591597,
        isTodayVisit: false
      },
      {
        name: "teacher3Name",
        date: "22-Sep-17",
        contactNumber: 1236547892,
        isTodayVisit: true
      },
      {
        name: "teacher4Name",
        date: "28-Sep-19",
        contactNumber: 9984759628,
        isTodayVisit: true
      }
    ];
  }

}
