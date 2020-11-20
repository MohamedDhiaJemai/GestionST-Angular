import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'app/services/article/article.service';

@Component({
  selector: 'app-consulter-article',
  templateUrl: './consulter-article.component.html',
  styleUrls: ['./consulter-article.component.css']
})
export class ConsulterArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

}
