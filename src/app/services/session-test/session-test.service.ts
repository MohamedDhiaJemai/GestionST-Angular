import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { SessionTest } from 'app/model/SessionTest.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionTestService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  findById(id: number) {
    return this.httpClient.get<SessionTest>(environment.apiUrl + 'session/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  add(session: SessionTest) {
    return this.httpClient.post(environment.apiUrl + 'session/add', session,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  update(id: number, session: SessionTest) {
    return this.httpClient.put(environment.apiUrl + 'session/update/' + id, session,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'session/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
