import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewshomeComponent } from './newshome/newshome.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';


const routes: Routes = [
    {
      path:'',
      component:NewsComponent,
      children:[
          {
            path:'',
            component:NewshomeComponent
          },
          {
            path:'home',
            component:NewshomeComponent
          },
          {
            path:'sports',
            component:SportsComponent
          },{
            path:'health',
            component:HealthComponent
          },{
            path:'business',
            component:BusinessComponent
          }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
