import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
import { Parent } from 'app/model/Parent.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { JoueurAcademieService } from 'app/services/joueur-academie/joueur-academie.service';
import { ParentService } from 'app/services/parent/parent.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parents: Parent[];
  selectedParent: Parent;
  listEnfant: JoueurAcamedie[];
  displayBasic: boolean;
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;
  constructor(private parentService: ParentService, private joueurAcademieService: JoueurAcademieService,
    private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('parents');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.parentService.getAllParent().subscribe(
      data => {
        this.parents = data;
      }
    );
  }
  showBasicDialog(id: number) {
    this.joueurAcademieService.findByParent(id).subscribe(
      (data: any) => {
        this.listEnfant = data;
      }
    );
    this.displayBasic = true;
  }
}
