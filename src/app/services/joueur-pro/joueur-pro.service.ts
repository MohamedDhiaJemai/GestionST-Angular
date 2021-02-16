import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';
import { JoueurPro } from 'app/model/JoueurPro.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoueurProService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAlljProfessionnel(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'professionnel/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addjProfessionnel(jProfessionnel: JoueurPro) {
    return this.httpClient.post(environment.apiUrl + 'professionnel/add', jProfessionnel,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updatejProfessionnel(id: number, jProfessionnel: JoueurPro) {
    return this.httpClient.put(environment.apiUrl + 'professionnel/update/' + id, jProfessionnel,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<JoueurPro>(environment.apiUrl + 'professionnel/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
