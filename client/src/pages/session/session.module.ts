import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionPage } from './session';
import { SessionProvider } from '../../providers/session/session';

@NgModule({
  declarations: [
    SessionPage,
  ],
  imports: [
    IonicPageModule.forChild(SessionPage),
  ],
  providers: [
    SessionProvider
  ]
})
export class SessionPageModule {}
