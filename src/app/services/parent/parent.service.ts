import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Parent } from 'app/model/Parent.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAllParent(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'parent/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addParent(parent: Parent) {
    return this.httpClient.post(environment.apiUrl + 'parent/add', parent,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateParent(id: number, parent: Parent) {
    return this.httpClient.put(environment.apiUrl + 'parent/update/' + id, parent,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<Parent>(environment.apiUrl + 'parent/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
