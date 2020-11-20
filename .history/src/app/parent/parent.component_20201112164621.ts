import { Component, OnInit } from '@angular/core';
import { Parent } from 'app/model/Parent.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parents: Parent[];

  constructor(private) { }

  ngOnInit(): void {
  }

}
