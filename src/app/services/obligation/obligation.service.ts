import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obligation } from 'app/model/Obligation.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ObligationService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  findById(id: number) {
    return this.httpClient.get<Obligation>(environment.apiUrl + 'obligation/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'obligation/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  add(obligation: Obligation) {
    return this.httpClient.post<Obligation>(environment.apiUrl + 'obligation/add', obligation,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  tenu(id: number, annee: string) {
    return this.httpClient.get<Obligation>(environment.apiUrl + 'obligation/tenu/' + annee + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  inscri(id: number, annee: string) {
    return this.httpClient.get<Obligation>(environment.apiUrl + 'obligation/inscri/' + annee + '/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
