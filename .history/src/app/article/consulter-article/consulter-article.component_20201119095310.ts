import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'app/services/article/article.service';

@Component({
  selector: 'app-consulter-article',
  templateUrl: './consulter-article.component.html',
  styleUrls: ['./consulter-article.component.css']
})
export class ConsulterArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private router:ActivatedRoute) { }

  ngOnInit() {

    // const id = this.router.snapshot.params[]
  }

}
