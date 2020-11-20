import { Component, OnInit } from '@angular/core';
import { Parent } from 'app/model/Parent.model';
import { ParentService } from 'app/services/parent/parent.service';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.css']
})
export class AddParentComponent implements OnInit {

  parent: Parent = new Parent();



  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
  }

}
