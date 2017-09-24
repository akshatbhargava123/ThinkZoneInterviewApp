import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingVisitPage } from './pending-visit';

@NgModule({
  declarations: [
    PendingVisitPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingVisitPage),
  ],
})
export class PendingVisitPageModule {}
