import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'app/services/article/article.service';

@Component({
  selector: 'app-dataview-article',
  templateUrl: './dataview-article.component.html',
  styleUrls: ['./dataview-article.component.css']
})
export class DataviewArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

}
