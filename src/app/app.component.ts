import { Component } from '@angular/core';
import {NewsServiceService} from './news-service'
import {NewsModel} from './model/NewsModel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  newsModel = new NewsServiceService();
  googleRes = {};

  constructor(private newsService:NewsServiceService){

  }

  ngOnInit(){
    this.newsService.getGoogleNews().subscribe((res:NewsModel) => {
      this.googleRes = res;
    }, err => console.error(err))
  }
}
