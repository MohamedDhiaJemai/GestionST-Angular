import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiUrl = 'http://localhost:9090/roles';
  private jwtToken = null;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() { }
}
