import { Component, OnInit, ViewChild } from '@angular/core';
import { JoueurAcamedie } from 'app/model/JoueurAcamedie.model';
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

  listEnfant: JoueurAcamedie[];
  displayBasic: boolean;


  @ViewChild('dt') table: Table;
  constructor(private parentService: ParentService, private joueurAcademieService: JoueurAcademieService) { }

  ngOnInit() {
    this.parentService.getAllParent().subscribe(
      data => {
        this.parents = data;
      }
    );
  }

  showBasicDialog(id: number) {
    console.log(id);
    this.joueurAcademieService.findByParent(id).subscribe(
      (data: any) => {
        this.listEnfant = data;
        console.log(this.listEnfant);
      }
    );
    this.displayBasic = true;

  }

}
