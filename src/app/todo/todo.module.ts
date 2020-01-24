import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodohomeComponent } from './todohome/todohome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MintextPipe } from './mintext.pipe';


@NgModule({
  declarations: [TodoComponent, TodohomeComponent,MintextPipe],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers:[MintextPipe]
})
export class TodoModule { }
