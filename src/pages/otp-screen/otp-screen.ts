import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
/**
 * Generated class for the OtpScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-screen',
  templateUrl: 'otp-screen.html',
})
export class OtpScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('param'))
  }

  otpController(event: any, next: any, prev: any) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }
  public otpArray:any = [];
  sendOTP(){
    $('input[type=hidden][name=hiddenOTP]').each((i:any ,val:any) => {
      this.otpArray.push(val.value);
    });
    console.log(this.otpArray.toString().replace(/,/g,''));
    this.navCtrl.setRoot('LoginPage');
  }
}
