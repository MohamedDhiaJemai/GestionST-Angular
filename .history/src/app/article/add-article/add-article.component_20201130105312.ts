import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { ArticleService } from 'app/services/article/article.service';
import { ImageProduitService } from 'app/services/image-produit/image-produit.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON',
  UNISEXE = 'UNISEXE'
}

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers: [MessageService]
})
export class AddArticleComponent implements OnInit {

  article: Article = new Article();
  sexes: SelectItem[];
  item: string;

  url;
  format;

  event: any;

  constructor(private articleService: ArticleService,
    private routerNav: Router, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }

  onSelectFile(event) {
    this.event = event;
    const file = this.event.target.files && this.event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      }
      reader.onload = (this.event) => {
        this.url = (<FileReader>this.event.target).result;
      }
    }
  }

  upload(event, id) {



  }

  ngOnInit(): void {
  }

  onAddArticle() {
    this.articleService.addArticle(this.article).subscribe(
      data => {
        console.log(this.article.id)
        console.log(this.event)
        const formData = new FormData();
        formData.append('file', this.event);
        this.imageProduitService.upload(this.event, this.article.id).subscribe(
          data2 => {
            console.log('ok');
          }
        );
        this.routerNav.navigate(['articles']);
      },
      error => console.log(error)
    );
  }

}
