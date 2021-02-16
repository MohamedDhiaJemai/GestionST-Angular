import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Role } from 'app/model/Role.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private httpClient: HttpClient, private tokenUtil: TokenService) { }
  getAllRole(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'role/all',
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  addRole(role: Role) {
    return this.httpClient.post(environment.apiUrl + 'role/add', role,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  updateRole(id: number, role: Role) {
    return this.httpClient.put(environment.apiUrl + 'role/update/' + id, role,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
  findById(id) {
    return this.httpClient.get<Role>(environment.apiUrl + 'role/' + id,
      { headers: new HttpHeaders({ 'authorization': this.tokenUtil.getToken() }) });
  }
}
