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

  constructor(private articleService: ArticleService,
    private routerNav: Router, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }

  onSelectFile(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
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

        const formData = new FormData();
        formData.append('file', event.files[0]);
        this.imageProduitService.upload(formData, this.article.id).subscribe(
          data => {
            console.log('ok');
          }
        );


        this.routerNav.navigate(['articles']);
      } 
      error => console.log(error)
    );
  }

}
