import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session';
import { User } from '../../models/user';
import { AppConst } from '../../AppConst';

/**
 * Generated class for the SessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class SessionPage {

  private user: User = new User();
  private toastOptions: ToastOptions;

  constructor(private toastController: ToastController, public navCtrl: NavController, public navParams: NavParams, public sessionProvider:SessionProvider) {
    this.toastOptions = {
      duration: 1000,
      position: 'middle'
    };
  }

  login() {
    if(this.user.getUsername() && this.user.getPassword()){
      this.sessionProvider.login(this.user);
    }
    else{
      if(!this.user.getUsername()){
        this.toastOptions.message = this.sessionProvider.const.USER_MISING;
      }else if(!this.user.getPassword()){
        this.toastOptions.message = this.sessionProvider.const.PASSWORD_MISING;
      }
      let toast = this.toastController.create(this.toastOptions);
      toast.present();
    }
  }
}
