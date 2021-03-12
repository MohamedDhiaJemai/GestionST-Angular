import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaisonSportive } from 'app/model/SaisonSportive.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class SaisonSportiveService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'saison/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  add(saison: SaisonSportive) {
    return this.httpClient.post(environment.apiUrl + 'saison/add', saison,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  update(id: number, saison: SaisonSportive) {
    return this.httpClient.put(environment.apiUrl + 'saison/update/' + id, saison,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<SaisonSportive>(environment.apiUrl + 'saison/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
