import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  newsItems:NewsItem[] = [];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
     this.newsService.businessNews().subscribe(res=>{
          console.log(res["articles"]);
          this.newsItems = res["articles"];
     })
  }

}
