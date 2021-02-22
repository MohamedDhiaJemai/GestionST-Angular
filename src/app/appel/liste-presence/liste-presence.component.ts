import { Component, OnInit } from '@angular/core';
import { AppelDTO } from 'app/model/AppelDTO.model';
import { AppelParams } from 'app/model/AppelParams.model';
import { Jour, Sexe, TypeEntrainement } from 'app/model/Enums.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { PresenceService } from 'app/services/presence/presence.service';
import { UserService } from 'app/services/user/user.service';
import { environment } from 'environments/environment';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';



@Component({
  selector: 'app-liste-presence',
  templateUrl: './liste-presence.component.html',
  styleUrls: ['./liste-presence.component.css']
})
export class ListePresenceComponent implements OnInit {
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
  photoUrl = environment.apiUrl + 'photo/get/';
  constructor(private presenceService: PresenceService, private autorisationService: AutorisationService,
    private userService: UserService) {
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
    const obj = this.autorisationService.checkAutorisations1('liste-presence');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.appelParams = new AppelParams();
    this.submitted = false;
    this.userService.getbyRoles(['COACH']).subscribe(data => {
      this.utilisateurs = data;
    });
  }
  getListePresence() {
    this.submitted = true;
    if (this.appelParams.typeEntrainement && this.appelParams.natifs && this.appelParams.natifs.length > 0) {
      this.presenceService.listePresence(this.appelParams).subscribe(data => {
        this.listeAppel = data;
        this.nombrePresents = this.listeAppel.length;
      });
    }
  }
  clear(table: Table) {
    table.clear();
  }
}
