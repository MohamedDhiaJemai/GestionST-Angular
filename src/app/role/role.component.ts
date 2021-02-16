import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'app/model/Role.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
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
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;
  constructor(private roleService: RoleService, private router: Router, private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('roles');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.roleService.getAllRole().subscribe(
      data => {
        this.roles = data;
      }
    );
  }
}
