import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Gratuite } from 'app/model/Gratuite.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GratuiteService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  findById(id: number) {
    return this.httpClient.get<Gratuite>(environment.apiUrl + 'gratuite/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'gratuite/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  add(gratuite: Gratuite) {
    return this.httpClient.post(environment.apiUrl + 'gratuite/add', gratuite,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  update(id: number, gratuite: Gratuite) {
    return this.httpClient.put(environment.apiUrl + 'gratuite/update/' + id, gratuite,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  active(id: number) {
    return this.httpClient.get<Gratuite>(environment.apiUrl + 'gratuite/active/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findByJoueur(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'gratuite/joueur/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }

}
