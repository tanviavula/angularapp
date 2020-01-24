import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodohomeComponent } from './todohome/todohome.component';


const routes: Routes = [
{
  path:'',
  children:[
      {
        path:'',
        component:TodohomeComponent
      }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
