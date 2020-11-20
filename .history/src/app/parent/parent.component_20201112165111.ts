import { Component, OnInit, ViewChild } from '@angular/core';
import { Parent } from 'app/model/Parent.model';
import { ParentService } from 'app/services/parent/parent.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parents: Parent[];
  selectedParent: Categorie;


  @ViewChild('dt') table: Table;
  constructor(private parentService: ParentService) { }

  ngOnInit() {
    this.parentService.getAllParent().subscribe(
      data => {
        this.parents = data;
      }
    );
  }

}
