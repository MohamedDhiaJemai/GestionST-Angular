import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { InscriptionTest } from 'app/model/InscriptionTest.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionTestService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  findById(id: number) {
    return this.httpClient.get<InscriptionTest>(environment.apiUrl + 'inscriptions/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  update(id: number, inscription: InscriptionTest) {
    return this.httpClient.put(environment.apiUrl + 'inscriptions/update/' + id, inscription,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }

  editerEtat(id: number, inscription: InscriptionTest) {
    return this.httpClient.put(environment.apiUrl + 'inscriptions/etat/' + id, inscription,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }

  valider(id: number, inscription: InscriptionTest) {
    return this.httpClient.put(environment.apiUrl + 'inscriptions/valider/' + id, inscription,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'inscriptions/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }

  valide(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'inscriptions/valide',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }

  nonValide(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'inscriptions/non-valide',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
