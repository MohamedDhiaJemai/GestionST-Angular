import { Component, OnInit } from '@angular/core';
import { Article } from 'app/model/Article.model';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  article: Article = new Article();
  constructor() { }

  ngOnInit(): void {
  }

}
