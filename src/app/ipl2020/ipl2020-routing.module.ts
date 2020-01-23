import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ipl2020Component } from './ipl2020.component';
import { PlayersComponent } from './players/players.component';
import { IplhomeComponent } from './iplhome/iplhome.component';


const routes: Routes = [

    {
      path:'',
      component:Ipl2020Component,
      children:[
        {
          path:'',
          component:IplhomeComponent
        },
        {
          path:'players/:teamName',
          component:PlayersComponent
        }
      ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ipl2020RoutingModule { }
