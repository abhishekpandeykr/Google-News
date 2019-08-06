export class NewsModel {
  googleNews:GoogleNews;
  constructor(){
    this.googleNews = new GoogleNews();
  }
};


class GoogleNews {
  status:string;
  totalResults:number;
  articles:Articles;
  constructor(){
    this.articles = new Articles();
  }
};

class Articles {
  source:object;
  author:string;
  title:string;
  description:string;
  urlToImage:string;
  content:string;
  url:string;
}