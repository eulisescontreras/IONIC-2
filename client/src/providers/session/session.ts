import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  results: string[];

  constructor(public http: HttpClient) {}

  login(user){
    this.http.get('http://localhost:3000/login').subscribe(data => {
      // Read the result field from the JSON response.
      alert("hola");
    }/*,
    err => {
      console.log("Error occured.");
    }*/);
  }
}
