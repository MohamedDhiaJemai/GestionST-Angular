import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppelDTO } from 'app/model/AppelDTO.model';
import { AppelParams } from 'app/model/AppelParams.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { PresenceService } from 'app/services/presence/presence.service';
import { environment } from 'environments/environment';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';


export enum Sexe {
  GARCON = 'GARCON',
  FILLE = 'FILLE'
}

export enum TypeEntrainement {
  NORMAL = 'NORMAL',
  SPECIFIQUE = 'SPECIFIQUE',
  ELITE = 'ELITE'
}

export enum Jour {
  LUNDI = 'LUNDI',
  MARDI = 'MARDI',
  MERCREDI = 'MERCREDI',
  JEUDI = 'JEUDI',
  VENDREDI = 'VENDREDI ',
  SAMEDI = 'SAMEDI',
  DIMANCHE = 'DIMANCHE'
}

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
  edition: boolean;
  consultation: boolean;
  submitted: boolean;
  photoUrl = environment.apiUrl + 'photo/get/';
  constructor(private presenceService: PresenceService, private autorisationService: AutorisationService) {
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
  }
  getListeAppel() {
    this.submitted = true;
    if (this.appelParams.typeEntrainement && this.appelParams.natifs.length > 0) {
      this.presenceService.listeAppel(this.appelParams).subscribe(data => {
        this.listeAppel = data;
      });
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
