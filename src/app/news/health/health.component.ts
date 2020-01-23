import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  newsItems:NewsItem[] = [];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
     this.newsService.healthNews().subscribe(res=>{
          console.log(res["articles"]);
          this.newsItems = res["articles"];
     })
  }
}
