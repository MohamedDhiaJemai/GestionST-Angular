import { Component, OnInit } from '@angular/core';
import { Parent } from 'app/model/Parent.model';

@Component({
  selector: 'app-upate-parent',
  templateUrl: './upate-parent.component.html',
  styleUrls: ['./upate-parent.component.css']
})
export class UpateParentComponent implements OnInit {

  parent: Parent = new Parent();

  constructor() { }

  ngOnInit(): void {
  }

}
