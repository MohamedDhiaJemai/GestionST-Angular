import { Component, OnInit } from '@angular/core';
import { Role } from 'app/model/Role.model';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles : Role[]

  constructor() { }

  ngOnInit(): void {
  }

}
