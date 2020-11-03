import { Component, OnInit } from '@angular/core';
import { Role } from 'app/model/Role.model';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  role: Role;

  constructor() { }

  ngOnInit(): void {
  }

}
