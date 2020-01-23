import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ipl2020RoutingModule } from './ipl2020-routing.module';
import { Ipl2020Component } from './ipl2020.component';
import { PlayersComponent } from './players/players.component';
import { IplhomeComponent } from './iplhome/iplhome.component';


@NgModule({
  declarations: [Ipl2020Component, PlayersComponent, IplhomeComponent],
  imports: [
    CommonModule,
    Ipl2020RoutingModule
  ]
})
export class Ipl2020Module { }
