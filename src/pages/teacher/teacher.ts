import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage {

  teachersList: Array<{
    name: string;
    date: string;
    contactNumber: number;
  }>;

  constructor(public navCtrl: NavController) {
    // Will receive data from api here but for now hardcoding
    this.teachersList = [
      {
        name: "teacher1Name",
        date: "25-Sep-17",
        contactNumber: 1234567891
      },
      {
        name: "teacher2Name",
        date: "21-Aug-17",
        contactNumber: 1591591597
      },
      {
        name: "teacher3Name",
        date: "22-Sep-17",
        contactNumber: 1236547892
      },
      {
        name: "teacher4Name",
        date: "28-Sep-19",
        contactNumber: 9984759628
      },
      {
        name: "teacher5Name",
        date: "21-Aug-17",
        contactNumber: 1591591597
      },
      {
        name: "teacher6Name",
        date: "22-Sep-17",
        contactNumber: 1236547892
      },
      {
        name: "teacher7Name",
        date: "28-Sep-19",
        contactNumber: 9984759628
      }
    ];
  }

}
