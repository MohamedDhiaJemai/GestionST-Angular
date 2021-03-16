import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppelDTO } from 'app/model/AppelDTO.model';
import { AppelParams } from 'app/model/AppelParams.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  constructor(private httpClient: HttpClient) { }
  listeAppel(appelParams: AppelParams): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'presence/liste-appel', appelParams);
  }
  listePresence(appelParams: AppelParams): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'presence/liste-presence', appelParams);
  }
  historiquePresence(appelParams: AppelParams): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'presence/historique-presence', appelParams);
  }
  editPresence(appelDTO: AppelDTO) {
    return this.httpClient.post<AppelDTO>(environment.apiUrl + 'presence/appel', appelDTO);
  }
}
