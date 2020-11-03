import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'app/model/Categorie.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  categorie: Categorie = new Categorie();
  categorieSubscription: Subscription;
  ancienCategorie: string;

  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  constructor(private categorieService: CategorieService,
    private router: ActivatedRoute,
    private routerNav: Router, private modalService: BsModalService) { }

    ngOnInit() {
      const id = this.router.snapshot.params['id'];
      console.log('id', id);
      this.categorieSubscription = this.categorieService.findById(id).subscribe(
        data => {
          this.ancienCategorie = data.designation;
          console.log('ancienRole', this.ancienCategorie);
          this.categorie = data;
        });
    }

    ngOnUpdateCategorie(templateAnnulation: TemplateRef<any>) {
      console.log('role', this.categorie)
      this.categorieSubscription = this.categorieService.updateCategorie(this.categorie.id, this.categorie).subscribe(
        data => {
          this.routerNav.navigate(['/categorie-list']);
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
  
    public openModal (template: TemplateRef <any>) {
      this.modalRef = this.modalService.show(template);
    }
}
