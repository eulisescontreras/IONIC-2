import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from 'ionic-angular';
import { AppConst } from '../../AppConst';
/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  private toastOptions: ToastOptions;
  public const: AppConst = new AppConst();

  constructor(public http: HttpClient, public toastController:ToastController) {
    this.toastOptions = {
      duration: 1000,
      position: 'middle',
      message: this.const.ERROR_SERVER
    };
  }

  login(user){
    this.http.get(this.const.URL_SERVER_LOGIN).subscribe(
      data => {
        // Read the result field from the JSON response.
        alert(data);
      },  
      err => {
        let toast = this.toastController.create(this.toastOptions);
        toast.present();        
      });
  }
}
