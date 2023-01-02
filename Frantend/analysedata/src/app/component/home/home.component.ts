import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http: HttpClient, private router: Router) {
  }
ngOnInit() {
    if(localStorage.getItem("login")=="false"){
      this.router.navigate(['/login']).then();
      localStorage.removeItem('login');
    }
    const target = document.querySelector('.typed')

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white'
    })

    writer
      .type('WE ARE ')
      .rest(500)
      .changeOps({deleteSpeed: 80})
      //.remove(4)
      .type(' FLEXIBLE')
      .rest(500)
      .remove(9)
      .type(' COMMITTED')
      // .rest(500)
      // .changeOps({deleteSpeed: 20})
      //$ .remove(6)
      // .type('engineer')
      .rest(500)
      .changeOps({deleteSpeed: 20})
      .remove(10)
      .type(' PROACTIVE')
      .rest(500)
      .remove(10)
      .type(' FLEXIBLE & COMMITTED & PROACTIVE')
      .rest(500)
      .clear()
      .start()
  }
}
