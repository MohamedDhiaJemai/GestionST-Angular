import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Borne } from 'app/model/Borne.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BorneService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAllBorne(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'borne/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addBorne(borne: Borne) {
    return this.httpClient.post(environment.apiUrl + 'borne/add', borne,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  maintenance(id: number) {
    return this.httpClient.post(environment.apiUrl + 'borne/maintenance/' + id, null,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateBorne(id: number, borne: Borne) {
    return this.httpClient.put(environment.apiUrl + 'borne/update/' + id, borne,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<Borne>(environment.apiUrl + 'borne/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
