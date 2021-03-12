import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { UserAuthentification } from 'app/model/UserAuthentification.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { LoginService } from 'app/services/login/login.service';
import { TokenService } from 'app/services/token/token.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modalRef: BsModalRef;

  userAuth: UserAuthentification;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private loginService: LoginService,
    private autorisationService: AutorisationService,
    private tokenService: TokenService,
    private router: Router,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  onLogin(data, template: TemplateRef<any>) {
    localStorage.clear();
    this.tokenService.clearToken();
    this.autorisationService.clearAutorisations();
    this.loginService.login(data).subscribe(
      resp => {
        const jwt = resp.headers.get('Authorization');
        if (jwt != null && !this.jwtHelper.isTokenExpired(jwt)) {
          this.tokenService.saveToken(jwt);
          this.autorisationService.findAutorisations().subscribe(dataa => {
            this.autorisationService.setAutorisations(dataa);
          }, err => {
            localStorage.clear();
            this.modalRef = this.modalService.show(template);
          });
        } else {
          localStorage.clear();
          this.modalRef = this.modalService.show(template);
        }
      }, err => {
        if (err.status === 403) {
          localStorage.clear();
          this.modalRef = this.modalService.show(template);
        }
      }
    );
  }

}
