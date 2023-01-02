import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { logins } from '../models/logins';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  host = "http://localhost:8080";
  username: string | undefined;
  roles: Array<string> | undefined;


  constructor(private http: HttpClient, private router: Router) {
  }

  login(data:logins) {
    console.log("data in login service auth : " + data);
    return this.http.post(this.host + "/login/"+data.username, data.password);
  }

  isAdmin() {
    // @ts-ignore
    return localStorage.getItem("login")=="true";
  }
  isUser() {
    // @ts-ignore
    return localStorage.getItem("login")=="true";
  }
  isAtheticated() {
    return  localStorage.getItem("login")=="true";
  }
  Register(data: any) {
    console.log(data);
    return this.http.post(this.host + "/register", data, {observe: 'response'}); // hadi observe kadjib reponse kamla machi ghir JSON
  }
  Logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('username');
    this.router.navigate(['/login']).then();

}
  loadToken() {
    // @ts-ignore
    //this.jwt = localStorage.getItem('token');
    this.username = localStorage.getItem('username');
  }
}
