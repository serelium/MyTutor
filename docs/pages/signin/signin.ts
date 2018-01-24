import { Component } from '@angular/core';
import { Loading, LoadingController, NavController} from 'ionic-angular';
import {SignUpPage} from "../signup/signup";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SignInPage {

  loading: Loading;

  constructor(private navCtrl: NavController,
              private loadingCtrl: LoadingController) {

  }

  createAccount(){

    this.navCtrl.push(SignUpPage);
  }

  signIn(){
    this.showLoading("Signing In...")
    this.navCtrl.push(TabsPage)
  }

  showLoading(message: string){
    this.loading = this.loadingCtrl.create({

      content: message,
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
