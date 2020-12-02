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
  urlphotoArticle = 'http://192.168.0.143:8443/image/get/';

  sexes: SelectItem[];
  item: string;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  myfile: any[] = [];


  url;
  format;

  constructor(private articleService: ArticleService, private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService,
    private messageService: MessageService, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
    console.log(this.url)
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
    this.showViaServiceWait();
    const formData = new FormData();
    formData.append('file', event.files[0]);

    this.imageProduitService.upload(formData, id).subscribe(
      data => {
        this.showViaServiceOk();
        this.myfile = [];
        this.ngOnInit();
      },
      err => {
        this.showViaServiceEror();
        this.myfile = [];
        this.ngOnInit();
      },
    );
  }

  ngOnInit(): void {
  }

  onAddArticle() {
    this.articleService.addArticle(this.article).subscribe(
      data => this.routerNav.navigate(['articles']),
      error => console.log(error)
    );
  }

}
