import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pending-visit',
  templateUrl: 'pending-visit.html',
})
export class PendingVisitPage {

  teachersList: Array<{
    name: string;
    date: string;
    contactNumber: number;
    isPendingVisit: boolean;
  }>;

  constructor(public navCtrl: NavController) {
    // Will receive data from api here but for now hardcoding
    this.teachersList = [
      {
        name: "teacher1Name",
        date: "21-Sep-17",
        contactNumber: 1234567891,
        isPendingVisit: false
      },
      {
        name: "teacher2Name",
        date: "23-Aug-17",
        contactNumber: 1591591597,
        isPendingVisit: false
      },
      {
        name: "teacher3Name",
        date: "26-Sep-17",
        contactNumber: 1236547892,
        isPendingVisit: true
      },
      {
        name: "teacher4Name",
        date: "21-Sep-19",
        contactNumber: 9984759628,
        isPendingVisit: false
      }
    ];
  }

}
