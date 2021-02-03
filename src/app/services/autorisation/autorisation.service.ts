import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Autorisation } from 'app/model/Autorisation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorisationService {
  apiUrl = 'http://127.0.0.1:8443/autorisations';

  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  private roles: Array<any> = [];

  username: string;

  constructor(private httpClient: HttpClient, private router: Router) { }


  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }
  addToken() {
    localStorage.clear();
    // location.reload();
    this.router.navigateByUrl('/login');
  }

  updateAutorisation(autorisation: Autorisation) {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.put(this.apiUrl + '/update', autorisation,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  findAutorisations(): Observable<any> {
    this.loadToken();
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/utilisateur/' + this.jwtHelper.decodeToken(this.jwtToken).sub,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });
  }

  findAutorisationsByUser(username: string): Observable<any> {
    if (this.jwtToken == null) { this.loadToken(); }
    if (this.jwtHelper.isTokenExpired(this.jwtToken)) { this.addToken(); }
    return this.httpClient.get(this.apiUrl + '/utilisateur/' + username,
      { headers: new HttpHeaders({ 'authorization': this.jwtToken }) });

  }

  setAutorisations(autorisations: Autorisation[]) {
    let array = new Array<any>();
    autorisations.forEach(element => {
      let obj = { metier: element.tache.metier, edition: element.edition, consultation: element.consultation };
      array.push(obj);
    });
    localStorage.setItem('autorisations', JSON.stringify(array));
  }

  // getAutorisations(): Array<any> {
  //   return JSON.parse(localStorage.getItem('autorisations'));
  // }


}
