import { Injectable } from '@angular/core';
import {AuthenticationServiceService} from "src/app/service/authentication-service.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {AppUser} from '../models/AppUser';
import {Roles} from '../models/Roles';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public host: String = "http://localhost:8080";
  constructor(private authService: AuthenticationServiceService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }
}
