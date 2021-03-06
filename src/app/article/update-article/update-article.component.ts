import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/model/Article.model';
import { CategoryTaille, Genre } from 'app/model/Enums.model';
import { ArticleService } from 'app/services/article/article.service';
import { ImageProduitService } from 'app/services/image-produit/image-produit.service';
import { PosteService } from 'app/services/poste/poste.service';
import { environment } from 'environments/environment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService, SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css'],
  providers: [MessageService]
})

export class UpdateArticleComponent implements OnInit {

  article: Article = new Article();
  urlphotoArticle: string;

  sexes: SelectItem[];
  categorys: SelectItem[];
  postes: SelectItem[];
  item: string;

  articleSubscription: Subscription;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  myfile: any[] = [];

  url;
  format;
  file: File;
  uploadForm: FormGroup;

  constructor(private articleService: ArticleService,
    private formBuilder: FormBuilder, private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService,
    private posteService: PosteService, private imageProduitService: ImageProduitService) {
    this.sexes = Object.keys(Genre).map(key => ({ label: Genre[key], value: key }));
    this.categorys = Object.keys(CategoryTaille).map(key => ({ label: CategoryTaille[key], value: key }));
    this.file = null;
  }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];

    this.urlphotoArticle = environment.apiUrl + 'image/get/' + id;
    this.articleService.findById(id).subscribe(
      data => {
        this.article = data;
      }
    );
    this.posteService.getAll().subscribe(data => this.postes = data);
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onSelectFile(event) {
    this.file = event.target.files && event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      if (this.file.type.indexOf('image') > -1) {
        this.format = 'image';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
    this.uploadForm.get('profile').setValue(this.file);
  }

  ngOnUpdateArticle(templateAnnulation: TemplateRef<any>) {
    this.articleSubscription = this.articleService.updateArticle(this.article.id, this.article).subscribe(
      data => {

        if (this.url !== undefined) {
          const formData = new FormData();
          formData.append('file', this.uploadForm.get('profile').value);
          this.imageProduitService.upload(formData, this.article.id).subscribe(
            data2 => {
              this.routerNav.navigate(['/consulter-article/' + this.article.id]);
            }
          );
        } else {
          this.routerNav.navigate(['/consulter-article/' + this.article.id]);
        }
      },
      err => {
        if (err.status === 500) {
          this.modalRef.hide();
          this.modalRefAnnul = this.modalService.show(templateAnnulation);
        }
      }
    );
    this.modalRef.hide();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
