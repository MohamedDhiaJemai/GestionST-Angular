import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { UserAuthentification } from 'app/model/UserAuthentification.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://127.0.0.1:8443';

  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  private roles: Array<any> = [];

  username: string;

  constructor(private httpClient: HttpClient) { }

  login(userAuthentification: UserAuthentification) {
    return this.httpClient.post(this.apiUrl + '/login', userAuthentification, { observe: 'response' });
  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);

    const jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;

    let array = new Array<any>();
    this.roles.forEach(element => {
      array.push(element.authority);
    });
    localStorage.setItem('roles', JSON.stringify(array));
  }

  logout() {
    localStorage.clear();
    this.initParams();
  }

  initParams() {
    this.jwtToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    // location.reload();
  }
}
