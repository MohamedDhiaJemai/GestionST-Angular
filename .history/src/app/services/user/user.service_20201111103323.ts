import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Utilisateur } from 'app/model/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://192.168.0.143:8443/utilisateur';

  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private httpClient: HttpClient, private router: Router) { }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  addToken() {
    console.log('Token Expired');
      localStorage.clear();
      location.reload();
      this.router.navigateByUrl('/login');
  }

  getAllUtilisateur() {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get<Utilisateur[]>(this.apiUrl + '/all', { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  addUtilisateur(utilisateur: Utilisateur) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.post(this.apiUrl + '/add', utilisateur,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  updateUtilisateur(id: number, utilisateur: Utilisateur) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrl + '/update/' + id, utilisateur,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

}
