import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  newsItems:NewsItem[] = [];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
     this.newsService.sportsNews().subscribe(res=>{
          console.log(res["articles"]);
          this.newsItems = res["articles"];
     })
  }



}
