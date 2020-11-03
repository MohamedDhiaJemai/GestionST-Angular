import { Component, OnInit } from '@angular/core';
import { Role } from 'app/model/Role.model';
import { RoleService } from 'app/services/role/role.service';

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

  ngOnInit(): void {

    this.roleService.getAllRole().subscribe(
      data => {
        this.roles = data;
      }
    );
  }

}
