import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionTest } from 'app/model/SessionTest.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionTestService {
  constructor(private httpClient: HttpClient) { }
  findById(id: number) {
    return this.httpClient.get<SessionTest>(environment.apiUrl + 'session/' + id);
  }
  add(session: SessionTest) {
    return this.httpClient.post(environment.apiUrl + 'session/add', session);
  }
  update(id: number, session: SessionTest) {
    return this.httpClient.put(environment.apiUrl + 'session/update/' + id, session);
  }
  getAll(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'session/all');
  }
  testEnCours() {
    return this.httpClient.get<SessionTest>(environment.apiUrl + 'session/test');
  }
  inscriptionEnCours() {
    return this.httpClient.get<SessionTest>(environment.apiUrl + 'session/inscription');
  }
}
