import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissedVisitPage } from './missed-visit';

@NgModule({
  declarations: [
    MissedVisitPage,
  ],
  imports: [
    IonicPageModule.forChild(MissedVisitPage),
  ],
})
export class MissedVisitPageModule {}
