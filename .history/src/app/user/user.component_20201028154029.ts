import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Utilisateur[];
  selecteduser: Utilisateur;

  loading: boolean;
  totalRecords: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUtilisateur().subscribe(
      data => {
        this.users = data;
        console.log('users List : ', this.users);
      }
    );
    this.loading = true;
  }

  selectUser(user) {
  }

  loadUsers(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
        if (this.users) {
            this.users = this.users.slice(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 1000);
}

}
