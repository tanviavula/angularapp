import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'news',
    loadChildren:()=>import('./news/news.module').then(m=>m.NewsModule)
  },{
    path:'ipl2020',
    loadChildren:()=>import('./ipl2020/ipl2020.module').then(m=>m.Ipl2020Module)
  },
  {
    path:'todo',
    loadChildren:()=>import('./todo/todo.module').then(m=>m.TodoModule)
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
