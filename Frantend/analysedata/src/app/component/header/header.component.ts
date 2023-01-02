import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from "src/app/service/authentication-service.service";
import {UserService} from "src/app/service/user.service";
import {HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //iddrouter;

  constructor(private authService: AuthenticationServiceService, private usersService: UserService, private router: Router,  private route: ActivatedRoute) {
    if(localStorage.getItem("login")=="false"){
      this.router.navigate(['/login']).then();
      localStorage.removeItem('login');
    }
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {


        const url1 =  this.route.snapshot.url.pop();
       // this.iddrouter = url1;
        // route.snapshot.url.push();
        // hadi ana drtha hitach hadi this.route.snapshot.params.urlProds  mabghatch tghdam liai

      }
    });
  }
  ngOnInit(): void {
    this.authService.loadToken();
    //  this.selectImmobilier(this.id);
    // this.getallCartUser();
  }
  isAdmin() {
    return this.authService.isAdmin();
  }
  isUser() {
    return this.authService.isUser();
  }
  isAtheticated() {
    // console.log("isAtheticated est "+ this.authService.isAtheticated())
    return this.authService.isAtheticated();
  }
  Logout() {
    this.authService.Logout();
  }
  }


