import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Remise } from 'app/model/remise.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemiseService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAllRemise(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'remise/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addRemise(remise: Remise) {
    return this.httpClient.post(environment.apiUrl + 'remise/add', remise,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateRemise(id: number, remise: Remise) {
    return this.httpClient.put(environment.apiUrl + 'remise/update/' + id, remise,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<Remise>(environment.apiUrl + 'remise/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
