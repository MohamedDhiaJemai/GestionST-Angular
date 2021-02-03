import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { UserService } from 'app/services/user/user.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Utilisateur[];
  selecteduser: Utilisateur;

  edition: boolean;
  consultation: boolean;

  @ViewChild('dt') table: Table;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.checkAutorisations();

    this.userService.getAllUtilisateur().subscribe(
      data => {
        this.users = data;
        console.log('users List : ', this.users);
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
        if (element.metier === 'utilisateurs') {
          if (!element.consultation) {
            this.router.navigateByUrl('/acceuil');
          }
          this.edition = element.edition;
          this.consultation = element.consultation;
        }
      });
    }
  }

  selectUser(user) {
  }

}
