import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewshomeComponent } from './newshome/newshome.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [NewsComponent, NewshomeComponent, SportsComponent, HealthComponent, BusinessComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule
  ]
})
export class NewsModule { }
