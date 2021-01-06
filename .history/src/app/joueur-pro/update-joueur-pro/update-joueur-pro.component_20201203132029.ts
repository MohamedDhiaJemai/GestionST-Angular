import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';

export enum sexe {
  FILLE = 'FILLE',
  GARCON = 'GARCON'
}

@Component({
  selector: 'app-update-joueur-pro',
  templateUrl: './update-joueur-pro.component.html',
  styleUrls: ['./update-joueur-pro.component.css']
})
export class UpdateJoueurProComponent implements OnInit {

  joueurPro: JoueurPro = new JoueurPro();
  sexes: SelectItem[];
  itemsCategories: SelectItem[];
  item: string;
  date: Date;
  joueurProSubscription: Subscription;
  modalRef: BsModalRef;
  modalRefAnnul: BsModalRef;

  // PHOTO
  url;
  format;
  file: File;
  uploadForm: FormGroup;

  constructor(private joueurProService: JoueurProService,
    private formBuilder: FormBuilder,
    private categorieService: CategorieService,
    private router: ActivatedRoute, private datePipe: DatePipe,
    private routerNav: Router, private modalService: BsModalService) {
    this.sexes = Object.keys(sexe).map(key => ({ label: sexe[key], value: key }));
  }

  ngOnInit() {

    const id = this.router.snapshot.params['id'];

    this.categorieService.getAllCategorie().subscribe(
      data => {
        this.itemsCategories = data;
      }
    );

    this.joueurProService.findById(id).subscribe(
      data => {
        this.joueurPro = data;
        this.date = new Date(this.joueurPro.dateNaissance);
        console.log(this.joueurPro)
      }
    );
  }

  ngOnUpdateJoueurPro(templateAnnulation: TemplateRef<any>) {
    this.joueurPro.dateNaissance = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.joueurProSubscription = this.joueurProService.updatejProfessionnel(this.joueurPro.id, this.joueurPro).subscribe(
      data => {
        this.routerNav.navigate(['/consulter-joueur-professionnel/' + this.joueurPro.id]);
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

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
