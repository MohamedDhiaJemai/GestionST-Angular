import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtHelper } from 'angular2-jwt';
import { UserAuthentification } from 'app/model/UserAuthentification.model';
import { LoginService } from 'app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuth: UserAuthentification;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private authentificationService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

}
