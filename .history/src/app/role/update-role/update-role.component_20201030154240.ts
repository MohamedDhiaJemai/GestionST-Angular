import { Component, OnInit } from '@angular/core';
import { RoleService } from 'app/services/role/role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
  }

}
