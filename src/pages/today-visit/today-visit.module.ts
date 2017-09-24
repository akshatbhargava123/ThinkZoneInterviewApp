import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayVisitPage } from './today-visit';

@NgModule({
  declarations: [
    TodayVisitPage,
  ],
  imports: [
    IonicPageModule.forChild(TodayVisitPage),
  ],
})
export class TodayVisitPageModule {}
