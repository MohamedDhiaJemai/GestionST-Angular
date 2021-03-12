import { Component, OnInit } from '@angular/core';
import { AppelDTO } from 'app/model/AppelDTO.model';
import { AppelParams } from 'app/model/AppelParams.model';
import { Jour, Sexe, TypeEntrainement } from 'app/model/Enums.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { PresenceService } from 'app/services/presence/presence.service';
import { environment } from 'environments/environment';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-appel',
  templateUrl: './appel.component.html',
  styleUrls: ['./appel.component.css']
})
export class AppelComponent implements OnInit {
  listeAppel: AppelDTO[];
  annees: any[] = [];
  appelParams: AppelParams;
  types: SelectItem[];
  jours: SelectItem[];
  sexes: SelectItem[];
  categories: SelectItem[];
  edition: boolean;
  consultation: boolean;
  submitted: boolean;
  photoJoueurUrl = environment.apiUrl + 'photo/get/';
  photoTestUrl = environment.apiUrl + 'photo-test/get/';
  constructor(private presenceService: PresenceService, private categorieService: CategorieService,
    private autorisationService: AutorisationService) {
    const now = new Date();
    const year = now.getFullYear();
    let i: number;
    for (i = 4; i < 45; i++) {
      const natif = year - i;
      this.annees.push({ label: natif.toString(), value: natif.toString() })
    }
    this.sexes = Object.keys(Sexe).map(key => ({ label: Sexe[key], value: key }));
    this.types = Object.keys(TypeEntrainement).map(key => ({ label: TypeEntrainement[key], value: key }));
    this.jours = Object.keys(Jour).map(key => ({ label: Jour[key], value: key }));
  }
  ngOnInit(): void {
    const obj = this.autorisationService.checkAutorisations1('appel');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.appelParams = new AppelParams();
    this.submitted = false;
    this.categorieService.enCours().subscribe(
      data => {
        this.categories = data;
      }
    );
  }
  getListeAppel() {
    this.submitted = true;
    if (this.appelParams.typeEntrainement === 'TESTP1') {
      this.presenceService.listeAppel(this.appelParams).subscribe(data => {
        this.listeAppel = data;
      }, err => {
        this.listeAppel = [];
      });
    } else {
      if (this.appelParams.typeEntrainement && this.appelParams.natifs.length > 0) {
        this.presenceService.listeAppel(this.appelParams).subscribe(data => {
          this.listeAppel = data;
        }, err => {
          this.listeAppel = [];
        });
      }
    }
  }
  clear(table: Table) {
    table.clear();
  }
  editPresence(appelDTO: AppelDTO) {
    this.presenceService.editPresence(appelDTO).subscribe(data => {
      appelDTO.idPresence = data.idPresence;
    });
  }
}
