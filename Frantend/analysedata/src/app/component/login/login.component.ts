
import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from "src/app/service/authentication-service.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {logins} from "../../models/logins";
import {register} from "../../models/register";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Login: logins = new logins();
  public host = "http://192.168.0.134:8080";
  Register: register = new register();
  constructor(private authService: AuthenticationServiceService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  onLogin() {
    console.log(this.Login);
    this.authService.login(this.Login).subscribe((resp: any) => {
      console.log("resp");
      console.log(resp);
      console.log("resp");
      localStorage.setItem("login",resp);
      if(resp==true){
        localStorage.setItem('username',this.Login.username);
        this.router.navigate(['/home']).then();
      }


    }, (error: any) => {
      console.log(error);
    });

    // this.router.navigateByUrl("/ConfirmAdressUser");

  }
  isAdmin() {
    return this.authService.isAdmin();
  }
  isUser() {
    return this.authService.isUser();
  }


  register() {
    window.location.href = 'register';
  }
  onRegister() {
    console.log(this.Register);
    this.authService.Register(this.Register).subscribe((resp: any) => {
      console.log(resp);
      this.router.navigate(['/login']).then();
    }, (error: any) => {
      console.log(error);
    });


    // this.router.navigateByUrl("/login");

  }
}


