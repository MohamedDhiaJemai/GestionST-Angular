import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { UserAuthentification } from 'app/model/UserAuthentification.model';
import { AutorisationService } from 'app/services/autorisation/autorisation.service';
import { LoginService } from 'app/services/login/login.service';
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

  constructor(private authentificationService: LoginService,
    private autorisationService: AutorisationService,
    private router: Router,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  onLogin(data, template: TemplateRef<any>) {

    this.authentificationService.login(data).subscribe(
      resp => {
        const jwt = resp.headers.get('Authorization');
        this.authentificationService.saveToken(jwt);
        if (this.jwtHelper.isTokenExpired(jwt)) {
          localStorage.clear();
          this.router.navigateByUrl('/login');
        }
        this.autorisationService.findAutorisations().subscribe(dataa => {
          this.autorisationService.setAutorisations(dataa);
        });
        if (jwt != null) {
          this.router.navigateByUrl('/');
        }
      }, err => {
        if (err.status === 403) {
          this.modalRef = this.modalService.show(template);
        }
      }
    );
  }

}
