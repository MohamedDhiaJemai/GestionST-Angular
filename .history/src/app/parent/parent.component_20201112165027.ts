import { Component, OnInit } from '@angular/core';
import { Parent } from 'app/model/Parent.model';
import { ParentService } from 'app/services/parent/parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parents: Parent[];

  constructor(private parentService: ParentService) { }

  ngOnInit() {
    this.parentService.getAllParent().subscribe(
      data => {
        this.parents = data;
      }
    );
  }

}
