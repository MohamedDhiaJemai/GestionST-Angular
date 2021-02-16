import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
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
  constructor(private userService: UserService, private autorisationService: AutorisationService) { }
  ngOnInit() {
    const obj = this.autorisationService.checkAutorisations1('utilisateurs');
    this.edition = obj.edition;
    this.consultation = obj.consultation;
    this.userService.getAllUtilisateur().subscribe(
      data => {
        this.users = data;
      }
    );
  }
}
