import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Categorie } from 'app/model/Categorie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  apiUrl = 'http://localhost:8443/categorie';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private httpClient: HttpClient, private router: Router) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  addToken() {
    localStorage.clear();
    location.reload();
    this.router.navigateByUrl('/login');
  }

  getAllRole(): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/all', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  addCategorie(role: Categorie) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrl + '/add', role,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  updateCategorie(id: number, role: Role) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrl + '/update/' + id, role,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  findById(id) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<Role>(this.apiUrl + '/findById/' + id,
    {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
}
