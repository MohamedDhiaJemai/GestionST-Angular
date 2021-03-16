import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from 'app/model/Utilisateur.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  getAllUtilisateur() {
    return this.httpClient.get<Utilisateur[]>(environment.apiUrl + 'utilisateur/all');
  }

  hasPresence(): Observable<any> {
    return this.httpClient.get<Utilisateur[]>(environment.apiUrl + 'utilisateur/has-presence');
  }
  addUtilisateur(utilisateur: Utilisateur) {
    return this.httpClient.post(environment.apiUrl + 'utilisateur/add', utilisateur);
  }
  updateUtilisateur(id: number, utilisateur: Utilisateur) {
    return this.httpClient.put(environment.apiUrl + 'utilisateur/update/' + id, utilisateur);
  }
  findById(id: number) {
    return this.httpClient.get<Utilisateur>(environment.apiUrl + 'utilisateur/' + id);
  }
  getbyRoles(roles: string[]): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'utilisateur/roles', roles);
  }
  findByUsername(username: string) {
    return this.httpClient.get<Utilisateur>(environment.apiUrl + 'utilisateur/username/' + username);
  }

}
