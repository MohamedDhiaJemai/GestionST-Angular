import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'app/services/article/article.service';

@Component({
  selector: 'app-approvisonnement-article',
  templateUrl: './approvisonnement-article.component.html',
  styleUrls: ['./approvisonnement-article.component.css']
})
export class ApprovisonnementArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id =  this.route.snapshot.params['id'];

  }

}
