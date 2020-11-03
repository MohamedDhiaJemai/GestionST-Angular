import { Component, OnInit, ViewChild } from '@angular/core';
import { Role } from 'app/model/Role.model';
import { RoleService } from 'app/services/role/role.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles: Role[];
  selectedRole: Role;

  @ViewChild('dt') table: Table;

  constructor(private roleService: RoleService) { }

  ngOnInit() {

    this.roleService.getAllRole().subscribe(
      data => {
        this.roles = data;
      }
    );
  }

}
