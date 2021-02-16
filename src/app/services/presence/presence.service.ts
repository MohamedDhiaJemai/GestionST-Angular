import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { AppelDTO } from 'app/model/AppelDTO.model';
import { AppelParams } from 'app/model/AppelParams.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  listeAppel(appelParams: AppelParams): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'presence/liste-appel', appelParams,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  listePresence(appelParams: AppelParams): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'presence/liste-presence', appelParams,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  editPresence(appelDTO: AppelDTO) {
    return this.httpClient.post<AppelDTO>(environment.apiUrl + 'presence/appel', appelDTO,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
