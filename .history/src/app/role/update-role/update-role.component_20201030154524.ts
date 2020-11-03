import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'app/model/Role.model';
import { RoleService } from 'app/services/role/role.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  role: Role = new Role();
  roleSubscription: Subscription;

  constructor(private roleService: RoleService,  private router: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
    const id = this.router.snapshot.params['id'];
    this.roleSubscription = this.roleService
    .findRoleById(id)
    .subscribe(data => {
      this.role = data;
    });
  }

}
