import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Role } from 'app/model/Role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiUrl = 'http://localhost:9090/roles';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private httpClient: HttpClient, private router: Router) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  addToken() {
   // console.log('Token Expired');
      localStorage.clear();
      location.reload();
      this.router.navigateByUrl('/login');
  }

  getAllRole(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    // console.log('Role SERVICE : ', this.jwtToken);
    return this.httpClient.get(this.apiUrl + '/all', {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  findRoleById(id) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
   // console.log('ROLE SERVICE : ', this.jwtToken);
    return this.httpClient.get<Role>(this.apiUrl + '/idRole/' + id,
    {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  addRole(role: Role) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    // console.log('ROLE SERVICE : ', this.jwtToken);
    return this.httpClient.post(this.apiUrl + '/add', role,
    {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  deleteRole(id: number) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    // console.log('ROLE SERVICE : ', this.jwtToken);
    return this.httpClient.delete(this.apiUrl + '/delete/' + id,
    {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }

  updateRole(id: number, role: Role) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    // console.log('ROLE SERVICE : ', this.jwtToken);
    return this.httpClient.put(this.apiUrl + '/update/' + id, role,
    {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
}
