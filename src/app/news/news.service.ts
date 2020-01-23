import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
   URL = "https://newsapi.org/v2/top-headlines?country=in";
   APIKEY = "5c636a468a90465aa7cab199265d7299";

  constructor(private http:HttpClient) { }

  sportsNews():Observable<any[]>{
    let url = `${this.URL}&apiKey=${this.APIKEY}&category=sport`
    return this.http.get<any[]>(url);
  }
  healthNews():Observable<any[]>{
    let url = `${this.URL}&apiKey=${this.APIKEY}&category=health`
    return this.http.get<any[]>(url);
  }
  businessNews():Observable<any[]>{
    let url = `${this.URL}&apiKey=${this.APIKEY}&category=business`
    return this.http.get<any[]>(url);
  }
}
