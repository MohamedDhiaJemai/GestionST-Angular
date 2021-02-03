import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  edition: boolean;
  consultation: boolean;
  @ViewChild('dt') table: Table;

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    this.roleService.getAllRole().subscribe(
      data => {
        this.roles = data;
      }
    );
  }

  checkAutorisations() {
    const autorisations: Array<any> = JSON.parse(localStorage.getItem('autorisations'));

        const roless: Array<any> = JSON.parse(localStorage.getItem('roles'));
    this.edition = false;
    this.consultation = false;
    if (roless.includes('ADMIN')) {
      this.edition = true;
      this.consultation = true;
    } else {
      autorisations.forEach(element => {
        if (element.metier === 'roles') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
      });
    }
  }
}
