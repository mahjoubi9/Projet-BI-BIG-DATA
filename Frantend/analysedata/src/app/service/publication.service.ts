import { Injectable } from '@angular/core';
import {AuthenticationServiceService} from "./authentication-service.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  public host: String = "http://localhost:8080";
  constructor(private authService: AuthenticationServiceService, private router: Router, private http: HttpClient) { }

  getdata(date1: string, date2: string){
    return this.http.get(this.host + "/toutPublicationavecdate/"+date1+"/"+ date2);
  }
  getdatatexttitle(){
    return this.http.get(this.host + "/getdatatexttitle");
  }
  ngOnInit(): void {

  }
}
