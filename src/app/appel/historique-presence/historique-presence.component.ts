import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppelDTO } from 'app/model/AppelDTO.model';
import { AppelParams } from 'app/model/AppelParams.model';
import { Jour, Sexe, TypeEntrainement } from 'app/model/Enums.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { CategorieService } from 'app/services/categorie/categorie.service';
import { PresenceService } from 'app/services/presence/presence.service';
import { UserService } from 'app/services/user/user.service';
import { environment } from 'environments/environment';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-historique-presence',
  templateUrl: './historique-presence.component.html',
  styleUrls: ['./historique-presence.component.css']
})
export class HistoriquePresenceComponent implements OnInit {
  listeAppel: AppelDTO[];
  annees: any[] = [];
  appelParams: AppelParams;
  types: SelectItem[];
  jours: SelectItem[];
  sexes: SelectItem[];
  edition: boolean;
  consultation: boolean;
  submitted: boolean;
  nombrePresents: number;
  utilisateurs: SelectItem[];
  dd: Date;
  df: Date;
  photoJoueurUrl = environment.apiUrl + 'photo/get/';
  photoTestUrl = environment.apiUrl + 'photo-test/get/';
  constructor(private presenceService: PresenceService, private autorisationService: AutorisationService,
    private userService: UserService, private datePipe: DatePipe) {
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
    const obj = this.autorisationService.checkAutorisations1('historique-presence');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.appelParams = new AppelParams();
    this.submitted = false;
    this.userService.hasPresence().subscribe(data => {
      this.utilisateurs = data;
    });
  }
  getListePresence() {
    this.submitted = true;
    this.appelParams.dateDebut = this.datePipe.transform(this.dd, 'yyyy-MM-ddTHH:mm:ss.001');
    this.appelParams.dateFin = this.datePipe.transform(this.df, 'yyyy-MM-ddTHH:mm:ss.999');
    if (this.appelParams.typeEntrainement === 'TESTP1') {
      this.presenceService.historiquePresence(this.appelParams).subscribe(data => {
        this.listeAppel = data;
        this.nombrePresents = this.listeAppel.length;
      }, err => {
        this.listeAppel = [];
        this.nombrePresents = 0;
      });
    } else {
      if (this.appelParams.typeEntrainement && this.appelParams.natifs && this.appelParams.natifs.length > 0) {
        this.presenceService.historiquePresence(this.appelParams).subscribe(data => {
          this.listeAppel = data;
          this.nombrePresents = this.listeAppel.length;
        }, err => {
          this.listeAppel = [];
          this.nombrePresents = 0;
        });
      }
    }
  }
  clear(table: Table) {
    table.clear();
  }
}
