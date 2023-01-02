import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './component/home/home.component';
import {CardComponent} from "./component/card/card.component";
import {ChartbarComponent} from "./component/chartbar/chartbar.component";
import {ChartpieComponent} from "./component/chartpie/chartpie.component";
import {WordCloudComponent} from "./component/word-cloud/word-cloud.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'card', component: CardComponent
  },
  {
    path: 'chartbar', component: ChartbarComponent
  },
  {
    path: 'chartpie', component: ChartpieComponent
  },
  {
    path: 'WordCloud', component: WordCloudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
