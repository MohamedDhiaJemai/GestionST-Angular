import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';
import { SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';


export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON',
  UNISEXE = 'UNISEXE'
}


@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})

export class UpdateArticleComponent implements OnInit {

  article: Article = new Article();
  urlphotoArticle = 'http://192.168.0.143:8443/image/get/';

  sexes: SelectItem[];
  item: string;

  articleSubscription : Subscription
  constructor(private articleService: ArticleService, private router: ActivatedRoute) { 
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.articleService.findById(id).subscribe(
      data => {
        this.article = data;
      }
    );
  }

  ngOnUpdateArticle(templateAnnulation: TemplateRef<any>) {
    this.joueurAcademieSubscription = this.joueurAcademieService.updatejAcademie(this.joueurAcademie.id, this.joueurAcademie).subscribe(
      data => {
        this.routerNav.navigate(['/consulter-joueur-academie/' + this.joueurAcademie.id]);
      },
      err => {
        if (err.status === 500) {
          this.modalRef.hide();
          this.modalRefAnnul = this.modalService.show(templateAnnulation);
          console.log('STATUS 500');
          // this.routerNav.navigateByUrl('/role/details/' + id);
        }
      }
    );
    this.modalRef.hide();
  }

}
