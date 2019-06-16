import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpScreenPage } from './otp-screen';

@NgModule({
  declarations: [
    OtpScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpScreenPage),
  ],
})
export class OtpScreenPageModule {}
