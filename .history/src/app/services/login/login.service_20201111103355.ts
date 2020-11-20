import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { UserAuthentification } from 'app/model/UserAuthentification.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://192.168.0.143:8443/8443';

  private jwtToken = null;

  private roles: Array<any> = [];

  username: string;

  constructor(private httpClient: HttpClient) { }

  login( userAuthentification: UserAuthentification) {
    return this.httpClient.post(this.apiUrl + '/login', userAuthentification, {observe: 'response'});
  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    const jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
    this.initParams();
  }

  initParams() {
    this.jwtToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    location.reload();
  }
}
