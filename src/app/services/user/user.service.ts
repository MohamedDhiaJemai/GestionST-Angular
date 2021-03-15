import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAllUtilisateur() {
    return this.httpClient.get<Utilisateur[]>(environment.apiUrl + 'utilisateur/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }

  hasPresence(): Observable<any> {
    return this.httpClient.get<Utilisateur[]>(environment.apiUrl + 'utilisateur/has-presence',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addUtilisateur(utilisateur: Utilisateur) {
    return this.httpClient.post(environment.apiUrl + 'utilisateur/add', utilisateur,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateUtilisateur(id: number, utilisateur: Utilisateur) {
    return this.httpClient.put(environment.apiUrl + 'utilisateur/update/' + id, utilisateur,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id: number) {
    return this.httpClient.get<Utilisateur>(environment.apiUrl + 'utilisateur/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  getbyRoles(roles: string[]): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'utilisateur/roles', roles,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findByUsername(username: string) {
    return this.httpClient.get<Utilisateur>(environment.apiUrl + 'utilisateur/username/' + username,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }

}
