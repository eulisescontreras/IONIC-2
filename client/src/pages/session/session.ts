import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session';
import { User } from '../../models/user';

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

  private user: User;
  private toastOptions: ToastOptions;

  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public sessionProvider:SessionProvider) {
    this.user = new User();
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
        this.toastOptions.message = 'The user is missing!';
      }else if(!this.user.getPassword()){
        this.toastOptions.message = 'The password is missing!';
      }
      let toast = this.toastCtrl.create(this.toastOptions);
      toast.present();
    }
  }
}
