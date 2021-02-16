import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { UserAuthentification } from 'app/model/UserAuthentification.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private jwtToken = undefined;
  jwtHelper: JwtHelper = new JwtHelper();
  private roles: Array<any> = [];
  username: string;
  constructor(private httpClient: HttpClient) { }
  login(userAuthentification: UserAuthentification) {
    return this.httpClient.post(environment.apiUrl + 'login', userAuthentification, { observe: 'response' });
  }
  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    this.roles = this.jwtHelper.decodeToken(this.jwtToken).roles;
    let array = new Array<any>();
    this.roles.forEach(element => {
      array.push(element.authority);
    });
    localStorage.setItem('roles', JSON.stringify(array));
  }
  logout() {
    localStorage.clear();
    this.jwtToken = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
}
