import { Component, OnInit, ViewChild } from '@angular/core';
import { Parent } from 'app/model/Parent.model';
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


  @ViewChild('dt') table: Table;
  constructor(private parentService: ParentService, private joueurAcademieService: JoueurAcademieService) { }

  ngOnInit() {
    this.parentService.getAllParent().subscribe(
      data => {
        this.parents = data;
      }
    );
  }

  showBasicDialog(idWorkFlowAC: number) {
    console.log(idWorkFlowAC);
    this.joueurAcademieService.findRoleByIDWorkflowDC1(idWorkFlowAC).subscribe(
      (data: any) => {
        this.listRole = data;
        console.log(this.listRole);
      }
    );
    this.displayBasic = true;

  }

}
