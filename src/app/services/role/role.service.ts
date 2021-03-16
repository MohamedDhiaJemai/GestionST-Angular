import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from 'app/model/Role.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private httpClient: HttpClient) { }
  getAllRole(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'role/all');
  }
  addRole(role: Role) {
    return this.httpClient.post(environment.apiUrl + 'role/add', role);
  }
  updateRole(id: number, role: Role) {
    return this.httpClient.put(environment.apiUrl + 'role/update/' + id, role);
  }
  findById(id) {
    return this.httpClient.get<Role>(environment.apiUrl + 'role/' + id);
  }
}
