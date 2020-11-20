import { Component, OnInit } from '@angular/core';
import { Article } from 'app/model/Article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles : Article = new Article();
  constructor() { }

  ngOnInit(): void {
  }

}
