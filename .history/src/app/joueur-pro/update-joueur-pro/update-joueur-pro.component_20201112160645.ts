import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { JoueurProService } from 'app/services/joueur-pro/joueur-pro.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
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

  constructor(private joueurProService: JoueurProService, private categorieService: CategorieService,
    private router: ActivatedRoute,
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
    this.joueurProSubscription = this.joueurProService.updatejProfessionnel(this.joueurPro.id, this.joueurPro).subscribe(
      data => {
        this.routerNav.navigate(['/consulter-jouteur-professionnel/{{joueurPro.id}}']);
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
