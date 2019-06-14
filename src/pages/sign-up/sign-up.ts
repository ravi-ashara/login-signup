import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  public signupForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.signupForm = this.formBuilder.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  signUpFunc(val: any){
    console.log(val.value);
  }

}
