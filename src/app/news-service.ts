import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsServiceService {
  newApiKey:string = "7c4fe5857e87417989b58790cd4213f5";
  prefixUrl:string = "https://newsapi.org/v2";

  constructor(private http: HttpClient) { }


  getGoogleNews(){
    return this.http.get(this.prefixUrl+"/top-headlines?sources=google-news-in&apiKey="+this.newApiKey);
  }

}