import {Component, OnInit} from '@angular/core';
import {Article} from "./article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {title:'Google', url:'https://google.com'};
  articles: Article[] = [
    {
      title: 'FreeCodeCamp',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'FptShop',
      url: 'https://fptshop.com.vn'
    },
    {
      title: 'VnExpress',
      url: 'https://vnexpress.net'
    },
    {
      title: 'Zing new', url: 'https://zingnews.vn/'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
  addNewArticle(){
    this.articles.push(this.article);
  }
}
