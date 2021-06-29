import { Component, OnInit } from '@angular/core';
import { AppelDTO } from 'app/model/AppelDTO.model';
import { AppelParams } from 'app/model/AppelParams.model';
import { Jour, Sexe, TypeEntrainement } from 'app/model/Enums.model';
import { SessionTest } from 'app/model/SessionTest.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { PresenceService } from 'app/services/presence/presence.service';
import { SessionTestService } from 'app/services/session-test/session-test.service';
import { log } from 'console';
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
  sessionTest: SessionTest;
  constructor(private presenceService: PresenceService, private categorieService: CategorieService,
    private autorisationService: AutorisationService, private sessionTestService: SessionTestService) {
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

    this.sessionTestService.testEnCours().subscribe(data => {
      if (data != null) {
        this.sessionTest = data;
      } else {
        this.sessionTestService.inscriptionEnCours().subscribe(dataa => this.sessionTest = dataa)
      }
    });
  }

  findCategories() {
    if (this.appelParams.typeEntrainement === 'TESTP1') {
      console.log(this.sessionTest);
      if (this.sessionTest != null) {
        this.categorieService.findByIdSaison(this.sessionTest.saisonSportive.id).subscribe(datac => this.categories = datac);
      } else {
        this.categorieService.enCours().subscribe(datac => this.categories = datac);
      }
    }
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
